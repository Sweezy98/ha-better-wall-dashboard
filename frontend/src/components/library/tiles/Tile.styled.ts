import styled, { css } from 'styled-components';
import { pressable } from '../../../themes/interaction';
import { surfaceGlass } from '../../../themes/glass';
import { u } from '../../../themes/default.theme';

/**
 * The glass every card and button in the content area is made of -- the
 * graph tile's -- so a light that is on, a graph and a bottom button all sit
 * on the same surface. A tile whose entity is on (`data-on`) has it a shade
 * clearer, and its corner sheen in the colour its icon is lit in
 * (`--on-color`); hovered or pressed, the pointer's wash and glow lie over
 * that as over any sheen.
 */
export const tileSurface = css`
  border-radius: ${u(1.1)};
  ${surfaceGlass}

  &[data-on='true'] {
    background-color: ${({ theme }) => theme.card.on};
    --own-sheen: radial-gradient(
      circle at 0 0,
      color-mix(in srgb, var(--on-color, ${({ theme }) => theme.colors.warm}) 24%, transparent),
      transparent 190px
    );
  }
`;

/** The same glass, pressed and hovered alike wherever it is a button. */
export const tileButton = css`
  ${({ theme }) => pressable(theme.bubble.background, theme.bubble.hover)}
  /* A double tap opens a light: it must not zoom the page instead. */
  touch-action: manipulation;
`;

/** The tile every component sits on, and on its own an empty one. */
export const StyledTile = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  ${tileSurface}
  overflow: hidden;
`;
