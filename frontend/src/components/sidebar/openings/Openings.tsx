import { memo, useCallback, useState } from 'react';
import { useHass } from '@hakit/core';
import { useShallow } from 'zustand/react/shallow';
import { useTheme } from 'styled-components';
import Bubble from '../../base/bubble/Bubble';
import OpeningsPopup from '../../popups/OpeningsPopup';
import { useT } from '../../../hooks/useHa';
import { countOpen } from '../../../lib/openings';
import type { SidebarConfig } from '../../../config/types';

/**
 * How many windows and doors are open, red when any are -- or, set so, only
 * while any are, and a popup listing only those.
 */
const Openings: React.FC<{ entities: string[]; view?: SidebarConfig['openings_view'] }> = ({ entities, view }) => {
  const t = useT();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  // Just the states, compared shallowly: a window's battery level changing
  // does not redraw the count.
  const states = useHass(useShallow(state => entities.map(id => state.entities[id]?.state)));
  if (!entities.length) return null;
  const count = countOpen(entities.map((entityId, index) => ({ entityId, state: states[index] })));
  // Hidden while all is closed, the popup stays: one open as the last
  // window shuts closes on its own, rather than vanishing under a finger.
  const hidden = Boolean(view?.hide_when_closed) && count === 0;
  return (
    <>
      {!hidden && (
        <Bubble
          name={t('open_openings')}
          state={String(count)}
          icon={count ? 'mdi:window-open-variant' : 'mdi:window-closed-variant'}
          iconColor={count ? theme.colors.alert : undefined}
          active={count > 0}
          onClick={() => setOpen(true)}
        />
      )}
      <OpeningsPopup open={open} onClose={close} entities={entities} onlyOpen={Boolean(view?.only_open)} />
    </>
  );
};

export default memo(Openings);
