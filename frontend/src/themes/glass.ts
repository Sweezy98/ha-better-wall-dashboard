import { css } from 'styled-components';

/**
 * Frosted glass, the one surface every card, tile and popup is made of: what
 * is behind it blurred and a little brighter, a sheen falling from the top
 * left, a hairline edge and a highlight along the top. `base` is the tint --
 * popups take a darker one, for text read at arm's length.
 */
export const glass = (base: string, blur = 16) => css`
  background-color: ${base};
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.015) 55%);
  backdrop-filter: blur(${blur}px) saturate(140%);
  -webkit-backdrop-filter: blur(${blur}px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.28);
  box-sizing: border-box;
`;
