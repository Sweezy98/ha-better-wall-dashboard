import { describe, expect, it } from 'vitest';
import { coversSteered, hasNumericHistory } from './entityFilters';

describe('entity filters', () => {
  it('offers a graph only what has a number to draw', () => {
    expect(hasNumericHistory('sensor.temperature', { state: '21.4', attributes: {} })).toBe(true);
    expect(hasNumericHistory('sensor.power', { state: 'unavailable', attributes: { state_class: 'measurement' } })).toBe(true);
    expect(hasNumericHistory('sensor.phase', { state: 'waning_gibbous', attributes: {} })).toBe(false);
    expect(hasNumericHistory('counter.visits', { state: 'unknown', attributes: {} })).toBe(true);
    expect(hasNumericHistory('light.kitchen', { state: '1', attributes: {} })).toBe(false);
  });

  it('offers an Adaptive Cover Pro tile the covers it steers', () => {
    const entities = {
      'sensor.rollo_target_position': { state: '0', attributes: { actual_positions: { 'cover.living': 0, 'cover.hall': 40 } } },
      'sensor.lookalike': { state: '0', attributes: { actual_positions: { 'cover.garage': 0 } } },
      'cover.living': { state: 'open', attributes: {} },
    };
    const platform = (id: string) => (id === 'sensor.rollo_target_position' ? 'adaptive_cover_pro' : 'template');
    expect(coversSteered(entities, platform)).toEqual(['cover.hall', 'cover.living']);
  });
});
