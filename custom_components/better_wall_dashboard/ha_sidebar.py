"""What Home Assistant's own sidebar shows a wall tablet's user.

Home Assistant keeps each user's sidebar -- which panels are hidden, in what
order -- in that user's frontend store under "sidebar", the same place its
"Edit sidebar" dialog saves to, and every open frontend of that user follows
it live. A user's start page is always shown whatever is hidden, which is
what keeps the dashboard itself in the sidebar of a tablet that starts on it.
"""

from __future__ import annotations

from homeassistant.core import HomeAssistant

from .const import PANEL_URL_PATH


async def async_show_only_dashboard(
    hass: HomeAssistant, user_id: str, enable: bool
) -> None:
    """Hide every panel but the dashboard from one user's sidebar, or none."""
    try:
        from homeassistant.components.frontend.storage import async_user_store
    except ImportError:  # pragma: no cover - frontend is part of core
        return
    store = await async_user_store(hass, user_id)
    sidebar = dict(store.data.get("sidebar") or {})
    if enable:
        # Every panel there is now; called again when that changes, so one
        # an integration adds later is hidden too.
        panels = hass.data.get("frontend_panels", {})
        sidebar["hiddenPanels"] = sorted(url for url in panels if url != PANEL_URL_PATH)
        # Without an order the frontend reads both from the browser's own
        # storage instead, and the hidden list would not count.
        sidebar.setdefault("panelOrder", [PANEL_URL_PATH])
    elif sidebar.get("hiddenPanels"):
        sidebar["hiddenPanels"] = []
    else:
        return
    await store.async_set_item("sidebar", sidebar)


async def async_refresh(hass: HomeAssistant, user_ids: list[str]) -> None:
    """Hide the panels there are now from each of these users."""
    for user_id in user_ids:
        await async_show_only_dashboard(hass, user_id, True)
