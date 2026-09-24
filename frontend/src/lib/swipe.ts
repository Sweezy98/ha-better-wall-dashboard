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

/**
 * Whether a sideways drag of a card throws it away: -1 to the left, 1 to the
 * right, 0 to let it spring back. A third of its width, or a flick.
 */
export function swipeDismiss(dx: number, width: number, velocity = 0): -1 | 0 | 1 {
  const far = Math.abs(dx) > width / 3 || (Math.abs(velocity) > 0.6 && Math.abs(dx) > 24);
  if (!far || dx === 0) return 0;
  return dx < 0 ? -1 : 1;
}
