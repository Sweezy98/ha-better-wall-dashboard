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
