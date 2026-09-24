"""Putting the dashboard in the sidebar.

The dashboard is a React app, built by Vite into ``frontend/`` inside this
component and committed there. HACS copies files and runs nothing, so the
build happens before a release rather than on the user's machine; CI checks
that the committed build is the one the source produces.

It is a panel rather than a Lovelace dashboard on purpose. Everything the old
Lovelace version got wrong -- cards re-rendering on every state change, grids
measured before they had a size, card-mod reaching through five shadow roots
-- came from being a stack of other people's cards. A panel is one element
that Home Assistant hands its connection and then leaves alone.
"""

from __future__ import annotations

import hashlib
import inspect
import logging
from pathlib import Path

from homeassistant.components import frontend, panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant, callback
from homeassistant.setup import async_setup_component

from .const import (
    APP_DIR,
    APP_ENTRY,
    APP_URL,
    BRAND_ICON_FILE,
    DOMAIN,
    EDITOR_ELEMENT,
    EDITOR_ICON,
    EDITOR_TITLE,
    EDITOR_URL_PATH,
    ICONS_FILE,
    PANEL_ELEMENT,
    PANEL_URL_PATH,
    SIDEBAR_ICON,
    SIDEBAR_TITLE,
    STATIC_URL,
)

_LOGGER = logging.getLogger(__name__)

# What is already on the HTTP app, per path. aiohttp refuses a second route
# for one path, and a single "done" flag once meant a file added by an upgrade
# was never served: the flag survived the reload that delivered the upgrade.
_SERVED = f"{DOMAIN}_served"
# The icon-set URLs we have handed the frontend, so a reload after an upgrade
# can take back the old one instead of loading both.
_EXTRA_URLS = f"{DOMAIN}_extra_js_urls"

_ROOT = Path(__file__).parent


def fingerprint(relative: str) -> str:
    """A short hash of one shipped file's contents, for its URL.

    The browser and Home Assistant's service worker both cache these files
    hard, so the URL must change whenever the file does. Hashing contents
    rather than the version keeps that true when one version is installed
    twice, which is what happens to anybody tracking main.
    """
    try:
        return hashlib.sha256((_ROOT / relative).read_bytes()).hexdigest()[:12]
    except OSError:
        # No build yet: a checkout where `npm run build` has not run. The
        # panel still registers; it just has nothing to load until it has.
        return "missing"


def app_entry() -> str:
    return f"{APP_DIR}/{APP_ENTRY}"


async def async_setup_panel(hass: HomeAssistant) -> bool:
    """Serve the app and put it in the sidebar.

    Returns False when there is no frontend at all -- a headless install --
    which is fine: there is then nobody to show a dashboard to, and nothing
    else of ours depends on one.
    """
    if not await async_setup_component(hass, "panel_custom", {}):
        _LOGGER.warning(
            "The frontend is unavailable, so the wall dashboard was not added "
            "to the sidebar"
        )
        return False

    await _async_serve(hass)
    await _async_register_icons(hass)

    entry_hash = await hass.async_add_executor_job(fingerprint, app_entry())
    module_url = f"{APP_URL}/{APP_ENTRY}?v={entry_hash}"

    kwargs = {}
    # The dashboard draws edge to edge and pads itself for a notch, so it opts
    # out of the inset Home Assistant would add. The argument is recent;
    # passing it to a core that does not know it would fail the whole setup.
    if (
        "handle_safe_area"
        in inspect.signature(panel_custom.async_register_panel).parameters
    ):
        kwargs["handle_safe_area"] = True

    await _async_register(
        hass,
        url_path=PANEL_URL_PATH,
        element=PANEL_ELEMENT,
        title=SIDEBAR_TITLE,
        icon=SIDEBAR_ICON,
        module_url=module_url,
        # A wall tablet logs in as an ordinary user. Editing is what needs an
        # admin, and the websocket API checks that per command.
        require_admin=False,
        **kwargs,
    )
    await _async_register(
        hass,
        url_path=EDITOR_URL_PATH,
        element=EDITOR_ELEMENT,
        title=EDITOR_TITLE,
        icon=EDITOR_ICON,
        module_url=module_url,
        # Admin-only in the sidebar as well as in the API behind it: a tablet
        # user should not even see where the dashboard is configured.
        require_admin=True,
    )
    return True


