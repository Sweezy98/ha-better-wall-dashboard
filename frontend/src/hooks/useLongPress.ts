import { useCallback, useRef } from 'react';

/**
 * Pointer handlers that fire `onLongPress` after `ms` of holding still.
 *
 * Used for the way out of kiosk mode, which must be deliberate enough that a
 * child leaning on the clock does not find it, and discoverable enough that
 * an adult who was told about it does.
 */
export function useLongPress(onLongPress: (target: HTMLElement) => void, ms = 3000) {
  const timer = useRef<number | undefined>(undefined);
  const cancel = useCallback(() => {
    window.clearTimeout(timer.current);
    timer.current = undefined;
  }, []);
  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const target = event.currentTarget;
      cancel();
      timer.current = window.setTimeout(() => onLongPress(target), ms);
    },
    [cancel, ms, onLongPress]
  );
  return { onPointerDown, onPointerUp: cancel, onPointerLeave: cancel, onPointerCancel: cancel };
}
