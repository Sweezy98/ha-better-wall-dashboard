import { describe, expect, it } from 'vitest';
import { countOpen, isOpen } from './openings';
import { mapEmbedUrl } from './travel';
import { uniformCell } from './cell';
import { swipeTarget } from './swipe';
import { isStaleCandidate } from './reload';
import { move } from './editing';
import { groupByDay, type CalendarEvent } from './calendar';
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
    expect(mapEmbedUrl({ ...none, map_url: snippet }, undefined, undefined, 'de')).toBe('https://www.google.com/maps/embed?pb=abc');
  });

  it('refuses anything that is not a Google Maps embed', () => {
    expect(mapEmbedUrl({ ...none, map_url: 'https://example.com/maps/embed' }, undefined, undefined, 'de')).toBeNull();
    expect(mapEmbedUrl({ ...none, map_url: 'javascript:alert(1)' }, undefined, undefined, 'de')).toBeNull();
  });

  it('builds a directions embed from an API key and the sensor', () => {
    const url = new URL(mapEmbedUrl({ ...none, maps_api_key: 'KEY' }, 'A town', 'B city', 'de')!);
    expect(url.pathname).toBe('/maps/embed/v1/directions');
    expect(url.searchParams.get('origin')).toBe('A town');
    expect(url.searchParams.get('mode')).toBe('driving');
  });

  it('has nothing to show without either', () => {
    expect(mapEmbedUrl(none, 'A', 'B', 'de')).toBeNull();
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
