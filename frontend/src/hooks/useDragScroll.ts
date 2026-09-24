import { useEffect, type RefObject } from 'react';

/** Pointer presses an inner scroller has already taken for its own drag. */
const claimed = new WeakSet<Event>();

/**
 * Scroll a list up and down by dragging it with a mouse, as a finger does.
 *
 * Fingers need nothing: the list is a native scroller. A mouse cannot drag
 * one, so for pointers of type "mouse" only this follows the drag and, on
 * release, lets the list coast on at the speed it was thrown. A drag is not a
 * click: once the pointer has moved, the click the release produces is
 * swallowed, so letting go over the list does not open its popup.
 *
 * Scrollers nest -- the calendar inside the sidebar's body -- and a drag moves
 * only the innermost one that can scroll. `active` re-arms it for an element
 * that is rendered only some of the time.
 */
export function useDragScroll(ref: RefObject<HTMLElement | null>, active = true): void {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let drag: { id: number; y: number; top: number; moved: boolean; lastY: number; lastT: number; velocity: number } | null = null;

    const swallowClick = (event: MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || event.button !== 0 || claimed.has(event)) return;
      if (element.scrollHeight <= element.clientHeight) return;
      claimed.add(event);
      drag = {
        id: event.pointerId,
        y: event.clientY,
        top: element.scrollTop,
        moved: false,
        lastY: event.clientY,
        lastT: event.timeStamp,
        velocity: 0,
      };
    };

    const onMove = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.id) return;
      const dy = event.clientY - drag.y;
      if (!drag.moved) {
        // A few pixels of wobble in a click are not a drag.
        if (Math.abs(dy) < 6) return;
        drag.moved = true;
        element.setPointerCapture(drag.id);
        element.style.cursor = 'grabbing';
      }
      const dt = event.timeStamp - drag.lastT;
      if (dt > 0) drag.velocity = (event.clientY - drag.lastY) / dt;
      drag.lastY = event.clientY;
      drag.lastT = event.timeStamp;
      element.scrollTop = drag.top - dy;
    };

    const onUp = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.id) return;
      const finished = drag;
      drag = null;
      if (!finished.moved) return;
      element.style.cursor = '';
      element.addEventListener('click', swallowClick, { capture: true, once: true });
      // The click comes straight after pointerup, or not at all.
      window.setTimeout(() => element.removeEventListener('click', swallowClick, { capture: true }), 0);
      // A throw coasts on for about a quarter of a second's worth of its speed.
      element.scrollBy({ top: -finished.velocity * 250, behavior: 'smooth' });
    };

    const onDragStart = (event: DragEvent) => event.preventDefault();

    element.addEventListener('pointerdown', onDown);
    element.addEventListener('pointermove', onMove);
    element.addEventListener('pointerup', onUp);
    element.addEventListener('pointercancel', onUp);
    element.addEventListener('dragstart', onDragStart);
    return () => {
      element.removeEventListener('pointerdown', onDown);
      element.removeEventListener('pointermove', onMove);
      element.removeEventListener('pointerup', onUp);
      element.removeEventListener('pointercancel', onUp);
      element.removeEventListener('dragstart', onDragStart);
    };
  }, [ref, active]);
}
