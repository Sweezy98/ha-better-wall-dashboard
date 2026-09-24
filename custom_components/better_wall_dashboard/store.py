"""Where the dashboards are kept.

A `Store` rather than config-entry options or subentries. A dashboard is one
nested document edited as a whole by a custom UI -- pages holding sections
holding tiles -- and a config flow has no form for any of it. Subentries would
split it into dozens of rows keyed by ids the editor then has to keep in step,
for nothing: no entity or device hangs off a dashboard.
"""

from __future__ import annotations

import copy
import logging
from typing import Any

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.storage import Store

from . import model
from .const import SIGNAL_DOCUMENT_UPDATED, STORAGE_KEY, STORAGE_VERSION

_LOGGER = logging.getLogger(__name__)


class DashboardStore:
    """The stored document, loaded once and written on every change."""

    def __init__(self, hass: HomeAssistant) -> None:
        self._hass = hass
        self._store: Store[dict[str, Any]] = Store(
            hass, STORAGE_VERSION, STORAGE_KEY, atomic_writes=True
        )
        self.document: dict[str, Any] = model.normalize_document(None)

    async def async_load(self) -> None:
        raw = await self._store.async_load()
        self.document = model.normalize_document(raw)
        if raw is None:
            # First start: write the default out, so its ids are the ones
            # every later load sees. Generated afresh on each load instead,
            # they would change under a tablet between two restarts.
            await self._store.async_save(self.document)

    def sidebar_only_users(self) -> list[str]:
        """The users whose Home Assistant sidebar shows only the dashboard."""
        return [
            key
            for key, value in self.document["users"].items()
            if value["sidebar_only"]
        ]

    def snapshot(self) -> dict[str, Any]:
        """A copy the caller may keep; the live document is only ours."""
        return copy.deepcopy(self.document)

    async def async_save_dashboard(self, raw: Any) -> dict[str, Any]:
        dashboard = model.normalize_dashboard(raw)
        self.document["dashboards"][dashboard["id"]] = dashboard
        await self._async_commit()
        return dashboard

    async def async_delete_dashboard(self, dashboard_id: str) -> bool:
        if dashboard_id == model.DEFAULT_DASHBOARD_ID:
            # The one every fallback lands on. Deleting it would leave a
            # tablet with nothing to fall back to.
            return False
        if self.document["dashboards"].pop(dashboard_id, None) is None:
            return False
        # Re-normalise so users assigned to it fall back to the default now,
        # visibly in the editor, rather than only when their tablet next asks.
        self.document = model.normalize_document(self.document)
        await self._async_commit()
        return True

    async def async_save_user(
        self,
        user_id: str,
        *,
        dashboard: str | None = None,
        kiosk: bool | None = None,
        sidebar_only: bool | None = None,
    ) -> dict[str, Any]:
        users = self.document["users"]
        current = dict(users.get(user_id) or {})
        if dashboard is not None:
            current["dashboard"] = dashboard
        if kiosk is not None:
            current["kiosk"] = kiosk
        if sidebar_only is not None:
            current["sidebar_only"] = sidebar_only
        users[user_id] = current
        self.document = model.normalize_document(self.document)
        await self._async_commit()
        return self.document["users"][user_id]

    async def _async_commit(self) -> None:
        await self._store.async_save(self.document)
        self._async_notify()

    @callback
    def _async_notify(self) -> None:
        async_dispatcher_send(self._hass, SIGNAL_DOCUMENT_UPDATED)

    async def async_remove(self) -> None:
        """Delete the file, for when the integration itself is removed."""
        await self._store.async_remove()
