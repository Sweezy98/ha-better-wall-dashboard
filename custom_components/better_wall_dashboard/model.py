"""The stored document: what a dashboard is allowed to contain.

Pure -- no Home Assistant imports -- so the rules deciding what reaches
storage test in milliseconds and without fixtures.

The document is one JSON value with two parts:

``dashboards``
    Every dashboard, keyed by id. A house with two wall tablets usually wants
    two, because "the room this tablet is in" is part of a dashboard.
``users``
    Per Home Assistant user: which dashboard they see and whether the
    dashboard hides Home Assistant's own sidebar for them. Keyed by user id,
    because that is the one thing about a user that never changes.

Every key written here is forever. A concept renamed in the UI keeps its
stored key; see CLAUDE.md, section 3.

Normalising is deliberately forgiving. The editor is the only writer, and a
save that silently drops one malformed tile is a far better outcome than one
that refuses the whole page -- the admin can see the tile is gone, but cannot
see why an entire save was rejected on a tablet across the room.
"""

from __future__ import annotations

import re
import secrets
from collections.abc import Callable, Iterable
from typing import Any, Final

DEFAULT_DASHBOARD_ID: Final = "default"

MAX_PAGES: Final = 10
# A page is a grid of sections; 3 x 2 is already more than a tablet can show.
MAX_PAGE_TRACKS: Final = 3
MAX_SECTION_CELLS: Final = 12
MAX_TILES: Final = 64
MAX_QUICK_ACTIONS: Final = 6
MAX_BUTTONS: Final = 5
MAX_SECTION_STATUS: Final = 2
MAX_SYSTEM_STATS: Final = 8
MAX_LIST: Final = 32
MAX_CALENDAR_DAYS: Final = 14
MAX_TEXT: Final = 200
# Map URLs are long; a Google embed URL with a route in it runs to ~700.
MAX_URL: Final = 2000

GUEST_WIFI_SECURITY: Final = ("WPA", "WEP", "nopass")

_ID = re.compile(r"^[A-Za-z0-9_-]{1,64}$")
_ENTITY_ID = re.compile(r"^[a-z0-9_]+\.[a-z0-9_]+$")


def new_id() -> str:
    """A short random id for a page, section, tile or button."""
    return secrets.token_hex(6)


# --- scalar coercion -------------------------------------------------------


def _text(value: Any, default: str = "", limit: int = MAX_TEXT) -> str:
    if not isinstance(value, str):
        return default
    return value.strip()[:limit]


def _int(value: Any, default: int, low: int, high: int) -> int:
    # bool is an int in Python; a checkbox is not a column count.
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return default
    return max(low, min(high, int(value)))


def _float(value: Any, default: float, low: float, high: float) -> float:
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return default
    return max(low, min(high, float(value)))


def _bool(value: Any, default: bool) -> bool:
    return value if isinstance(value, bool) else default


def _entity(value: Any) -> str:
    """An entity id, or "" for "not configured".

    Shape only: whether the entity exists is a question for the moment the
    dashboard draws it, because entities come and go (an integration still
    starting, a device offline) and a stored reference must survive that.
    """
    text = _text(value).lower()
    return text if _ENTITY_ID.match(text) else ""


def _entities(value: Any, limit: int = MAX_LIST) -> list[str]:
    if not isinstance(value, list):
        return []
    seen: list[str] = []
    for item in value:
        if (entity := _entity(item)) and entity not in seen:
            seen.append(entity)
    return seen[:limit]


def _choice(value: Any, choices: Iterable[str], default: str) -> str:
    return value if isinstance(value, str) and value in choices else default


def _dict(value: Any) -> dict[str, Any]:
    return value if isinstance(value, dict) else {}


def _ids(make_id: Callable[[], str]) -> Callable[[Any], str]:
    """An id assigner that keeps valid ids and never hands out one twice.

    Duplicates happen when the editor copies a section: both copies carry the
    original's id, and a tile keyed by it would then belong to either.
    """
    taken: set[str] = set()

    def assign(value: Any) -> str:
        candidate = value if isinstance(value, str) and _ID.match(value) else ""
        while not candidate or candidate in taken:
            candidate = make_id()
        taken.add(candidate)
        return candidate

    return assign


