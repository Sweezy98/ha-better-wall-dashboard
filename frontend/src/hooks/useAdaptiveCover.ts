import { useEffect, useMemo, useState } from 'react';
import { useHass } from '@hakit/core';
import type { Connection } from 'home-assistant-js-websocket';
import { useConnection } from './useHa';
import { ADAPTIVE_COVER_PRO, acpEntities, targetSensorOf, type AcpEntities, type RegistryEntry } from '../lib/adaptiveCover';

/**
 * The full entity registry, asked for once per connection and shared by
 * every tile: the display registry the kit keeps has neither unique ids nor
 * config entries, and those are what an instance's entities are known by.
 */
const registries = new WeakMap<Connection, Promise<RegistryEntry[]>>();

function acpRegistry(connection: Connection): Promise<RegistryEntry[]> {
  let registry = registries.get(connection);
  if (!registry) {
    registry = connection
      .sendMessagePromise<RegistryEntry[]>({ type: 'config/entity_registry/list' })
      .then(entries => entries.filter(entry => entry.platform === ADAPTIVE_COVER_PRO));
    // A failed ask is asked again next time, not remembered.
    registry.catch(() => registries.delete(connection));
    registries.set(connection, registry);
  }
  return registry;
}

/**
 * The Adaptive Cover Pro entities steering a cover, by what they are --
 * null while they are looked up, or for a cover no instance steers.
 */
export function useAdaptiveCover(coverId: string | undefined): AcpEntities | null {
  const connection = useConnection();
  const [entries, setEntries] = useState<RegistryEntry[] | null>(null);
  // Compared as an entity id, so a tile re-renders when the instance steering
  // it changes -- not on every state change in the house.
  const target = useHass(state => (coverId ? targetSensorOf(coverId, state.entities) : undefined));

  useEffect(() => {
    if (!connection) return;
    let alive = true;
    acpRegistry(connection)
      .then(list => alive && setEntries(list))
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [connection]);

  return useMemo(() => {
    if (!target || !entries) return null;
    const entryId = entries.find(entry => entry.entity_id === target)?.config_entry_id;
    return entryId ? acpEntities(entries, entryId) : null;
  }, [target, entries]);
}
