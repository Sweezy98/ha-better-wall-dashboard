import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { SidebarConfig } from '../../../config/types';
import AgendaDay from './Agenda';
import Popup from '../../base/popup/Popup';
import { useGroupedEvents } from '../../../hooks/useCalendarEvents';
import { useT } from '../../../hooks/useHa';

const StyledAgenda = styled.div`
  /* Scrolls when the days do not fit: how many do depends on the tablet. The
     bottom edge fades so a cut-off day reads as "more below", and the extra
     padding lets the last one scroll clear of the fade. A tap opens the
     calendar; a scroll gesture does not, because it never becomes a click. */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;
  padding: ${u(0.6)} 0 ${u(1.4)};
  cursor: pointer;
  mask-image: linear-gradient(to bottom, black calc(100% - ${u(1.4)}), transparent);
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - ${u(1.4)}), transparent);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CalendarAgenda: React.FC<{ config: SidebarConfig['calendar'] }> = ({ config }) => {
  const t = useT();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const days = useGroupedEvents(config.entities, config.days);
  if (!config.entities.length) return null;
  return (
    <>
      <StyledAgenda
        role='button'
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={event => (event.key === 'Enter' || event.key === ' ') && setOpen(true)}
        aria-label={t('calendar')}
      >
        {days?.map(({ day, events }) => (
          <AgendaDay key={day.getTime()} day={day} events={events} />
        ))}
      </StyledAgenda>
      <Popup open={open} onClose={close} title={t('calendar')} icon='mdi:calendar' width={54}>
        <CalendarPopupContent entities={config.entities} />
      </Popup>
    </>
  );
};

/** Two weeks, with locations, and only the days that have something on. */
const CalendarPopupContent: React.FC<{ entities: string[] }> = ({ entities }) => {
  const t = useT();
  const days = useGroupedEvents(entities, 14);
  const busy = days?.filter(day => day.events.length) ?? [];
  if (days && !busy.length) return <p>✓ {t('no_events')}</p>;
  return (
    <>
      {busy.map(({ day, events }) => (
        <AgendaDay key={day.getTime()} day={day} events={events} detailed />
      ))}
    </>
  );
};

export default memo(CalendarAgenda);
