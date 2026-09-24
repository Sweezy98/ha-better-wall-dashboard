"""Better Wall Dashboard: a full-screen dashboard for wall tablets.

The integration itself is small. It keeps the dashboards in a store, answers
the dashboard's websocket commands, and puts the React app in the sidebar.
Everything the tablet shows is drawn by that app, from entities that already
exist -- this integration creates none of its own.
"""

from __future__ import annotations

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.typing import ConfigType

from . import ha_sidebar
from .const import DOMAIN
from .panel import async_remove_panel, async_setup_panel
from .store import DashboardStore
from .websocket_api import async_clear_default_panels, async_register_commands

type WallDashboardConfigEntry = ConfigEntry[DashboardStore]

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    # Once per run, not per entry: a websocket command registered twice
    # replaces itself harmlessly, but there is no reason to rely on that
    # across every reload.
    async_register_commands(hass)
    return True


async def async_setup_entry(
    hass: HomeAssistant, entry: WallDashboardConfigEntry
) -> bool:
    store = DashboardStore(hass)
    await store.async_load()
    entry.runtime_data = store
    await async_setup_panel(hass)

    # A panel added or removed -- another integration's, a new dashboard --
    # changes what "every panel but ours" is for the users who see only ours.
    @callback
    def panels_changed(_event: Event) -> None:
        if users := store.sidebar_only_users():
            entry.async_create_background_task(
                hass, ha_sidebar.async_refresh(hass, users), f"{DOMAIN} sidebar"
            )

    entry.async_on_unload(hass.bus.async_listen("panels_updated", panels_changed))
    await ha_sidebar.async_refresh(hass, store.sidebar_only_users())
    return True


async def async_unload_entry(
    hass: HomeAssistant, entry: WallDashboardConfigEntry
) -> bool:
    # The panels stay: see async_remove_panel. Setting up again finds them
    # and replaces them only if the build changed.
    return True


async def async_remove_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Delete the stored dashboards once the integration itself is gone.

    Here and not in unload, which runs on every restart and reload.
    """
    async_remove_panel(hass)
    await async_clear_default_panels(hass)
    store = DashboardStore(hass)
    await store.async_load()
    # Their sidebars back: nothing is left to show them instead.
    for user_id in store.sidebar_only_users():
        await ha_sidebar.async_show_only_dashboard(hass, user_id, False)
    await store.async_remove()
