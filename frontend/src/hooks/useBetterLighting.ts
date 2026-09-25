import { useHass } from '@hakit/core';

/**
 * The room's scene select: the one select on its light's device. Found
 * through the registry, not configured, as Better Lighting's own card does
 * -- the room's light is all a tile is given.
 */
export function useRoomSelect(lightId: string | undefined): string | undefined {
  return useHass(state => {
    const device = lightId ? state.entitiesRegistryDisplay[lightId]?.device_id : undefined;
    if (!device) return undefined;
    return Object.values(state.entitiesRegistryDisplay).find(entry => entry.device_id === device && entry.entity_id.startsWith('select.'))
      ?.entity_id;
  });
}
