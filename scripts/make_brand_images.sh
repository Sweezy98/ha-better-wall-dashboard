#!/usr/bin/env bash
# Render the brand images from their HTML sources in images/.
#
# The sources are the truth; the PNGs are build output, committed because HACS
# and GitHub read files, not HTML. Drawn by headless Chrome so what you see
# when you open images/icon.html in a browser is exactly what ships.
#
# Sizes are the home-assistant/brands ones (CLAUDE.md, section 7): a 256 px
# icon and its 512 px @2x, and landscape logos with a 160 px short side and
# their @2x -- all RGBA, transparent where the design is.
#
#   scripts/make_brand_images.sh
set -euo pipefail
REPO="$(cd "$(dirname "$0")/.." && pwd)"
BRAND="$REPO/custom_components/better_wall_dashboard/brand"
IMAGES="$REPO/images"
CHROME="${CHROME:-google-chrome}"
mkdir -p "$BRAND"

shot() { # <source> <out> <width> <height> <scale>
  "$CHROME" --headless --disable-gpu --no-sandbox --hide-scrollbars \
    --default-background-color=00000000 --allow-file-access-from-files \
    --virtual-time-budget=6000 --force-device-scale-factor="$5" \
    --window-size="$3,$4" --screenshot="$2" "$1" >/dev/null 2>&1
  echo "wrote $2"
}

shot "file://$IMAGES/icon.html" "$BRAND/icon.png" 256 256 1
shot "file://$IMAGES/icon.html" "$BRAND/icon@2x.png" 512 512 1
shot "file://$IMAGES/logo.html" "$BRAND/logo.png" 1560 320 0.5
shot "file://$IMAGES/logo.html" "$BRAND/logo@2x.png" 1560 320 1
shot "file://$IMAGES/logo.html?dark" "$BRAND/dark_logo.png" 1560 320 0.5
shot "file://$IMAGES/logo.html?dark" "$BRAND/dark_logo@2x.png" 1560 320 1
shot "file://$IMAGES/header.html" "$IMAGES/header.png" 1200 630 1

# Check what was written rather than trusting the flags: a wrong scale factor
# or a missing alpha channel is invisible until the brands check rejects it.
"${PYTHON:-$REPO/.venv/bin/python}" - "$BRAND" <<'PY'
import sys, pathlib
from PIL import Image
expected = {
    "icon.png": (256, 256), "icon@2x.png": (512, 512),
    "logo.png": (780, 160), "logo@2x.png": (1560, 320),
    "dark_logo.png": (780, 160), "dark_logo@2x.png": (1560, 320),
}
for name, size in expected.items():
    image = Image.open(pathlib.Path(sys.argv[1]) / name)
    assert image.size == size, (name, image.size)
    assert image.mode == "RGBA", (name, image.mode)
print("brand images: sizes and alpha OK")
PY
