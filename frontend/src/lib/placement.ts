/**
 * Where each tile of a section lands, worked out as CSS grid's own auto
 * placement would -- row by row, each tile in the first place at or after
 * the one before it that it fits -- so that a tile can be cut to the rows
 * the section has left.
 *
 * Left to CSS, a two-high tile in the last row spilled into an implicit row
 * of no height, and came out one gap taller than the tiles beside it.
 */
export interface Placement {
  column: number;
  row: number;
  w: number;
  h: number;
}

export function placeTiles(tiles: { w: number; h: number }[], columns: number, rows: number): Placement[] {
  const taken = new Set<string>();
  const free = (column: number, row: number, w: number, h: number) => {
    for (let r = row; r < row + h; r++) for (let c = column; c < column + w; c++) if (taken.has(`${c},${r}`)) return false;
    return true;
  };
  let cursor = 0;
  return tiles.map(tile => {
    const w = Math.max(1, Math.min(columns, tile.w));
    let index = cursor;
    while (!free(index % columns, Math.floor(index / columns), w, 1) || index % columns > columns - w) index++;
    const column = index % columns;
    const row = Math.floor(index / columns);
    // At least one row, and no more than the section has left from here.
    let h = Math.max(1, Math.min(tile.h, rows - row));
    while (h > 1 && !free(column, row, w, h)) h--;
    for (let r = row; r < row + h; r++) for (let c = column; c < column + w; c++) taken.add(`${c},${r}`);
    cursor = index;
    return { column, row, w, h };
  });
}
