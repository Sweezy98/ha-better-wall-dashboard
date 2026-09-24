import { memo, useCallback, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { LIMITS, type SidebarConfig } from '../../../config/types';
import AgendaDay from './Agenda';
import CalendarPopup from '../../popups/CalendarPopup';
import { useGroupedEvents } from '../../../hooks/useCalendarEvents';
import { useT } from '../../../hooks/useHa';
import { useTick } from '../../../hooks/useNow';
import { useDragScroll } from '../../../hooks/useDragScroll';

const StyledAgenda = styled.div`
  /* Scrolls when the days do not fit: how many do depends on the tablet. The
     bottom edge fades so a cut-off day reads as "more below", and the extra
     padding lets the last one scroll clear of the fade. A tap opens the
     calendar; a scroll gesture does not, because it never becomes a click. */
  flex: 1 1 0;
  min-height: 0;
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;
  padding: ${u(0.3)} 0 ${u(1.4)};
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
  const box = useRef<HTMLDivElement>(null);
  const now = useTick(60_000);
  // Two weeks ahead, however many days are shown: the next thing on may be
  // a week away, and a sidebar reading "nothing on" until then is wrong.
  const grouped = useGroupedEvents(config.entities, LIMITS.calendarDays);
  const enabled = config.entities.length > 0;
  useDragScroll(box, enabled);

  // What is still to come: today always, even with nothing left on it, then
  // the next `days` days that have something on.
  const days = useMemo(() => {
    const upcoming = grouped?.map(({ day, events }) => ({ day, events: events.filter(event => event.end.getTime() > now) }));
    if (!upcoming) return upcoming;
    const [today, ...later] = upcoming;
    return [today, ...later.filter(({ events }) => events.length).slice(0, Math.max(0, config.days - (today.events.length ? 1 : 0)))];
  }, [grouped, now, config.days]);
  if (!enabled) return null;
  return (
    <>
      <StyledAgenda
        ref={box}
        role='button'
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={event => (event.key === 'Enter' || event.key === ' ') && setOpen(true)}
        aria-label={t('calendar')}
      >
        {days?.map(({ day, events }) => (
          <AgendaDay key={day.getTime()} day={day} events={events} calendars={config.entities} now={now} />
        ))}
      </StyledAgenda>
      <CalendarPopup open={open} onClose={close} entities={config.entities} />
    </>
  );
};

export default memo(CalendarAgenda);
