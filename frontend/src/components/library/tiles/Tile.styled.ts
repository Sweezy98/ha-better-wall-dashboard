import styled, { css } from 'styled-components';
import { pressable } from '../../../themes/interaction';
import { surfaceGlass } from '../../../themes/glass';
import { u } from '../../../themes/default.theme';

/**
 * The glass every card and button in the content area is made of -- the
 * graph tile's -- so a light that is on, a graph and a bottom button all sit
 * on the same surface. State shows in a tile's icon, never in its glass.
 */
export const tileSurface = css`
  border-radius: ${u(1.1)};
  ${surfaceGlass}
`;

/** The same glass, pressed and hovered alike wherever it is a button. */
export const tileButton = css`
  ${({ theme }) => pressable(theme.bubble.background, theme.bubble.hover)}
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
