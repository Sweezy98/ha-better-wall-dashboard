import { memo } from 'react';
import type { TileProps } from '../registry';
import CoverTileView from './cover/CoverTileView';

/** Any cover: where it stands, and up, stop and down. */
const CoverTile: React.FC<TileProps> = ({ tile }) => <CoverTileView tile={tile} />;

export default memo(CoverTile);
