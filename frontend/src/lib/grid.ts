import type { Tile } from '../config/types';

/** How many cells the tiles leave free, in a grid of columns x rows. */
export function freeCells(tiles: Tile[], columns: number, rows: number): number {
  const used = tiles.reduce((sum, tile) => sum + Math.min(tile.w, columns) * Math.min(tile.h, rows), 0);
  return Math.max(0, columns * rows - used);
}
