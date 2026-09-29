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

/** The cards whose editors bring the controls: the entities card the pickers and switch, the button card the icon picker. */
const EDITORS = [
  { tag: 'hui-entities-card', config: { type: 'entities', entities: [] } },
  { tag: 'hui-button-card', config: { type: 'button' } },
];

type CardClass = { getConfigElement?: () => Promise<unknown> };

interface CardHelpers {
  createCardElement(config: Record<string, unknown>): Promise<HTMLElement> | HTMLElement;
}

let loading: Promise<boolean> | null = null;
let partsLoad = false;

export function haControlsReady(): boolean {
  return partsLoad && WANTED.every(tag => customElements.get(tag));
}

const wait = (ms: number) => new Promise<false>(resolve => window.setTimeout(() => resolve(false), ms));

/**
 * `ha-selector` fetches the part for each kind of selector as it first draws
 * one. When Home Assistant's chunk fails to arrive -- it did, now and then --
 * the selector draws as nothing, and a failed import is never tried again on
 * that page. So one text selector is drawn unseen first, and the controls are
 * used only if its part arrives.
 */
async function selectorPartsLoad(): Promise<boolean> {
  const probe = Object.assign(document.createElement('ha-selector'), { selector: { text: {} }, hidden: true });
  document.body.append(probe);
  try {
    return await Promise.race([customElements.whenDefined('ha-selector-text').then(() => true), wait(5000)]);
  } finally {
    probe.remove();
  }
}

export function ensureHaControls(): Promise<boolean> {
  if (haControlsReady()) return Promise.resolve(true);
  loading ??= (async () => {
    // A card class already defined -- Home Assistant loads some with its
    // Home dashboard -- opens its editor directly. `loadCardHelpers` exists
    // only once a Lovelace dashboard has been, and was missing here.
    const load = (window as unknown as { loadCardHelpers?: () => Promise<CardHelpers> }).loadCardHelpers;
    let helpers: CardHelpers | null = null;
    for (const editor of EDITORS) {
      try {
        let card = customElements.get(editor.tag) as CardClass | undefined;
        if (!card?.getConfigElement && load) {
          helpers ??= await load();
          card = (await helpers.createCardElement(editor.config)).constructor as CardClass;
        }
        await card?.getConfigElement?.();
      } catch {
        // This one is unavailable; the next may not be.
      }
    }
    partsLoad = Boolean(customElements.get('ha-selector')) && (await selectorPartsLoad());
    return haControlsReady();
  })();
  return loading;
}
