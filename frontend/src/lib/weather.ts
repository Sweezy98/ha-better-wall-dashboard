/**
 * Weather conditions: which animated icon, and what to call them.
 *
 * The icons are Meteocons (MIT, basmilius/weather-icons), one SVG per Home
 * Assistant condition, animated with SMIL so they move inside a plain <img>
 * without a line of script.
 */

const ICONS = import.meta.glob('../assets/weather_icons/*.svg', { eager: true, query: '?url', import: 'default' }) as Record<
  string,
  string
>;

const byName = (name: string): string | undefined => ICONS[`../assets/weather_icons/${name}.svg`];

/** Every condition Home Assistant's weather entities report. */
export const CONDITIONS = [
  'clear-night',
  'cloudy',
  'exceptional',
  'fog',
  'hail',
  'lightning',
  'lightning-rainy',
  'partlycloudy',
  'pouring',
  'rainy',
  'snowy',
  'snowy-rainy',
  'sunny',
  'windy',
  'windy-variant',
] as const;

/**
 * The icon file for a condition.
 *
 * Night matters for two of them. "sunny" after dark is a clear night, and
 * "partlycloudy" after dark gets the moon rather than the sun -- providers
 * disagree about whether they do this themselves, so it is done here from
 * `sun.sun` for all of them.
 */
export function weatherIconName(condition: string | undefined, isNight: boolean): string {
  if (!condition) return 'cloudy';
  if (isNight && condition === 'sunny') return 'clear-night';
  if (isNight && condition === 'partlycloudy') return 'partly-cloudy-night';
  return (CONDITIONS as readonly string[]).includes(condition) ? condition : 'exceptional';
}

export function weatherIconUrl(condition: string | undefined, isNight: boolean): string | undefined {
  return byName(weatherIconName(condition, isNight)) ?? byName('cloudy');
}

export const EXTRA_ICONS = {
  raindrop: () => byName('raindrop'),
  umbrella: () => byName('umbrella'),
  windy: () => byName('windy'),
} as const;

/**
 * What each condition is called. Home Assistant translates these for its own
 * cards, but through translation fragments a custom panel cannot rely on
 * being loaded -- so they are carried here, like the rest of our strings.
 */
export const CONDITION_LABELS: Record<string, Record<(typeof CONDITIONS)[number], string>> = {
  en: {
    'clear-night': 'Clear',
    cloudy: 'Cloudy',
    exceptional: 'Exceptional',
    fog: 'Fog',
    hail: 'Hail',
    lightning: 'Lightning',
    'lightning-rainy': 'Thunderstorm',
    partlycloudy: 'Partly cloudy',
    pouring: 'Pouring',
    rainy: 'Rainy',
    snowy: 'Snowy',
    'snowy-rainy': 'Sleet',
    sunny: 'Sunny',
    windy: 'Windy',
    'windy-variant': 'Windy and cloudy',
  },
  de: {
    'clear-night': 'Klar',
    cloudy: 'Bewölkt',
    exceptional: 'Außergewöhnlich',
    fog: 'Nebel',
    hail: 'Hagel',
    lightning: 'Gewitter',
    'lightning-rainy': 'Gewitter mit Regen',
    partlycloudy: 'Teilweise bewölkt',
    pouring: 'Starkregen',
    rainy: 'Regnerisch',
    snowy: 'Schnee',
    'snowy-rainy': 'Schneeregen',
    sunny: 'Sonnig',
    windy: 'Windig',
    'windy-variant': 'Windig und bewölkt',
  },
};

export function conditionLabel(condition: string | undefined, language: string): string {
  if (!condition) return '';
  const table = CONDITION_LABELS[language.split('-')[0]] ?? CONDITION_LABELS.en;
  return (table as Record<string, string>)[condition] ?? condition;
}

/**
 * Where a day's low-to-high bar sits on the week's scale, in percent.
 *
 * Every day shares the scale of the whole week, so a cold day's bar sits to
 * the left of a warm one's and the bars can be compared at a glance.
 */
export function rangeBar(low: number, high: number, min: number, max: number): { left: number; width: number } {
  const span = max - min || 1;
  const left = ((Math.min(low, high) - min) / span) * 100;
  const right = ((Math.max(low, high) - min) / span) * 100;
  return { left: Math.max(0, left), width: Math.max(2, Math.min(100, right) - Math.max(0, left)) };
}

const COMPASS: Record<string, string[]> = {
  en: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
  de: ['N', 'NO', 'O', 'SO', 'S', 'SW', 'W', 'NW'],
};

/** "NO" for a wind from 45°, in the reader's language. */
export function compassPoint(bearing: number, language: string): string {
  const points = COMPASS[language.split('-')[0]] ?? COMPASS.en;
  return points[Math.round((((bearing % 360) + 360) % 360) / 45) % 8];
}

const HPA_PER_UNIT: Record<string, number> = { hPa: 1, mbar: 1, Pa: 0.01, kPa: 10, inHg: 33.8639, mmHg: 1.33322, psi: 68.9476 };

/** A pressure in hPa, whatever unit the weather entity reports it in. */
export function pressureToHpa(value: number, unit: string | undefined): number {
  return value * (HPA_PER_UNIT[unit ?? 'hPa'] ?? 1);
}

/** A barometer's dial, from 960 to 1060 hPa: storms to settled high pressure. */
export const BAROMETER_MIN = 960;
export const BAROMETER_MAX = 1060;

/** Where on the dial a pressure sits, from 0 to 1, clamped to its ends. */
export function barometerFraction(hpa: number): number {
  return Math.min(1, Math.max(0, (hpa - BAROMETER_MIN) / (BAROMETER_MAX - BAROMETER_MIN)));
}
