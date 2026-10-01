import { useEffect, useRef } from 'react';
import { getHassObject, subscribeHassObject, type HassObject } from '../../../panel/hassObject';

interface HaSelectorElement extends HTMLElement {
  hass: HassObject | null;
  selector: Record<string, unknown>;
  value: unknown;
  label?: string;
  helper?: string;
  required: boolean;
}

interface HaSelectorProps {
  /** A Home Assistant selector, exactly as a blueprint writes one: `{ entity: { filter: { domain: 'light' } } }`. */
  selector: Record<string, unknown>;
  value: unknown;
  onChange: (value: unknown) => void;
  label?: string;
  helper?: string;
  /** A field that always has a value: no clear button, no empty choice. */
  required?: boolean;
}

/**
 * Home Assistant's `ha-selector`, the control every settings page of its own
 * draws a field with: entity pickers, icon pickers, sliders, switches.
 *
 * Built by hand rather than rendered, because it is a Lit element fed by
 * properties, and its `hass` changes on every state change in the house --
 * so that one is handed over directly (see hassObject.ts) and never
 * re-renders React. Only call it where `useHaControls()` said yes.
 */
const HaSelector: React.FC<HaSelectorProps> = ({ selector, value, onChange, label, helper, required = false }) => {
  const holder = useRef<HTMLDivElement>(null);
  const element = useRef<HaSelectorElement | null>(null);
  const changed = useRef(onChange);
  // What it reported and React has not yet handed back, oldest first.
  const reported = useRef<string[]>([]);

  useEffect(() => {
    changed.current = onChange;
  });

  useEffect(() => {
    const el = document.createElement('ha-selector') as HaSelectorElement;
    el.hass = getHassObject();
    const listener = (event: Event) => {
      event.stopPropagation();
      const next = (event as CustomEvent<{ value: unknown }>).detail.value;
      // Its controls are controlled: they report a change and wait to be
      // given the value back, or a multi-select keeps drawing its old chips.
      el.value = next;
      reported.current.push(JSON.stringify(next ?? null));
      changed.current(next);
    };
    el.addEventListener('value-changed', listener);
    holder.current?.append(el);
    element.current = el;
    const unsubscribe = subscribeHassObject(hass => {
      el.hass = hass;
    });
    return () => {
      unsubscribe();
      el.removeEventListener('value-changed', listener);
      el.remove();
      element.current = null;
    };
  }, []);

  // Compared as text: callers build the selector afresh on every render, and
  // a new object each time would redraw the control for nothing.
  const selectorKey = JSON.stringify(selector);
  useEffect(() => {
    const el = element.current;
    if (!el) return;
    el.selector = JSON.parse(selectorKey) as Record<string, unknown>;
    el.label = label;
    el.helper = helper;
    // Home Assistant's default is required, which stars every label; here
    // only a choice that always has an answer is.
    el.required = required;
  }, [selectorKey, label, helper, required]);

  // A value handed back is either one it reported itself -- an echo, a
  // render or more behind what is typed -- or one from outside. Typing fast,
  // an echo of "Ho" arrived after "Hom" was typed and put "Ho" back, and
  // "Home Cinema" came out "Hme Cnema". So an echo is let go by; only a
  // value from outside is written into the control.
  useEffect(() => {
    const el = element.current;
    if (!el) return;
    const text = JSON.stringify(value ?? null);
    const echo = reported.current.indexOf(text);
    if (echo >= 0) {
      reported.current.splice(0, echo + 1);
      return;
    }
    reported.current = [];
    if (el.value !== value) el.value = value;
  }, [value]);

  return <div ref={holder} className='ha-field' />;
};

export default HaSelector;
