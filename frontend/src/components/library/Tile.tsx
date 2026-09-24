import { memo } from 'react';
import type { Tile as TileConfig } from '../../config/types';
import { LIBRARY_BY_TYPE } from './registry';
import PlaceholderTile from './tiles/PlaceholderTile';
import { StyledTile } from './tiles/Tile.styled';

/**
 * One cell of a section or popup: the frame, and the component inside it.
 *
 * A type this build does not know -- stored by a newer version, or from a
 * component since removed -- draws as an empty tile rather than failing the
 * section it sits in.
 */
const Tile: React.FC<{ tile: TileConfig | null }> = ({ tile }) => {
  if (!tile) return <StyledTile aria-hidden='true' />;
  const entry = LIBRARY_BY_TYPE[tile.type];
  const Component = entry?.component ?? PlaceholderTile;
  return (
    <div style={{ gridColumn: `span ${tile.w}`, gridRow: `span ${tile.h}`, minWidth: 0, minHeight: 0 }}>
      <Component tile={tile} />
    </div>
  );
};

export default memo(Tile);
