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
  card: {
    border: '0.5px solid rgba(255, 255, 255, 0.05)',
  },
  bubble: {
    // Bubble Card's button, as the reference config themed it.
    background: 'rgba(255, 255, 255, 0.05)',
    inset: 'rgba(255, 255, 255, 0.035)',
    header: 'rgba(255, 255, 255, 0.1)',
    icon: 'rgba(255, 255, 255, 0.08)',
    hover: 'rgba(255, 255, 255, 0.09)',
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
    backdrop: 'rgba(0, 0, 0, 0.62)',
  },
};

export default theme;
