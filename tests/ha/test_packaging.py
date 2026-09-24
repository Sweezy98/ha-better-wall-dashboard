"""Packaging consistency, and nothing private in the repository.

Most of these guard one class of mistake: something declared in one place and
forgotten in another. The last group guards a different one -- a token, an
address or a Wi-Fi password pasted into a file that then gets committed.
"""

from __future__ import annotations

import json
import pathlib
import re
import shutil
import subprocess

import pytest

from custom_components.better_wall_dashboard.const import (
    APP_DIR,
    APP_ENTRY,
    PANEL_ELEMENT,
)

REPO = pathlib.Path(__file__).parents[2]
COMPONENT = REPO / "custom_components" / "better_wall_dashboard"
STRINGS = json.loads((COMPONENT / "strings.json").read_text())
MANIFEST = json.loads((COMPONENT / "manifest.json").read_text())


def _flatten(node, prefix=""):
    if isinstance(node, dict):
        merged = {}
        for key, value in node.items():
            merged |= _flatten(value, f"{prefix}.{key}")
        return merged
    return {prefix: node}


def test_translations_match_strings() -> None:
    """Custom integrations load translations/, not strings.json."""
    english = json.loads((COMPONENT / "translations" / "en.json").read_text())
    assert english == STRINGS


@pytest.mark.parametrize(
    "path", sorted((COMPONENT / "translations").glob("*.json")), ids=lambda p: p.name
)
def test_every_language_has_the_same_keys_and_placeholders(path) -> None:
    """Home Assistant falls back per missing key: half a translation is worse."""
    english = _flatten(STRINGS)
    other = _flatten(json.loads(path.read_text()))
    assert set(other) == set(english)
    for key, text in english.items():
        assert sorted(re.findall(r"\{\w+\}", other[key])) == sorted(
            re.findall(r"\{\w+\}", text)
        ), key


def test_manifest_is_complete() -> None:
    for key in (
        "domain",
        "name",
        "version",
        "documentation",
        "issue_tracker",
        "codeowners",
        "config_flow",
        "iot_class",
        "integration_type",
    ):
        assert MANIFEST.get(key), key
    assert MANIFEST["single_config_entry"] is True
    # Needed during setup; an after-dependency would not guarantee them.
    assert {"http", "websocket_api"} <= set(MANIFEST["dependencies"])
    # Not dependencies: a headless install must still load.
    assert not {"frontend", "panel_custom"} & set(MANIFEST["dependencies"])


def test_hacs_json_is_complete() -> None:
    hacs = json.loads((REPO / "hacs.json").read_text())
    assert hacs["name"]
    assert hacs["homeassistant"]


def test_brand_images_ship_inside_the_component() -> None:
    for name in (
        "icon.png",
        "icon@2x.png",
        "logo.png",
        "logo@2x.png",
        "dark_logo.png",
        "dark_logo@2x.png",
    ):
        assert (COMPONENT / "brand" / name).is_file(), name


def test_the_build_is_committed_where_hacs_installs_it() -> None:
    """HACS copies files and runs nothing: no build, no dashboard."""
    entry = COMPONENT / APP_DIR / APP_ENTRY
    assert entry.is_file(), "run `npm run build` in frontend/"
    # The element the backend registers is the one the bundle defines.
    # In any quotes: the minifier writes string literals as template literals.
    assert re.search(rf"[\"'`]{PANEL_ELEMENT}[\"'`]", entry.read_text())


@pytest.mark.skipif(shutil.which("node") is None, reason="node is not installed")
def test_every_shipped_script_parses() -> None:
    """No build step on the user's side means no other syntax check."""
    for path in COMPONENT.rglob("*.js"):
        result = subprocess.run(
            ["node", "--check", str(path)], capture_output=True, text=True, check=False
        )
        assert result.returncode == 0, f"{path}: {result.stderr}"


# --- nothing private ---------------------------------------------------------


def _committable() -> list[pathlib.Path]:
    """Exactly the files a commit would contain: tracked, or new and not ignored."""
    if shutil.which("git") is None or not (REPO / ".git").exists():
        pytest.skip("not a git checkout")
    listed = subprocess.run(
        ["git", "ls-files", "--cached", "--others", "--exclude-standard", "-z"],
        cwd=REPO,
        capture_output=True,
        check=True,
    ).stdout.split(b"\0")
    return [
        REPO / name.decode()
        for name in listed
        if name and (REPO / name.decode()).is_file()
    ]


def test_private_folders_and_env_files_are_ignored() -> None:
    names = {path.relative_to(REPO).as_posix() for path in _committable()}
    assert not any(name.startswith("ref_projects/") for name in names)
    assert not any(
        name.startswith(".venv/") or "/node_modules/" in name for name in names
    )
    env_files = [n for n in names if re.search(r"(^|/)\.env(\.[\w.-]+)?$", n)]
    assert all(n.endswith(".example") for n in env_files), env_files


# Shapes that are private whoever's they are.
_PRIVATE_SHAPES = {
    # A Home Assistant access token (a JWT: two base64url JSON parts).
    "access token": re.compile(rb"eyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}"),
    # A Zigbee device's IEEE address, as zigbee2mqtt puts in entity ids
    # (`sensor.0x<16 hex digits>_temperature`): an entity from one house.
    "zigbee address": re.compile(rb"\b0x[0-9a-f]{16}\b"),
    # A package fetched from a private registry: the lockfile records the
    # mirror's URL -- a company name and an account id -- and CI cannot
    # fetch from it anyway. frontend/.npmrc pins the public registry.
    "private npm registry": re.compile(
        rb'"resolved": "https?://(?!registry\.npmjs\.org/)[^"]+"'
    ),
    # A Google Maps embed with a route in it carries both addresses.
    "maps route": re.compile(rb"google\.com/maps/embed\?pb=![^\s\"']{40,}"),
}


def _local_secrets() -> set[bytes]:
    """The values in the local .env files, which must never appear anywhere.

    Read from the files themselves rather than written here, because writing
    somebody's Home Assistant URL into a test would commit it.
    """
    values: set[bytes] = set()
    for env in [*REPO.glob("ref_projects/**/.env*"), *REPO.glob("frontend/.env*")]:
        if env.name.endswith(".example") or not env.is_file():
            continue
        for line in env.read_text(errors="ignore").splitlines():
            key, _, value = line.partition("=")
            value = value.strip().strip("'\"")
            credential = re.search(
                r"TOKEN|URL|HOST|PASSWORD|USER|SSID|KEY", key.upper()
            )
            if credential and not key.lstrip().startswith("#") and len(value) >= 6:
                values.add(value.encode())
                # A URL's host on its own is just as identifying.
                if host := re.match(r"https?://([^/:]+)", value):
                    values.add(host.group(1).encode())
    return values


def test_no_private_information_is_committed() -> None:
    secrets = _local_secrets()
    found = []
    for path in _committable():
        if path.suffix in {".png", ".jpg", ".jpeg", ".ttf", ".woff2"}:
            continue
        data = path.read_bytes()
        for label, pattern in _PRIVATE_SHAPES.items():
            if pattern.search(data):
                found.append(f"{path.relative_to(REPO)}: {label}")
        for value in secrets:
            if value in data:
                found.append(
                    f"{path.relative_to(REPO)}: a value from a local .env file"
                )
    assert not found, "\n".join(found)
