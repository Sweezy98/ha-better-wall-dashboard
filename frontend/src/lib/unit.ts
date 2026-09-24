/**
 * The size unit for a dashboard of this size, in pixels.
 *
 * The divisors fit the reference design: the sidebar's column holds about 80
 * units of height, and a landscape screen is about 110 units wide. Clamped so
 * a phone stays legible and a 4K monitor does not draw a clock the size of a
 * door.
 */
export function unitFor(width: number, height: number): number {
  const portrait = height > width;
  // In portrait the sidebar is a band across the top, so the height has to
  // hold it and the pages; the width becomes the constraint instead.
  const raw = portrait ? Math.min(width / 62, height / 110) : Math.min(height / 80, width / 110);
  return Math.max(9, Math.min(22, raw));
}
