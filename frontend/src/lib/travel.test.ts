import { describe, expect, it } from 'vitest';
import { workDestination } from './travel';

describe('work destination', () => {
  it('prefers the zone, then the address, then the sensor', () => {
    const zone = { attributes: { latitude: 48.2, longitude: 16.37 } };
    expect(workDestination(zone, 'Main St 1', 'Sensor Street')).toBe('48.2,16.37');
    expect(workDestination(undefined, '  Main St 1 ', 'Sensor Street')).toBe('Main St 1');
    expect(workDestination(undefined, '', 'Sensor Street')).toBe('Sensor Street');
    // A zone without coordinates is no place to drive to.
    expect(workDestination({ attributes: {} }, '', 'Sensor Street')).toBe('Sensor Street');
  });
});
