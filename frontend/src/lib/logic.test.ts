import { describe, expect, it } from 'vitest';
import { countOpen, isOpen } from './openings';
import { mapEmbedUrl } from './travel';
import { freeCells } from './grid';
import { uniformCell } from './cell';
import { isStaleCandidate } from './reload';
import { move } from './editing';
import { groupByDay, type CalendarEvent } from './calendar';
import { unitFor } from './unit';
import type { Tile } from '../config/types';

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

describe('freeCells', () => {
  const tile = (w: number, h: number): Tile => ({ id: `${w}${h}`, type: 'placeholder', entity: '', name: '', icon: '', w, h, options: {} });

  it('counts what the tiles leave of the grid', () => {
    // The reference Media section: two 2x2 tiles in a 5x2 grid.
    expect(freeCells([tile(2, 2), tile(2, 2)], 5, 2)).toBe(2);
    expect(freeCells([tile(9, 9)], 2, 2)).toBe(0);
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
  it('fits the reference layout on a 1280x800 tablet and a 2560x1440 screen', () => {
    expect(unitFor(1280, 800)).toBe(10);
    expect(unitFor(2560, 1440)).toBe(18);
  });

  it('is clamped for phones and very large screens', () => {
    expect(unitFor(360, 640)).toBe(9);
    expect(unitFor(7680, 4320)).toBe(22);
  });
});

describe('uniformCell', () => {
  it('is the largest square every section can hold, in whole pixels', () => {
    // The reference page 1 at 1280x800: Living room 5x2 and Bedroom 2x2.
    const living = { width: 673, height: 329, columns: 5, rows: 2, gap: 5.5 };
    const bedroom = { width: 262, height: 329, columns: 2, rows: 2, gap: 5.5 };
    expect(uniformCell([living, bedroom])).toBe(128);
  });

  it('is limited by height on a wide screen', () => {
    expect(uniformCell([{ width: 2000, height: 300, columns: 5, rows: 2, gap: 10 }])).toBe(145);
  });

  it('ignores sections that have no size yet', () => {
    expect(uniformCell([{ width: 0, height: 0, columns: 2, rows: 2, gap: 5 }])).toBeNull();
  });
});
