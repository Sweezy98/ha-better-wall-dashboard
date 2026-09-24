import { useEffect, useMemo, useState } from 'react';
import { useHass } from '@hakit/core';
import { useCallService } from './useHa';
import { startOfDay, addDays } from '../lib/format';
import { groupByDay, type CalendarEvent } from '../lib/calendar';

export type { CalendarEvent };

const EMPTY: CalendarEvent[] = [];

interface RawEvent {
  summary: string;
  start: string;
  end: string;
  location?: string;
  description?: string;
}

/** A date-only string ("2026-09-24") is an all-day event, in local time. */
function parse(value: string): { date: Date; allDay: boolean } {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [y, m, d] = value.split('-').map(Number);
    return { date: new Date(y, m - 1, d), allDay: true };
  }
  return { date: new Date(value), allDay: false };
}

/**
 * Upcoming events from Home Assistant calendars, from today for `days` days.
 *
 * Through `calendar.get_events`, which any user may call and which answers for
 * every calendar integration alike. Refetched when a calendar entity's state
 * changes -- it flips as events start and end -- and every fifteen minutes,
 * which catches an event added on a phone without hammering the provider.
 */
export function useCalendarEvents(entities: string[], days: number): CalendarEvent[] | null {
  const callService = useCallService();
  const [events, setEvents] = useState<CalendarEvent[] | null>(null);
  const [refresh, setRefresh] = useState(0);
  // A string of every calendar's state, so the effect sees one value change
  // rather than an array that is new on every render.
  const stateKey = useHass(state => entities.map(id => `${id}:${state.entities[id]?.state}:${state.entities[id]?.last_changed}`).join('|'));
  const entityKey = entities.join(',');

  useEffect(() => {
    const timer = window.setInterval(() => setRefresh(value => value + 1), 900_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!entityKey) return;
    let cancelled = false;
    const start = startOfDay(new Date());
    const end = addDays(start, days);
    callService(
      'calendar',
      'get_events',
      { start_date_time: start.toISOString(), end_date_time: end.toISOString() },
      { entity_id: entityKey.split(',') },
      true
    )
      .then(result => {
        if (cancelled || !result) return;
        const response = (result.response ?? {}) as Record<string, { events?: RawEvent[] }>;
        const all: CalendarEvent[] = [];
        for (const [calendar, value] of Object.entries(response)) {
          for (const raw of value.events ?? []) {
            const start = parse(raw.start);
            const end = parse(raw.end);
            all.push({
              calendar,
              summary: raw.summary,
              start: start.date,
              end: end.date,
              allDay: start.allDay,
              location: raw.location,
              description: raw.description,
            });
          }
        }
        all.sort((a, b) => a.start.getTime() - b.start.getTime() || Number(b.allDay) - Number(a.allDay));
        setEvents(all);
      })
      .catch(() => {
        // A calendar that is offline shows no events rather than an error on
        // the wall; the editor is where configuration problems belong.
        if (!cancelled) setEvents([]);
      });
    return () => {
      cancelled = true;
    };
  }, [callService, entityKey, days, stateKey, refresh]);

  // With no calendars there is nothing to fetch and nothing to wait for.
  return entityKey ? events : EMPTY;
}

export function useGroupedEvents(entities: string[], days: number) {
  const events = useCalendarEvents(entities, days);
  return useMemo(() => (events ? groupByDay(events, days) : null), [events, days]);
}
