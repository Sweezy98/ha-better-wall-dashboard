import { useEffect, useRef } from 'react';
import styled from 'styled-components';

/** How long the pointer rests on something before it is explained. */
const DELAY_MS = 350;
const GAP = 8;

/**
 * Our tooltip, the chart tooltip's look. In pixels, not units: it follows a
 * mouse, which the editor has too, and the editor sets no unit.
 */
const StyledTip = styled.div`
  &:popover-open {
    position: fixed;
    inset: auto;
    margin: 0;
    max-width: min(320px, calc(100vw - 16px));
    padding: 5px 10px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(18, 18, 22, 0.92);
    color: rgba(255, 255, 255, 0.92);
    font: 500 13px/1.35 var(--ha-font-family-body, Roboto, Noto, sans-serif);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    pointer-events: none;
    white-space: pre-line;
    overflow: hidden;
  }
`;

/** The nearest thing along the event's path that has something to say. */
function tipped(event: Event): Element | null {
  for (const node of event.composedPath()) {
    if (node instanceof Element && node.hasAttribute('data-tip')) return node;
  }
  return null;
}

/**
 * The one tooltip for the whole app, in place of the browser's own: any
 * element with `data-tip` explains itself when a mouse rests on it. In the
 * top layer, shown afresh each time, so it is above any popup open. Fingers
 * get none -- they cannot rest on anything -- and a press, a key or the
 * mouse wheel puts it away.
 */
const TooltipLayer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tip = ref.current;
    if (!tip?.showPopover) return;
    let current: Element | null = null;
    let timer = 0;

    const hide = () => {
      window.clearTimeout(timer);
      current = null;
      if (tip.matches(':popover-open')) tip.hidePopover();
    };
    const show = (element: Element) => {
      const text = element.getAttribute('data-tip');
      if (!text || !element.isConnected || !tip.isConnected) return;
      tip.textContent = text;
      if (tip.matches(':popover-open')) tip.hidePopover();
      tip.showPopover();
      const box = element.getBoundingClientRect();
      const width = tip.offsetWidth;
      const height = tip.offsetHeight;
      const left = Math.min(window.innerWidth - width - GAP, Math.max(GAP, box.left + box.width / 2 - width / 2));
      // Above, where there is room; below otherwise.
      const top = box.top - height - GAP >= GAP ? box.top - height - GAP : box.bottom + GAP;
      tip.style.left = `${left}px`;
      tip.style.top = `${top}px`;
    };
    // By pointermove, not pointerover: Chrome stops sending pointerover once
    // a tooltip is up -- the top layer changed -- while every move still
    // arrives. Only when what is under the pointer changes is it looked at.
    let under: EventTarget | null = null;
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const target = event.composedPath()[0] ?? null;
      if (target === under) return;
      under = target;
      const element = tipped(event);
      if (element === current) return;
      hide();
      if (!element) return;
      current = element;
      timer = window.setTimeout(() => show(element), DELAY_MS);
    };
    const onLeave = (event: PointerEvent) => {
      if (!event.relatedTarget) hide();
    };
    // A scroll inside our shadow root never reaches the window -- the event
    // is not composed -- but the wheel that turns it is.
    const onWheel = () => hide();

    window.addEventListener('pointermove', onMove, true);
    window.addEventListener('pointerout', onLeave, true);
    window.addEventListener('pointerdown', hide, true);
    window.addEventListener('wheel', onWheel, { capture: true, passive: true });
    window.addEventListener('keydown', hide, true);
    return () => {
      hide();
      window.removeEventListener('pointermove', onMove, true);
      window.removeEventListener('pointerout', onLeave, true);
      window.removeEventListener('pointerdown', hide, true);
      window.removeEventListener('wheel', onWheel, { capture: true });
      window.removeEventListener('keydown', hide, true);
    };
  }, []);

  return <StyledTip ref={ref} popover='manual' role='tooltip' />;
};

export default TooltipLayer;
