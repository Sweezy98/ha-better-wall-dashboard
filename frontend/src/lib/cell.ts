/**
 * The one cell size every square section can hold.
 *
 * For each section: the width its columns share and the height its rows
 * share, whichever is smaller -- that is the largest square that fits it.
 * The smallest of those over all sections is the size that fits all of them,
 * so a 1x1 tile is the same size everywhere and a 2x2 is exactly four of
 * them. Floored to a whole pixel: a fractional track is laid out at the pixel
 * below while its contents keep the fraction (CLAUDE.md, section 8).
 */
export interface GridBox {
  width: number;
  height: number;
  columns: number;
  rows: number;
  gap: number;
}

export function uniformCell(boxes: GridBox[]): number | null {
  let cell = Infinity;
  for (const { width, height, columns, rows, gap } of boxes) {
    if (width <= 0 || height <= 0 || columns < 1 || rows < 1) continue;
    cell = Math.min(cell, (width - (columns - 1) * gap) / columns, (height - (rows - 1) * gap) / rows);
  }
  return Number.isFinite(cell) && cell > 0 ? Math.floor(cell) : null;
}
