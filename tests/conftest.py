"""Shared fixtures. Only the tests under tests/ha/ need Home Assistant."""

from __future__ import annotations

import pytest


@pytest.fixture(autouse=True)
def auto_enable_custom_integrations(request):
    """Let Home Assistant load custom_components/ in the tests that start it.

    Requested lazily, so the pure tests -- which never start Home Assistant --
    do not pay for a fixture they have no use for.
    """
    if "hass" in request.fixturenames:
        request.getfixturevalue("enable_custom_integrations")
