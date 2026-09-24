import { css } from 'styled-components';

/**
 * Frosted glass, the one surface every card, tile and popup is made of: what
 * is behind it showing through a tint -- blurred too where `blur` is given,
 * as popups do -- a sheen in the top left corner, a hairline edge and a highlight along the top. `base` is the tint --
 * popups take a darker one, for text read at arm's length.
 */
export const glass = (base: string, blur = 0) => css`
  background-color: ${base};
  /* The sheen is a fixed size from the top left corner, not a share of the
     surface: stretched over the tall sidebar, a proportional one made it
     lighter than the tiles beside it. */
  background-image: radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0) 190px);
  ${blur ? `backdrop-filter: blur(${blur}px) saturate(140%); -webkit-backdrop-filter: blur(${blur}px) saturate(140%);` : ''}
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.28);
  box-sizing: border-box;
`;

/**
 * The dashboard's own glass: the sidebar, every tile and every bottom button
 * alike -- without a backdrop blur. The tiles sit in the page swiper, whose
 * faded edges are a mask, and a masked ancestor leaves a backdrop filter
 * nothing to blur: theirs never showed. Blurring the sidebar alone made it
 * foggier and lighter than the tiles beside it.
 */
export const surfaceGlass = glass('rgba(255, 255, 255, 0.035)');
