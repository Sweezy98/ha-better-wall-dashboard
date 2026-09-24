import { describe, expect, it } from 'vitest';
import { TRANSLATIONS, translate } from './i18n';

describe('translations', () => {
  const [english, ...others] = Object.entries(TRANSLATIONS);

  it.each(others)('%s has exactly the English keys', (_, table) => {
    expect(Object.keys(table).sort()).toEqual(Object.keys(english[1]).sort());
  });

  it.each(others)('%s keeps every {placeholder}', (_, table) => {
    const placeholders = (text: string) => (text.match(/\{\w+\}/g) ?? []).sort();
    for (const [key, text] of Object.entries(english[1])) {
      expect(placeholders(table[key as keyof typeof table]), key).toEqual(placeholders(text));
    }
  });

  it('fills placeholders and falls back to English for an unknown language', () => {
    expect(translate('de-AT', 'last_hours', { hours: 24 })).toBe('Letzte 24 Stunden');
    expect(translate('xx', 'close')).toBe('Close');
  });
});
