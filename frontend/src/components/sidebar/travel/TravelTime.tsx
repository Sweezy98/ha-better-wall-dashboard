import { memo, useCallback, useState } from 'react';
import type { SidebarConfig } from '../../../config/types';
import Bubble from '../../base/bubble/Bubble';
import TravelPopup from '../../popups/TravelPopup';
import { useEntity, useLanguage, useT } from '../../../hooks/useHa';
import { durationToMinutes, formatMinutes } from '../../../lib/format';

/** Minutes to work, from the Google Travel Time sensor Home Assistant already has. */
const TravelTime: React.FC<{ config: SidebarConfig['travel'] }> = ({ config }) => {
  const t = useT();
  const language = useLanguage();
  const entity = useEntity(config.entity || undefined);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  if (!config.entity) return null;
  const minutes = durationToMinutes(entity?.state, entity?.attributes.unit_of_measurement as string | undefined);
  return (
    <>
      <Bubble
        name={config.name || t('travel_time')}
        state={minutes === null ? t('unavailable') : formatMinutes(minutes, language)}
        icon='mdi:car-clock'
        active={false}
        onClick={() => setOpen(true)}
      />
      <TravelPopup open={open} onClose={close} config={config} />
    </>
  );
};

export default memo(TravelTime);
