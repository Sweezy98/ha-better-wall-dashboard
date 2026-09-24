import { useState } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import Popup from '../base/popup/Popup';
import Icon from '../base/icon/Icon';
import { useEntity, useLanguage, useT } from '../../hooks/useHa';
import { useGroupedEvents, type CalendarEvent } from '../../hooks/useCalendarEvents';
import { useTick } from '../../hooks/useNow';
import { addDays, formatMinutes, formatRelative, formatTime, startOfDay } from '../../lib/format';
import { calendarColor, eventProgress, eventSpan, plainText } from '../../lib/calendar';

const StyledChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${u(0.5)};

  button {
    display: inline-flex;
    align-items: center;
    gap: ${u(0.5)};
    padding: ${u(0.45)} ${u(0.9)};
    border-radius: ${u(2)};
    background: ${({ theme }) => theme.bubble.background};
    font-size: ${u(1)};
  }

  button[aria-pressed='false'] {
    opacity: 0.45;
  }

  .dot {
    width: ${u(0.7)};
    height: ${u(0.7)};
    border-radius: 50%;
  }
`;

const StyledDay = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${u(0.5)};

  h3 {
    display: flex;
    align-items: baseline;
    gap: ${u(0.6)};
    margin: ${u(0.4)} 0 0 ${u(0.2)};
    font-size: ${u(1.2)};
    font-weight: 600;
  }

  h3 span {
    font-size: ${u(1)};
    font-weight: 400;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const StyledEvent = styled.article<{ $color: string; $past: boolean }>`
  display: grid;
  grid-template-columns: ${u(0.35)} ${u(5.2)} minmax(0, 1fr);
  column-gap: ${u(0.9)};
  padding: ${u(0.7)} ${u(1)} ${u(0.7)} ${u(0.7)};
  border-radius: ${u(1)};
  background: ${({ theme }) => theme.bubble.background};
  opacity: ${({ $past }) => ($past ? 0.5 : 1)};

  .bar {
    border-radius: ${u(0.2)};
    background: ${({ $color }) => $color};
  }

  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.2;
  }

  .start {
    font-size: ${u(1.2)};
    font-weight: 600;
  }

  .end,
  .all-day {
    font-size: ${u(0.9)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: ${u(0.25)};
    min-width: 0;
  }

  .title {
    display: flex;
    align-items: center;
    gap: ${u(0.6)};
  }

  .summary {
    flex: 1;
    min-width: 0;
    font-size: ${u(1.15)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .badge {
    flex: none;
    padding: ${u(0.1)} ${u(0.6)};
    border-radius: ${u(1)};
    font-size: ${u(0.85)};
    font-weight: 600;
    background: ${({ $color }) => `${$color}33`};
    color: ${({ $color }) => $color};
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: ${u(0.2)} ${u(1)};
    font-size: ${u(0.95)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .meta span {
    display: inline-flex;
    align-items: center;
    gap: ${u(0.3)};
    min-width: 0;
  }

  .description {
    font-size: ${u(0.95)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: pre-line;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .progress {
    height: ${u(0.3)};
    margin-top: ${u(0.3)};
    border-radius: ${u(0.3)};
    background: rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .progress div {
    height: 100%;
    background: ${({ $color }) => $color};
  }
`;

const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${u(0.6)};
  padding: ${u(2)} 0;
  font-size: ${u(1.15)};
  color: ${({ theme }) => theme.text.secondary};

  .icon {
    font-size: ${u(3)};
  }
`;

const CalendarChip: React.FC<{ entityId: string; color: string; shown: boolean; onToggle: () => void }> = ({
  entityId,
  color,
  shown,
  onToggle,
}) => {
  const entity = useEntity(entityId);
  return (
    <button type='button' aria-pressed={shown} onClick={onToggle}>
      <span className='dot' style={{ background: color }} />
      {(entity?.attributes.friendly_name as string | undefined) ?? entityId}
    </button>
  );
};

interface EventProps {
  event: CalendarEvent;
  day: Date;
  color: string;
  now: number;
  /** The first event today that is still to come: it says how soon. */
  next: boolean;
}

const EventCard: React.FC<EventProps> = ({ event, day, color, now, next }) => {
  const t = useT();
  const language = useLanguage();
  const progress = eventProgress(event, now);
  const span = eventSpan(event, day);
  const description = plainText(event.description);
  const minutes = (event.end.getTime() - event.start.getTime()) / 60_000;
  return (
    <StyledEvent $color={color} $past={event.end.getTime() <= now}>
      <span className='bar' />
      <div className='time'>
        {event.allDay || span ? (
          <span className='all-day'>{span ? t('event_day', span) : t('all_day')}</span>
        ) : (
          <>
            <span className='start'>{formatTime(event.start, language)}</span>
            <span className='end'>{formatTime(event.end, language)}</span>
          </>
        )}
      </div>
      <div className='body'>
        <div className='title'>
          <span className='summary'>{event.summary}</span>
          {progress !== null && !event.allDay && <span className='badge'>{t('happening_now')}</span>}
          {next && <span className='badge'>{formatRelative(event.start, language, now)}</span>}
        </div>
        <div className='meta'>
          {event.location && (
            <span>
              <Icon icon='mdi:map-marker-outline' />
              {event.location}
            </span>
          )}
          {!event.allDay && !span && (
            <span>
              <Icon icon='mdi:timer-outline' />
              {formatMinutes(minutes, language)}
            </span>
          )}
        </div>
        {description && <div className='description'>{description}</div>}
        {progress !== null && !event.allDay && (
          <div className='progress'>
            <div style={{ width: `${progress * 100}%` }} />
          </div>
        )}
      </div>
    </StyledEvent>
  );
};

function dayHeading(day: Date, language: string, t: ReturnType<typeof useT>): { label: string; date: string } {
  const today = startOfDay(new Date());
  const date = new Intl.DateTimeFormat(language, { weekday: 'long', day: 'numeric', month: 'long' }).format(day);
  if (day.getTime() === today.getTime()) return { label: t('today'), date };
  if (day.getTime() === addDays(today, 1).getTime()) return { label: t('tomorrow'), date };
  return { label: date, date: '' };
}

/**
 * Two weeks ahead, one card per event: the calendar's colour, when, how long,
 * where, and what -- with the running event's progress and how soon the next
 * one starts. Days with nothing on are left out; a chip per calendar hides
 * the ones not wanted right now.
 */
const CalendarPopupContent: React.FC<{ entities: string[] }> = ({ entities }) => {
  const t = useT();
  const language = useLanguage();
  const now = useTick(60_000);
  const days = useGroupedEvents(entities, 14);
  const [hidden, setHidden] = useState<string[]>([]);
  const colorOf = (calendar: string) => calendarColor(entities.indexOf(calendar));
  const toggle = (id: string) => setHidden(list => (list.includes(id) ? list.filter(item => item !== id) : [...list, id]));

  const busy = (days ?? [])
    .map(({ day, events }) => ({ day, events: events.filter(event => !hidden.includes(event.calendar)) }))
    .filter(({ events }) => events.length);
  const today = startOfDay(new Date(now)).getTime();
  const next = busy.find(({ day }) => day.getTime() === today)?.events.find(event => !event.allDay && event.start.getTime() > now);

  return (
    <>
      {entities.length > 1 && (
        <StyledChips>
          {entities.map(id => (
            <CalendarChip key={id} entityId={id} color={colorOf(id)} shown={!hidden.includes(id)} onToggle={() => toggle(id)} />
          ))}
        </StyledChips>
      )}
      {days && !busy.length && (
        <StyledEmpty>
          <Icon className='icon' icon='mdi:calendar-check-outline' />
          {t('no_events')}
        </StyledEmpty>
      )}
      {busy.map(({ day, events }) => {
        const heading = dayHeading(day, language, t);
        return (
          <StyledDay key={day.getTime()}>
            <h3>
              {heading.label}
              {heading.date && <span>{heading.date}</span>}
            </h3>
            {events.map(event => (
              <EventCard
                key={`${event.calendar}-${event.start.getTime()}-${event.summary}`}
                event={event}
                day={day}
                color={colorOf(event.calendar)}
                now={now}
                next={event === next}
              />
            ))}
          </StyledDay>
        );
      })}
    </>
  );
};

const CalendarPopup: React.FC<{ open: boolean; onClose: () => void; entities: string[] }> = ({ open, onClose, entities }) => {
  const t = useT();
  return (
    <Popup open={open} onClose={onClose} title={t('calendar')} icon='mdi:calendar' width={58}>
      {open && <CalendarPopupContent entities={entities} />}
    </Popup>
  );
};

export default CalendarPopup;
