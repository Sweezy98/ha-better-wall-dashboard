import { describe, expect, it } from 'vitest';
import { signalIcon, signalLevel, wifiQrPayload } from './wifi';

describe('signalLevel', () => {
  it('follows the thresholds Android draws its own status bar with', () => {
    expect(signalLevel(-50)).toBe(4);
    expect(signalLevel(-60)).toBe(3);
    expect(signalLevel(-70)).toBe(2);
    expect(signalLevel(-80)).toBe(1);
    expect(signalLevel(-95)).toBe(0);
    expect(signalLevel(null)).toBeNull();
  });
});

describe('signalIcon', () => {
  it('claims nothing about the signal when no sensor is configured', () => {
    expect(signalIcon(null, false)).toBe('mdi:wifi');
  });

  it('strikes the icon out when the sensor reports nothing', () => {
    expect(signalIcon(null, true)).toBe('mdi:wifi-strength-off-outline');
    expect(signalIcon(4, true)).toBe('mdi:wifi-strength-4');
  });
});

describe('wifiQrPayload', () => {
  it('escapes the characters the WIFI scheme reserves', () => {
    expect(wifiQrPayload('Guest;Net', 'pa:ss"w,d\\', 'WPA', false)).toBe(String.raw`WIFI:T:WPA;S:Guest\;Net;P:pa\:ss\"w\,d\\;;`);
  });

  it('leaves the password out of an open network and marks hidden ones', () => {
    expect(wifiQrPayload('Open', 'ignored', 'nopass', true)).toBe('WIFI:T:nopass;S:Open;H:true;;');
  });
});
