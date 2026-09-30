import { memo, useCallback, useMemo, useState } from 'react';
import { useHass } from '@hakit/core';
import { useTheme } from 'styled-components';
import Bubble from '../../base/bubble/Bubble';
import BatteriesPopup from '../../popups/BatteriesPopup';
import { useT } from '../../../hooks/useHa';
import { findBatteries, readBattery } from '../../../lib/batteries';
import type { BatteriesConfig } from '../../../config/types';

/**
 * The batteries in the house, as a row saying how many are running out --
 * red when any are, or, set so, there only while any are.
 */
const Batteries: React.FC<{ config: BatteriesConfig | undefined }> = ({ config }) => {
  const t = useT();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const hidden = useMemo(() => config?.hidden ?? [], [config?.hidden]);
  const threshold = config?.threshold ?? 20;
  // Counted in the selector and handed out as a number: the row redraws
  // when the count changes, not with every state in the house.
  const critical = useHass(state =>
    config?.enabled ? findBatteries(state.entities, hidden).filter(id => readBattery(id, state.entities[id], threshold).critical).length : 0
  );
  if (!config?.enabled) return null;
  // Hidden while all is well, the popup stays: one open as the last battery
  // is changed closes on its own rather than vanishing under a finger.
  const shown = !config.hide_when_ok || critical > 0;
  return (
    <>
      {shown && (
        <Bubble
          name={t('batteries')}
          state={critical ? t('batteries_critical', { count: critical }) : t('batteries_ok')}
          icon={critical ? 'mdi:battery-alert-variant-outline' : 'mdi:battery-high'}
          iconColor={critical ? theme.colors.alert : undefined}
          active={critical > 0}
          onClick={() => setOpen(true)}
        />
      )}
      <BatteriesPopup open={open} onClose={close} config={config} />
    </>
  );
};

export default memo(Batteries);
