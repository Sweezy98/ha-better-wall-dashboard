/**
 * Where the sun is in the sky, for drawing its path over a window: the low
 * precision formulas of the Astronomical Almanac, good to a fraction of a
 * degree -- far finer than a line on a wall tablet.
 *
 * Pure, so it tests without a browser.
 */

const RAD = Math.PI / 180;

export interface SunPosition {
  /** Degrees from north, clockwise. */
  azimuth: number;
  /** Degrees above the horizon; negative below it. */
  elevation: number;
}

export function sunPosition(time: number, latitude: number, longitude: number): SunPosition {
  const days = time / 86_400_000 - 10_957.5;
  const anomaly = (357.529 + 0.98560028 * days) * RAD;
  const meanLongitude = 280.459 + 0.98564736 * days;
  const eclipticLongitude = (meanLongitude + 1.915 * Math.sin(anomaly) + 0.02 * Math.sin(2 * anomaly)) * RAD;
  const obliquity = (23.439 - 0.00000036 * days) * RAD;
  const rightAscension = Math.atan2(Math.cos(obliquity) * Math.sin(eclipticLongitude), Math.cos(eclipticLongitude));
  const declination = Math.asin(Math.sin(obliquity) * Math.sin(eclipticLongitude));
  const siderealDegrees = (18.697374558 + 24.06570982441908 * days) * 15 + longitude;
  const hourAngle = siderealDegrees * RAD - rightAscension;
  const lat = latitude * RAD;
  const elevation = Math.asin(Math.sin(lat) * Math.sin(declination) + Math.cos(lat) * Math.cos(declination) * Math.cos(hourAngle));
  const azimuth = Math.atan2(Math.sin(hourAngle), Math.cos(hourAngle) * Math.sin(lat) - Math.tan(declination) * Math.cos(lat));
  return { azimuth: (azimuth / RAD + 180 + 360) % 360, elevation: elevation / RAD };
}

/** The sun through a day, every `stepMinutes`, from `start` for 24 hours. */
export function sunDay(start: number, latitude: number, longitude: number, stepMinutes = 10): (SunPosition & { t: number })[] {
  const steps = Math.round((24 * 60) / stepMinutes);
  return Array.from({ length: steps + 1 }, (_, index) => {
    const t = start + index * stepMinutes * 60_000;
    return { t, ...sunPosition(t, latitude, longitude) };
  });
}

/** A point on a sky map of radius `radius`: north up, the zenith in the middle, the horizon on the rim. */
export function skyPoint(azimuth: number, elevation: number, radius: number): { x: number; y: number } {
  const distance = (radius * (90 - Math.min(90, Math.max(0, elevation)))) / 90;
  return { x: distance * Math.sin(azimuth * RAD), y: -distance * Math.cos(azimuth * RAD) };
}

/** A wedge of the sky map from the middle, between two bearings, clockwise. */
export function wedgePath(from: number, to: number, radius: number): string {
  const start = skyPoint(from, 0, radius);
  const end = skyPoint(to, 0, radius);
  const sweep = (((to - from) % 360) + 360) % 360;
  const large = sweep > 180 ? 1 : 0;
  return `M0,0 L${start.x.toFixed(2)},${start.y.toFixed(2)} A${radius},${radius} 0 ${large} 1 ${end.x.toFixed(2)},${end.y.toFixed(2)} Z`;
}
