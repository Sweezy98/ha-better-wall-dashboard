/**
 * The app's entry: defines the two panel elements Home Assistant creates.
 *
 * `<better-wall-dashboard-panel>` is the dashboard, for everyone;
 * `<better-wall-dashboard-editor>` is its editor, registered admin-only.
 * Home Assistant sets `hass`, `narrow`, `route` and `panel` on each. The
 * dashboard borrows Home Assistant's own connection through
 * `window.hassConnection` (ha-component-kit's inherited auth), so `hass` is
 * never rendered from: it is set on every state change in the house, and
 * re-rendering on it would redraw everything dozens of times a minute -- the
 * bug this rewrite exists to remove. It is only passed on, outside React, to
 * the editor's borrowed Home Assistant controls (see hassObject.ts).
 */
import { attach, detach } from './mount';
import { setEntryUrl } from './entry';
import { setModeState, type Mode } from './mode';
import { setHassObject, type HassObject } from './hassObject';
import { registerGlowProperties } from './glow';

function define(tag: string, mode: Mode): void {
  class WallDashboardPanel extends HTMLElement {
    route?: unknown;
    panel?: unknown;
    private _narrow = false;
    private _hass: HassObject | null = null;

    get hass(): HassObject | null {
      return this._hass;
    }

    set hass(value: HassObject | null) {
      this._hass = value;
      if (this.isConnected) setHassObject(value);
    }

    get narrow(): boolean {
      return this._narrow;
    }

    set narrow(value: boolean) {
      this._narrow = Boolean(value);
      if (this.isConnected) setModeState({ narrow: this._narrow });
    }

    connectedCallback(): void {
      // Home Assistant may have set these before this class was defined;
      // that left plain properties shadowing the setters above.
      for (const key of ['narrow', 'hass'] as const) {
        if (!Object.prototype.hasOwnProperty.call(this, key)) continue;
        const value = (this as unknown as Record<string, unknown>)[key];
        delete (this as unknown as Record<string, unknown>)[key];
        (this as unknown as Record<string, unknown>)[key] = value;
      }
      attach(this, { hassUrl: window.location.origin, embedded: true }, mode);
      setModeState({ narrow: this._narrow });
      setHassObject(this._hass);
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
registerGlowProperties();
define('better-wall-dashboard-panel', 'dashboard');
define('better-wall-dashboard-editor', 'editor');
