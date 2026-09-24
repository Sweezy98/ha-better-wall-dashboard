import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { CalendarEvent } from '../../../lib/calendar';
import { useLanguage, useT } from '../../../hooks/useHa';
import { formatMonth, formatTime, formatWeekday } from '../../../lib/format';

const StyledDay = styled.div`
  display: grid;
  grid-template-columns: ${u(3)} minmax(0, 1fr);
  column-gap: ${u(0.9)};
  padding: ${u(0.3)} 0;
`;

const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.05;

  .weekday {
    font-size: ${u(0.95)};
  }

  .day {
    font-size: ${u(1.8)};
    font-weight: 600;
  }

  .month {
    font-size: ${u(0.75)};
  }
`;

const StyledEvents = styled.div`
  border-left: ${u(0.14)} solid ${({ theme }) => theme.colors.calendar};
  padding: ${u(0.15)} 0 ${u(0.15)} ${u(0.8)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${u(0.35)};
  min-width: 0;
`;

const StyledEvent = styled.div`
  min-width: 0;

  .summary {
    font-size: ${u(1.02)};
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .when {
    font-size: ${u(0.88)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledEmpty = styled.p`
  font-size: ${u(1.02)};
  color: ${({ theme }) => theme.text.secondary};
`;

interface DayProps {
  day: Date;
  events: CalendarEvent[];
}

/** One day of the agenda: the date on the left, its events beside a rule. */
const AgendaDay: React.FC<DayProps> = ({ day, events }) => {
  const language = useLanguage();
  const t = useT();
  const shown = events.slice(0, 3);
  return (
    <StyledDay>
      <StyledDate>
        <span className='weekday'>{formatWeekday(day, language)}</span>
        <span className='day'>{day.getDate()}</span>
        <span className='month'>{formatMonth(day, language)}</span>
      </StyledDate>
      <StyledEvents>
        {shown.length === 0 && <StyledEmpty>✓ {t('no_events')}</StyledEmpty>}
        {shown.map(event => (
          <StyledEvent key={`${event.calendar}-${event.start.getTime()}-${event.summary}`}>
            <div className='summary'>{event.summary}</div>
            <div className='when'>
              {event.allDay ? t('all_day') : `${formatTime(event.start, language)} – ${formatTime(event.end, language)}`}
            </div>
          </StyledEvent>
        ))}
        {events.length > shown.length && <StyledEmpty>+{events.length - shown.length}</StyledEmpty>}
      </StyledEvents>
    </StyledDay>
  );
};

export default memo(AgendaDay);
