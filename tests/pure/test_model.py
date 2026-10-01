"""The rules deciding what reaches storage. No Home Assistant needed."""

from __future__ import annotations

import itertools
import re

from custom_components.better_wall_dashboard import model


def _counter():
    counter = itertools.count(1)
    return lambda: f"id{next(counter)}"


def test_default_dashboard_matches_the_reference_layout() -> None:
    dashboard = model.default_dashboard()
    first, second = dashboard["pages"]
    assert first["columns"] == [72, 28]
    assert [s["columns"] for s in first["sections"]] == [5, 2, 5, 2]
    assert second["columns"] == [75, 25]
    assert len(dashboard["buttons"]) == 5


def test_default_dashboard_names_no_entities() -> None:
    """A fresh install must not ship anybody's entity ids, or anything private."""
    entity_shaped = [
        value
        for value in _strings(model.default_dashboard())
        if re.fullmatch(r"[a-z0-9_]+\.[a-z0-9_]+", value)
    ]
    assert entity_shaped == []
    sidebar = model.default_dashboard()["sidebar"]
    assert sidebar["guest_wifi"] == {
        "qr_image": "",
        "ssid": "",
        "password": "",
        "security": "WPA",
        "hidden": False,
    }
    assert sidebar["travel"]["maps_api_key"] == ""


def _strings(node):
    if isinstance(node, dict):
        for value in node.values():
            yield from _strings(value)
    elif isinstance(node, list):
        for value in node:
            yield from _strings(value)
    elif isinstance(node, str):
        yield node


def test_normalize_is_idempotent() -> None:
    once = model.normalize_dashboard(model.default_dashboard())
    assert model.normalize_dashboard(once) == once


def test_garbage_becomes_a_usable_dashboard() -> None:
    dashboard = model.normalize_dashboard("not a dict", make_id=_counter())
    assert dashboard["name"] == "Wall dashboard"
    assert len(dashboard["pages"]) == 1
    assert dashboard["sidebar"]["calendar"]["days"] == 3


def test_limits_are_enforced() -> None:
    dashboard = model.normalize_dashboard(
        {
            "sidebar": {
                "quick_actions": [{"entity": f"input_boolean.q{i}"} for i in range(9)]
            },
            "buttons": [{"name": str(i)} for i in range(8)],
            "pages": [
                {
                    "sections": [
                        {"status": ["sensor.a", "sensor.b", "sensor.c"]}
                        for _ in range(7)
                    ]
                }
            ],
        }
    )
    assert len(dashboard["sidebar"]["quick_actions"]) == model.MAX_QUICK_ACTIONS
    assert len(dashboard["buttons"]) == model.MAX_BUTTONS
    page = dashboard["pages"][0]
    # A 2x2 page has four cells; the other three sections have nowhere to go.
    assert len(page["sections"]) == 4
    assert page["sections"][0]["status"] == ["sensor.a", "sensor.b"]


def test_entity_ids_are_shape_checked_not_existence_checked() -> None:
    dashboard = model.normalize_dashboard(
        {
            "sidebar": {
                "persons": ["person.anna", "not an entity", "PERSON.BEN", "person.anna"]
            }
        }
    )
    assert dashboard["sidebar"]["persons"] == ["person.anna", "person.ben"]


def test_duplicate_ids_are_replaced() -> None:
    """A copied section carries its original's id; both cannot keep it."""
    dashboard = model.normalize_dashboard(
        {"pages": [{"sections": [{"id": "same"}, {"id": "same"}]}]}, make_id=_counter()
    )
    ids = [s["id"] for s in dashboard["pages"][0]["sections"]]
    assert ids[0] == "same"
    assert ids[1] != "same"


def test_tile_sizes_fit_their_section() -> None:
    dashboard = model.normalize_dashboard(
        {
            "pages": [
                {"sections": [{"columns": 3, "rows": 2, "tiles": [{"w": 9, "h": 9}]}]}
            ]
        }
    )
    tile = dashboard["pages"][0]["sections"][0]["tiles"][0]
    assert (tile["w"], tile["h"]) == (3, 2)


