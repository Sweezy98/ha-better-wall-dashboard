import { describe, expect, it } from 'vitest';
import { durationToMinutes, formatMeasurement, formatMinutes, formatWeekday, unitSeparator } from './format';

describe('formatMeasurement', () => {
  it('writes German decimals with a comma and a space before the unit', () => {
    expect(formatMeasurement('24.7', '°C', 'de')).toBe('24,7 °C');
  });

  it('spaces a percent sign in German and not in English', () => {
    expect(formatMeasurement('99', '%', 'de')).toBe('99 %');
    expect(formatMeasurement('99', '%', 'en')).toBe('99%');
  });

  it('honours the entity display precision', () => {
    expect(formatMeasurement('21', '°C', 'en', 1)).toBe('21.0 °C');
    expect(formatMeasurement('21.456', '°C', 'en', 0)).toBe('21 °C');
  });

  it('shows a dash for an unavailable sensor and the text for a non-number', () => {
    expect(formatMeasurement('unavailable', '°C', 'en')).toBe('–');
    expect(formatMeasurement('dry', undefined, 'en')).toBe('dry');
  });
});

describe('unitSeparator', () => {
  it('never spaces a bare degree sign', () => {
    expect(unitSeparator('°', 'de')).toBe('');
  });
});

describe('formatMinutes', () => {
  it('uses the short localized unit', () => {
    expect(formatMinutes(20.4, 'de')).toBe('20 Min.');
    expect(formatMinutes(20, 'en')).toBe('20 min');
  });

  it('splits hours from minutes', () => {
    expect(formatMinutes(65, 'de')).toBe('1 Std. 5 Min.');
    expect(formatMinutes(120, 'de')).toBe('2 Std.');
  });
});

describe('durationToMinutes', () => {
  it('converts from the sensor unit', () => {
    expect(durationToMinutes('90', 's')).toBe(1.5);
    expect(durationToMinutes('2', 'h')).toBe(120);
    expect(durationToMinutes('20', 'min')).toBe(20);
    expect(durationToMinutes('unknown', 'min')).toBeNull();
  });
});

describe('formatWeekday', () => {
  it('drops the full stop German short weekdays carry', () => {
    expect(formatWeekday(new Date(2026, 8, 24), 'de')).toBe('Do');
  });
});
