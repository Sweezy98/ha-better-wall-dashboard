import { useEffect, useState } from 'react';

export type Presence = 'enter' | 'shown' | 'leave';

/**
 * Keeps something on screen long enough to animate in and out.
 *
 * Null while it is not there. Shown, it is first `enter` for one frame --
 * drawn in its "before" style -- then `shown`, so a CSS transition runs
 * between them; hidden, it is `leave` for `ms` and then gone. Whatever is
 * there when the page first draws is simply shown.
 */
export function usePresence(shown: boolean, ms = 300): Presence | null {
  const [phase, setPhase] = useState<Presence | null>(shown ? 'shown' : null);
  useEffect(() => {
    let frame = 0;
    let timer = 0;
    if (shown) {
      frame = requestAnimationFrame(() => {
        setPhase(current => (current === 'shown' ? current : 'enter'));
        frame = requestAnimationFrame(() => setPhase('shown'));
      });
    } else {
      frame = requestAnimationFrame(() => setPhase(current => (current === null ? null : 'leave')));
      timer = window.setTimeout(() => setPhase(null), ms);
    }
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [shown, ms]);
  return phase;
}
