import { useEffect, useState } from 'react';

/**
 * The current time, updated on the boundary of every `ms`.
 *
 * Aligned to the boundary rather than every `ms` from mount, so a clock set to
 * tick each minute changes at :00 and not up to 59 seconds late -- and only
 * the component that asks re-renders, never the dashboard around it.
 */
export function useTick(ms: number): number {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    let timer: number;
    const schedule = () => {
      const delay = ms - (Date.now() % ms) + 20;
      timer = window.setTimeout(() => {
        setNow(Date.now());
        schedule();
      }, delay);
    };
    schedule();
    // A tablet that slept or had its page frozen comes back with a stale
    // clock and a timer that fires late. Catch up the moment it is visible.
    const onVisible = () => {
      if (document.visibilityState === 'visible') setNow(Date.now());
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [ms]);
  return now;
}
