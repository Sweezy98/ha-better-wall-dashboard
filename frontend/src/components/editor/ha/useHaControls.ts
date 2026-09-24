import { useEffect, useState, useSyncExternalStore } from 'react';
import { ensureHaControls, haControlsReady } from '../../../lib/haControls';
import { getHassObject, subscribeHassObject } from '../../../panel/hassObject';

/**
 * Whether Home Assistant's own controls can be drawn here: they are defined,
 * and there is a `hass` to hand them. False on the dev server, where every
 * field keeps its plain control.
 */
export function useHaControls(): boolean {
  const [ready, setReady] = useState(haControlsReady);
  const hasHass = useSyncExternalStore(subscribeHassObject, () => getHassObject() !== null);
  useEffect(() => {
    if (ready || !hasHass) return;
    let alive = true;
    void ensureHaControls().then(ok => alive && ok && setReady(true));
    return () => {
      alive = false;
    };
  }, [ready, hasHass]);
  return ready && hasHass;
}
