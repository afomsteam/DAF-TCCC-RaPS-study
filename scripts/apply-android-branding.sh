#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RES="$ROOT/android/app/src/main/res"
if [[ ! -d "$RES" ]]; then
  echo "Android project not found. Run 'npx cap add android' first." >&2
  exit 1
fi
for density in mdpi hdpi xhdpi xxhdpi xxxhdpi; do
  src="$ROOT/android-overrides/mipmap-$density"
  dst="$RES/mipmap-$density"
  mkdir -p "$dst"
  cp "$src/ic_launcher.png" "$dst/ic_launcher.png"
  cp "$src/ic_launcher_round.png" "$dst/ic_launcher_round.png"
  cp "$src/ic_launcher_foreground.png" "$dst/ic_launcher_foreground.png"
done
# The in-app welcome/safety screen uses www/assets/splash-background.png,
# so the AE artwork is always present even if Android's native splash policy changes.
echo "Applied FieldReady launcher branding."
