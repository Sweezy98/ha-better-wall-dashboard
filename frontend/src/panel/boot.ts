/**
 * The app's entry: defines the two panel elements Home Assistant creates.
 *
 * `<better-wall-dashboard-panel>` is the dashboard, for everyone;
 * `<better-wall-dashboard-editor>` is its editor, registered admin-only.
 * Home Assistant sets `hass`, `narrow`, `route` and `panel` on each. The
 * dashboard borrows Home Assistant's own connection through
 * `window.hassConnection` (ha-component-kit's inherited auth), so `hass` is
 * accepted and never acted on: it is set on every state change in the house,
 * and doing anything with it here would re-render everything dozens of times
 * a minute -- the bug this rewrite exists to remove. Only `narrow` is read.
 */
import { attach, detach } from './mount';
import { setEntryUrl } from './entry';
import { setModeState, type Mode } from './mode';

function define(tag: string, mode: Mode): void {
  class WallDashboardPanel extends HTMLElement {
    hass?: unknown;
    route?: unknown;
    panel?: unknown;
    private _narrow = false;

    get narrow(): boolean {
      return this._narrow;
    }

    set narrow(value: boolean) {
      this._narrow = Boolean(value);
      if (this.isConnected) setModeState({ narrow: this._narrow });
    }

    connectedCallback(): void {
      // Home Assistant may have set `narrow` before this class was defined;
      // that left a plain property shadowing the setter above.
      if (Object.prototype.hasOwnProperty.call(this, 'narrow')) {
        const value = (this as unknown as { narrow: boolean }).narrow;
        delete (this as unknown as { narrow?: boolean }).narrow;
        this.narrow = value;
      }
      attach(this, { hassUrl: window.location.origin, embedded: true }, mode);
      setModeState({ narrow: this._narrow });
    }

    disconnectedCallback(): void {
      detach(this);
    }
  }
  // Two copies of the app will happen -- an old cached one and a new one
  // after an upgrade -- and a second define() would throw.
  if (!customElements.get(tag)) customElements.define(tag, WallDashboardPanel);
}

declare global {
  // Set by the loader Home Assistant loads (see entryLoader in vite.config.ts).
  var __betterWallDashboardEntry: string | undefined;
}

setEntryUrl(globalThis.__betterWallDashboardEntry ?? import.meta.url);
define('better-wall-dashboard-panel', 'dashboard');
define('better-wall-dashboard-editor', 'editor');
