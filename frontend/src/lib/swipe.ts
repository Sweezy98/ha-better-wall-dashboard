/**
 * Which page a mouse drag ends on.
 *
 * Past 12 % of the page width, or flicked faster than 0.5 px/ms, it moves one
 * page in the direction of the drag -- the same feel as a finger on a tablet,
 * where the browser's own scroll snapping decides. Never more than one page,
 * never past either end.
 */
export function swipeTarget(start: number, dx: number, width: number, count: number, velocity = 0): number {
  const far = Math.abs(dx) > width * 0.12 || Math.abs(velocity) > 0.5;
  const next = far && dx !== 0 ? start + (dx < 0 ? 1 : -1) : start;
  return Math.max(0, Math.min(count - 1, next));
}