def test_unknown_tile_types_and_options_survive() -> None:
    """The library grows with the frontend; the backend must not prune it."""
    raw = {"type": "better_lighting_room", "options": {"room": "abc", "nested": [1]}}
    dashboard = model.normalize_dashboard({"buttons": [{"tiles": [raw]}]})
    tile = dashboard["buttons"][0]["tiles"][0]
    assert tile["type"] == "better_lighting_room"
    assert tile["options"] == {"room": "abc", "nested": [1]}


def test_a_bool_is_not_a_number() -> None:
    dashboard = model.normalize_dashboard({"sidebar": {"calendar": {"days": True}}})
    assert dashboard["sidebar"]["calendar"]["days"] == 3


def test_page_splits_fall_back_when_invalid() -> None:
    dashboard = model.normalize_dashboard(
        {"pages": [{"columns": [60, 0], "rows": "x"}]}
    )
    assert dashboard["pages"][0]["columns"] == [75, 25]
    assert dashboard["pages"][0]["rows"] == [50, 50]


def test_document_always_has_a_default_dashboard() -> None:
    document = model.normalize_document({"dashboards": {"hall": {"name": "Hall"}}})
    assert set(document["dashboards"]) == {"hall", model.DEFAULT_DASHBOARD_ID}
    assert document["dashboards"]["hall"]["id"] == "hall"


def test_a_user_on_a_deleted_dashboard_falls_back_to_the_default() -> None:
    document = model.normalize_document(
        {"users": {"u1": {"dashboard": "gone", "kiosk": True}}}
    )
    assert document["users"]["u1"] == {
        "dashboard": model.DEFAULT_DASHBOARD_ID,
        "kiosk": True,
        "sidebar_only": False,
    }


def test_dashboard_for_prefers_request_then_assignment() -> None:
    document = model.normalize_document(
        {
            "dashboards": {"hall": {"name": "Hall"}, "kitchen": {"name": "Kitchen"}},
            "users": {"u1": {"dashboard": "hall"}},
        }
    )
    assert model.dashboard_for(document, "u1")["id"] == "hall"
    assert model.dashboard_for(document, "u1", "kitchen")["id"] == "kitchen"
    assert model.dashboard_for(document, "u1", "missing")["id"] == "hall"
    assert model.dashboard_for(document, "nobody")["id"] == model.DEFAULT_DASHBOARD_ID


def test_a_pin_is_four_to_eight_digits_or_none() -> None:
    assert model.normalize_dashboard({"pin": "0815"})["pin"] == "0815"
    assert model.normalize_dashboard({"pin": "12345678"})["pin"] == "12345678"
    for bad in ("123", "123456789", "12a4", 1234, None):
        assert model.normalize_dashboard({"pin": bad})["pin"] == ""


def test_the_pin_stays_on_the_server() -> None:
    dashboard = model.normalize_dashboard({"pin": "0815"})
    assert "pin" not in model.public_dashboard(dashboard)
    assert model.pin_matches(dashboard, "0815")
    assert not model.pin_matches(dashboard, "0816")
    assert model.pin_matches(model.normalize_dashboard({}), "anything")


def test_status_icons_come_from_the_old_mode_keys_until_saved_as_a_list() -> None:
    old = model.normalize_dashboard(
        {
            "sidebar": {
                "status": {"night": "input_boolean.night", "guest": "switch.guests"}
            }
        }
    )
    icons = old["sidebar"]["status"]["icons"]
    assert [(icon["entity"], icon["icon"]) for icon in icons] == [
        ("switch.guests", "mdi:account-multiple"),
        ("input_boolean.night", "mdi:weather-night"),
    ]
    # The old keys are stored as they were.
    assert old["sidebar"]["status"]["night"] == "input_boolean.night"

    emptied = model.normalize_dashboard(
        {"sidebar": {"status": {"night": "input_boolean.night", "icons": []}}}
    )
    assert emptied["sidebar"]["status"]["icons"] == []


def test_status_icons_are_limited() -> None:
    icons = [{"entity": f"input_boolean.m{i}", "icon": "mdi:star"} for i in range(9)]
    dashboard = model.normalize_dashboard({"sidebar": {"status": {"icons": icons}}})
    assert len(dashboard["sidebar"]["status"]["icons"]) == model.MAX_STATUS_ICONS


