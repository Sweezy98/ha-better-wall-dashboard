/**
 * Values and states over a stretch of time, laid out for a chart: a
 * position as a step line (a cover jumps from one place to the next and
 * stays), a state as bands.
 *
 * Pure, so it tests without a browser.
 */

export interface TimePoint {
  /** Milliseconds since the epoch. */
  t: number;
  v: number;
}

export interface TimeSpan {
  from: number;
  to: number;
  key: string;
}

export interface Window {
  start: number;
  end: number;
  width: number;
  height: number;
}

const x = (t: number, w: Window) => ((Math.min(w.end, Math.max(w.start, t)) - w.start) / (w.end - w.start)) * w.width;
/** 0 to 100 up the chart, 100 at the top. */
const y = (v: number, w: Window) => w.height - (Math.min(100, Math.max(0, v)) / 100) * w.height;

/**
 * A step line through the window: what held at its start (the last point
 * before it), each change where it happened, and the last value carried on
 * to its end. Empty without any point at or before the end.
 */
export function stepPath(points: TimePoint[], w: Window): string {
  const sorted = [...points].sort((a, b) => a.t - b.t);
  const before = sorted.filter(point => point.t <= w.start).pop();
  const inside = sorted.filter(point => point.t > w.start && point.t <= w.end);
  const first = before ?? inside[0];
  if (!first) return '';
  let path = `M${x(before ? w.start : first.t, w).toFixed(1)},${y(first.v, w).toFixed(1)}`;
  for (const point of before ? inside : inside.slice(1)) {
    path += ` H${x(point.t, w).toFixed(1)} V${y(point.v, w).toFixed(1)}`;
  }
  return `${path} H${x(w.end, w).toFixed(1)}`;
}

/** Consecutive states as bands, cut to the window; a state repeated is one band. */
export function spans(changes: { t: number; key: string }[], start: number, end: number): TimeSpan[] {
  const sorted = [...changes].sort((a, b) => a.t - b.t);
  const result: TimeSpan[] = [];
  sorted.forEach((change, index) => {
    const from = Math.max(start, change.t);
    const to = Math.min(end, sorted[index + 1]?.t ?? end);
    if (to <= from) return;
    const last = result[result.length - 1];
    if (last && last.key === change.key && last.to === from) last.to = to;
    else result.push({ from, to, key: change.key });
  });
  return result;
}

/** Where a time falls across the window, 0 to 1. */
export function fractionOf(t: number, start: number, end: number): number {
  return Math.min(1, Math.max(0, (t - start) / (end - start)));
}
