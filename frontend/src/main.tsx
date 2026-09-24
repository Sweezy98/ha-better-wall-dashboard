/**
 * The dev server's entry: the same dashboard, outside Home Assistant.
 *
 * Mounted the same way the panel is -- into a shadow root, through the same
 * `attach` -- so styles that only work because of the shadow root are caught
 * here rather than on the wall. With no Home Assistant page around it there
 * is no connection to borrow, so it logs in with the token from
 * `.env.development`. This file is never part of the build.
 */
import { attach } from './panel/mount';

const TAG = 'better-wall-dashboard-dev';

class DevDashboard extends HTMLElement {
  connectedCallback(): void {
    const hassUrl = import.meta.env.VITE_HA_URL;
    if (!hassUrl) {
      this.textContent = 'Set VITE_HA_URL in .env (see .env.example) and restart `npm run dev`.';
      return;
    }
    attach(this, { hassUrl, hassToken: import.meta.env.VITE_HA_TOKEN, embedded: false });
  }
}

if (!customElements.get(TAG)) customElements.define(TAG, DevDashboard);