# --- the parts of a dashboard ----------------------------------------------


def _tile(raw: Any, assign: Callable[[Any], str], columns: int, rows: int) -> dict:
    raw = _dict(raw)
    return {
        "id": assign(raw.get("id")),
        # The component to draw, from the frontend's library. Free text rather
        # than an enum here: the library grows with the frontend, and a type
        # this backend has never heard of must survive a save untouched.
        "type": _text(raw.get("type"), "placeholder", 64) or "placeholder",
        "entity": _entity(raw.get("entity")),
        "name": _text(raw.get("name")),
        "icon": _text(raw.get("icon"), "", 64),
        "w": _int(raw.get("w"), 1, 1, columns),
        "h": _int(raw.get("h"), 1, 1, rows),
        # Component-specific settings. Opaque to the backend for the same
        # reason as `type`; bounded only by being a JSON object.
        "options": _dict(raw.get("options")),
    }


def _tiles(raw: Any, assign: Callable[[Any], str], columns: int, rows: int) -> list:
    if not isinstance(raw, list):
        return []
    return [_tile(item, assign, columns, rows) for item in raw[:MAX_TILES]]


def _section(raw: Any, assign: Callable[[Any], str]) -> dict:
    raw = _dict(raw)
    columns = _int(raw.get("columns"), 2, 1, MAX_SECTION_CELLS)
    rows = _int(raw.get("rows"), 2, 1, MAX_SECTION_CELLS)
    return {
        "id": assign(raw.get("id")),
        "name": _text(raw.get("name")),
        "icon": _text(raw.get("icon"), "", 64),
        # Zero to two readings drawn at the right of the header, after the
        # separator line.
        "status": _entities(raw.get("status"), MAX_SECTION_STATUS),
        "columns": columns,
        "rows": rows,
        # Square cells, sized to the smaller of width and height, so a 1x1
        # tile here is the same size as a 1x1 tile in the section beside it.
        "square": _bool(raw.get("square"), True),
        "tiles": _tiles(raw.get("tiles"), assign, columns, rows),
    }


def _tracks(raw: Any, default: list[int]) -> list[int]:
    """A page's column or row split, as percentages."""
    if not isinstance(raw, list) or not raw:
        return list(default)
    tracks = [_int(v, 0, 0, 100) for v in raw[:MAX_PAGE_TRACKS]]
    return tracks if all(tracks) else list(default)


def _page(raw: Any, assign: Callable[[Any], str]) -> dict:
    raw = _dict(raw)
    columns = _tracks(raw.get("columns"), [75, 25])
    rows = _tracks(raw.get("rows"), [50, 50])
    sections = raw.get("sections") if isinstance(raw.get("sections"), list) else []
    return {
        "id": assign(raw.get("id")),
        "columns": columns,
        "rows": rows,
        # One section per cell of the page grid, filled row by row. Extra
        # sections have nowhere to go and are dropped rather than overflowing.
        "sections": [
            _section(item, assign) for item in sections[: len(columns) * len(rows)]
        ],
    }


def _named_entity(raw: Any, assign: Callable[[Any], str]) -> dict:
    raw = _dict(raw)
    return {
        "id": assign(raw.get("id")),
        "entity": _entity(raw.get("entity")),
        "name": _text(raw.get("name")),
        "icon": _text(raw.get("icon"), "", 64),
    }


def _named_entities(raw: Any, assign: Callable[[Any], str], limit: int) -> list:
    if not isinstance(raw, list):
        return []
    return [_named_entity(item, assign) for item in raw[:limit]]


def _button(raw: Any, assign: Callable[[Any], str]) -> dict:
    raw = _dict(raw)
    columns = _int(raw.get("columns"), 4, 1, MAX_SECTION_CELLS)
    return {
        "id": assign(raw.get("id")),
        "name": _text(raw.get("name")),
        "icon": _text(raw.get("icon"), "", 64),
        # What the popup this button opens contains: tiles from the same
        # library the pages use, laid out on a grid of this many columns.
        "columns": columns,
        "tiles": _tiles(raw.get("tiles"), assign, columns, MAX_SECTION_CELLS),
    }


