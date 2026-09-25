import { useHass } from '@hakit/core';
import { LIBRARY, type LibraryEntry } from '../library/registry';

/**
 * The library as this house can use it: a tile for an integration only
 * where that integration has entities. Compared as a list of keys, so the
 * editor re-renders when one is installed, not on every state change.
 */
export function useOfferedTiles(): LibraryEntry[] {
  const offered = useHass(state => {
    const platforms = new Set(Object.values(state.entitiesRegistryDisplay).map(entry => entry.platform));
    return LIBRARY.filter(item => !item.integration || platforms.has(item.integration))
      .map(item => item.type)
      .join(' ');
  });
  return LIBRARY.filter(item => offered.split(' ').includes(item.type));
}
