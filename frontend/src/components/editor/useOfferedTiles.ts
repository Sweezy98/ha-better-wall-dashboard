import { useMemo } from 'react';
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

/**
 * The entities a tile type's picker offers, where it narrows them beyond
 * domains (see LibraryEntry.pickerEntities); undefined where it does not.
 * Compared as text, so the editor re-renders when the list changes, not on
 * every state change in the house.
 */
export function usePickerEntities(entry: LibraryEntry | undefined): string[] | undefined {
  const listed = useHass(state => {
    if (!entry?.pickerEntities) return null;
    return entry.pickerEntities(state.entities, id => state.entitiesRegistryDisplay[id]?.platform).join(' ');
  });
  return useMemo(() => (listed === null ? undefined : listed.split(' ').filter(Boolean)), [listed]);
}
