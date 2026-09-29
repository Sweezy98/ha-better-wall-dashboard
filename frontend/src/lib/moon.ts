/**
 * The moon as the weather popup draws it: how much of it is lit tonight,
 * on which side, and when it is next full.
 *
 * Home Assistant's Moon integration names the phase; the shape is worked
 * out here from the moon's age, so a waxing crescent on the second day and
 * on the sixth do not look alike. Pure, so it tests without a browser.
 */

/** Days from one new moon to the next, on average. */
export const SYNODIC_MONTH = 29.530588853;
/** A new moon: 6 January 2000, 18:14 UTC. */
const NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);
const DAY = 86_400_000;

/** Days since the last new moon, 0 to one synodic month. */
export function moonAge(time: number): number {
  const days = (time - NEW_MOON) / DAY;
  return ((days % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
}

/** The lit share of the disc, 0 at new moon to 1 at full. */
export function moonIllumination(time: number): number {
  return (1 - Math.cos((2 * Math.PI * moonAge(time)) / SYNODIC_MONTH)) / 2;
}

export function moonWaxing(time: number): boolean {
  return moonAge(time) < SYNODIC_MONTH / 2;
}

/** When the moon is next full, from `time`. */
export function nextFullMoon(time: number): number {
  const half = SYNODIC_MONTH / 2;
  const until = (half - moonAge(time) + SYNODIC_MONTH) % SYNODIC_MONTH;
  return time + until * DAY;
}

/**
 * The lit part of a disc of radius `r` around 0,0 as an SVG path: the lit
 * half's rim, then the terminator back -- an ellipse bulging into the lit
 * half for a crescent, into the dark one past the quarter. Lit on the right
 * while waxing, as seen from the north; `south` mirrors it.
 */
export function moonPath(illumination: number, waxing: boolean, r: number, south = false): string {
  const lit = Math.min(1, Math.max(0, illumination));
  const rx = Math.abs(2 * lit - 1) * r;
  const right = waxing !== south;
  const rim = right ? 1 : 0;
  // Back from the bottom to the top: through the lit half for a crescent,
  // through the dark half for a gibbous moon.
  const crescent = lit < 0.5;
  const terminator = crescent === right ? 0 : 1;
  return `M0,${-r} A${r},${r} 0 0 ${rim} 0,${r} A${rx.toFixed(2)},${r} 0 0 ${terminator} 0,${-r} Z`;
}
