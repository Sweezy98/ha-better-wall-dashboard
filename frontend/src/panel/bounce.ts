/**
 * The little give a tile has when tapped: pressed in to 95 %, then back
 * with a soft spring. After the reference dashboard's `card_bounce`, but
 * one press rather than its two: each step eased on its own, where one
 * curve over the whole made the first dip a jolt.
 */
const KEYFRAMES: Keyframe[] = [
  { transform: 'scale(1)', offset: 0, easing: 'cubic-bezier(0.33, 0, 0.2, 1)' },
  { transform: 'scale(0.95)', offset: 0.3, easing: 'cubic-bezier(0.3, 1.35, 0.5, 1)' },
  { transform: 'scale(1)', offset: 1 },
];

/**
 * On a click, the thing pressed gives: inside a tile the whole tile, in the
 * sidebar and the button bar (`data-bounce`) the button itself. Not on a slider -- dragging one
 * is not a tap -- nor inside a popup opened from there. Listened for once on
 * the dashboard, as the glow is, rather than wired into every button.
 */
export function bouncePress(event: React.MouseEvent): void {
  const target = event.target as Element;
  const button = target.closest('button');
  if (!button || target.closest('[role="slider"]')) return;
  const tile = target.closest('[data-tile]');
  const region = tile ?? target.closest('[data-bounce]');
  if (!region) return;
  // A popup opened from here sits inside it; a tap there is not on it.
  const dialog = target.closest('dialog');
  if (dialog && region.contains(dialog)) return;
  (tile ?? button).animate(KEYFRAMES, { duration: 560 });
}
