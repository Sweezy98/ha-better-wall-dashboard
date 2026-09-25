import { css } from 'styled-components';

/** The light around the pointer, laid over the surface's own sheen (see glow.ts). */
const glowLayers = css`
  background-image:
    radial-gradient(120px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0)),
    var(--own-sheen, none);
`;

/**
 * The wash a button gets under a mouse and while pressed.
 *
 * Hover only where the pointer can hover: on a touch screen `:hover` sticks
 * to whatever was tapped last. Hovered, it also brightens around the
 * pointer -- a glow that follows the mouse across the glass. Pressed wins
 * over hovered, and a disabled button gets neither.
 */
export const pressable = (hover: string, pressed: string) => css`
  transition: background-color 0.2s ease;

  @media (hover: hover) {
    &:hover:enabled {
      background-color: ${hover};
      ${glowLayers}
    }
  }

  &:active:enabled {
    background-color: ${pressed};
  }
`;

/**
 * The same hover for a surface that is not a button -- a notification card,
 * which is swiped rather than pressed. It needs `data-glow` too, so the
 * pointer is followed on it.
 */
export const hoverable = (hover: string) => css`
  transition: background-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background-color: ${hover};
      ${glowLayers}
    }
  }
`;
