import { memo, useState } from 'react';
import type { TileProps } from '../registry';
import CoverTileView from './cover/CoverTileView';
import AdaptiveCoverPopup from '../../popups/adaptiveCover/AdaptiveCoverPopup';
import { useAdaptiveCover } from '../../../hooks/useAdaptiveCover';
import AcpSigns from '../../popups/adaptiveCover/AcpSigns';
import AcpResume from '../../popups/adaptiveCover/AcpResume';

/**
 * A cover Adaptive Cover Pro steers: the cover tile, with signs of what is
 * steering it -- and, on a double tap, why.
 *
 * Given the cover, not the instance: the instance is found by the cover it
 * reports, so the editor offers the covers people know.
 */
const AdaptiveCoverTile: React.FC<TileProps> = ({ tile }) => {
  const entities = useAdaptiveCover(tile.entity || undefined);
  const [open, setOpen] = useState(false);
  return (
    <>
      <CoverTileView
        tile={tile}
        signs={entities && <AcpSigns entities={entities} />}
        action={entities && <AcpResume entities={entities} />}
        onDetails={entities ? () => setOpen(true) : undefined}
      />
      {entities && (
        <AdaptiveCoverPopup open={open} onClose={() => setOpen(false)} coverId={tile.entity} entities={entities} name={tile.name} />
      )}
    </>
  );
};

export default memo(AdaptiveCoverTile);
