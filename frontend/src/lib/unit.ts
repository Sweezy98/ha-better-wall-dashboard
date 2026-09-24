/**
 * The size unit for a dashboard of this size, in pixels.
 *
 * Clamped so a phone stays legible and a 4K monitor does not draw a clock
 * the size of a door.
 */
export function unitFor(width: number, height: number): number {
  const portrait = height > width;
  // Gentle, not proportional. Text on a 10-inch tablet must stay as readable
  // as the fixed pixel sizes of the Lovelace dashboard this replaces, so the
  // unit only drifts with the screen: about 13.6 px at 800 px tall, 15.6 at
  // 1080 and 18 at 1440 -- the reference screenshot's own sizes.
  const byHeight = 8 + 0.007 * (portrait ? width : height);
  // Never so large that the columns stop fitting across.
  const byWidth = portrait ? width / 58 : width / 94;
  return Math.max(11, Math.min(22, byHeight, byWidth));
}
