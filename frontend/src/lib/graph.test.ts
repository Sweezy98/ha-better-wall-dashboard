import { describe, expect, it } from 'vitest';
import { bucket, buildGraph, extrema, type Sample } from './graph';

const HOUR = 3_600_000;
const NOW = Date.UTC(2026, 8, 24, 12);

describe('bucket', () => {
  it('puts a sample older than the window into the first bucket, as the starting value', () => {
    const groups = bucket([{ t: NOW - 30 * HOUR, v: 1 }], 24, 0.5, NOW);
    expect(groups).toHaveLength(12);
    expect(groups[0]).toEqual([{ t: NOW - 30 * HOUR, v: 1 }]);
  });

  it('puts the newest samples into the last bucket', () => {
    const groups = bucket([{ t: NOW - 60_000, v: 7 }], 24, 0.5, NOW);
    expect(groups[11]).toEqual([{ t: NOW - 60_000, v: 7 }]);
  });
});

describe('buildGraph', () => {
  const options = { hours: 24, pointsPerHour: 0.5, lineWidth: 5, fill: true, now: NOW };

  it('returns nothing to draw without a single number', () => {
    expect(buildGraph([], options)).toBeNull();
    expect(buildGraph([{ t: NOW, v: Number.NaN }], options)).toBeNull();
  });

  it('keeps the line inside the vertical margins mini-graph-card uses', () => {
    // One sample per two-hour bucket, so no bucket averages two of them.
    const samples: Sample[] = Array.from({ length: 12 }, (_, i) => ({ t: NOW - (23 - 2 * i) * HOUR, v: i % 5 }));
    const graph = buildGraph(samples, options)!;
    const ys = graph.points.map(p => p.y);
    // height 100, margin 5: the line lives between 10 and 90.
    expect(Math.min(...ys)).toBeGreaterThanOrEqual(10);
    expect(Math.max(...ys)).toBeLessThanOrEqual(90);
    expect(graph.min).toBe(0);
  });

  it('draws a flat line through the middle for a constant sensor', () => {
    const graph = buildGraph([{ t: NOW - 30 * HOUR, v: 21 }], options)!;
    expect(new Set(graph.points.map(p => p.y)).size).toBe(1);
  });

  it('uses quadratic segments and closes the fill along the bottom edge', () => {
    const graph = buildGraph(
      [
        { t: NOW - 20 * HOUR, v: 1 },
        { t: NOW - 2 * HOUR, v: 3 },
      ],
      options
    )!;
    expect(graph.line.startsWith('M0,')).toBe(true);
    expect(graph.line).toContain(' Q ');
    expect(graph.fill.endsWith(', 100 z')).toBe(true);
  });

  it('leaves a horizontal margin when the graph is not filled', () => {
    const graph = buildGraph([{ t: NOW - 30 * HOUR, v: 1 }], { ...options, fill: false })!;
    expect(graph.line.startsWith('M5,')).toBe(true);
  });
});

describe('extrema', () => {
  it('finds the lowest and highest reading with their times', () => {
    const result = extrema([
      { t: 1, v: 3 },
      { t: 2, v: -1 },
      { t: 3, v: 9 },
    ])!;
    expect(result.min).toEqual({ t: 2, v: -1 });
    expect(result.max).toEqual({ t: 3, v: 9 });
  });
});
