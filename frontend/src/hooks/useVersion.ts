import { useEffect, useState } from 'react';
import { useConnection } from './useHa';
import { loadedFingerprint } from '../lib/reload';

export interface Version {
  app: string;
  version: string;
}

/** How often a tablet asks again: an update is installed while it hangs on the wall. */
const CHECK_MS = 10 * 60_000;

/**
 * The version the integration serves, and whether this page runs an older
 * one -- asked when connected, again after every reconnect (Home Assistant
 * restarted, perhaps for an update) and every ten minutes.
 */
export function useVersion(): { version: Version | null; outdated: boolean } {
  const connection = useConnection();
  const [version, setVersion] = useState<Version | null>(null);

  useEffect(() => {
    if (!connection) return;
    let alive = true;
    let retry = 0;
    // Back after a restart, the connection is ready before the integration
    // is, and the question fails: asked again a little later, a few times,
    // rather than waiting the ten minutes out.
    const ask = (tries = 6) =>
      connection
        .sendMessagePromise<Version>({ type: 'better_wall_dashboard/version' })
        .then(answer => alive && setVersion(answer))
        .catch(() => {
          if (alive && tries > 1) retry = window.setTimeout(() => void ask(tries - 1), 15_000);
        });
    void ask();
    const timer = window.setInterval(() => void ask(), CHECK_MS);
    const reconnected = () => {
      window.clearTimeout(retry);
      retry = window.setTimeout(() => void ask(), 15_000);
    };
    connection.addEventListener('ready', reconnected);
    return () => {
      alive = false;
      window.clearInterval(timer);
      window.clearTimeout(retry);
      connection.removeEventListener('ready', reconnected);
    };
  }, [connection]);

  const loaded = loadedFingerprint();
  return { version, outdated: Boolean(loaded && version && version.app !== loaded) };
}
