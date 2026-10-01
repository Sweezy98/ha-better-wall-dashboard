/**
 * Hiding Home Assistant's toasts -- "webdav is starting…" and the like --
 * while the dashboard is on screen, where a wall tablet has nobody to read
 * them.
 *
 * Home Assistant draws them in `notification-manager`, a dialog it adds to
 * its app element's shadow root when the first one comes. A rule there hides
 * it, so one already showing goes too, and every other page of Home
 * Assistant -- the dashboard left -- has them back as they were. Nothing is
 * intercepted or thrown away.
 */
const STYLE_ID = 'bwd-hide-toasts';

let wanted = false;
let attached = false;

function sync(): void {
  const root = document.querySelector('home-assistant')?.shadowRoot;
  if (!root) return;
  const style = root.getElementById(STYLE_ID);
  if (wanted && attached && !style) {
    const element = document.createElement('style');
    element.id = STYLE_ID;
    element.textContent = 'notification-manager { display: none !important; }';
    root.append(element);
  } else if (!(wanted && attached) && style) {
    style.remove();
  }
}

export function setToastsHidden(value: boolean): void {
  wanted = value;
  sync();
}

export function setToastsAttached(value: boolean): void {
  attached = value;
  sync();
}
