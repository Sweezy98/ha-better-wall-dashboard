import { css } from 'styled-components';

/**
 * The wash a button gets under a mouse and while pressed.
 *
 * Hover only where the pointer can hover: on a touch screen `:hover` sticks
 * to whatever was tapped last. Hovered, it also brightens around the
 * pointer -- a glow that follows the mouse across the glass, laid over the
 * surface's own sheen (see glow.ts for where the pointer is). Pressed wins
 * over hovered, and a disabled button gets neither.
 */
export const pressable = (hover: string, pressed: string) => css`
  transition: background-color 0.2s ease;

  @media (hover: hover) {
    &:hover:enabled {
      background-color: ${hover};
      background-image:
        radial-gradient(120px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0)),
        var(--own-sheen, none);
    }
  }

  &:active:enabled {
    background-color: ${pressed};
  }
`;
