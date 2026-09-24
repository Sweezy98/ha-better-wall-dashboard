/**
 * The one cell size every section can hold.
 *
 * Width and height are found separately: the narrowest column any section
 * can give and the shortest row any section can give. Every 1x1 tile on the
 * dashboard is then exactly that size and every bigger tile a whole multiple,
 * so everything lines up across sections.
 *
 * Strictly square cells left bands of empty space on screens that are short
 * for their width -- the rows stopped where the columns ran out. So the cell
 * may take the shape the space has, but only so far: neither side more than
 * half as long again as the other (3:2), which is still a tile on a 4:3 tablet
 * and never a strip.
 *
 * Floored to whole pixels: a fractional track is laid out at the pixel below
 * while its contents keep the fraction (CLAUDE.md, section 8).
 */
export const MAX_CELL_RATIO = 3 / 2;

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
