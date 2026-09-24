import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { SidebarConfig } from '../../../config/types';
import AgendaDay from './Agenda';
import Popup from '../../base/popup/Popup';
import { useGroupedEvents } from '../../../hooks/useCalendarEvents';
import { useT } from '../../../hooks/useHa';

const StyledAgenda = styled.button`
  /* Whole days only. How many fit depends on the tablet, and a day cut
     through the middle reads as a rendering fault. In a wrapping column a day
     that does not fit moves to a second column, which lies outside the box
     and is clipped away -- no measuring, no re-render on resize. */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: ${u(0.6)};

  > * {
    width: 100%;
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
      <StyledAgenda type='button' onClick={() => setOpen(true)} aria-label={t('calendar')}>
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
