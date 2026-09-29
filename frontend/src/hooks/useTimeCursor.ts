import { useState } from 'react';

/**
 * The moment under the pointer on a chart spanning `start` to `end`: follows
 * a mouse, and a finger that touches or drags along it. A mouse that leaves
 * takes it away; a finger's stays where it lifted, as the graph popup's does.
 */
export function useTimeCursor(start: number, end: number) {
  const [t, setT] = useState<number | null>(null);
  const at = (event: React.PointerEvent<HTMLElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
    setT(start + fraction * (end - start));
  };
  return {
    t,
    handlers: {
      onPointerMove: at,
      onPointerDown: at,
      onPointerLeave: (event: React.PointerEvent<HTMLElement>) => event.pointerType === 'mouse' && setT(null),
    },
  };
}
