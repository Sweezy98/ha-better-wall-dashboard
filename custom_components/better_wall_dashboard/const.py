"""Constants for Better Wall Dashboard."""

from __future__ import annotations

from typing import Final

DOMAIN: Final = "better_wall_dashboard"
NAME: Final = "Better Wall Dashboard"

# Where the dashboard lives in the frontend. This string is also what a user's
# `default_panel` is set to, so it is as permanent as a stored key: renaming it
# silently sends every wall tablet back to the overview on its next start.
PANEL_URL_PATH: Final = "better-wall-dashboard"
PANEL_ELEMENT: Final = "better-wall-dashboard-panel"
SIDEBAR_TITLE: Final = "Wall Dashboard"
SIDEBAR_ICON: Final = "better-wall-dashboard:tablet"

# The editor: its own sidebar entry, admin-only, so it never lives on the
# tablet it configures. The same bundle defines both elements.
EDITOR_URL_PATH: Final = "better-wall-dashboard-editor"
EDITOR_ELEMENT: Final = "better-wall-dashboard-editor"
EDITOR_TITLE: Final = "Wall Dashboard Editor"
EDITOR_ICON: Final = "mdi:view-dashboard-edit"

# The React build, served as one directory. Every file in it except the entry
# is named after its own contents by Vite; the entry carries a fingerprint in
# its query string instead.
APP_URL: Final = f"/{DOMAIN}/app"
APP_DIR: Final = "frontend"
APP_ENTRY: Final = "better_wall_dashboard.js"

# Loose files served one by one: the sidebar's icon set, and the brand icon
# for cores older than 2026.3 that do not read the brand folder.
STATIC_URL: Final = f"/{DOMAIN}/static"
ICONS_FILE: Final = "www/better_wall_dashboard_icons.js"
BRAND_ICON_FILE: Final = "brand/icon.png"

STORAGE_KEY: Final = DOMAIN
STORAGE_VERSION: Final = 1

# Dispatcher signal fired after every save, so each open dashboard redraws
# the moment an admin saves rather than on its next reload.
SIGNAL_DOCUMENT_UPDATED: Final = f"{DOMAIN}_document_updated"
