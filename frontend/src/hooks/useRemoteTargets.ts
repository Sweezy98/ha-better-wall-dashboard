import { useMemo } from 'react';
import { useHass } from '@hakit/core';
import type { MediaConfig } from '../lib/media';
import { remoteTargets, type RemoteTarget } from '../lib/remote';

/** The players of a media tile that have a remote, by the tile's own names for them where it has any. */
export function useRemoteTargets(config: MediaConfig): RemoteTarget[] {
  const ids = useMemo(
    () => [...new Set([...config.players, ...config.devices.map(device => device.entity), config.power].filter(Boolean))],
    [config]
  );
  // Compared as text: the tile redraws when the remotes change, not with every state.
  const found = useHass(state => JSON.stringify(remoteTargets(ids, state.entitiesRegistryDisplay)));
  return useMemo(() => JSON.parse(found) as RemoteTarget[], [found]);
}
