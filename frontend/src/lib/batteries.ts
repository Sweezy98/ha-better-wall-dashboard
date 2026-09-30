/**
 * Every battery Home Assistant knows of, and which of them are running out.
 *
 * Found, not listed: a sensor whose device class is battery -- a percentage
 * -- or a binary sensor of that class, on when the battery is low. So one
 * added tomorrow shows without anyone editing the dashboard. Pure, to test.
 */

import type { BatteriesConfig } from '../config/types';

/** As the backend fills them in: off until switched on, critical at 20 %. */
export const BATTERY_DEFAULTS: BatteriesConfig = { enabled: false, hide_when_ok: false, only_critical: false, threshold: 20, hidden: [] };

interface BatteryLike {
  state: string;
  attributes: Record<string, unknown>;
}

const isBattery = (id: string, entity: BatteryLike | undefined) =>
  entity?.attributes.device_class === 'battery' && (id.startsWith('sensor.') || id.startsWith('binary_sensor.'));

/** The batteries, all but those hidden, by entity id. */
export function findBatteries(entities: Record<string, BatteryLike | undefined>, hidden: string[]): string[] {
  return Object.keys(entities)
    .filter(id => isBattery(id, entities[id]) && !hidden.includes(id))
    .sort();
}

export interface BatteryReading {
  /** Percent, or null for a battery that only says low or not, or says nothing. */
  level: number | null;
  critical: boolean;
  /** It reports nothing just now. */
  unknown: boolean;
}

export function readBattery(id: string, entity: BatteryLike | undefined, threshold: number): BatteryReading {
  const state = entity?.state;
  if (!entity || state === 'unavailable' || state === 'unknown') return { level: null, critical: false, unknown: true };
  if (id.startsWith('binary_sensor.')) return { level: null, critical: state === 'on', unknown: false };
  const level = Number(state);
  if (!Number.isFinite(level)) return { level: null, critical: false, unknown: true };
  return { level, critical: level <= threshold, unknown: false };
}

/** Critical first, then the emptiest; the unknown last. */
export function byUrgency(a: BatteryReading, b: BatteryReading): number {
  const rank = (reading: BatteryReading) => (reading.critical ? 0 : reading.unknown ? 2 : 1);
  return rank(a) - rank(b) || (a.level ?? 101) - (b.level ?? 101);
}

/** A battery as full as it is, in Material's steps of ten. */
export function batteryIcon(reading: BatteryReading): string {
  if (reading.unknown) return 'mdi:battery-unknown';
  if (reading.level === null) return reading.critical ? 'mdi:battery-alert-variant-outline' : 'mdi:battery';
  if (reading.critical && reading.level < 10) return 'mdi:battery-alert';
  const step = Math.round(reading.level / 10) * 10;
  return step >= 100 ? 'mdi:battery' : step <= 0 ? 'mdi:battery-outline' : `mdi:battery-${step}`;
}
