"""Setting up, reloading and removing the integration."""

from __future__ import annotations

from homeassistant import config_entries
from homeassistant.components.frontend import DATA_EXTRA_MODULE_URL
from homeassistant.config_entries import ConfigEntryState
from homeassistant.core import HomeAssistant
from homeassistant.data_entry_flow import FlowResultType
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.better_wall_dashboard.const import (
    APP_ENTRY,
    APP_URL,
    DOMAIN,
    EDITOR_URL_PATH,
    PANEL_URL_PATH,
    STATIC_URL,
)
from custom_components.better_wall_dashboard.panel import app_entry, fingerprint


async def _setup(hass: HomeAssistant) -> MockConfigEntry:
    assert await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(domain=DOMAIN, title="Better Wall Dashboard", data={})
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry


def _panel_url(hass: HomeAssistant, url_path: str = PANEL_URL_PATH) -> str | None:
    panel = hass.data.get("frontend_panels", {}).get(url_path)
    if panel is None:
        return None
    return panel.config["_panel_custom"]["module_url"]


async def test_config_flow_creates_one_entry(hass: HomeAssistant) -> None:
    result = await hass.config_entries.flow.async_init(
        DOMAIN, context={"source": config_entries.SOURCE_USER}
    )
    assert result["type"] is FlowResultType.FORM
    result = await hass.config_entries.flow.async_configure(result["flow_id"], {})
    assert result["type"] is FlowResultType.CREATE_ENTRY

    # single_config_entry: Home Assistant refuses a second one itself.
    result = await hass.config_entries.flow.async_init(
        DOMAIN, context={"source": config_entries.SOURCE_USER}
    )
    assert result["type"] is FlowResultType.ABORT


async def test_setup_registers_the_panel_under_its_fingerprint(
    hass: HomeAssistant,
) -> None:
    entry = await _setup(hass)
    assert entry.state is ConfigEntryState.LOADED

    expected = f"{APP_URL}/{APP_ENTRY}?v={fingerprint(app_entry())}"
    assert _panel_url(hass) == expected
    panel = hass.data["frontend_panels"][PANEL_URL_PATH]
    # A wall tablet logs in as an ordinary user.
    assert panel.require_admin is False


async def test_the_editor_is_its_own_admin_only_panel(hass: HomeAssistant) -> None:
    """Configured from a desk, never from the tablet it configures."""
    await _setup(hass)
    editor = hass.data["frontend_panels"][EDITOR_URL_PATH]
    assert editor.require_admin is True
    assert editor.config["_panel_custom"]["name"] == "better-wall-dashboard-editor"
    # One bundle defines both elements.
    assert _panel_url(hass, EDITOR_URL_PATH) == _panel_url(hass)


async def test_setup_loads_the_icon_set_into_the_app_shell(hass: HomeAssistant) -> None:
    await _setup(hass)
    urls = hass.data[DATA_EXTRA_MODULE_URL].urls
    assert any(
        url.startswith(f"{STATIC_URL}/better_wall_dashboard_icons.js?v=")
        for url in urls
    )


async def test_the_build_and_the_loose_files_are_served(hass, hass_client) -> None:
    await _setup(hass)
    client = await hass_client()
    for url in (
        f"{APP_URL}/{APP_ENTRY}",
        f"{STATIC_URL}/better_wall_dashboard_icons.js",
        f"{STATIC_URL}/icon.png",
    ):
        response = await client.get(url)
        assert response.status == 200, url


async def test_reload_keeps_exactly_one_panel_and_one_icon_url(
    hass: HomeAssistant,
) -> None:
    """A reload is how most people take an upgrade; it must not stack copies."""
    entry = await _setup(hass)
    assert await hass.config_entries.async_reload(entry.entry_id)
    await hass.async_block_till_done()

    assert _panel_url(hass) is not None
    urls = [
        url
        for url in hass.data[DATA_EXTRA_MODULE_URL].urls
        if "better_wall_dashboard_icons.js" in url
    ]
    assert len(urls) == 1


async def test_reload_never_leaves_the_tablet_without_its_panel(
    hass: HomeAssistant,
) -> None:
    """Every panels-updated event a page can hear still has the dashboard.

    A page open on a panel that is missing from an update navigates to the
    default dashboard, and a wall tablet has nobody to bring it back.
    """
    entry = await _setup(hass)
    seen: list[bool] = []
    hass.bus.async_listen(
        "panels_updated", lambda _event: seen.append(_panel_url(hass) is not None)
    )
    # A new build, as an upgrade brings: the fingerprint no longer matches.
    panel = hass.data["frontend_panels"][PANEL_URL_PATH]
    panel.config["_panel_custom"]["module_url"] = "/stale.js?v=old"
    assert await hass.config_entries.async_reload(entry.entry_id)
    await hass.async_block_till_done()

    assert seen and all(seen)
    assert _panel_url(hass) != "/stale.js?v=old"


async def test_unload_keeps_the_panel(hass: HomeAssistant) -> None:
    entry = await _setup(hass)
    assert await hass.config_entries.async_unload(entry.entry_id)
    await hass.async_block_till_done()
    assert _panel_url(hass) is not None


async def test_removal_takes_the_panel_away(hass: HomeAssistant) -> None:
    entry = await _setup(hass)
    assert await hass.config_entries.async_remove(entry.entry_id)
    await hass.async_block_till_done()
    assert _panel_url(hass) is None
    assert _panel_url(hass, EDITOR_URL_PATH) is None
    assert not any(
        "better_wall_dashboard_icons.js" in url
        for url in hass.data[DATA_EXTRA_MODULE_URL].urls
    )


async def test_survives_a_headless_install(hass: HomeAssistant, monkeypatch) -> None:
    """No frontend means no panel -- and nothing worse."""

    async def refuse(*_args, **_kwargs) -> bool:
        return False

    monkeypatch.setattr(
        "custom_components.better_wall_dashboard.panel.async_setup_component", refuse
    )
    entry = await _setup(hass)
    assert entry.state is ConfigEntryState.LOADED
    assert _panel_url(hass) is None
