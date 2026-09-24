/**
 * Numbers, units and durations, formatted the way Home Assistant does.
 *
 * Pure, and keyed by language rather than read from a global, so the rules
 * test without a browser and a German tablet and an English desk can both be
 * checked in one run.
 */

const UNAVAILABLE = new Set(['unavailable', 'unknown', '']);

export function isAvailable(state: string | undefined | null): state is string {
  return state != null && !UNAVAILABLE.has(state);
}

export function toNumber(state: string | undefined | null): number | null {
  if (!isAvailable(state)) return null;
  const value = Number(state);
  return Number.isFinite(value) ? value : null;
}

/**
 * Whether a unit is written with a space before it.
 *
 * Home Assistant's own rule (`blankBeforeUnit` in the frontend): never before
 * a bare degree sign, before a percent sign only in languages that do so --
 * "99 %" in German, "99%" in English -- and before everything else always.
 */
const PERCENT_WITH_SPACE = new Set(['de', 'fr', 'cs', 'da', 'fi', 'nb', 'no', 'pl', 'ru', 'sk', 'sv', 'uk', 'es', 'bg']);

export function unitSeparator(unit: string, language: string): string {
  if (!unit || unit === '°') return '';
  if (unit === '%') return PERCENT_WITH_SPACE.has(language.split('-')[0]) ? ' ' : '';
  return ' ';
}

export function formatNumber(value: number, language: string, maxFractionDigits = 1, minFractionDigits = 0): string {
  return new Intl.NumberFormat(language, {
    maximumFractionDigits: maxFractionDigits,
    minimumFractionDigits: Math.min(minFractionDigits, maxFractionDigits),
  }).format(value);
}

/**
 * A sensor reading with its unit: "24,7 °C", "99 %".
 *
 * `precision` is the entity's display precision when Home Assistant has one
 * for it; without, one decimal at most, which is what every temperature and
 * humidity sensor in the reference design shows.
 */
export function formatMeasurement(
  state: string | undefined,
  unit: string | undefined,
  language: string,
  precision?: number | null
): string {
  const value = toNumber(state);
  if (value === null) return isAvailable(state) ? state : '–';
  const digits = precision ?? 1;
  const text = formatNumber(value, language, digits, precision ?? 0);
  return unit ? `${text}${unitSeparator(unit, language)}${unit}` : text;
}

/** "20 Min." / "1 Std. 5 Min." -- a travel time, from minutes. */
export function formatMinutes(minutes: number, language: string): string {
  const whole = Math.max(0, Math.round(minutes));
  const hours = Math.floor(whole / 60);
  const rest = whole % 60;
  const unit = (value: number, kind: 'hour' | 'minute') =>
    new Intl.NumberFormat(language, { style: 'unit', unit: kind, unitDisplay: 'short' }).format(value);
  if (!hours) return unit(rest, 'minute');
  return rest ? `${unit(hours, 'hour')} ${unit(rest, 'minute')}` : unit(hours, 'hour');
}

/** Minutes, from a duration sensor's state and unit. */
export function durationToMinutes(state: string | undefined, unit: string | undefined): number | null {
  const value = toNumber(state);
  if (value === null) return null;
  switch (unit) {
    case 's':
      return value / 60;
    case 'h':
      return value * 60;
    case 'd':
      return value * 1440;
    default:
      // "min", and the Google Travel Time sensor's own unit.
      return value;
  }
}

export function formatTime(date: Date, language: string, hour12?: boolean): string {
  return new Intl.DateTimeFormat(language, { hour: '2-digit', minute: '2-digit', hour12 }).format(date);
}

/** "24.09.2026" in German, "09/24/2026" in English -- the locale's own order. */
export function formatDate(date: Date, language: string): string {
  return new Intl.DateTimeFormat(language, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
}

export function formatWeekday(date: Date, language: string, style: 'short' | 'long' = 'short'): string {
  // German short weekdays come with a full stop ("Do."); the calendar column
  // in the reference design shows them without.
  return new Intl.DateTimeFormat(language, { weekday: style }).format(date).replace(/\.$/, '');
}

export function formatMonth(date: Date, language: string): string {
  return new Intl.DateTimeFormat(language, { month: 'short' }).format(date).replace(/\.$/, '').toUpperCase();
}

/** "vor 5 Minuten" / "5 minutes ago". */
export function formatRelative(date: Date, language: string, now = Date.now()): string {
  const seconds = Math.round((date.getTime() - now) / 1000);
  const rtf = new Intl.RelativeTimeFormat(language, { numeric: 'auto' });
  const abs = Math.abs(seconds);
  if (abs < 60) return rtf.format(seconds, 'second');
  if (abs < 3600) return rtf.format(Math.round(seconds / 60), 'minute');
  if (abs < 86400) return rtf.format(Math.round(seconds / 3600), 'hour');
  return rtf.format(Math.round(seconds / 86400), 'day');
}

/** Midnight at the start of the local day `date` falls in. */
export function startOfDay(date: Date): Date {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function addDays(date: Date, days: number): Date {
  const copy = new Date(date);
  copy.setDate(copy.getDate() + days);
  return copy;
}
