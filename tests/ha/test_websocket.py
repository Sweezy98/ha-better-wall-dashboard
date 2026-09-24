"""The websocket API the dashboard and its editor talk to."""

from __future__ import annotations

from homeassistant.components.frontend.storage import async_user_store
from homeassistant.core import HomeAssistant
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.better_wall_dashboard.const import DOMAIN, PANEL_URL_PATH


async def _setup(hass: HomeAssistant) -> MockConfigEntry:
    assert await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, title="Better Wall Dashboard", data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry


async def _subscribe(client, **extra):
    await client.send_json_auto_id({"type": f"{DOMAIN}/subscribe", **extra})
    result = await client.receive_json()
    assert result["success"], result
    event = await client.receive_json()
    return event["event"]


async def test_subscribe_sends_the_default_dashboard(hass, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    view = await _subscribe(client)
    assert view["dashboard"]["id"] == "default"
    assert view["dashboards"] == [{"id": "default", "name": "Wall dashboard"}]
    assert view["kiosk"] is False
    assert view["is_admin"] is True


async def test_a_save_reaches_every_open_dashboard(hass, hass_ws_client) -> None:
    """The tablet redraws when the admin saves; nobody walks over to reload it."""
    await _setup(hass)
    tablet = await hass_ws_client(hass)
    view = await _subscribe(tablet)

    admin = await hass_ws_client(hass)
    dashboard = view["dashboard"]
    dashboard["sidebar"]["climate"]["temperature"] = "sensor.living_room_temperature"
    await admin.send_json_auto_id(
        {"type": f"{DOMAIN}/save_dashboard", "dashboard": dashboard}
    )
    saved = await admin.receive_json()
    assert saved["success"], saved

    pushed = await tablet.receive_json()
    assert (
        pushed["event"]["dashboard"]["sidebar"]["climate"]["temperature"]
        == "sensor.living_room_temperature"
    )


async def test_saving_requires_an_admin(
    hass, hass_ws_client, hass_read_only_access_token
) -> None:
    await _setup(hass)
    tablet = await hass_ws_client(hass, hass_read_only_access_token)
    view = await _subscribe(tablet)
    assert view["is_admin"] is False

    for message in (
        {"type": f"{DOMAIN}/save_dashboard", "dashboard": view["dashboard"]},
        {"type": f"{DOMAIN}/document"},
        {"type": f"{DOMAIN}/users"},
        {"type": f"{DOMAIN}/delete_dashboard", "dashboard_id": "default"},
    ):
        await tablet.send_json_auto_id(message)
        result = await tablet.receive_json()
        assert not result["success"], message
        assert result["error"]["code"] == "unauthorized"


async def test_the_default_dashboard_cannot_be_deleted(hass, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id(
        {"type": f"{DOMAIN}/delete_dashboard", "dashboard_id": "default"}
    )
    result = await client.receive_json()
    assert not result["success"]


async def test_users_get_their_dashboard_and_kiosk_mode(
    hass, hass_ws_client, hass_read_only_user, hass_read_only_access_token
) -> None:
    await _setup(hass)
    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id(
        {
            "type": f"{DOMAIN}/save_dashboard",
            "dashboard": {"id": "hall", "name": "Hall"},
        }
    )
    assert (await admin.receive_json())["success"]
    await admin.send_json_auto_id(
        {
            "type": f"{DOMAIN}/save_user",
            "user_id": hass_read_only_user.id,
            "dashboard": "hall",
            "kiosk": True,
        }
    )
    result = await admin.receive_json()
    assert result["success"], result
    assert result["result"]["kiosk"] is True

    tablet = await hass_ws_client(hass, hass_read_only_access_token)
    view = await _subscribe(tablet)
    assert view["dashboard"]["id"] == "hall"
    assert view["kiosk"] is True

    # Deleting the dashboard sends the tablet back to the default.
    await admin.send_json_auto_id(
        {"type": f"{DOMAIN}/delete_dashboard", "dashboard_id": "hall"}
    )
    assert (await admin.receive_json())["success"]
    pushed = await tablet.receive_json()
    assert pushed["event"]["dashboard"]["id"] == "default"


async def test_start_page_is_written_to_the_users_own_profile(
    hass, hass_ws_client, hass_read_only_user
) -> None:
    """The profile picker cannot choose a custom panel; the stored value can."""
    await _setup(hass)
    store = await async_user_store(hass, hass_read_only_user.id)
    await store.async_set_item("core", {"showAdvanced": True})

    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id(
        {
            "type": f"{DOMAIN}/save_user",
            "user_id": hass_read_only_user.id,
            "default_panel": True,
        }
    )
    assert (await admin.receive_json())["result"]["default_panel"] is True
    # Merged into what was there, not written over it.
    assert store.data["core"] == {"showAdvanced": True, "default_panel": PANEL_URL_PATH}

    await admin.send_json_auto_id({"type": f"{DOMAIN}/users"})
    users = {u["id"]: u for u in (await admin.receive_json())["result"]["users"]}
    assert users[hass_read_only_user.id]["default_panel"] is True

    await admin.send_json_auto_id(
        {
            "type": f"{DOMAIN}/save_user",
            "user_id": hass_read_only_user.id,
            "default_panel": False,
        }
    )
    assert (await admin.receive_json())["result"]["default_panel"] is False
    assert store.data["core"] == {"showAdvanced": True}


async def test_turning_off_the_start_page_leaves_another_choice_alone(
    hass, hass_ws_client, hass_read_only_user
) -> None:
    await _setup(hass)
    store = await async_user_store(hass, hass_read_only_user.id)
    await store.async_set_item("core", {"default_panel": "energy"})
    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id(
        {
            "type": f"{DOMAIN}/save_user",
            "user_id": hass_read_only_user.id,
            "default_panel": False,
        }
    )
    await admin.receive_json()
    assert store.data["core"] == {"default_panel": "energy"}


async def test_removing_the_integration_gives_start_pages_back(
    hass, hass_read_only_user
) -> None:
    entry = await _setup(hass)
    store = await async_user_store(hass, hass_read_only_user.id)
    await store.async_set_item("core", {"default_panel": PANEL_URL_PATH})
    assert await hass.config_entries.async_remove(entry.entry_id)
    await hass.async_block_till_done()
    assert "default_panel" not in store.data["core"]


async def test_dashboards_survive_a_restart(hass, hass_ws_client, hass_storage) -> None:
    entry = await _setup(hass)
    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id(
        {
            "type": f"{DOMAIN}/save_dashboard",
            "dashboard": {"id": "hall", "name": "Hall"},
        }
    )
    assert (await admin.receive_json())["success"]
    await hass.async_block_till_done()
    assert "hall" in hass_storage[DOMAIN]["data"]["dashboards"]

    assert await hass.config_entries.async_reload(entry.entry_id)
    await admin.send_json_auto_id({"type": f"{DOMAIN}/document"})
    document = (await admin.receive_json())["result"]
    assert set(document["dashboards"]) == {"default", "hall"}


async def test_version_reports_the_build_fingerprint(hass, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    await client.send_json_auto_id({"type": f"{DOMAIN}/version"})
    result = (await client.receive_json())["result"]
    assert len(result["app"]) == 12
    assert result["version"]


async def _save_pin(hass, hass_ws_client, pin: str) -> None:
    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id({"type": f"{DOMAIN}/document"})
    document = (await admin.receive_json())["result"]
    dashboard = {**document["dashboards"]["default"], "pin": pin}
    await admin.send_json_auto_id(
        {"type": f"{DOMAIN}/save_dashboard", "dashboard": dashboard}
    )
    assert (await admin.receive_json())["success"]


async def _verify(client, pin: str) -> dict:
    await client.send_json_auto_id({"type": f"{DOMAIN}/verify_pin", "pin": pin})
    result = await client.receive_json()
    assert result["success"], result
    return result["result"]


async def test_a_tablet_is_told_there_is_a_pin_but_never_sent_it(
    hass, hass_ws_client, hass_read_only_access_token
) -> None:
    await _setup(hass)
    await _save_pin(hass, hass_ws_client, "4711")
    tablet = await hass_ws_client(hass, hass_read_only_access_token)
    view = await _subscribe(tablet)
    assert view["pin_required"] is True
    assert "pin" not in view["dashboard"]

    assert (await _verify(tablet, "0000"))["ok"] is False
    assert (await _verify(tablet, "4711"))["ok"] is True


async def test_wrong_pins_lock_the_user_out_for_a_while(
    hass, hass_ws_client, hass_read_only_access_token
) -> None:
    await _setup(hass)
    await _save_pin(hass, hass_ws_client, "4711")
    tablet = await hass_ws_client(hass, hass_read_only_access_token)
    for _ in range(4):
        assert (await _verify(tablet, "1234"))["locked_for"] == 0
    assert (await _verify(tablet, "1234"))["locked_for"] > 0
    # Locked: even the right PIN is refused until the wait is over.
    right = await _verify(tablet, "4711")
    assert right["ok"] is False
    assert right["locked_for"] > 0


async def test_no_pin_means_no_question(hass, hass_ws_client) -> None:
    await _setup(hass)
    client = await hass_ws_client(hass)
    view = await _subscribe(client)
    assert view["pin_required"] is False


async def test_an_admin_reloads_the_tablets_showing_a_dashboard(
    hass, hass_ws_client, hass_read_only_access_token
) -> None:
    await _setup(hass)
    tablet = await hass_ws_client(hass, hass_read_only_access_token)
    await _subscribe(tablet)

    admin = await hass_ws_client(hass)
    await admin.send_json_auto_id(
        {"type": f"{DOMAIN}/reload_tablets", "dashboard_id": "elsewhere"}
    )
    assert (await admin.receive_json())["result"] == {"reached": 0}

    await admin.send_json_auto_id(
        {"type": f"{DOMAIN}/reload_tablets", "dashboard_id": "default"}
    )
    assert (await admin.receive_json())["result"] == {"reached": 1}
    assert (await tablet.receive_json())["event"] == {"reload": True}


async def test_only_an_admin_reloads_tablets(
    hass, hass_ws_client, hass_read_only_access_token
) -> None:
    await _setup(hass)
    tablet = await hass_ws_client(hass, hass_read_only_access_token)
    await tablet.send_json_auto_id({"type": f"{DOMAIN}/reload_tablets"})
    result = await tablet.receive_json()
    assert result["error"]["code"] == "unauthorized"
