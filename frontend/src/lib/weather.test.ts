import { describe, expect, it } from 'vitest';
import { CONDITION_LABELS, CONDITIONS, conditionLabel, weatherIconName, weatherIconUrl } from './weather';

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
