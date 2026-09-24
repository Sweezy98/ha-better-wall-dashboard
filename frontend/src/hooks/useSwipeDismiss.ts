import { useRef, useState } from 'react';
import { swipeDismiss } from '../lib/swipe';

/**
 * Drag a card sideways to throw it away -- by finger or by mouse -- or let it
 * spring back. Only sideways: the card sets `touch-action: pan-y`, so a
 * vertical finger still scrolls the list it is in, natively.
 *
 * A drag is not a click: once the card has moved, the click the release
 * produces is swallowed, so letting go over its button does nothing.
 */
export function useSwipeDismiss(onDismiss: () => void) {
  const [offset, setOffset] = useState(0);
  const [leaving, setLeaving] = useState<-1 | 0 | 1>(0);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{ id: number; x: number; y: number; moved: boolean; lastX: number; lastT: number; velocity: number } | null>(null);

  const onPointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (leaving || (event.pointerType === 'mouse' && event.button !== 0)) return;
    drag.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      moved: false,
      lastX: event.clientX,
      lastT: event.timeStamp,
      velocity: 0,
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const current = drag.current;
    if (!current || event.pointerId !== current.id) return;
    const dx = event.clientX - current.x;
    if (!current.moved) {
      // Sideways first, and by more than a wobble; a vertical move is the
      // list being scrolled.
      if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(event.clientY - current.y)) return;
      current.moved = true;
      setDragging(true);
      event.currentTarget.setPointerCapture(current.id);
    }
    const dt = event.timeStamp - current.lastT;
    if (dt > 0) current.velocity = (event.clientX - current.lastX) / dt;
    current.lastX = event.clientX;
    current.lastT = event.timeStamp;
    setOffset(dx);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLElement>) => {
    const current = drag.current;
    drag.current = null;
    if (!current || !current.moved) return;
    setDragging(false);
    const card = event.currentTarget;
    const swallow = (click: MouseEvent) => {
      click.stopPropagation();
      click.preventDefault();
    };
    card.addEventListener('click', swallow, { capture: true, once: true });
    window.setTimeout(() => card.removeEventListener('click', swallow, { capture: true }), 0);
    const direction = swipeDismiss(event.clientX - current.x, card.offsetWidth, current.velocity);
    if (!direction) {
      setOffset(0);
      return;
    }
    setLeaving(direction);
    setOffset(direction * card.offsetWidth * 1.1);
    window.setTimeout(onDismiss, 220);
  };

  const style: React.CSSProperties = {
    transform: offset ? `translateX(${offset}px)` : undefined,
    opacity: leaving ? 0 : 1 - Math.min(0.6, Math.abs(offset) / 600),
    transition: dragging ? 'none' : 'transform 0.22s ease, opacity 0.22s ease',
    touchAction: 'pan-y',
  };

  return { style, handlers: { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp } };
}
