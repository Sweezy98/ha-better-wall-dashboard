import { useEffect, type RefObject } from 'react';
import { swipeTarget } from '../lib/swipe';

/**
 * Drag pages sideways with a mouse, the way a finger swipes them.
 *
 * A touch swipe needs nothing: the track is a scroll-snapping scroller and
 * the browser handles fingers itself, on the compositor. A mouse cannot
 * scroll sideways by dragging, so for pointers of type "mouse" only this
 * follows the drag, turns snapping off while it does (snapping would fight
 * every pixel), then settles on a page and turns it back on.
 *
 * A drag is not a click: once the pointer has moved, the click the release
 * produces is swallowed, so letting go over a tile does not toggle a light.
 */
export function useMouseSwipe(ref: RefObject<HTMLElement | null>, count: number): void {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let drag: { id: number; x: number; left: number; moved: boolean; lastX: number; lastT: number; velocity: number } | null = null;
    // Which drag a pending "snap back on" belongs to. A throw's settling can
    // outlast it -- the next drag starts within its 700 ms -- and turning
    // snapping on in the middle of that next drag made the page stop
    // following the mouse and jump from snap to snap instead.
    let generation = 0;

    const swallowClick = (event: MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      drag = {
        id: event.pointerId,
        x: event.clientX,
        left: element.scrollLeft,
        moved: false,
        lastX: event.clientX,
        lastT: event.timeStamp,
        velocity: 0,
      };
    };

    const onMove = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.id) return;
      const dx = event.clientX - drag.x;
      if (!drag.moved) {
        // A few pixels of wobble in a click are not a drag.
        if (Math.abs(dx) < 6) return;
        drag.moved = true;
        generation += 1;
        element.setPointerCapture(drag.id);
        element.style.scrollSnapType = 'none';
        element.style.cursor = 'grabbing';
      }
      const dt = event.timeStamp - drag.lastT;
      if (dt > 0) drag.velocity = (event.clientX - drag.lastX) / dt;
      drag.lastX = event.clientX;
      drag.lastT = event.timeStamp;
      element.scrollLeft = drag.left - dx;
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
      const width = element.clientWidth;
      const target = swipeTarget(Math.round(finished.left / width), event.clientX - finished.x, width, count, finished.velocity);
      const mine = generation;
      const restore = () => {
        if (mine !== generation || drag?.moved) return;
        element.style.scrollSnapType = '';
      };
      element.addEventListener('scrollend', restore, { once: true });
      // Browsers without scrollend, and a scroll that is already in place.
      window.setTimeout(restore, 700);
      element.scrollTo({ left: target * width, behavior: 'smooth' });
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
  }, [ref, count]);
}
