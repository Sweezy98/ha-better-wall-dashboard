import { useLayoutEffect, type RefObject } from 'react';
import { unitFor } from '../lib/unit';

/**
 * The dashboard's size unit, from its own measured size.
 *
 * Written straight to a CSS variable rather than into React state, so a
 * resize -- or the rotation of a tablet -- restyles the dashboard without
 * rendering a single component. Everything is laid out in multiples of it
 * (see `u()` in the theme).
 */
export function useUnit(ref: RefObject<HTMLElement | null>): void {
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const apply = () => {
      // Layout size, not the painted one: the editor's preview scales the
      // dashboard down with a transform, and must still lay out as the tablet.
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      if (!width || !height) return;
      element.style.setProperty('--u', `${unitFor(width, height).toFixed(2)}px`);
      element.dataset.orientation = height > width ? 'portrait' : 'landscape';
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);
}