def test_retired_spacer_tiles_are_dropped_and_unknown_types_kept() -> None:
    section = {
        "columns": 2,
        "rows": 2,
        "tiles": [
            {"type": "placeholder"},
            {"type": "entity", "entity": "light.kitchen"},
            {"type": "from_a_newer_build"},
            {},
        ],
    }
    dashboard = model.normalize_dashboard({"pages": [{"sections": [section]}]})
    types = [tile["type"] for tile in dashboard["pages"][0]["sections"][0]["tiles"]]
    assert types == ["entity", "from_a_newer_build", "entity"]


def test_the_clock_is_digital_unless_asked_otherwise() -> None:
    assert model.normalize_dashboard({})["sidebar"]["clock"] == {
        "style": "digital",
        "seconds": False,
    }
    analog = model.normalize_dashboard({"sidebar": {"clock": {"style": "analog"}}})
    assert analog["sidebar"]["clock"]["style"] == "analog"
    odd = model.normalize_dashboard({"sidebar": {"clock": {"style": "sundial"}}})
    assert odd["sidebar"]["clock"]["style"] == "digital"


def test_notification_prefixes_are_a_list_read_from_the_old_single_one() -> None:
    old = model.normalize_dashboard({"sidebar": {"notifications": {"prefix": "wall_"}}})
    assert old["sidebar"]["notifications"]["prefixes"] == ["wall_"]
    assert old["sidebar"]["notifications"]["prefix"] == "wall_"

    listed = model.normalize_dashboard(
        {
            "sidebar": {
                "notifications": {
                    "prefix": "wall_",
                    "prefixes": ["wall_all_", "", "wall_living_", "wall_all_"],
                }
            }
        }
    )
    assert listed["sidebar"]["notifications"]["prefixes"] == [
        "wall_all_",
        "wall_living_",
    ]
    assert model.normalize_dashboard({})["sidebar"]["notifications"]["prefixes"] == []


def test_a_stored_background_stays_a_picture_and_a_colour_is_a_hex_one() -> None:
    old = model.normalize_dashboard(
        {"background": {"image": "/local/wall.jpg", "dim": 0.5}}
    )
    assert old["background"] == {
        "image": "/local/wall.jpg",
        "dim": 0.5,
        "blur": 0,
        "mode": "image",
        "color": "#131313",
    }
    plain = model.normalize_dashboard(
        {"background": {"mode": "color", "color": "#1A2B3C"}}
    )
    assert plain["background"]["mode"] == "color"
    assert plain["background"]["color"] == "#1a2b3c"
    odd = model.normalize_dashboard({"background": {"mode": "video", "color": "red"}})
    assert (odd["background"]["mode"], odd["background"]["color"]) == (
        "image",
        "#131313",
    )


def test_quick_actions_keep_their_rules_and_old_ones_show_always() -> None:
    old = model.normalize_dashboard(
        {"sidebar": {"quick_actions": [{"entity": "switch.night"}]}}
    )
    assert old["sidebar"]["quick_actions"][0]["rules"] == []
    ruled = model.normalize_dashboard(
        {
            "sidebar": {
                "quick_actions": [
                    {
                        "entity": "input_boolean.guests",
                        "rules": [
                            {"type": "state", "entity": "person.anna", "state": "home"},
                            {"type": "numeric", "entity": "sensor.lux", "below": "50"},
                            {"type": "time", "after": "18:00:00", "before": "23:30"},
                            {"type": "sun", "when": "night"},
                            {"type": "home", "who": "nobody"},
                            {"type": "weather", "is": "rain"},
                            {"type": "time", "after": "25:00"},
                        ],
                    }
                ]
            }
        }
    )
    rules = ruled["sidebar"]["quick_actions"][0]["rules"]
    assert rules[0] == {
        "type": "state",
        "entity": "person.anna",
        "state": "home",
        "not": False,
    }
    assert rules[1] == {
        "type": "numeric",
        "entity": "sensor.lux",
        "above": None,
        "below": 50.0,
    }
    assert rules[2] == {"type": "time", "after": "18:00", "before": "23:30"}
    assert rules[3] == {"type": "sun", "when": "night"}
    assert rules[4] == {"type": "home", "who": "nobody"}
    # An unknown kind is dropped; a time that is no time is kept empty.
    assert rules[5] == {"type": "time", "after": "", "before": ""}
    assert len(rules) == 6


