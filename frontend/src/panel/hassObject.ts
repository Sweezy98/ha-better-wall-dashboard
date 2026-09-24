/**
 * Home Assistant's own `hass` object, as it hands it to our panel element.
 *
 * The dashboard never reads it -- it has its own connection -- but Home
 * Assistant's form controls (`ha-selector` and friends) need it to draw an
 * entity picker at all. It changes with every state change in the house, so
 * it lives outside React: the controls that need it subscribe here and are
 * handed each new one directly, and nothing re-renders.
 */
export type HassObject = Record<string, unknown>;

let current: HassObject | null = null;
const listeners = new Set<(hass: HassObject | null) => void>();

export function setHassObject(hass: HassObject | null): void {
  current = hass;
  listeners.forEach(listener => listener(hass));
}

export function getHassObject(): HassObject | null {
  return current;
}

export function subscribeHassObject(listener: (hass: HassObject | null) => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
