import { useHass } from '@hakit/core';
import type { Rule } from '../config/types';
import { rulesMet, type RuleContext } from '../lib/rules';
import { useTick } from './useNow';

/**
 * The items whose rules are met now. Judged in the store's selector and
 * compared as one string of yes and no, so the list re-renders when an item
 * comes or goes -- not on every state change in the house -- and re-judged
 * each minute, for the rules that go by the time of day.
 */
export function useShown<T extends { rules?: Rule[] }>(items: T[]): T[] {
  const now = useTick(60_000);
  const shown = useHass(state => {
    const entities = state.entities;
    const people = Object.keys(entities).filter(id => id.startsWith('person.'));
    const date = new Date(now);
    const context: RuleContext = {
      state: id => entities[id]?.state,
      minutes: date.getHours() * 60 + date.getMinutes(),
      day: entities['sun.sun'] ? entities['sun.sun'].state === 'above_horizon' : undefined,
      anyoneHome: people.length ? people.some(id => entities[id].state === 'home') : undefined,
    };
    return items.map(item => (rulesMet(item.rules, context) ? '1' : '0')).join('');
  });
  return items.filter((_, index) => shown[index] === '1');
}
