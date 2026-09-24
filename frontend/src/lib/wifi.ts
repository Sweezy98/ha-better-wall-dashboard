/**
 * The tablet's Wi-Fi signal as an icon, and the guest network as a QR code.
 */

import type { WifiSecurity } from '../config/types';

/**
 * Bars, 0 to 4, from a received signal strength in dBm.
 *
 * The companion app reports RSSI (`sensor.<tablet>_wifi_signal_strength`).
 * The thresholds are Android's own, from `WifiManager.calculateSignalLevel`
 * as the status bar draws it, so the dashboard and the tablet's own status bar
 * never disagree about how good the signal is.
 */
export function signalLevel(dbm: number | null): number | null {
  if (dbm === null || !Number.isFinite(dbm)) return null;
  if (dbm >= -55) return 4;
  if (dbm >= -66) return 3;
  if (dbm >= -77) return 2;
  if (dbm >= -88) return 1;
  return 0;
}

/**
 * The Material Design icon for a level.
 *
 * No signal sensor configured is "wifi" -- the plain symbol, which is the
 * button for the guest network's code and claims nothing about the signal.
 * A sensor that exists but reports nothing is the struck-out one, because
 * that is information: the tablet has lost track of its own connection.
 */
export function signalIcon(level: number | null, configured: boolean): string {
  if (!configured) return 'mdi:wifi';
  if (level === null) return 'mdi:wifi-strength-off-outline';
  return ['mdi:wifi-strength-outline', 'mdi:wifi-strength-1', 'mdi:wifi-strength-2', 'mdi:wifi-strength-3', 'mdi:wifi-strength-4'][level];
}

/**
 * The text a phone camera reads as "join this network".
 *
 * The `WIFI:` scheme from the ZXing spec, which is what both Android and iOS
 * cameras understand. `\ ; , : "` in the name or password must be escaped, or
 * a password containing a semicolon silently truncates and the code joins
 * nothing.
 */
export function wifiQrPayload(ssid: string, password: string, security: WifiSecurity, hidden: boolean): string {
  const escape = (text: string) => text.replace(/([\\;,:"])/g, '\\$1');
  const parts = [`T:${security}`, `S:${escape(ssid)}`];
  if (security !== 'nopass') parts.push(`P:${escape(password)}`);
  if (hidden) parts.push('H:true');
  return `WIFI:${parts.join(';')};;`;
}
