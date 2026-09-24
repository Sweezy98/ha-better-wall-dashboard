/**
 * Lightning from the Blitzortung integration (github.com/mrk-its/homeassistant-blitzortung).
 *
 * It makes three sensors -- the latest strike's distance and azimuth, and a
 * counter -- whose entity ids follow whatever the user named the entry, so
 * they are found by platform and translation key in the entity registry. And
 * one `geo_location` entity per recent strike, with `source: blitzortung`,
 * which the radar plots.
 */

export interface RegistryDisplayEntry {
  /** entity_id */
  ei: string;
  /** platform */
  pl: string;
  /** translation_key */
  tk?: string;
}

export interface BlitzortungSensors {
  distance: string;
  azimuth: string;
  counter: string;
}

const SENSOR_KEYS = ['distance', 'azimuth', 'counter'] as const;

/** The first Blitzortung entry's sensors, or null when it is not installed. */
export function findBlitzortung(entries: RegistryDisplayEntry[]): BlitzortungSensors | null {
  const found: Partial<BlitzortungSensors> = {};
  for (const entry of entries) {
    if (entry.pl !== 'blitzortung' || !entry.ei.startsWith('sensor.')) continue;
    const key = SENSOR_KEYS.find(name => name === entry.tk);
    if (key && !found[key]) found[key] = entry.ei;
  }
  return found.distance ? { distance: found.distance, azimuth: found.azimuth ?? '', counter: found.counter ?? '' } : null;
}

export interface Strike {
  distance: number;
  /** Degrees clockwise from north, as seen from home. */
  bearing: number;
  /** Milliseconds since the epoch. */
  time: number;
}

const radians = (degrees: number) => (degrees * Math.PI) / 180;

/** The initial compass bearing from one point to another, 0-360. */
export function bearing(from: { lat: number; lon: number }, to: { lat: number; lon: number }): number {
  const lat1 = radians(from.lat);
  const lat2 = radians(to.lat);
  const dLon = radians(to.lon - from.lon);
  const y = Math.sin(dLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

/** The radar's outer ring: a round distance just beyond the farthest strike. */
export function radarRange(farthest: number): number {
  return [10, 25, 50, 100, 200, 500, 1000, 2000, 5000].find(step => farthest <= step) ?? Math.ceil(farthest / 1000) * 1000;
}

/** Where a strike sits on a radar of `range`, in -1..1 with north up. */
export function radarPoint(strike: Pick<Strike, 'distance' | 'bearing'>, range: number): { x: number; y: number } {
  const r = Math.min(1, strike.distance / range);
  return { x: r * Math.sin(radians(strike.bearing)), y: -r * Math.cos(radians(strike.bearing)) };
}
