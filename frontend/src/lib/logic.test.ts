import { describe, expect, it } from 'vitest';
import { countOpen, isOpen } from './openings';
import { mapEmbedUrl } from './travel';
import { uniformCell } from './cell';
import { swipeTarget } from './swipe';
import { mergeRoutes, parseRoutes, routesRequests, trafficDelayMinutes, waypoint } from './routes';
import { isStaleCandidate } from './reload';
import { move } from './editing';
import { calendarColor, dayHeading, eventProgress, eventSpan, groupByDay, plainText, type CalendarEvent } from './calendar';
import { unitFor } from './unit';

describe('openings', () => {
  it('reads each domain its own way', () => {
    expect(isOpen('binary_sensor.window', 'on')).toBe(true);
    expect(isOpen('cover.garage', 'closing')).toBe(true);
    expect(isOpen('lock.front', 'locked')).toBe(false);
  });

  it('does not call an unavailable sensor closed', () => {
    expect(isOpen('binary_sensor.window', 'unavailable')).toBeNull();
    expect(isOpen('binary_sensor.window', undefined)).toBeNull();
  });

  it('adds a counting sensor by its number', () => {
    expect(
      countOpen([
        { entityId: 'sensor.openwindows', state: '2' },
        { entityId: 'binary_sensor.door', state: 'on' },
        { entityId: 'binary_sensor.window', state: 'unavailable' },
      ])
    ).toBe(3);
  });
});

describe('mapEmbedUrl', () => {
  const none = { map_url: '', maps_api_key: '' };

  it('accepts a pasted iframe snippet and keeps only its src', () => {
    const snippet = '<iframe src="https://www.google.com/maps/embed?pb=abc" width="600"></iframe>';
    expect(mapEmbedUrl({ ...none, map_url: snippet })).toBe('https://www.google.com/maps/embed?pb=abc');
  });

  it('refuses anything that is not a Google Maps embed', () => {
    expect(mapEmbedUrl({ ...none, map_url: 'https://example.com/maps/embed' })).toBeNull();
    expect(mapEmbedUrl({ ...none, map_url: 'javascript:alert(1)' })).toBeNull();
  });

  it('has nothing to show without one', () => {
    expect(mapEmbedUrl(none)).toBeNull();
  });
});

describe('isStaleCandidate', () => {
  it('clears our own files and documents, never Home Assistant’s hashed assets', () => {
    expect(isStaleCandidate('https://ha.local/better_wall_dashboard/app/x.js', '/better_wall_dashboard/')).toBe(true);
    expect(isStaleCandidate('https://ha.local/better-wall-dashboard', '/better_wall_dashboard/')).toBe(true);
    expect(isStaleCandidate('https://ha.local/frontend_latest/app.123abc.js', '/better_wall_dashboard/')).toBe(false);
  });
});

describe('move', () => {
  it('moves within bounds and ignores moves past the ends', () => {
    expect(move([1, 2, 3], 0, 2)).toEqual([2, 3, 1]);
    expect(move([1, 2, 3], 0, -1)).toEqual([1, 2, 3]);
  });
});

describe('groupByDay', () => {
  const event = (start: Date, end: Date, allDay = false): CalendarEvent => ({ calendar: 'calendar.x', summary: 's', start, end, allDay });
  const today = new Date(2026, 8, 24, 10);

  it('keeps empty days, so the agenda shows them as free', () => {
    const days = groupByDay([], 3, today);
    expect(days.map(day => day.day.getDate())).toEqual([24, 25, 26]);
    expect(days.every(day => day.events.length === 0)).toBe(true);
  });

  it('puts an event on every day it overlaps, and an all-day event on its day only', () => {
    const trip = event(new Date(2026, 8, 24, 18), new Date(2026, 8, 26, 9));
    const holiday = event(new Date(2026, 8, 25), new Date(2026, 8, 26), true);
    const days = groupByDay([trip, holiday], 3, today);
    expect(days.map(day => day.events.length)).toEqual([1, 2, 1]);
  });
});

describe('calendar event details', () => {
  const event = (start: Date, end: Date, allDay = false): CalendarEvent => ({ calendar: 'calendar.x', summary: 's', start, end, allDay });

  it('reports progress only while an event is on', () => {
    const meeting = event(new Date(2026, 8, 24, 10), new Date(2026, 8, 24, 12));
    expect(eventProgress(meeting, new Date(2026, 8, 24, 11).getTime())).toBe(0.5);
    expect(eventProgress(meeting, new Date(2026, 8, 24, 9).getTime())).toBeNull();
    expect(eventProgress(meeting, new Date(2026, 8, 24, 12).getTime())).toBeNull();
  });

  it('numbers the days of a multi-day event, and not a single day', () => {
    const trip = event(new Date(2026, 8, 24), new Date(2026, 8, 27), true);
    expect(eventSpan(trip, new Date(2026, 8, 25))).toEqual({ index: 2, count: 3 });
    expect(eventSpan(event(new Date(2026, 8, 24), new Date(2026, 8, 25), true), new Date(2026, 8, 24))).toBeNull();
    expect(eventSpan(event(new Date(2026, 8, 24, 9), new Date(2026, 8, 24, 10)), new Date(2026, 8, 24))).toBeNull();
  });

  it('counts a multi-day event across a clock change in whole days', () => {
    const trip = event(new Date(2026, 9, 24), new Date(2026, 9, 27), true);
    expect(eventSpan(trip, new Date(2026, 9, 26))).toEqual({ index: 3, count: 3 });
  });

  it('turns an HTML description into text', () => {
    expect(plainText('<p>Bring <b>cake</b></p><br>&amp; candles')).toBe('Bring cake\n& candles');
    expect(plainText(undefined)).toBe('');
  });

  it('names today and tomorrow, and dates the days after', () => {
    const now = new Date(2026, 8, 24, 10);
    const words = { today: 'Today', tomorrow: 'Tomorrow' };
    expect(dayHeading(new Date(2026, 8, 24), 'en', words, 'long', now)).toEqual({ label: 'Today', date: 'Thursday, September 24' });
    expect(dayHeading(new Date(2026, 8, 25), 'en', words, 'long', now).label).toBe('Tomorrow');
    expect(dayHeading(new Date(2026, 8, 26), 'en', words, 'short', now)).toEqual({ label: 'Sat, Sep 26', date: '' });
  });

  it('gives every calendar a colour, repeating after the palette', () => {
    expect(calendarColor(0)).toBe(calendarColor(7));
    expect(calendarColor(0)).not.toBe(calendarColor(1));
  });
});

