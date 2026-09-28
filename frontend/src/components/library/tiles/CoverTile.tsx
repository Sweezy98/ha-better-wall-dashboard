import { memo, useState } from 'react';
import type { TileProps } from '../registry';
import CoverTileView from './cover/CoverTileView';
import CoverPopup from '../../popups/cover/CoverPopup';
import { domainIcon, useEntity } from '../../../hooks/useHa';

/** Any cover: where it stands, and up, stop and down -- and, on a double tap, its position to drag. */
const CoverTile: React.FC<TileProps> = ({ tile }) => {
  const entity = useEntity(tile.entity || undefined);
  const [open, setOpen] = useState(false);
  const name = tile.name || (entity?.attributes.friendly_name as string | undefined) || tile.entity;
  const icon = tile.icon || (entity?.attributes.icon as string | undefined) || domainIcon(tile.entity || 'cover.x');
  return (
    <>
      <CoverTileView tile={tile} onDetails={entity ? () => setOpen(true) : undefined} />
      {/* Beside the tile, not in it: its class rules (.buttons) would reach into the popup. */}
      {entity && <CoverPopup open={open} onClose={() => setOpen(false)} entityId={tile.entity} name={name} icon={icon} />}
    </>
  );
};

export default memo(CoverTile);
