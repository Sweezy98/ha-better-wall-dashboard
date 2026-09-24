import { describe, expect, it } from 'vitest';
import {
  CONDITION_LABELS,
  CONDITIONS,
  barometerFraction,
  compassPoint,
  pressureToHpa,
  conditionLabel,
  weatherIconName,
  weatherIconUrl,
} from './weather';

describe('weatherIconName', () => {
  it('turns the sun into the moon after dark', () => {
    expect(weatherIconName('sunny', true)).toBe('clear-night');
    expect(weatherIconName('partlycloudy', true)).toBe('partly-cloudy-night');
    expect(weatherIconName('partlycloudy', false)).toBe('partlycloudy');
  });

  it('draws something for a condition it does not know', () => {
    expect(weatherIconName('meteor-shower', false)).toBe('exceptional');
  });

  it.each(CONDITIONS)('ships an icon for %s', condition => {
    expect(weatherIconUrl(condition, false)).toBeTruthy();
  });
});

describe('condition labels', () => {
  it('names every condition in every language', () => {
    for (const table of Object.values(CONDITION_LABELS)) {
      expect(Object.keys(table).sort()).toEqual([...CONDITIONS].sort());
    }
  });

  it('falls back to English, then to the raw condition', () => {
    expect(conditionLabel('sunny', 'de-AT')).toBe('Sonnig');
    expect(conditionLabel('sunny', 'xx')).toBe('Sunny');
    expect(conditionLabel('meteor', 'en')).toBe('meteor');
  });
});

describe('compassPoint', () => {
  it('names the direction in the reader language', () => {
    expect(compassPoint(45, 'de')).toBe('NO');
    expect(compassPoint(45, 'en')).toBe('NE');
    expect(compassPoint(350, 'en')).toBe('N');
    expect(compassPoint(-90, 'en')).toBe('W');
  });
});

describe('barometer', () => {
  it('reads every pressure unit Home Assistant reports in hPa', () => {
    expect(pressureToHpa(1013, 'hPa')).toBe(1013);
    expect(pressureToHpa(1013, 'mbar')).toBe(1013);
    expect(pressureToHpa(29.92, 'inHg')).toBeCloseTo(1013.2, 1);
    expect(pressureToHpa(760, 'mmHg')).toBeCloseTo(1013.2, 1);
    expect(pressureToHpa(101.3, 'kPa')).toBeCloseTo(1013, 1);
  });

  it('keeps the needle on the dial', () => {
    expect(barometerFraction(1010)).toBeCloseTo(0.5, 5);
    expect(barometerFraction(900)).toBe(0);
    expect(barometerFraction(1100)).toBe(1);
  });
});
