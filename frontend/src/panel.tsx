/**
 * The entry Home Assistant loads: defines the panel element.
 *
 * Home Assistant creates `<better-wall-dashboard-panel>` in the page and sets
 * `hass`, `narrow`, `route` and `panel` on it. The dashboard needs none of
 * them to work -- it borrows Home Assistant's own websocket connection through
 * `window.hassConnection` (ha-component-kit's "inherited" auth) -- so they are
 * only accepted, never acted on. `hass` in particular is set on every state
 * change in the house; doing anything with it here would re-render the whole
 * dashboard dozens of times a minute, which is the bug this rewrite exists to
 * remove.
 */
import { attach, detach } from './panel/mount';
import { setEntryUrl } from './panel/entry';

setEntryUrl(import.meta.url);

const TAG = 'better-wall-dashboard-panel';

class WallDashboardPanel extends HTMLElement {
  hass?: unknown;
  narrow?: boolean;
  route?: unknown;
  panel?: unknown;

  connectedCallback(): void {
    attach(this, {
      // Same origin: the page Home Assistant served is the instance.
      hassUrl: window.location.origin,
      embedded: true,
    });
  }

  disconnectedCallback(): void {
    detach(this);
  }
}

// Two copies of this module will happen -- an old cached one and a new one
// after an upgrade -- and the second define() would throw.
if (!customElements.get(TAG)) customElements.define(TAG, WallDashboardPanel);
