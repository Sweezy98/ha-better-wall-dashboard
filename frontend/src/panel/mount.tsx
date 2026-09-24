import { createRoot } from 'react-dom/client';
import App, { type AppProps } from '../App';
import { setAttached } from './kiosk';

/**
 * The dashboard is mounted once per page and never unmounted.
 *
 * Home Assistant creates a fresh panel element each time the dashboard is
 * navigated to, and throws the old one away. Mounting React into each of them
 * would reconnect every time -- and ha-component-kit remembers, at module
 * level, which URLs it has already connected to, so the second mount would
 * not reconnect at all and the dashboard would come back blank. Instead one
 * container holds one React root for the life of the page, and each new panel
 * element simply adopts it.
 *
 * Moving that container between shadow roots is safe because the styles
 * travel inside it as text (see `disableCSSOMInjection` in App): rules
 * inserted through the CSSOM belong to the sheet object, and a <style>
 * element that moves gets a new one.
 */
let container: HTMLDivElement | null = null;

const HOST_CSS = `
  :host {
    display: block;
    position: relative;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    background: #111;
  }
  .bwd-host, .bwd-root { width: 100%; height: 100%; }
`;

export function attach(element: HTMLElement, props: Omit<AppProps, 'styleTarget'>): void {
  const shadow = element.shadowRoot ?? element.attachShadow({ mode: 'open' });
  if (!shadow.querySelector('style[data-host]')) {
    const style = document.createElement('style');
    style.dataset.host = '';
    style.textContent = HOST_CSS;
    shadow.append(style);
  }
  if (!container) {
    container = document.createElement('div');
    container.className = 'bwd-host';
    const styles = document.createElement('div');
    const root = document.createElement('div');
    root.className = 'bwd-root';
    container.append(styles, root);
    createRoot(root).render(<App {...props} styleTarget={styles} />);
  }
  shadow.append(container);
  setAttached(true);
}

export function detach(element: HTMLElement): void {
  // Only the element that currently holds the dashboard gives it up. Home
  // Assistant can attach the new panel before it removes the old one.
  if (container && element.shadowRoot?.contains(container)) setAttached(false);
}
