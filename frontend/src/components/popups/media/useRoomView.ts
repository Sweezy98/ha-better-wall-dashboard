import { useEffect, useRef, useState } from 'react';
import { HOME_VIEW, clampView, type RoomView } from '../../../lib/room';

/** Radians per pixel dragged, and metres. */
const TURN = 0.008;
const PAN = 0.008;

/**
 * The room's view, moved by hand when `enabled`: one finger or the mouse
 * turns and tilts it, two fingers pan and pinch it, a right-button or shift
 * drag pans, the wheel zooms.
 *
 * Listened for natively: the page swiper and the popup's swipe listen on
 * ancestors, and a drag here is the room's alone.
 */
export function useRoomView<T extends Element>(enabled: boolean) {
  const ref = useRef<T>(null);
  const [view, setView] = useState<RoomView>(HOME_VIEW);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;
    const pointers = new Map<number, { x: number; y: number }>();
    let panning = false;
    const move = (change: (view: RoomView) => RoomView) => setView(current => clampView(change(current)));

    const onDown = (event: Event) => {
      const pointer = event as PointerEvent;
      pointer.stopPropagation();
      element.setPointerCapture(pointer.pointerId);
      pointers.set(pointer.pointerId, { x: pointer.clientX, y: pointer.clientY });
      panning = pointer.button === 2 || pointer.shiftKey;
    };
    const onUp = (event: Event) => {
      pointers.delete((event as PointerEvent).pointerId);
    };
    const onMove = (event: Event) => {
      const pointer = event as PointerEvent;
      const last = pointers.get(pointer.pointerId);
      if (!last) return;
      // Released where this never heard of it: ended here, not dragged on.
      if (pointer.pointerType === 'mouse' && pointer.buttons === 0) return onUp(event);
      const [dx, dy] = [pointer.clientX - last.x, pointer.clientY - last.y];
      const other = [...pointers.entries()].find(([id]) => id !== pointer.pointerId)?.[1];
      if (other) {
        // Two fingers: half the move pans (each finger moves the middle half as far), their spread zooms.
        const before = Math.hypot(last.x - other.x, last.y - other.y);
        const after = Math.hypot(pointer.clientX - other.x, pointer.clientY - other.y);
        move(view => ({
          ...view,
          zoom: after > 0 ? view.zoom * (before / after) : view.zoom,
          panX: view.panX - (dx / 2) * PAN * view.zoom,
          panY: view.panY + (dy / 2) * PAN * view.zoom,
        }));
      } else if (panning) {
        move(view => ({ ...view, panX: view.panX - dx * PAN * view.zoom, panY: view.panY + dy * PAN * view.zoom }));
      } else {
        move(view => ({ ...view, turn: view.turn - dx * TURN, tilt: view.tilt + dy * TURN }));
      }
      pointers.set(pointer.pointerId, { x: pointer.clientX, y: pointer.clientY });
    };
    const onWheel = (event: Event) => {
      const wheel = event as WheelEvent;
      wheel.preventDefault();
      move(view => ({ ...view, zoom: view.zoom * Math.exp(wheel.deltaY * 0.0015) }));
    };
    const onMenu = (event: Event) => event.preventDefault();

    element.addEventListener('pointerdown', onDown);
    element.addEventListener('pointermove', onMove);
    element.addEventListener('pointerup', onUp);
    element.addEventListener('pointercancel', onUp);
    element.addEventListener('wheel', onWheel, { passive: false });
    element.addEventListener('contextmenu', onMenu);
    return () => {
      element.removeEventListener('pointerdown', onDown);
      element.removeEventListener('pointermove', onMove);
      element.removeEventListener('pointerup', onUp);
      element.removeEventListener('pointercancel', onUp);
      element.removeEventListener('wheel', onWheel);
      element.removeEventListener('contextmenu', onMenu);
    };
  }, [enabled]);

  const moved = Object.keys(HOME_VIEW).some(key => view[key as keyof RoomView] !== HOME_VIEW[key as keyof RoomView]);
  return { ref, view, moved, reset: () => setView(HOME_VIEW) };
}
