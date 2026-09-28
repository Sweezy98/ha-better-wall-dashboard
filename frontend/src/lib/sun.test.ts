import { describe, expect, it } from 'vitest';
import { skyPoint, sunDay, sunPosition, wedgePath } from './sun';

describe('sun', () => {
  it('agrees with Adaptive Cover Pro on where the sun stood', () => {
    // ACP reported azimuth 263.2°, elevation 3.5° for this place and time.
    const position = sunPosition(Date.parse('2026-09-28T16:20:50Z'), 47.07, 15.44);
    expect(position.azimuth).toBeCloseTo(263.2, 0);
    expect(Math.abs(position.elevation - 3.5)).toBeLessThan(0.7);
  });

  it('is highest to the south around noon and below the horizon at night', () => {
    const day = sunDay(Date.parse('2026-06-21T00:00:00+02:00'), 47.07, 15.44);
    const highest = day.reduce((best, step) => (step.elevation > best.elevation ? step : best));
    expect(highest.azimuth).toBeGreaterThan(170);
    expect(highest.azimuth).toBeLessThan(190);
    expect(highest.elevation).toBeGreaterThan(64);
    expect(day[0].elevation).toBeLessThan(0);
  });

  it('maps the sky north up with the horizon on the rim', () => {
    const north = skyPoint(0, 0, 100);
    expect(north.x).toBeCloseTo(0);
    expect(north.y).toBeCloseTo(-100);
    const east = skyPoint(90, 45, 100);
    expect(Math.round(east.x)).toBe(50);
    expect(east.y).toBeCloseTo(0);
    const zenith = skyPoint(123, 90, 100);
    expect(Math.hypot(zenith.x, zenith.y)).toBeCloseTo(0);
    expect(wedgePath(90, 270, 10)).toBe('M0,0 L10.00,-0.00 A10,10 0 0 1 -10.00,0.00 Z');
  });
});
