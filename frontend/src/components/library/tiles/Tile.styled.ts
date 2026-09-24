import styled, { css } from 'styled-components';
import { pressable } from '../../../themes/interaction';
import { u } from '../../../themes/default.theme';

/**
 * The glass every card and button in the content area is made of -- the
 * graph tile's -- so a light that is on, a graph and a bottom button all sit
 * on the same surface. State shows in a tile's icon, never in its glass.
 */
export const tileSurface = css`
  border-radius: ${u(1.1)};
  /* Frosted glass: what is behind it blurred and a little brighter, a sheen
     falling from the top left, a hairline edge and a highlight along the top. */
  background-color: rgba(255, 255, 255, 0.035);
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.015) 55%);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 ${u(0.3)} ${u(1.2)} rgba(0, 0, 0, 0.28);
  box-sizing: border-box;
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