def test_the_openings_row_and_list_show_everything_until_told_otherwise() -> None:
    plain = model.normalize_dashboard({})
    assert plain["sidebar"]["openings_view"] == {
        "hide_when_closed": False,
        "only_open": False,
    }
    set_ = model.normalize_dashboard(
        {"sidebar": {"openings_view": {"hide_when_closed": True, "only_open": True}}}
    )
    assert set_["sidebar"]["openings_view"] == {
        "hide_when_closed": True,
        "only_open": True,
    }


def test_a_work_location_is_kept_for_the_map_and_empty_by_default() -> None:
    plain = model.normalize_dashboard({})["sidebar"]["travel"]
    assert (plain["work_zone"], plain["work_address"]) == ("", "")
    set_ = model.normalize_dashboard(
        {"sidebar": {"travel": {"work_zone": "zone.work", "work_address": "Main St 1"}}}
    )["sidebar"]["travel"]
    assert (set_["work_zone"], set_["work_address"]) == ("zone.work", "Main St 1")


def test_system_buttons_are_kept_to_twelve_each_with_its_confirmation() -> None:
    plain = model.normalize_dashboard({})["sidebar"]
    assert plain["system_buttons"] == []
    raw = [{"entity": "script.restart", "name": "Restart", "confirm": True}] + [
        {"entity": "button.x"}
    ] * 20
    buttons = model.normalize_dashboard({"sidebar": {"system_buttons": raw}})[
        "sidebar"
    ]["system_buttons"]
    assert len(buttons) == model.MAX_SYSTEM_BUTTONS
    assert buttons[0]["entity"] == "script.restart"
    assert buttons[0]["confirm"] is True
    assert buttons[1]["confirm"] is False
    assert (buttons[0]["on_name"], buttons[0]["off_name"]) == ("", "")
    named = model.normalize_dashboard(
        {
            "sidebar": {
                "system_buttons": [
                    {
                        "entity": "switch.permit_join",
                        "on_name": "Stop",
                        "off_name": "Allow",
                    }
                ]
            }
        }
    )["sidebar"]["system_buttons"][0]
    assert (named["on_name"], named["off_name"]) == ("Stop", "Allow")


def test_batteries_are_off_until_switched_on_and_their_threshold_bounded() -> None:
    plain = model.normalize_dashboard({})["sidebar"]["batteries"]
    assert plain == {
        "enabled": False,
        "hide_when_ok": False,
        "only_critical": False,
        "threshold": 20,
        "hidden": [],
    }
    set_ = model.normalize_dashboard(
        {
            "sidebar": {
                "batteries": {
                    "enabled": True,
                    "only_critical": True,
                    "threshold": 300,
                    "hidden": ["sensor.phone_battery", "not an entity"],
                }
            }
        }
    )["sidebar"]["batteries"]
    assert set_["enabled"] and set_["only_critical"] and not set_["hide_when_ok"]
    assert set_["threshold"] == 90
    assert set_["hidden"] == ["sensor.phone_battery"]


def test_a_readings_own_icon_is_kept_by_its_entity_and_only_for_a_reading_shown() -> (
    None
):
    section = model.normalize_dashboard(
        {
            "pages": [
                {
                    "sections": [
                        {
                            "status": ["sensor.alarm", "not an entity", "sensor.co2"],
                            "status_icons": {
                                "sensor.alarm": "mdi:alarm",
                                "sensor.gone": "mdi:ghost",
                                "sensor.co2": 5,
                            },
                        }
                    ]
                }
            ]
        }
    )["pages"][0]["sections"][0]
    assert section["status"] == ["sensor.alarm", "sensor.co2"]
    assert section["status_icons"] == {"sensor.alarm": "mdi:alarm"}
