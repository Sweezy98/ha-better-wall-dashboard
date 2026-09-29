import { useHass } from '@hakit/core';

/** Home Assistant's Moon sensor, if the integration is set up: found, not configured. */
export function useMoonSensor(): string | undefined {
  return useHass(
    state =>
      Object.values(state.entitiesRegistryDisplay).find(entry => entry.platform === 'moon' && entry.entity_id.startsWith('sensor.'))
        ?.entity_id
  );
}
