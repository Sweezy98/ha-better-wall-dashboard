import { describe, expect, it } from 'vitest';
import { SYNODIC_MONTH, moonAge, moonIllumination, moonPath, moonWaxing, nextFullMoon } from './moon';

// Known moments: a full moon on 17 September 2024, 02:34 UTC; a new moon on 2 October 2024, 18:49 UTC.
const FULL = Date.UTC(2024, 8, 18, 2, 34);
const NEW = Date.UTC(2024, 9, 2, 18, 49);

describe('moon', () => {
  it('knows new from full', () => {
    expect(moonIllumination(FULL)).toBeGreaterThan(0.99);
    expect(moonIllumination(NEW)).toBeLessThan(0.01);
    const age = moonAge(NEW);
    expect(Math.min(age, SYNODIC_MONTH - age)).toBeLessThan(0.6);
  });

  it('waxes after new and wanes after full', () => {
    expect(moonWaxing(NEW + 3 * 86_400_000)).toBe(true);
    expect(moonWaxing(FULL + 3 * 86_400_000)).toBe(false);
  });

  it('finds the next full moon', () => {
    const next = nextFullMoon(NEW);
    expect(Math.abs(next - Date.UTC(2024, 9, 17, 11, 26)) / 86_400_000).toBeLessThan(0.8);
  });

  it('draws the lit part on the side the sun is', () => {
    // A waxing crescent: the right rim, the terminator bulging into the lit half.
    expect(moonPath(0.25, true, 10)).toBe('M0,-10 A10,10 0 0 1 0,10 A5.00,10 0 0 0 0,-10 Z');
    // A waxing gibbous moon: the terminator bulging into the dark half.
    expect(moonPath(0.75, true, 10)).toBe('M0,-10 A10,10 0 0 1 0,10 A5.00,10 0 0 1 0,-10 Z');
    // Waning, or seen from the south, the left.
    expect(moonPath(0.25, false, 10)).toBe('M0,-10 A10,10 0 0 0 0,10 A5.00,10 0 0 1 0,-10 Z');
    expect(moonPath(0.25, true, 10, true)).toBe(moonPath(0.25, false, 10));
    // Full: the terminator swings out to the far rim.
    expect(moonPath(1, true, 10)).toContain('A10.00,10 0 0 1 0,-10');
  });
});
