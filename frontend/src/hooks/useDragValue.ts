import { useEffect, useRef, useState } from 'react';

/**
 * A control dragged by finger or mouse -- a brightness bar, a colour wheel.
 *
 * Follows the pointer and reports only on release: a light asked for every
 * pixel falls behind. The value let go at stays drawn until the entity
 * reports again (`reported` changes, e.g. its `last_updated`), so the control
 * does not jump back to where it was in between -- or for a few seconds, if
 * nothing changed and nothing is reported.
 *
 * Listened for natively, not through React: the page swiper listens on an
 * ancestor, which React's own events would reach only after it.
 */
export function useDragValue<T extends HTMLElement, V>(
  pick: (event: PointerEvent, box: DOMRect) => V,
  onRelease: (value: V) => void,
  reported: unknown
) {
  const ref = useRef<T>(null);
  const [held, setHeld] = useState<{ value: V; since: unknown } | null>(null);
  const [dragging, setDragging] = useState(false);
  const callbacks = useRef({ pick, onRelease });
  const latest = useRef(reported);

  useEffect(() => {
    callbacks.current = { pick, onRelease };
    latest.current = reported;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let pointer: number | null = null;
    let last: V | undefined;
    let settle = 0;
    const take = (event: PointerEvent) => {
      last = callbacks.current.pick(event, element.getBoundingClientRect());
      setHeld({ value: last, since: latest.current });
    };
    const onDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      // Before the page's own mouse swipe sees it on the way up.
      event.stopPropagation();
      pointer = event.pointerId;
      element.setPointerCapture(pointer);
      window.clearTimeout(settle);
      take(event);
      setDragging(true);
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerId === pointer) take(event);
    };
    const onUp = (event: PointerEvent) => {
      if (event.pointerId !== pointer || last === undefined) return;
      pointer = null;
      setDragging(false);
      setHeld({ value: last, since: latest.current });
      callbacks.current.onRelease(last);
      settle = window.setTimeout(() => setHeld(null), 4000);
    };
    const onCancel = (event: PointerEvent) => {
      if (event.pointerId !== pointer) return;
      pointer = null;
      setDragging(false);
      setHeld(null);
    };
    element.addEventListener('pointerdown', onDown);
    element.addEventListener('pointermove', onMove);
    element.addEventListener('pointerup', onUp);
    element.addEventListener('pointercancel', onCancel);
    return () => {
      window.clearTimeout(settle);
      element.removeEventListener('pointerdown', onDown);
      element.removeEventListener('pointermove', onMove);
      element.removeEventListener('pointerup', onUp);
      element.removeEventListener('pointercancel', onCancel);
    };
  }, []);

  const value = held && (dragging || held.since === reported) ? held.value : null;
  return { ref, value, dragging };
}

/** Where along a box the pointer is, 0 at the left (or bottom) to 1 at the right (or top). */
export function fractionAlong(event: PointerEvent, box: DOMRect, axis: 'x' | 'y'): number {
  const fraction = axis === 'x' ? (event.clientX - box.left) / box.width : (box.bottom - event.clientY) / box.height;
  return Math.min(1, Math.max(0, fraction));
}
