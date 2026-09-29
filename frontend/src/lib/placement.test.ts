import { describe, expect, it } from 'vitest';
import { placeTiles } from './placement';

describe('placement', () => {
  it('places row by row, as the grid would', () => {
    expect(
      placeTiles(
        [
          { w: 2, h: 1 },
          { w: 1, h: 1 },
          { w: 1, h: 1 },
        ],
        3,
        2
      )
    ).toEqual([
      { column: 0, row: 0, w: 2, h: 1 },
      { column: 2, row: 0, w: 1, h: 1 },
      { column: 0, row: 1, w: 1, h: 1 },
    ]);
  });

  it('cuts a tall tile to the rows left, so it never outgrows the section', () => {
    const placed = placeTiles(
      [
        { w: 5, h: 1 },
        { w: 1, h: 1 },
        { w: 2, h: 2 },
        { w: 2, h: 2 },
      ],
      5,
      2
    );
    expect(placed.slice(1)).toEqual([
      { column: 0, row: 1, w: 1, h: 1 },
      { column: 1, row: 1, w: 2, h: 1 },
      { column: 3, row: 1, w: 2, h: 1 },
    ]);
  });

  it('flows around a tall tile, and on past the section when it is full', () => {
    const placed = placeTiles(
      [
        { w: 1, h: 2 },
        { w: 1, h: 1 },
        { w: 1, h: 1 },
        { w: 1, h: 1 },
      ],
      2,
      2
    );
    expect(placed.map(p => [p.column, p.row])).toEqual([
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 2],
    ]);
    expect(placed[3].h).toBe(1);
  });

  it('keeps a tile no wider than the section', () => {
    expect(placeTiles([{ w: 9, h: 1 }], 3, 1)[0]).toEqual({ column: 0, row: 0, w: 3, h: 1 });
  });
});
