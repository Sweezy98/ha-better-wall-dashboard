import { memo } from 'react';
import type { Tile as TileConfig } from '../../config/types';
import { LIBRARY_BY_TYPE } from './registry';

/**
 * One cell of a section or popup: the frame, and the component inside it.
 *
 * A type this build does not know -- stored by a newer version -- is not
 * drawn at all, rather than failing the section it sits in.
 */
const Tile: React.FC<{ tile: TileConfig }> = ({ tile }) => {
  const Component = LIBRARY_BY_TYPE[tile.type]?.component;
  if (!Component) return null;
  return (
    <div style={{ gridColumn: `span ${tile.w}`, gridRow: `span ${tile.h}`, minWidth: 0, minHeight: 0 }}>
      <Component tile={tile} />
    </div>
  );
};

export default memo(Tile);
