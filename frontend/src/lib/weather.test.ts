import { describe, expect, it } from 'vitest';
import { CONDITION_LABELS, CONDITIONS, compassPoint, conditionLabel, rangeBar, weatherIconName, weatherIconUrl } from './weather';

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

describe('rangeBar', () => {
  it('places a day on the week-wide scale', () => {
    expect(rangeBar(10, 20, 0, 40)).toEqual({ left: 25, width: 25 });
  });

  it('keeps a bar visible for a day with no range at all', () => {
    expect(rangeBar(15, 15, 0, 30).width).toBe(2);
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
