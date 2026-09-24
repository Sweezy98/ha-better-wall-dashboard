"""The dashboard's websocket API.

Reading is open to every user, because a wall tablet logs in as an ordinary
one. Everything that writes requires an admin: the dashboard is configured
from a desk, never from the tablet on the wall.
"""

from __future__ import annotations

import json
import time
from pathlib import Path
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import (
    async_dispatcher_connect,
    async_dispatcher_send,
)

from . import model
from .const import (
    DOMAIN,
    PANEL_URL_PATH,
    SIGNAL_DOCUMENT_UPDATED,
    SIGNAL_RELOAD_TABLETS,
)
from .panel import app_entry, fingerprint
from .store import DashboardStore


@callback
def async_register_commands(hass: HomeAssistant) -> None:
    for handler in (
        websocket_subscribe,
        websocket_document,
        websocket_save_dashboard,
        websocket_delete_dashboard,
        websocket_users,
        websocket_save_user,
        websocket_version,
        websocket_verify_pin,
        websocket_reload_tablets,
    ):
        websocket_api.async_register_command(hass, handler)


def _store(hass: HomeAssistant) -> DashboardStore | None:
    for entry in hass.config_entries.async_loaded_entries(DOMAIN):
        return entry.runtime_data
    return None


def _not_loaded(connection: websocket_api.ActiveConnection, msg_id: int) -> None:
    connection.send_error(msg_id, "not_loaded", "Better Wall Dashboard is not set up")


