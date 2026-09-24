import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import Bubble from '../../base/bubble/Bubble';
import { useLanguage, useT } from '../../../hooks/useHa';
import { formatTime } from '../../../lib/format';
import { calendarColor, dayHeading, eventProgress, eventSpan, type CalendarEvent } from '../../../lib/calendar';

const StyledDay = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: ${u(0.7)};
  }

  h4 {
    display: flex;
    align-items: baseline;
    gap: ${u(0.5)};
    margin: 0 0 ${u(0.2)} ${u(0.3)};
    font-size: ${u(0.95)};
    font-weight: 600;
  }

  h4 span {
    font-weight: 400;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

/** A bubble without its pill, with the running event's progress under its text. */
const StyledEvent = styled.div`
  position: relative;
  border-radius: ${u(1.7)};
  overflow: hidden;

  .progress {
    position: absolute;
    left: ${u(3.3)};
    right: ${u(1)};
    bottom: ${u(0.2)};
    height: ${u(0.2)};
    border-radius: ${u(0.2)};
    background: rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .progress span {
    display: block;
    height: 100%;
  }
`;

interface DayProps {
  day: Date;
  events: CalendarEvent[];
  /** Every configured calendar, in order: an event's colour is its calendar's place. */
  calendars: string[];
  now: number;
}

/** One day of the sidebar's agenda: its name, then a bubble per event still to come. */
const AgendaDay: React.FC<DayProps> = ({ day, events, calendars, now }) => {
  const language = useLanguage();
  const t = useT();
  const heading = dayHeading(day, language, { today: t('today'), tomorrow: t('tomorrow') }, 'short', new Date(now));
  return (
    <StyledDay>
      <h4>
        {heading.label}
        {heading.date && <span>{heading.date}</span>}
      </h4>
      {events.length === 0 && <Bubble name={t('no_events')} icon='mdi:calendar-check-outline' active={false} background='transparent' />}
      {events.map(event => {
        const color = calendarColor(calendars.indexOf(event.calendar));
        const progress = event.allDay ? null : eventProgress(event, now);
        const span = eventSpan(event, day);
        const when = span
          ? t('event_day', span)
          : event.allDay
            ? t('all_day')
            : `${formatTime(event.start, language)} – ${formatTime(event.end, language)}`;
        return (
          <StyledEvent key={`${event.calendar}-${event.start.getTime()}-${event.summary}`}>
            <Bubble
              name={event.summary}
              state={progress !== null ? `${t('happening_now')} · ${when}` : when}
              icon={event.allDay || span ? 'mdi:calendar-star' : 'mdi:calendar-clock'}
              iconColor={color}
              background='transparent'
            />
            {progress !== null && (
              <span className='progress'>
                <span style={{ width: `${progress * 100}%`, background: color }} />
              </span>
            )}
          </StyledEvent>
        );
      })}
    </StyledDay>
  );
};

export default memo(AgendaDay);
