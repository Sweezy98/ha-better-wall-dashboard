import { describe, expect, it } from 'vitest';
import { bearing, findBlitzortung, radarPoint, radarRange } from './lightning';

describe('findBlitzortung', () => {
  it('finds the sensors by platform and translation key, whatever they are called', () => {
    const found = findBlitzortung([
      { ei: 'sensor.kitchen_temperature', pl: 'template' },
      { ei: 'sensor.home_lightning_distance', pl: 'blitzortung', tk: 'distance' },
      { ei: 'sensor.home_lightning_azimuth', pl: 'blitzortung', tk: 'azimuth' },
      { ei: 'sensor.home_lightning_counter', pl: 'blitzortung', tk: 'counter' },
      { ei: 'sensor.server_uptime', pl: 'blitzortung', tk: 'server_stats' },
    ]);
    expect(found).toEqual({
      distance: 'sensor.home_lightning_distance',
      azimuth: 'sensor.home_lightning_azimuth',
      counter: 'sensor.home_lightning_counter',
    });
  });

  it('is null without the integration', () => {
    expect(findBlitzortung([{ ei: 'sensor.x', pl: 'demo' }])).toBeNull();
  });
});

describe('radar', () => {
  it('measures bearings clockwise from north', () => {
    const home = { lat: 47, lon: 15 };
    expect(bearing(home, { lat: 48, lon: 15 })).toBeCloseTo(0, 0);
    expect(bearing(home, { lat: 47, lon: 16 })).toBeCloseTo(90, 0);
    expect(bearing(home, { lat: 46, lon: 15 })).toBeCloseTo(180, 0);
    expect(bearing(home, { lat: 47, lon: 14 })).toBeCloseTo(270, 0);
  });

  it('rounds the range up to a distance worth printing', () => {
    expect(radarRange(8)).toBe(10);
    expect(radarRange(37)).toBe(50);
    expect(radarRange(100)).toBe(100);
    expect(radarRange(7200)).toBe(8000);
  });

  it('draws north up and east right, and keeps a far strike on the edge', () => {
    const east = radarPoint({ distance: 50, bearing: 90 }, 100);
    expect(east.x).toBeCloseTo(0.5);
    expect(east.y).toBeCloseTo(0);
    expect(radarPoint({ distance: 50, bearing: 0 }, 100).y).toBeCloseTo(-0.5);
    expect(radarPoint({ distance: 300, bearing: 180 }, 100).y).toBeCloseTo(1);
  });
});