def _view(store: DashboardStore, user: Any, requested: str | None) -> dict[str, Any]:
    """What one user's tablet needs to draw itself."""
    document = store.document
    settings = document["users"].get(user.id) or {}
    dashboard = model.dashboard_for(document, user.id, requested)
    return {
        "dashboard": model.public_dashboard(dashboard),
        "pin_required": bool(dashboard["pin"]),
        # Names only: enough for an admin to preview another tablet's
        # dashboard without being sent every one of them on every save.
        "dashboards": [
            {"id": key, "name": value["name"]}
            for key, value in document["dashboards"].items()
        ],
        "kiosk": bool(settings.get("kiosk")),
        "is_admin": user.is_admin,
    }


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/subscribe",
        vol.Optional("dashboard"): vol.Any(str, None),
    }
)
@callback
def websocket_subscribe(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """The dashboard this user should see, now and after every change.

    A subscription rather than a fetch, so a tablet redraws the moment an
    admin saves -- nobody has to walk over and reload it.
    """
    store = _store(hass)
    if store is None:
        _not_loaded(connection, msg["id"])
        return
    requested = msg.get("dashboard")

    @callback
    def forward() -> None:
        connection.send_message(
            websocket_api.event_message(
                msg["id"], _view(store, connection.user, requested)
            )
        )

    @callback
    def reload(dashboard_id: str | None, reached: list[str]) -> None:
        # Only the tablets showing that dashboard; each says it heard.
        shown = model.dashboard_for(store.document, connection.user.id, requested)
        if dashboard_id is not None and shown["id"] != dashboard_id:
            return
        reached.append(connection.user.id)
        connection.send_message(
            websocket_api.event_message(msg["id"], {"reload": True})
        )

    unsubscribe_document = async_dispatcher_connect(
        hass, SIGNAL_DOCUMENT_UPDATED, forward
    )
    unsubscribe_reload = async_dispatcher_connect(hass, SIGNAL_RELOAD_TABLETS, reload)

    @callback
    def unsubscribe() -> None:
        unsubscribe_document()
        unsubscribe_reload()

    connection.subscriptions[msg["id"]] = unsubscribe
    connection.send_result(msg["id"])
    forward()


@websocket_api.require_admin
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/document"})
@callback
def websocket_document(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Every dashboard in full, for the editor."""
    if (store := _store(hass)) is None:
        _not_loaded(connection, msg["id"])
        return
    connection.send_result(msg["id"], store.snapshot())


@websocket_api.require_admin
@websocket_api.websocket_command(
    {vol.Required("type"): f"{DOMAIN}/save_dashboard", vol.Required("dashboard"): dict}
)
@websocket_api.async_response
async def websocket_save_dashboard(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Add or replace one dashboard, wholesale.

    Wholesale because the editor edits the document it was given and order
    within it means something: pages swipe, and tiles fill a section, in the
    order they are stored.
    """
    if (store := _store(hass)) is None:
        _not_loaded(connection, msg["id"])
        return
    saved = await store.async_save_dashboard(msg["dashboard"])
    connection.send_result(msg["id"], {"dashboard": saved})


@websocket_api.require_admin
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/delete_dashboard",
        vol.Required("dashboard_id"): str,
    }
)
@websocket_api.async_response
async def websocket_delete_dashboard(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    if (store := _store(hass)) is None:
        _not_loaded(connection, msg["id"])
        return
    if not await store.async_delete_dashboard(msg["dashboard_id"]):
        connection.send_error(
            msg["id"], "not_allowed", "No such dashboard, or it is the default"
        )
        return
    connection.send_result(msg["id"], {"deleted": True})


@websocket_api.require_admin
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/reload_tablets",
        vol.Optional("dashboard_id"): vol.Any(str, None),
    }
)
@callback
def websocket_reload_tablets(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Reload every open dashboard showing one dashboard, or every one.

    For a tablet that has got stuck on the wall: its page is told to reload
    itself, the way its own settings popup would, and nobody has to climb up
    to it. Answers with how many were reached -- a tablet that is off, or
    frozen past answering, is not among them.
    """
    reached: list[str] = []
    # Dispatcher callbacks run here and now, so `reached` is filled on return.
    async_dispatcher_send(hass, SIGNAL_RELOAD_TABLETS, msg.get("dashboard_id"), reached)
    connection.send_result(msg["id"], {"reached": len(reached)})


# Wrong PINs a user may enter before having to wait, and how long for.
PIN_ATTEMPTS = 5
PIN_LOCKOUT_SECONDS = 60
_PIN_FAILURES = f"{DOMAIN}_pin_failures"


@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/verify_pin",
        vol.Required("pin"): str,
        vol.Optional("dashboard"): vol.Any(str, None),
    }
)
@callback
def websocket_verify_pin(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Check the PIN that guards Home Assistant's sidebar on a tablet.

    Here rather than on the tablet, which is never sent the PIN. Four digits
    are guessed quickly, so after a few wrong ones the user waits a minute.
    """
    if (store := _store(hass)) is None:
        _not_loaded(connection, msg["id"])
        return
    failures: dict[str, tuple[int, float]] = hass.data.setdefault(_PIN_FAILURES, {})
    count, since = failures.get(connection.user.id, (0, 0.0))
    wait = since + PIN_LOCKOUT_SECONDS - time.monotonic()
    if count >= PIN_ATTEMPTS and wait > 0:
        connection.send_result(msg["id"], {"ok": False, "locked_for": round(wait)})
        return
    if count >= PIN_ATTEMPTS:
        count = 0
    dashboard = model.dashboard_for(
        store.document, connection.user.id, msg.get("dashboard")
    )
    if model.pin_matches(dashboard, msg["pin"]):
        failures.pop(connection.user.id, None)
        connection.send_result(msg["id"], {"ok": True, "locked_for": 0})
        return
    failures[connection.user.id] = (count + 1, time.monotonic())
    locked = count + 1 >= PIN_ATTEMPTS
    connection.send_result(
        msg["id"], {"ok": False, "locked_for": PIN_LOCKOUT_SECONDS if locked else 0}
    )


async def _default_panel(hass: HomeAssistant, user_id: str) -> bool | None:
    """Whether this user's start page is the dashboard; None if unknowable.

    Read from the same per-user store the profile page writes, because the
    profile page's picker lists only Lovelace dashboards and a few built-in
    panels -- a custom panel cannot be chosen there, but the stored value is
    just a path and the frontend routes to any panel it names.
    """
    try:
        from homeassistant.components.frontend.storage import async_user_store
    except ImportError:  # pragma: no cover - frontend is part of core
        return None
    store = await async_user_store(hass, user_id)
    return (store.data.get("core") or {}).get("default_panel") == PANEL_URL_PATH


async def _async_set_default_panel(
    hass: HomeAssistant, user_id: str, enable: bool
) -> bool | None:
    try:
        from homeassistant.components.frontend.storage import async_user_store
    except ImportError:  # pragma: no cover - frontend is part of core
        return None
    store = await async_user_store(hass, user_id)
    core = dict(store.data.get("core") or {})
    if enable:
        core["default_panel"] = PANEL_URL_PATH
    elif core.get("default_panel") == PANEL_URL_PATH:
        # Only undo our own choice. A user who has since picked something
        # else in their profile keeps it.
        core.pop("default_panel")
    else:
        return False
    # Through the store rather than its file, so the frontends that user has
    # open -- subscribed to exactly this -- move to the new start page too.
    await store.async_set_item("core", core)
    return enable


async def async_clear_default_panels(hass: HomeAssistant) -> None:
    """Give every user whose start page is the dashboard their old one back.

    For when the integration is removed: the panel goes with it, and a tablet
    told to start on a panel that no longer exists starts on a 404.
    """
    for user in await hass.auth.async_get_users():
        if not user.system_generated:
            await _async_set_default_panel(hass, user.id, False)


@websocket_api.require_admin
@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/users"})
@websocket_api.async_response
async def websocket_users(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Every person who can log in, with what the dashboard does for them."""
    if (store := _store(hass)) is None:
        _not_loaded(connection, msg["id"])
        return
    users = []
    for user in await hass.auth.async_get_users():
        if user.system_generated:
            # The supervisor, cloud and other service accounts: nobody reads
            # a wall tablet as them.
            continue
        settings = store.document["users"].get(user.id) or {}
        users.append(
            {
                "id": user.id,
                "name": user.name or user.id,
                "is_admin": user.is_admin,
                "is_active": user.is_active,
                "dashboard": settings.get("dashboard", model.DEFAULT_DASHBOARD_ID),
                "kiosk": bool(settings.get("kiosk")),
                "default_panel": await _default_panel(hass, user.id),
            }
        )
    users.sort(key=lambda item: item["name"].lower())
    connection.send_result(msg["id"], {"users": users})


@websocket_api.require_admin
@websocket_api.websocket_command(
    {
        vol.Required("type"): f"{DOMAIN}/save_user",
        vol.Required("user_id"): str,
        vol.Optional("dashboard"): str,
        vol.Optional("kiosk"): bool,
        vol.Optional("default_panel"): bool,
    }
)
@websocket_api.async_response
async def websocket_save_user(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """Assign a dashboard, kiosk mode and the start page for one user."""
    if (store := _store(hass)) is None:
        _not_loaded(connection, msg["id"])
        return
    user = await hass.auth.async_get_user(msg["user_id"])
    if user is None or user.system_generated:
        connection.send_error(msg["id"], "not_found", "No such user")
        return
    dashboard = msg.get("dashboard")
    if dashboard is not None and dashboard not in store.document["dashboards"]:
        connection.send_error(msg["id"], "not_found", "No such dashboard")
        return

    settings = store.document["users"].get(user.id) or {}
    if dashboard is not None or "kiosk" in msg:
        settings = await store.async_save_user(
            user.id, dashboard=dashboard, kiosk=msg.get("kiosk")
        )
    default_panel = (
        await _async_set_default_panel(hass, user.id, msg["default_panel"])
        if "default_panel" in msg
        else await _default_panel(hass, user.id)
    )
    connection.send_result(
        msg["id"],
        {
            "dashboard": settings.get("dashboard", model.DEFAULT_DASHBOARD_ID),
            "kiosk": bool(settings.get("kiosk")),
            "default_panel": default_panel,
        },
    )


@websocket_api.websocket_command({vol.Required("type"): f"{DOMAIN}/version"})
@websocket_api.async_response
async def websocket_version(
    hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]
) -> None:
    """The fingerprint of the build currently on disk.

    A tablet that has been on the wall for a month is running whatever it was
    served a month ago; an upgrade cannot reach it, because its module is
    cached under the old URL. Comparing this with the fingerprint it was
    loaded under is how it notices, and offers to reload itself.
    """
    manifest = await hass.async_add_executor_job(_manifest)
    connection.send_result(
        msg["id"],
        {
            "app": await hass.async_add_executor_job(fingerprint, app_entry()),
            "version": manifest.get("version"),
            "documentation": manifest.get("documentation"),
            "issues": manifest.get("issue_tracker"),
        },
    )


def _manifest() -> dict[str, Any]:
    return json.loads((Path(__file__).parent / "manifest.json").read_text("utf-8"))
