/**
 * The one square cell every section can hold.
 *
 * The narrowest column any section can give and the shortest row any section
 * can give; the smaller of the two is the cell. Every 1x1 tile on the
 * dashboard is exactly that square and every bigger tile a whole multiple of
 * it, so everything lines up across sections, on every screen. Space a
 * section cannot fill with whole squares stays empty rather than stretching
 * a tile out of shape.
 *
 * Floored to whole pixels: a fractional track is laid out at the pixel below
 * while its contents keep the fraction (CLAUDE.md, section 8).
 */
/** Width over height of a cell. Square, by design; see above. */
export const MAX_CELL_RATIO = 1;

export interface GridBox {
  width: number;
  height: number;
  columns: number;
  rows: number;
  gap: number;
}

export function uniformCell(boxes: GridBox[]): { width: number; height: number } | null {
  let width = Infinity;
  let height = Infinity;
  for (const box of boxes) {
    if (box.width <= 0 || box.height <= 0 || box.columns < 1 || box.rows < 1) continue;
    width = Math.min(width, (box.width - (box.columns - 1) * box.gap) / box.columns);
    height = Math.min(height, (box.height - (box.rows - 1) * box.gap) / box.rows);
  }
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) return null;
  width = Math.min(width, height * MAX_CELL_RATIO);
  height = Math.min(height, width * MAX_CELL_RATIO);
  return { width: Math.floor(width), height: Math.floor(height) };
}
