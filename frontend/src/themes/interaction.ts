import { css } from 'styled-components';

/**
 * The wash a button gets under a mouse and while pressed.
 *
 * Hover only where the pointer can hover: on a touch screen `:hover` sticks
 * to whatever was tapped last. Pressed wins over hovered, and a disabled
 * button gets neither.
 */
export const pressable = (hover: string, pressed: string) => css`
  transition: background-color 0.2s ease;

  @media (hover: hover) {
    &:hover:enabled {
      background-color: ${hover};
    }
  }

  &:active:enabled {
    background-color: ${pressed};
  }
`;
