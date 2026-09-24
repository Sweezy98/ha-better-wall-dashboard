import type { DefaultTheme } from 'styled-components';

/**
 * Every length on the dashboard is a multiple of one unit, `--u`.
 *
 * The dashboard measures itself and sets `--u` once per resize (see
 * `useUnit`), so a 1280x800 tablet and a 2560x1440 monitor draw the same
 * layout at their own scale, and nothing re-renders to do it. The old
 * Lovelace version sized cards in pixels and percentages mixed, which is how
 * containers came to be measured before they had a size.
 */
export const u = (n: number): string => `calc(var(--u) * ${n})`;

const theme: DefaultTheme = {
  font: 'var(--ha-font-family-body, Roboto, Noto, sans-serif)',
  // Measured from the reference screenshot: over the page, a card is white at
  // about 4 %, the graph card inside the sidebar another 3.5 %, the graph's
  // header 10 % and a bubble button 5 %.
  card: {
    background: 'rgba(255, 255, 255, 0.04)',
    shadow:
      '0.5px 0.5px 1px 0px rgba(255, 255, 255, 0.40) inset, -0.5px -0.5px 1px 0px rgba(255, 255, 255, 0.10) inset, 0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
    border: '0.5px solid rgba(255, 255, 255, 0.05)',
  },
  bubble: {
    // Bubble Card's button, as the reference config themed it.
    background: 'rgba(255, 255, 255, 0.05)',
    inset: 'rgba(255, 255, 255, 0.035)',
    header: 'rgba(255, 255, 255, 0.1)',
    icon: 'rgba(255, 255, 255, 0.08)',
    pressed: 'rgba(255, 255, 255, 0.14)',
  },
  text: {
    primary: 'rgba(255, 255, 255, 0.92)',
    secondary: 'rgba(255, 255, 255, 0.62)',
    muted: 'rgba(255, 255, 255, 0.4)',
  },
  colors: {
    temperature: '#03a9f4',
    humidity: '#00ff70',
    alert: '#ff4d4d',
    accent: '#4aa8e0',
    warm: '#ffb43c',
    calendar: '#03a9f4',
  },
  popup: {
    background: 'rgba(28, 28, 32, 0.82)',
    backdrop: 'rgba(0, 0, 0, 0.45)',
  },
  common: {
    blur: '20px',
  },
};

export default theme;
