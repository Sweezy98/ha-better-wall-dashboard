import { describe, expect, it } from 'vitest';
import { acpBadge, acpEntities, showsAuto, shownSteps, targetSensorOf, type BadgeInput } from './adaptiveCover';

const base: BadgeInput = { enabled: true, automatic: true, manual: false, winner: 'default', trace: [], inTimeWindow: true };

describe('adaptive cover pro', () => {
  it('finds an instance’s entities by the suffix of their unique id, qualified by domain', () => {
    const entries = [
      { entity_id: 'sensor.rollo_target_position', unique_id: 'E1_Cover_Position', platform: 'adaptive_cover_pro', config_entry_id: 'E1' },
      { entity_id: 'binary_sensor.rollo_manual', unique_id: 'E1_manual_override', platform: 'adaptive_cover_pro', config_entry_id: 'E1' },
      { entity_id: 'switch.rollo_auto', unique_id: 'E1_Automatic Control', platform: 'adaptive_cover_pro', config_entry_id: 'E1' },
      { entity_id: 'sensor.other_target_position', unique_id: 'E2_Cover_Position', platform: 'adaptive_cover_pro', config_entry_id: 'E2' },
      { entity_id: 'sensor.unrelated', unique_id: 'E1_Cover_Position', platform: 'something_else', config_entry_id: 'E1' },
    ];
    expect(acpEntities(entries, 'E1')).toEqual({
      target: 'sensor.rollo_target_position',
      manual: 'binary_sensor.rollo_manual',
      automatic: 'switch.rollo_auto',
    });
  });

  it('knows which instance steers a cover by the positions its target sensor reports', () => {
    const states = {
      'sensor.a': { attributes: { actual_positions: { 'cover.kitchen': 40 } } },
      'sensor.b': { attributes: { actual_positions: { 'cover.living': 70 } } },
      'cover.living': { attributes: { actual_positions: { 'cover.living': 70 } } },
    };
    expect(targetSensorOf('cover.living', states)).toBe('sensor.b');
    expect(targetSensorOf('cover.hall', states)).toBeUndefined();
  });

  it('badges what steers the cover as the tile card does', () => {
    expect(acpBadge({ ...base, enabled: false })).toBe('off');
    expect(acpBadge({ ...base, automatic: false })).toBeNull();
    expect(acpBadge({ ...base, manual: true, winner: 'manual_override' })).toBe('manual');
    expect(acpBadge({ ...base, winner: 'cloud_suppression' })).toBe('cloud');
    expect(acpBadge({ ...base, winner: 'custom_position_2' })).toBe('custom_position');
    expect(acpBadge({ ...base, winner: 'default' })).toBe('auto');
    const trace = [
      { handler: 'motion_timeout', matched: true },
      { handler: 'climate', matched: true },
      { handler: 'solar', matched: true },
    ];
    expect(acpBadge({ ...base, winner: 'summer', trace })).toBe('climate');
    expect(acpBadge({ ...base, inTimeWindow: false })).toBe('off_schedule');
    expect(acpBadge({ ...base, manual: true, inTimeWindow: false })).toBe('manual');
  });

  it('adds a plain Auto only beside another badge while nothing overrules it', () => {
    expect(showsAuto(base, 'solar')).toBe(true);
    expect(showsAuto(base, 'auto')).toBe(false);
    expect(showsAuto({ ...base, manual: true }, 'manual')).toBe(false);
    expect(showsAuto({ ...base, automatic: false }, null)).toBe(false);
  });

  it('shows only the handlers the instance has on', () => {
    const trace = ['group_lock', 'weather', 'manual_override', 'motion_timeout', 'custom_position_1', 'solar', 'default'].map(handler => ({
      handler,
      matched: false,
    }));
    expect(shownSteps(trace, ['manual', 'default', 'weather', 'custom_position', 'solar']).map(step => step.handler)).toEqual([
      'weather',
      'manual_override',
      'custom_position_1',
      'solar',
      'default',
    ]);
    expect(shownSteps(trace, undefined)).toHaveLength(7);
  });
});
