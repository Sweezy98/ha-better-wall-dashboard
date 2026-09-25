/**
 * A message in Home Assistant's own toast, the bar that slides up from the
 * bottom of its pages -- what its `showToast` does: a `hass-notification`
 * event, here sent to the app element that listens for it. Straight there,
 * because whatever asked for the message -- a menu entry -- may be gone from
 * the page by the time it is said.
 *
 * False where there is no Home Assistant page around us (the dev server),
 * so the caller can say it some other way.
 */
export function showHaToast(message: string): boolean {
  const app = document.querySelector('home-assistant');
  if (!app) return false;
  app.dispatchEvent(new CustomEvent('hass-notification', { bubbles: true, composed: true, detail: { message } }));
  return true;
}