def _sidebar(raw: Any, assign: Callable[[Any], str]) -> dict:
    raw = _dict(raw)
    status = _dict(raw.get("status"))
    wifi = _dict(raw.get("guest_wifi"))
    climate = _dict(raw.get("climate"))
    travel = _dict(raw.get("travel"))
    calendar = _dict(raw.get("calendar"))
    weather = _dict(raw.get("weather"))
    notifications = _dict(raw.get("notifications"))
    return {
        "status": {
            "absence": _entity(status.get("absence")),
            "guest": _entity(status.get("guest")),
            "night": _entity(status.get("night")),
            # The tablet's own signal, as the companion app reports it. Per
            # dashboard because it is per tablet.
            "wifi_signal": _entity(status.get("wifi_signal")),
        },
        "guest_wifi": {
            # An image entity with the QR code, as the UniFi integration
            # provides one per WLAN. Preferred when set.
            "qr_image": _entity(wifi.get("qr_image")),
            # Otherwise the code is drawn from these.
            "ssid": _text(wifi.get("ssid")),
            "password": _text(wifi.get("password")),
            "security": _choice(wifi.get("security"), GUEST_WIFI_SECURITY, "WPA"),
            "hidden": _bool(wifi.get("hidden"), False),
        },
        "climate": {
            "temperature": _entity(climate.get("temperature")),
            "humidity": _entity(climate.get("humidity")),
            "hours": _int(climate.get("hours"), 24, 1, 168),
        },
        "persons": _entities(raw.get("persons")),
        "openings": _entities(raw.get("openings"), 64),
        "travel": {
            "entity": _entity(travel.get("entity")),
            "name": _text(travel.get("name")),
            # A Google Maps embed URL, pasted from "Share -> Embed a map".
            "map_url": _text(travel.get("map_url"), "", MAX_URL),
            # Or a Maps Embed API key, with which the route is drawn from the
            # sensor's own origin and destination.
            "maps_api_key": _text(travel.get("maps_api_key"), "", 100),
        },
        "quick_actions": _named_entities(
            raw.get("quick_actions"), assign, MAX_QUICK_ACTIONS
        ),
        "calendar": {
            "entities": _entities(calendar.get("entities")),
            "days": _int(calendar.get("days"), 3, 1, MAX_CALENDAR_DAYS),
        },
        "weather": {
            "entity": _entity(weather.get("entity")),
            # The house's own outdoor sensor. The forecast's "current"
            # temperature is a model's guess for the grid square; this is the
            # thermometer on the balcony.
            "temperature": _entity(weather.get("temperature")),
        },
        "notifications": {
            "enabled": _bool(notifications.get("enabled"), True),
            # Only persistent notifications whose id starts with this, so the
            # tablet shows "the washing machine is done" and not "new devices
            # discovered". Empty shows everything.
            "prefix": _text(notifications.get("prefix"), "", 64),
        },
        "system": _named_entities(raw.get("system"), assign, MAX_SYSTEM_STATS),
    }


def normalize_dashboard(
    raw: Any, *, dashboard_id: str | None = None, make_id: Callable[[], str] = new_id
) -> dict[str, Any]:
    """A dashboard as it may be stored, from whatever the editor sent."""
    raw = _dict(raw)
    assign = _ids(make_id)
    background = _dict(raw.get("background"))
    pages = raw.get("pages") if isinstance(raw.get("pages"), list) else []
    buttons = raw.get("buttons") if isinstance(raw.get("buttons"), list) else []
    ident = dashboard_id or raw.get("id")
    return {
        "id": ident if isinstance(ident, str) and _ID.match(ident) else make_id(),
        "name": _text(raw.get("name"), "Wall dashboard") or "Wall dashboard",
        "background": {
            # A URL the tablet can fetch: /local/..., /api/image/serve/...,
            # or empty for the image that ships with the dashboard.
            "image": _text(background.get("image"), "", MAX_URL),
            "dim": _float(background.get("dim"), 0.8, 0.0, 0.95),
            "blur": _int(background.get("blur"), 0, 0, 40),
        },
        "sidebar": _sidebar(raw.get("sidebar"), assign),
        "pages": [_page(item, assign) for item in pages[:MAX_PAGES]]
        # A dashboard with no pages would have nothing to swipe, and the
        # editor has nothing to add a section to.
        or [_page({}, assign)],
        "buttons": [_button(item, assign) for item in buttons[:MAX_BUTTONS]],
    }


