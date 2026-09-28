import { useEffect, useState } from 'react';
import { useConnection } from './useHa';

/** How long a dropped connection may be gone before the screen says so: a blip is not news. */
const GRACE_MS = 2000;

/**
 * Since when the connection to Home Assistant has been lost, or null while
 * it is up -- during a restart, an update, a network drop. The kit's
 * connection reconnects by itself; this only tells the tablet to say so.
 */
export function useConnectionLost(): number | null {
  const connection = useConnection();
  const [since, setSince] = useState<number | null>(null);

  useEffect(() => {
    if (!connection) return;
    let timer = 0;
    let lostAt: number | null = null;
    const down = () => {
      if (lostAt !== null) return;
      lostAt = Date.now();
      const at = lostAt;
      timer = window.setTimeout(() => setSince(at), GRACE_MS);
    };
    const up = () => {
      lostAt = null;
      window.clearTimeout(timer);
      setSince(null);
    };
    connection.addEventListener('disconnected', down);
    connection.addEventListener('reconnect-error', down);
    connection.addEventListener('ready', up);
    if (!connection.connected) down();
    return () => {
      window.clearTimeout(timer);
      connection.removeEventListener('disconnected', down);
      connection.removeEventListener('reconnect-error', down);
      connection.removeEventListener('ready', up);
    };
  }, [connection]);

  return since;
}
