#!/usr/bin/env bash
# Run the same hassfest the CI runs, before pushing.
#
# The strings files have a schema only hassfest knows in full; ten seconds
# here beats a red run.
set -euo pipefail
REPO="$(cd "$(dirname "$0")/.." && pwd)"
exec docker run --rm -v "$REPO":/github/workspace ghcr.io/home-assistant/hassfest
