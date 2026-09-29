/**
 * When a quick action shows: all of its rules met -- a state, a number, a
 * time of day, day or night, somebody home -- so the sidebar offers what
 * fits the house right now. No rules, always.
 *
 * Pure, so it tests without a browser.
 */
import type { Rule } from '../config/types';

export interface RuleContext {
  state: (entityId: string) => string | undefined;
  /** Minutes since midnight, local time. */
  minutes: number;
  /** The sun above the horizon; undefined without sun.sun. */
  day: boolean | undefined;
  /** Anybody home, by the person entities; undefined without any. */
  anyoneHome: boolean | undefined;
}

const minutesOf = (time: string): number | undefined => {
  const [hours, minutes] = time.split(':').map(Number);
  return Number.isFinite(hours) && Number.isFinite(minutes) ? hours * 60 + minutes : undefined;
};

/**
 * One rule. One that cannot be judged yet -- its entity missing, half set up
 * in the editor -- counts as met: a quick action should not vanish because
 * a rule is still being written.
 */
export function ruleMet(rule: Rule, context: RuleContext): boolean {
  switch (rule.type) {
    case 'state': {
      if (!rule.entity || !rule.state) return true;
      const state = context.state(rule.entity);
      if (state === undefined) return true;
      return (state === rule.state) !== rule.not;
    }
    case 'numeric': {
      if (!rule.entity || (rule.above === null && rule.below === null)) return true;
      const value = Number(context.state(rule.entity));
      // Unavailable, or a word: not above or below anything.
      if (!Number.isFinite(value)) return false;
      return (rule.above === null || value > rule.above) && (rule.below === null || value < rule.below);
    }
    case 'time': {
      const after = minutesOf(rule.after);
      const before = minutesOf(rule.before);
      if (after === undefined && before === undefined) return true;
      const now = context.minutes;
      if (after !== undefined && before !== undefined) {
        // 22:00 to 06:00 runs through midnight.
        return after <= before ? now >= after && now < before : now >= after || now < before;
      }
      return after !== undefined ? now >= after : now < before!;
    }
    case 'sun':
      return context.day === undefined || context.day === (rule.when === 'day');
    case 'home':
      return context.anyoneHome === undefined || context.anyoneHome === (rule.who === 'anyone');
  }
}

export function rulesMet(rules: Rule[] | undefined, context: RuleContext): boolean {
  return (rules ?? []).every(rule => ruleMet(rule, context));
}