describe('unitFor', () => {
  it('stays readable on a 10-inch tablet and matches the reference at 1440p', () => {
    expect(unitFor(1280, 800)).toBeCloseTo(13.6, 1);
    expect(unitFor(2560, 1440)).toBeCloseTo(18.08, 1);
  });

  it('never makes the columns overflow the width', () => {
    // A squarish screen: the height would allow 15 px, the width only 12.8.
    expect(unitFor(1200, 1000)).toBeCloseTo(1200 / 94, 1);
  });

  it('is clamped for phones and very large screens', () => {
    expect(unitFor(360, 640)).toBe(11);
    expect(unitFor(7680, 4320)).toBe(22);
  });
});

describe('uniformCell', () => {
  it('is one square every section can hold, in whole pixels', () => {
    // The reference page 1 at 1280x800: Living room 5x2 and Bedroom 2x2.
    const living = { width: 673, height: 329, columns: 5, rows: 2, gap: 5.5 };
    const bedroom = { width: 262, height: 329, columns: 2, rows: 2, gap: 5.5 };
    expect(uniformCell([living, bedroom])).toEqual({ width: 128, height: 128 });
  });

  it('stays square however much room one direction has', () => {
    expect(uniformCell([{ width: 500, height: 2000, columns: 5, rows: 2, gap: 0 }])).toEqual({ width: 100, height: 100 });
    expect(uniformCell([{ width: 2000, height: 300, columns: 5, rows: 2, gap: 10 }])).toEqual({ width: 145, height: 145 });
  });

  it('ignores sections that have no size yet', () => {
    expect(uniformCell([{ width: 0, height: 0, columns: 2, rows: 2, gap: 5 }])).toBeNull();
  });
});

describe('swipeTarget', () => {
  it('moves one page when dragged far enough, in the direction of the drag', () => {
    expect(swipeTarget(0, -200, 1000, 3)).toBe(1);
    expect(swipeTarget(1, 200, 1000, 3)).toBe(0);
  });

  it('stays on a short, slow drag and moves on a quick flick', () => {
    expect(swipeTarget(0, -50, 1000, 3)).toBe(0);
    expect(swipeTarget(0, -50, 1000, 3, -1.2)).toBe(1);
  });

  it('never goes past either end', () => {
    expect(swipeTarget(0, 400, 1000, 3)).toBe(0);
    expect(swipeTarget(2, -400, 1000, 3)).toBe(2);
  });
});

describe('routes', () => {
  it('sends an address as an address and coordinates as a location', () => {
    expect(waypoint('Some Street 1, 1000 Town')).toEqual({ address: 'Some Street 1, 1000 Town' });
    expect(waypoint('47.07, 15.44')).toEqual({ location: { latLng: { latitude: 47.07, longitude: 15.44 } } });
  });

  it('asks for traffic-aware alternatives by car, and again without motorways', () => {
    const [usual, local] = routesRequests('A', 'B', 'de');
    expect(usual.travelMode).toBe('DRIVE');
    expect(usual.routingPreference).toBe('TRAFFIC_AWARE');
    expect(usual.computeAlternativeRoutes).toBe(true);
    expect(local).toMatchObject({ ...usual, routeModifiers: { avoidHighways: true } });
  });

  it('merges the responses into three different routes, fastest first', () => {
    const route = (description: string, duration: number, polyline = description) => ({
      description,
      duration,
      staticDuration: duration,
      distanceMeters: 0,
      polyline,
    });
    const usual = [route('S Autobahn/E66', 1080), route('S Autobahn/E59/E66', 1140)];
    const local = [route('B67a', 900), route('B67a', 905, 'other line'), route('L311', 1500)];
    expect(mergeRoutes([usual, local]).map(item => item.description)).toEqual(['B67a', 'S Autobahn/E66', 'S Autobahn/E59/E66']);
  });

  it('parses the protobuf durations and sorts the fastest first', () => {
    const routes = parseRoutes({
      routes: [
        { description: 'B1', duration: '1500s', staticDuration: '1300s', distanceMeters: 11000, polyline: { encodedPolyline: 'abc' } },
        { description: 'A2', duration: '1200s', staticDuration: '1150s', distanceMeters: 9600, polyline: { encodedPolyline: 'def' } },
        { description: 'no line', duration: '900s' },
      ],
    });
    expect(routes.map(route => route.description)).toEqual(['A2', 'B1']);
    expect(routes[0].duration).toBe(1200);
  });

  it('survives an error response', () => {
    expect(parseRoutes({ error: { code: 403 } })).toEqual([]);
    expect(parseRoutes(null)).toEqual([]);
  });

  it('mentions traffic only when it costs a few minutes', () => {
    const route = { description: '', distanceMeters: 0, polyline: 'x', staticDuration: 1200 };
    expect(trafficDelayMinutes({ ...route, duration: 1260 })).toBe(0);
    expect(trafficDelayMinutes({ ...route, duration: 1500 })).toBe(5);
  });
});
