#!/usr/bin/env bash
# Adds the fingerprint-lock native code to the Capacitor android/ project.
# Safe to run more than once. Run it after `npx cap add android` / `npx cap sync`.
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
APP="$ROOT/android/app"
PKG="$APP/src/main/java/com/mywallet/app"
MANIFEST="$APP/src/main/AndroidManifest.xml"

mkdir -p "$PKG"
cp "$ROOT/native/BiometricLockPlugin.java" "$ROOT/native/MainActivity.java" "$PKG/"

grep -q 'androidx.biometric' "$APP/build.gradle" || \
  sed -i '0,/^dependencies {/s||dependencies {\n    implementation "androidx.biometric:biometric:1.1.0"|' "$APP/build.gradle"

grep -q 'USE_BIOMETRIC' "$MANIFEST" || \
  sed -i 's|</manifest>|    <uses-permission android:name="android.permission.USE_BIOMETRIC" />\n</manifest>|' "$MANIFEST"

# launcher icons (ready-made, no ImageMagick needed)
cp -r "$ROOT/native/res/." "$APP/src/main/res/"

echo "Fingerprint lock native code + icons applied."
