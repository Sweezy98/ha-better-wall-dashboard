import { describe, expect, it } from 'vitest';
import { runService } from './actions';

describe('actions', () => {
  it('runs an entity once, whatever it is', () => {
    expect(runService('button.zigbee_permit_join')).toEqual(['button', 'press']);
    expect(runService('script.restart')).toEqual(['script', 'turn_on']);
    expect(runService('automation.evening')).toEqual(['automation', 'trigger']);
    expect(runService('switch.fountain')).toEqual(['switch', 'toggle']);
    expect(runService('update.core')).toEqual(['homeassistant', 'turn_on']);
  });
});
