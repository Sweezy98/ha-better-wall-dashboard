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

const DAY = 86_400_000;

/** One colour per calendar, in the order they are configured. */
const PALETTE = ['#03a9f4', '#ff9f43', '#4cd964', '#ff5e8a', '#b388ff', '#26c6da', '#ffd54f'];

export function calendarColor(index: number): string {
  return PALETTE[((index % PALETTE.length) + PALETTE.length) % PALETTE.length];
}

/** How far through the event `now` is, from 0 to 1, or null while it is not on. */
export function eventProgress(event: CalendarEvent, now = Date.now()): number | null {
  const start = event.start.getTime();
  const end = event.end.getTime();
  if (end <= start || now < start || now >= end) return null;
  return (now - start) / (end - start);
}

/**
 * Which day of a multi-day event `day` is -- "day 2 of 3" -- or null for an
 * event within one day. Rounded, because a day across a clock change is 23 or
 * 25 hours long.
 */
export function eventSpan(event: CalendarEvent, day: Date): { index: number; count: number } | null {
  const first = startOfDay(event.start).getTime();
  // An event ending exactly at midnight -- every all-day event -- ends the day before.
  const last = startOfDay(new Date(event.end.getTime() - 1)).getTime();
  const count = Math.round((last - first) / DAY) + 1;
  if (count <= 1) return null;
  return { index: Math.round((startOfDay(day).getTime() - first) / DAY) + 1, count };
}

/** An event description as plain text: some providers send HTML. */
export function plainText(value: string | undefined): string {
  return (value ?? '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .trim();
}

/**
 * A day's heading: "Today" and "Tomorrow" by name with the date beside them,
 * any later day by its date alone.
 */
export function dayHeading(
  day: Date,
  language: string,
  words: { today: string; tomorrow: string },
  style: 'long' | 'short' = 'long',
  now = new Date()
): { label: string; date: string } {
  const today = startOfDay(now).getTime();
  const date = new Intl.DateTimeFormat(language, { weekday: style, day: 'numeric', month: style }).format(day);
  if (startOfDay(day).getTime() === today) return { label: words.today, date };
  if (startOfDay(day).getTime() === addDays(new Date(today), 1).getTime()) return { label: words.tomorrow, date };
  return { label: date, date: '' };
}
