import { addDays, startOfDay } from './format';

export interface CalendarEvent {
  calendar: string;
  summary: string;
  start: Date;
  end: Date;
  allDay: boolean;
  location?: string;
  description?: string;
}

/** Events grouped per day for `days` days from today, empty days included. */
export function groupByDay(events: CalendarEvent[], days: number, today = new Date()): { day: Date; events: CalendarEvent[] }[] {
  const start = startOfDay(today);
  return Array.from({ length: days }, (_, index) => {
    const day = addDays(start, index);
    const next = addDays(day, 1);
    // An event belongs to every day it overlaps, so a three-day trip shows on
    // each of them; an all-day event ends at the midnight after its last day.
    return { day, events: events.filter(event => event.start < next && event.end > day) };
  });
}
