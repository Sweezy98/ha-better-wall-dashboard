/**
 * Hide the Notifications entry of Home Assistant's own sidebar, for a user
 * whose sidebar shows only the dashboard.
 *
 * Home Assistant draws that entry for everyone and offers no setting for it,
 * so this reaches into its sidebar's shadow root and adds one rule. Nothing
 * here is supported: every step is looked up, and if Home Assistant ever
 * moves its sidebar, this finds nothing and does nothing -- the entry just
 * shows again.
 */
const STYLE_ID = 'better-wall-dashboard-sidebar';
const RULE = '#sidebar-notifications { display: none !important; }';

function sidebarRoot(): ShadowRoot | null {
  const app = document.querySelector('home-assistant')?.shadowRoot;
  const main = app?.querySelector('home-assistant-main')?.shadowRoot;
  return main?.querySelector('ha-sidebar')?.shadowRoot ?? null;
}

export function setSidebarNotificationsHidden(hidden: boolean): void {
  const root = sidebarRoot();
  if (!root) return;
  const existing = root.getElementById(STYLE_ID);
  if (hidden && !existing) {
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = RULE;
    root.append(style);
  }
  if (!hidden) existing?.remove();
}
