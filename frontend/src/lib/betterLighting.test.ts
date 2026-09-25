import { describe, expect, it } from 'vitest';
import {
  brightnessPercent,
  formatCountdown,
  isRoomLight,
  kelvinToRgb,
  neighbourScene,
  roomBadges,
  roomColor,
  secondsUntilOff,
} from './betterLighting';

describe('better lighting room', () => {
  it('knows a room light by its room id', () => {
    expect(isRoomLight('light.wohnzimmer', { bl_room_id: '01J' })).toBe(true);
    expect(isRoomLight('light.lamp', {})).toBe(false);
    expect(isRoomLight('select.wohnzimmer', { bl_room_id: '01J' })).toBe(false);
  });

  it('reads brightness as a percentage, and none while off', () => {
    expect(brightnessPercent(true, 255)).toBe(100);
    expect(brightnessPercent(true, 128)).toBe(50);
    expect(brightnessPercent(false, 255)).toBe(0);
    expect(brightnessPercent(true, null)).toBe(0);
  });

  it('tints by colour first, then by white', () => {
    expect(roomColor({ rgb_color: [255, 0, 0], color_temp_kelvin: 2700 })).toBe('rgb(255, 0, 0)');
    expect(roomColor({ color_temp_kelvin: 6600 })).toBe(`rgb(${kelvinToRgb(6600).join(', ')})`);
    expect(roomColor({})).toBeUndefined();
    const [red, , blue] = kelvinToRgb(2700);
    expect(red).toBe(255);
    expect(blue).toBeLessThan(200);
  });

  it('counts down to a switch-off in the future only', () => {
    const now = Date.parse('2026-09-25T12:00:00Z');
    expect(secondsUntilOff('2026-09-25T12:04:05Z', now)).toBe(245);
    expect(secondsUntilOff('2026-09-25T11:59:00Z', now)).toBeNull();
    expect(secondsUntilOff(null, now)).toBeNull();
    expect(formatCountdown(245)).toBe('4:05');
    expect(formatCountdown(3900)).toBe('1h 05m');
  });

  it('steps through scenes round the end', () => {
    const options = ['Adaptive', 'Kino', 'Lesen'];
    expect(neighbourScene(options, 'Lesen', 1)).toBe('Adaptive');
    expect(neighbourScene(options, 'Adaptive', -1)).toBe('Lesen');
    expect(neighbourScene(options, 'Hidden', 1)).toBe('Adaptive');
    expect(neighbourScene(options, 'Hidden', -1)).toBe('Lesen');
    expect(neighbourScene([], 'Kino', 1)).toBeUndefined();
  });

  it('shows presence only for a room with a sensor, and how it came on only without a countdown', () => {
    expect(roomBadges({ bl_presence: null, bl_held_by_hand: false }, true, false)).toEqual(['automatic']);
    expect(roomBadges({ bl_presence: false, bl_night: true, bl_held_by_hand: true }, true, false)).toEqual(['nobody', 'night', 'by_hand']);
    expect(roomBadges({ bl_presence: true, bl_held_by_hand: true }, true, true)).toEqual(['presence']);
    expect(roomBadges({ bl_held_by_hand: false }, false, false)).toEqual([]);
    expect(roomBadges({}, true, false)).toEqual([]);
  });
});
