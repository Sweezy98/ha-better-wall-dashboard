import { useEffect, useRef } from 'react';

/** How long a first tap waits to see whether a second follows: Home Assistant's own. */
const DOUBLE_TAP_MS = 250;

/**
 * A click handler telling a tap from a double tap. With no double-tap
 * action a tap goes through at once; with one, the tap waits to see whether
 * a second follows, as a double tap on a Home Assistant card does.
 */
export function useTaps(onTap: () => void, onDoubleTap?: () => void): () => void {
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  return () => {
    if (!onDoubleTap) {
      onTap();
      return;
    }
    if (timer.current) {
      window.clearTimeout(timer.current);
      timer.current = 0;
      onDoubleTap();
      return;
    }
    timer.current = window.setTimeout(() => {
      timer.current = 0;
      onTap();
    }, DOUBLE_TAP_MS);
  };
}