def _user(raw: Any, dashboards: dict[str, Any]) -> dict[str, Any]:
    raw = _dict(raw)
    dashboard = raw.get("dashboard")
    return {
        # A dangling reference -- the dashboard was deleted -- falls back to
        # the default rather than to an error, because there is no pre-delete
        # hook to clean it up with and a tablet must always show something.
        "dashboard": dashboard
        if isinstance(dashboard, str) and dashboard in dashboards
        else DEFAULT_DASHBOARD_ID,
        "kiosk": _bool(raw.get("kiosk"), False),
    }


def normalize_document(raw: Any) -> dict[str, Any]:
    """The whole stored document, from storage or from nothing."""
    raw = _dict(raw)
    dashboards = {}
    for key, value in _dict(raw.get("dashboards")).items():
        if isinstance(key, str) and _ID.match(key):
            dashboards[key] = normalize_dashboard(value, dashboard_id=key)
    if DEFAULT_DASHBOARD_ID not in dashboards:
        dashboards[DEFAULT_DASHBOARD_ID] = default_dashboard()
    users = {
        key: _user(value, dashboards)
        for key, value in _dict(raw.get("users")).items()
        if isinstance(key, str) and _ID.match(key)
    }
    return {"dashboards": dashboards, "users": users}


def dashboard_for(
    document: dict[str, Any], user_id: str | None, requested: str | None = None
) -> dict[str, Any]:
    """The dashboard a user should see.

    An explicit request wins -- that is how an admin previews a tablet's
    dashboard from their desk -- then the user's assignment, then the default.
    """
    dashboards = document["dashboards"]
    if requested and requested in dashboards:
        return dashboards[requested]
    user = document["users"].get(user_id or "")
    if user and user["dashboard"] in dashboards:
        return dashboards[user["dashboard"]]
    return dashboards[DEFAULT_DASHBOARD_ID]


def default_dashboard() -> dict[str, Any]:
    """The dashboard a fresh install starts with.

    Laid out like the reference design -- four sections per page, a 75/25
    split -- with no entities chosen, because none of them can be guessed.
    Everything it shows until then is an empty glass tile, which is also what
    tells the admin where things go.
    """

    def section(name: str, icon: str, columns: int, tiles: list[dict]) -> dict:
        return {
            "name": name,
            "icon": icon,
            "columns": columns,
            "rows": 2,
            "tiles": tiles,
        }

    def blanks(count: int) -> list[dict]:
        return [{"type": "placeholder"} for _ in range(count)]

    return normalize_dashboard(
        {
            "id": DEFAULT_DASHBOARD_ID,
            "name": "Wall dashboard",
            "pages": [
                {
                    "columns": [72, 28],
                    "rows": [50, 50],
                    "sections": [
                        section("Living room", "mdi:sofa-single", 5, blanks(10)),
                        section("Bedroom", "mdi:bed-king", 2, blanks(4)),
                        section(
                            "Media",
                            "mdi:television",
                            5,
                            [
                                {"type": "placeholder", "w": 2, "h": 2},
                                {"type": "placeholder", "w": 2, "h": 2},
                                *blanks(2),
                            ],
                        ),
                        section("Devices", "mdi:washing-machine", 2, blanks(4)),
                    ],
                },
                {
                    "columns": [75, 25],
                    "rows": [50, 50],
                    "sections": [
                        {"columns": 1, "rows": 1, "square": False, "tiles": []}
                        for _ in range(4)
                    ],
                },
            ],
            "buttons": [
                # Where the doorbell's camera, talk-back, door opener and
                # canned replies will live; empty until that component exists.
                {"name": "Intercom", "icon": "mdi:doorbell-video"},
                {"name": "Climate", "icon": "mdi:heat-wave"},
                {"name": "Shading", "icon": "mdi:curtains"},
                {"name": "Security", "icon": "mdi:shield-lock"},
                {"name": "Energy", "icon": "mdi:lightning-bolt-outline"},
            ],
        }
    )
