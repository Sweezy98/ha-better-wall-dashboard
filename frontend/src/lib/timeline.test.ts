import { describe, expect, it } from 'vitest';
import { fractionOf, spans, stepPath, valueAt } from './timeline';

const w = { start: 0, end: 100, width: 100, height: 100 };

describe('timeline', () => {
  it('draws a step line from what held at the start to the end', () => {
    expect(
      stepPath(
        [
          { t: -10, v: 50 },
          { t: 40, v: 100 },
        ],
        w
      )
    ).toBe('M0.0,50.0 H40.0 V0.0 H100.0');
    expect(stepPath([{ t: 20, v: 0 }], w)).toBe('M20.0,100.0 H100.0');
    expect(stepPath([{ t: 200, v: 0 }], w)).toBe('');
  });

  it('merges repeated states into one band, cut to the window', () => {
    expect(
      spans(
        [
          { t: -50, key: 'solar' },
          { t: 30, key: 'solar' },
          { t: 60, key: 'manual' },
        ],
        0,
        100
      )
    ).toEqual([
      { from: 0, to: 60, key: 'solar' },
      { from: 60, to: 100, key: 'manual' },
    ]);
  });

  it('places a time across the window', () => {
    expect(fractionOf(25, 0, 100)).toBe(0.25);
    expect(fractionOf(-5, 0, 100)).toBe(0);
  });

  it('reads a step line at a moment', () => {
    const points = [
      { t: 10, v: 0 },
      { t: 50, v: 100 },
    ];
    expect(valueAt(points, 5)).toBeUndefined();
    expect(valueAt(points, 10)).toBe(0);
    expect(valueAt(points, 49)).toBe(0);
    expect(valueAt(points, 80)).toBe(100);
  });
});
