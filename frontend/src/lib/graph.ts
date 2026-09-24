/**
 * The geometry of a mini graph, drawn the way mini-graph-card draws one.
 *
 * Ported rather than approximated, because the point of the sidebar graphs is
 * that they look exactly like the cards they replace: the same bucketing of
 * history into points, the same vertical margins, and the same smoothing --
 * a quadratic curve through the midpoint of every pair of points, which is
 * what gives mini-graph-card its soft, slightly lagging line.
 *
 * https://github.com/kalkih/mini-graph-card/blob/master/src/graph.js
 *
 * Pure: no DOM, no React. Coordinates are in a fixed 500-wide viewBox, as
 * mini-graph-card's are, and the SVG scales that to whatever it is given.
 */

export interface Sample {
  /** Milliseconds since the epoch. */
  t: number;
  v: number;
}

export interface GraphOptions {
  hours: number;
  pointsPerHour: number;
  lineWidth: number;
  /** A filled graph has no horizontal margin: the fill runs edge to edge. */
  fill: boolean;
  width?: number;
  height?: number;
  smoothing?: boolean;
  now?: number;
}

export interface GraphPoint {
  x: number;
  y: number;
  v: number;
}

export interface GraphGeometry {
  width: number;
  height: number;
  line: string;
  fill: string;
  points: GraphPoint[];
  min: number;
  max: number;
}

const HOUR = 3_600_000;
export const GRAPH_WIDTH = 500;
export const GRAPH_HEIGHT = 100;

/** Group samples into the buckets mini-graph-card averages into points. */
export function bucket(samples: Sample[], hours: number, pointsPerHour: number, now: number): (Sample[] | undefined)[] {
  const groups: (Sample[] | undefined)[] = [];
  for (const sample of samples) {
    const age = now - sample.t;
    const interval = (age / HOUR) * pointsPerHour - hours * pointsPerHour;
    if (interval < 0) {
      const key = Math.floor(Math.abs(interval));
      (groups[key] ??= []).push(sample);
    } else {
      // Older than the window: it is the value the window starts with, and
      // only the latest such sample matters.
      groups[0] = [sample];
    }
  }
  groups.length = Math.ceil(hours * pointsPerHour);
  return groups;
}

const average = (items: Sample[]) => items.reduce((sum, item) => sum + item.v, 0) / items.length;

export function buildGraph(samples: Sample[], options: GraphOptions): GraphGeometry | null {
  const width = options.width ?? GRAPH_WIDTH;
  const height = options.height ?? GRAPH_HEIGHT;
  const marginX = options.fill ? 0 : options.lineWidth;
  const marginY = options.lineWidth;
  const innerWidth = width - marginX * 2;
  const innerHeight = height - marginY * 4;
  const smoothing = options.smoothing ?? true;
  const now = options.now ?? Date.now();

  const finite = samples.filter(sample => Number.isFinite(sample.v));
  if (!finite.length) return null;
  const groups = bucket(finite, options.hours, options.pointsPerHour, now);

  let xRatio = innerWidth / (options.hours * options.pointsPerHour - 1);
  xRatio = Number.isFinite(xRatio) ? xRatio : innerWidth;

  // Empty buckets repeat the last value seen, so a sensor that reports only
  // on change draws a flat line rather than a gap.
  let last = groups.find(Boolean) as Sample[];
  const raw: [number, number][] = [];
  for (let i = 0; i < groups.length; i += 1) {
    const x = xRatio * i + marginX;
    const group = groups[i];
    if (group) {
      last = group;
      raw.push([x, average(group)]);
    } else {
      raw.push([x, last[last.length - 1].v]);
    }
  }
  if (raw.length === 1) raw.push([innerWidth + marginX, raw[0][1]]);

  const values = raw.map(([, v]) => v);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const yRatio = (max - min) / innerHeight || 1;
  const coords: GraphPoint[] = raw.map(([x, v]) => ({ x, y: innerHeight - (v - min) / yRatio + marginY * 2, v }));

  const mid = (a: GraphPoint, b: GraphPoint) => ({ x: (a.x - b.x) / 2 + b.x, y: (a.y - b.y) / 2 + b.y });
  const fmt = (n: number) => Math.round(n * 100) / 100;

  let path = `M${fmt(coords[0].x)},${fmt(coords[0].y)}`;
  let previous = coords[0];
  for (const point of coords) {
    const z = smoothing ? mid(previous, point) : point;
    path += ` ${fmt(z.x)},${fmt(z.y)} Q ${fmt(point.x)},${fmt(point.y)}`;
    previous = point;
  }
  path += ` ${fmt(previous.x)},${fmt(previous.y)}`;

  const fill = `${path} L ${fmt(innerWidth - marginX * 2)}, ${height} L ${fmt(coords[0].x)}, ${height} z`;

  // With smoothing the markers sit on the curve, at the midpoints it passes
  // through, carrying the average of the two values either side.
  const points = smoothing ? coords.slice(1).map((point, i) => ({ ...mid(coords[i], point), v: (coords[i].v + point.v) / 2 })) : coords;

  return { width, height, line: path, fill, points, min, max };
}

/** The lowest and highest reading in a window, and when each happened. */
export function extrema(samples: Sample[]): { min: Sample; max: Sample } | null {
  const finite = samples.filter(sample => Number.isFinite(sample.v));
  if (!finite.length) return null;
  let min = finite[0];
  let max = finite[0];
  for (const sample of finite) {
    if (sample.v < min.v) min = sample;
    if (sample.v > max.v) max = sample;
  }
  return { min, max };
}

/**
 * A smooth line through points, the way the graphs above draw one: a
 * quadratic curve through the midpoint of every pair, so a forecast curve
 * looks like the sidebar's history curves.
 */
export function smoothPath(points: { x: number; y: number }[]): string {
  if (!points.length) return '';
  const fmt = (n: number) => Math.round(n * 100) / 100;
  let path = `M${fmt(points[0].x)},${fmt(points[0].y)}`;
  for (let i = 1; i < points.length; i += 1) {
    const previous = points[i - 1];
    const point = points[i];
    path += ` Q ${fmt(previous.x)},${fmt(previous.y)} ${fmt((previous.x + point.x) / 2)},${fmt((previous.y + point.y) / 2)}`;
  }
  const last = points[points.length - 1];
  return `${path} L ${fmt(last.x)},${fmt(last.y)}`;
}
