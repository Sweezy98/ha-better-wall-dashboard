import { describe, expect, it } from 'vitest';
import { ruleMet, rulesMet, type RuleContext } from './rules';

const context = (states: Record<string, string>, extra: Partial<RuleContext> = {}): RuleContext => ({
  state: id => states[id],
  minutes: 20 * 60,
  day: false,
  anyoneHome: true,
  ...extra,
});

describe('quick action rules', () => {
  it('matches a state, or its absence', () => {
    const c = context({ 'input_boolean.guests': 'on' });
    expect(ruleMet({ type: 'state', entity: 'input_boolean.guests', state: 'on', not: false }, c)).toBe(true);
    expect(ruleMet({ type: 'state', entity: 'input_boolean.guests', state: 'on', not: true }, c)).toBe(false);
    // Half written, or its entity gone: no reason to hide.
    expect(ruleMet({ type: 'state', entity: '', state: 'on', not: false }, c)).toBe(true);
    expect(ruleMet({ type: 'state', entity: 'switch.gone', state: 'on', not: false }, c)).toBe(true);
  });

  it('compares a number, and a word is neither above nor below', () => {
    const c = context({ 'sensor.lux': '30', 'sensor.broken': 'unavailable' });
    expect(ruleMet({ type: 'numeric', entity: 'sensor.lux', above: null, below: 50 }, c)).toBe(true);
    expect(ruleMet({ type: 'numeric', entity: 'sensor.lux', above: 40, below: null }, c)).toBe(false);
    expect(ruleMet({ type: 'numeric', entity: 'sensor.broken', above: null, below: 50 }, c)).toBe(false);
  });

  it('keeps to a time of day, through midnight too', () => {
    const at = (minutes: number) => context({}, { minutes });
    const evening = { type: 'time' as const, after: '18:00', before: '23:00' };
    expect(ruleMet(evening, at(20 * 60))).toBe(true);
    expect(ruleMet(evening, at(23 * 60))).toBe(false);
    const night = { type: 'time' as const, after: '22:00', before: '06:00' };
    expect(ruleMet(night, at(23 * 60))).toBe(true);
    expect(ruleMet(night, at(5 * 60))).toBe(true);
    expect(ruleMet(night, at(12 * 60))).toBe(false);
    expect(ruleMet({ type: 'time', after: '', before: '09:00' }, at(8 * 60))).toBe(true);
  });

  it('knows day from night and whether anyone is home', () => {
    expect(ruleMet({ type: 'sun', when: 'night' }, context({}))).toBe(true);
    expect(ruleMet({ type: 'sun', when: 'day' }, context({}))).toBe(false);
    expect(ruleMet({ type: 'home', who: 'nobody' }, context({}, { anyoneHome: false }))).toBe(true);
    expect(ruleMet({ type: 'home', who: 'anyone' }, context({}, { anyoneHome: false }))).toBe(false);
  });

  it('needs every rule, and none means always', () => {
    const c = context({ 'sensor.lux': '30' });
    expect(rulesMet(undefined, c)).toBe(true);
    expect(
      rulesMet(
        [
          { type: 'sun', when: 'night' },
          { type: 'numeric', entity: 'sensor.lux', above: 50, below: null },
        ],
        c
      )
    ).toBe(false);
  });
});
