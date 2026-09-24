import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import type { Tile as TileConfig } from '../../config/types';
import Tile from './Tile';

/**
 * The size container. Its own box is what the grid inside it measures
 * against, through container query units.
 */
const StyledBody = styled.div`
  container-type: size;
  min-width: 0;
  min-height: 0;
  width: 100%;
  height: 100%;
`;

/**
 * Square cells, sized entirely in CSS.
 *
 * A cell is the smaller of "the width shared by the columns" and "the height
 * shared by the rows", so every cell is square and a 2x2 tile is exactly four
 * 1x1 tiles and the gaps between them -- which is what lets bigger tiles line
 * up with small ones. `cqw`/`cqh` resolve against the body above, so this is
 * correct from the first frame and after every resize or rotation, with no
 * measuring and no re-render.
 */
const StyledGrid = styled.div<{ $columns: number; $rows: number; $square: boolean }>`
  --gap: ${u(0.55)};
  display: grid;
  gap: var(--gap);
  width: 100%;
  height: 100%;
  ${({ $columns, $rows, $square }) => {
    if (!$square) {
      return `
        grid-template-columns: repeat(${$columns}, minmax(0, 1fr));
        grid-template-rows: repeat(${$rows}, minmax(0, 1fr));
      `;
    }
    // --cell-w and --cell-h are set by the page swiper to the one size that
    // fits every section of every page (lib/cell), so all tiles on the
    // dashboard share it. Before the first measurement a section fits a
    // square to itself.
    const own = `min((100cqw - (${$columns - 1}) * var(--gap)) / ${$columns}, (100cqh - (${$rows - 1}) * var(--gap)) / ${$rows})`;
    return `
      grid-template-columns: repeat(${$columns}, var(--cell-w, ${own}));
      grid-template-rows: repeat(${$rows}, var(--cell-h, ${own}));
      justify-content: start;
      align-content: start;
    `;
  }}
`;

interface TileGridProps {
  tiles: TileConfig[];
  columns: number;
  rows: number;
  square: boolean;
}

/**
 * A section's tiles on its grid. Cells nothing occupies stay empty -- no
 * glass placeholder -- so the dashboard shows only what it controls.
 */
const TileGrid: React.FC<TileGridProps> = ({ tiles, columns, rows, square }) => {
  return (
    <StyledBody data-cell-grid={square ? '' : undefined} data-columns={columns} data-rows={rows}>
      <StyledGrid $columns={columns} $rows={rows} $square={square}>
        {tiles.map(tile => (
          <Tile key={tile.id} tile={tile} />
        ))}
      </StyledGrid>
    </StyledBody>
  );
};

export default memo(TileGrid);
