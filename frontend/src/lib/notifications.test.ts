import { describe, expect, it } from 'vitest';
import { isForTablet, notificationPrefixes } from './notifications';

describe('notifications for a tablet', () => {
  it('shows what starts with any of its prefixes', () => {
    const living = ['wall_all_', 'wall_living_'];
    const bedroom = ['wall_all_'];
    expect(isForTablet('wall_all_door_open', living)).toBe(true);
    expect(isForTablet('wall_living_tv_off', living)).toBe(true);
    expect(isForTablet('wall_living_tv_off', bedroom)).toBe(false);
    expect(isForTablet('config_entry_discovery', living)).toBe(false);
  });

  it('shows everything without prefixes', () => {
    expect(isForTablet('config_entry_discovery', [])).toBe(true);
  });

  it('reads the single prefix an older backend sends', () => {
    expect(notificationPrefixes({ prefix: 'wall_' })).toEqual(['wall_']);
    expect(notificationPrefixes({ prefix: '', prefixes: ['a_', 'b_'] })).toEqual(['a_', 'b_']);
    expect(notificationPrefixes({ prefix: '' })).toEqual([]);
  });
});
