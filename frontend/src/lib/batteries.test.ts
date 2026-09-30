import { describe, expect, it } from 'vitest';
import { batteryIcon, byUrgency, findBatteries, readBattery } from './batteries';

const battery = (state: string) => ({ state, attributes: { device_class: 'battery' } });

describe('batteries', () => {
  it('finds every battery there is, but those hidden', () => {
    const entities = {
      'sensor.remote_battery': battery('80'),
      'binary_sensor.lock_battery': battery('off'),
      'sensor.phone_battery': battery('55'),
      'sensor.temperature': { state: '21', attributes: { device_class: 'temperature' } },
      'switch.battery': battery('on'),
    };
    expect(findBatteries(entities, ['sensor.phone_battery'])).toEqual(['binary_sensor.lock_battery', 'sensor.remote_battery']);
  });

  it('calls a battery critical at or under the threshold, or when it says it is low', () => {
    expect(readBattery('sensor.a', battery('20'), 20)).toEqual({ level: 20, critical: true, unknown: false });
    expect(readBattery('sensor.a', battery('21'), 20).critical).toBe(false);
    expect(readBattery('binary_sensor.a', battery('on'), 20)).toEqual({ level: null, critical: true, unknown: false });
    expect(readBattery('sensor.a', battery('unavailable'), 20)).toEqual({ level: null, critical: false, unknown: true });
  });

  it('puts the critical first, then the emptiest, the unknown last', () => {
    const readings = [
      readBattery('sensor.a', battery('90'), 20),
      readBattery('sensor.b', battery('unknown'), 20),
      readBattery('sensor.c', battery('5'), 20),
      readBattery('sensor.d', battery('40'), 20),
    ];
    expect([...readings].sort(byUrgency).map(reading => reading.level)).toEqual([5, 40, 90, null]);
  });

  it('draws a battery as full as it is', () => {
    expect(batteryIcon(readBattery('sensor.a', battery('100'), 20))).toBe('mdi:battery');
    expect(batteryIcon(readBattery('sensor.a', battery('46'), 20))).toBe('mdi:battery-50');
    expect(batteryIcon(readBattery('sensor.a', battery('3'), 20))).toBe('mdi:battery-alert');
    expect(batteryIcon(readBattery('sensor.a', battery('x'), 20))).toBe('mdi:battery-unknown');
  });
});
