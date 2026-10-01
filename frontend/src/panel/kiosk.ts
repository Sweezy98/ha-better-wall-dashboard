/**
 * Hiding Home Assistant's own sidebar while the dashboard is on screen.
 *
 * Home Assistant listens on `window` for `hass-kiosk-mode` and, while it is
 * enabled, turns the sidebar into a closed modal drawer (see `kioskMode` in
 * the frontend's `home-assistant-main`). That is exactly full screen, and
 * unlike docking the sidebar away it changes no stored preference: the next
 * panel the user opens gets its sidebar back.
 *
 * Wanted is decided by the dashboard's config (per user, set by an admin);
 * attached by whether the dashboard is on screen. The event goes out only
 * when their conjunction changes, so this never fights anything else that
 * sets kiosk mode.
 */

let wanted = false;
let attached = false;
let applied: boolean | null = null;
/** An admin's choice for this tab, over the configured one: see toggleKioskPreview. */
let preview: boolean | null = null;

function sync(): void {
  const enable = attached && (preview ?? wanted);
  if (enable === applied) return;
  // Never turn kiosk mode *off* unless we were the ones who turned it on.
  if (!enable && applied !== true) {
    applied = enable;
    return;
  }
  applied = enable;
  window.dispatchEvent(new CustomEvent('hass-kiosk-mode', { detail: { enable } }));
}

export function setKioskWanted(value: boolean): void {
  wanted = value;
  sync();
}

export function setAttached(value: boolean): void {
  attached = value;
  sync();
}

/**
 * Open Home Assistant's sidebar anyway -- the way out of kiosk mode.
 *
 * `hass-toggle-menu` has to cross our shadow root to reach the app shell,
 * hence `composed`. In kiosk mode it opens the modal drawer.
 */
export function openHomeAssistantSidebar(from: HTMLElement): void {
  from.dispatchEvent(new CustomEvent('hass-toggle-menu', { bubbles: true, composed: true, detail: { open: true } }));
}

/** Whether Home Assistant's sidebar is hidden in this tab just now. */
export function kioskActive(): boolean {
  return applied === true;
}

/**
 * Hide or show Home Assistant's sidebar in this tab only, whatever the
 * dashboard is set to -- an admin previewing the wall on a PC. Nothing is
 * stored: other tabs, and this one after a reload, are as configured.
 * Returns whether it is hidden now.
 */
export function toggleKioskPreview(): boolean {
  preview = !kioskActive();
  sync();
  return kioskActive();
}
