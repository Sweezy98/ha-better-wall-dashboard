import { useEffect, useRef } from 'react';
import type { MessageBase } from 'home-assistant-js-websocket';
import { useConnection } from './useHa';

/**
 * A websocket subscription for as long as the component is mounted.
 *
 * `key` says when to resubscribe; `build` makes the message, and is called
 * only when subscribing -- so a message may carry something like "24 hours
 * before now" without resubscribing on every render as the clock moves.
 * home-assistant-js-websocket re-sends the subscription itself after a
 * reconnect, which is what keeps a tablet that lost Wi-Fi for a minute live
 * without a reload.
 */
export function useSubscription<T>(
  key: string | null,
  build: () => MessageBase,
  onEvent: (event: T) => void,
  onError?: (error: { code?: string; message?: string }) => void
): void {
  const connection = useConnection();
  const handlers = useRef({ build, onEvent, onError });
  useEffect(() => {
    handlers.current = { build, onEvent, onError };
  });

  useEffect(() => {
    if (!connection || key === null) return;
    let unsubscribe: (() => void) | undefined;
    let cancelled = false;
    connection
      .subscribeMessage<T>(event => handlers.current.onEvent(event), handlers.current.build(), { resubscribe: true })
      .then(unsub => {
        if (cancelled) unsub();
        else unsubscribe = unsub;
      })
      .catch(error => handlers.current.onError?.(error));
    return () => {
      cancelled = true;
      // An unsubscribe after the connection has gone away rejects; there is
      // nothing left to unsubscribe from, so that is fine.
      Promise.resolve(unsubscribe?.()).catch(() => undefined);
    };
  }, [connection, key]);
}