async def _async_register(
    hass: HomeAssistant,
    *,
    url_path: str,
    element: str,
    title: str,
    icon: str,
    module_url: str,
    require_admin: bool,
    **kwargs: bool,
) -> None:
    """Register one panel, replacing it if it came from an older build."""
    panels = hass.data.get("frontend_panels", {})
    if (existing := panels.get(url_path)) is not None:
        if (existing.config or {}).get("_panel_custom", {}).get(
            "module_url"
        ) == module_url:
            return
        # Registered from an older build: replace it, or the sidebar keeps
        # pointing at a URL nothing will ever fetch again. Replaced in place,
        # never removed and added: the frontend hears of a removal at once,
        # and a page open on the dashboard -- the tablet on the wall --
        # navigates away to the default panel before the new one arrives.
        panels.pop(url_path)

    await panel_custom.async_register_panel(
        hass,
        frontend_url_path=url_path,
        webcomponent_name=element,
        module_url=module_url,
        sidebar_title=title,
        sidebar_icon=icon,
        require_admin=require_admin,
        config={"app_url": APP_URL},
        **kwargs,
    )


async def _async_serve(hass: HomeAssistant) -> None:
    done: set[str] = hass.data.setdefault(_SERVED, set())
    wanted = [
        # The whole build as one directory: Vite names each chunk and asset
        # after its contents, so an upgrade adds new names beside the old
        # ones and a directory route serves them without being told.
        (APP_URL, _ROOT / APP_DIR),
        *(
            (f"{STATIC_URL}/{Path(name).name}", _ROOT / name)
            for name in (ICONS_FILE, BRAND_ICON_FILE)
        ),
    ]
    configs = [
        # Safe to cache hard: every URL here either is named after its
        # contents or carries their fingerprint.
        StaticPathConfig(url, str(path), True)
        for url, path in wanted
        if url not in done
    ]
    if not configs:
        return
    done.update(config.url_path for config in configs)
    await hass.http.async_register_static_paths(configs)


async def _async_register_icons(hass: HomeAssistant) -> None:
    """Load the sidebar's icon set into every page Home Assistant serves.

    The sidebar takes an icon *name*, so the icon has to exist as an icon set
    in the app shell -- which only an extra module URL reaches. It lands in
    pages served after this runs; a page already open shows the icon after
    its next reload.
    """
    icon_hash = await hass.async_add_executor_job(fingerprint, ICONS_FILE)
    url = f"{STATIC_URL}/{Path(ICONS_FILE).name}?v={icon_hash}"
    _async_refresh_extra_modules(hass, [url])


@callback
def _async_refresh_extra_modules(hass: HomeAssistant, urls: list[str]) -> None:
    """Hand the frontend today's URLs and take back yesterday's."""
    stale: set[str] = hass.data.get(_EXTRA_URLS, set()) - set(urls)
    for url in stale:
        frontend.remove_extra_js_url(hass, url)
    hass.data[_EXTRA_URLS] = set(urls)
    for url in urls:
        frontend.add_extra_js_url(hass, url)


@callback
def async_remove_panel(hass: HomeAssistant) -> None:
    """Take the dashboard out of the sidebar and its icons out of the page.

    Panels are not tied to a config entry, so nothing does this for us: an
    uninstalled integration would otherwise leave a sidebar item loading a
    script that is no longer served. Only on removal -- a reload or a restart
    that took the panel away would send every tablet showing it to Home
    Assistant's default dashboard, and leave it there.
    """
    for url_path in (PANEL_URL_PATH, EDITOR_URL_PATH):
        if url_path in hass.data.get("frontend_panels", {}):
            frontend.async_remove_panel(hass, url_path)
    for url in hass.data.pop(_EXTRA_URLS, set()):
        frontend.remove_extra_js_url(hass, url)
