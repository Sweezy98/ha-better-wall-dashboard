/**
 * Coax Home Assistant's own form controls into being defined.
 *
 * `ha-selector`, the entity and icon pickers and the switch are registered
 * lazily, with the dashboard's config editors, so a custom panel opened on
 * its own never has them (CLAUDE.md, section 6). Asking the card helpers to
 * build an entities-card editor and a button-card editor pulls them in -- the
 * recipe custom cards use, and Better Lighting's settings app with them.
 *
 * Progressive: when any of it fails -- the dev server has no Home Assistant
 * page around it at all -- every field keeps its plain control. Nothing
 * depends on this succeeding; it leans on an arrangement Home Assistant never
 * promised to keep.
 */
const WANTED = ['ha-selector', 'ha-entity-picker', 'ha-switch', 'ha-icon-picker'];

interface CardHelpers {
  createCardElement(config: Record<string, unknown>): Promise<HTMLElement> | HTMLElement;
}

let loading: Promise<boolean> | null = null;

export function haControlsReady(): boolean {
  return WANTED.every(tag => customElements.get(tag));
}

export function ensureHaControls(): Promise<boolean> {
  if (haControlsReady()) return Promise.resolve(true);
  loading ??= (async () => {
    const load = (window as unknown as { loadCardHelpers?: () => Promise<CardHelpers> }).loadCardHelpers;
    if (!load) return false;
    try {
      const helpers = await load();
      // Two editors: the entities card brings the pickers and the switch,
      // the button card the icon picker. Either may fail without the other.
      for (const config of [{ type: 'entities', entities: [] }, { type: 'button' }]) {
        try {
          const card = await helpers.createCardElement(config);
          await (card.constructor as { getConfigElement?: () => Promise<unknown> }).getConfigElement?.();
        } catch {
          // This one is unavailable; the next may not be.
        }
      }
    } catch {
      return false;
    }
    return Boolean(customElements.get('ha-selector'));
  })();
  return loading;
}
