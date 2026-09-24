import styled from 'styled-components';
import { StyledCardContainer } from '../base/card/Card.styled';
import { u } from '../../themes/default.theme';

/**
 * The clock on top and the footer at the foot, always; everything between
 * them in a body that never scrolls -- the calendar gives way instead.
 *
 * In landscape one column. In portrait a band across the top in two columns:
 * the header over the left blocks, the right blocks over the footer. The same
 * elements either way, so rotating the tablet moves them instead of mounting
 * new ones -- nothing re-subscribes, no graph redraws its history.
 */
export const StyledSidebarContainer = styled(StyledCardContainer)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas:
    'header'
    'body'
    'footer';
  padding: ${u(0.9)} ${u(1.1)} ${u(0.6)};

  [data-orientation='portrait'] & {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr) auto;
    grid-template-areas:
      'header right'
      'left right'
      'left footer';
    column-gap: ${u(1.4)};
  }
`;

/**
 * Between header and footer. It does not scroll: the calendar alone takes
 * what height is left and scrolls within it, and on a screen too short even
 * for that, the body is cut off rather than pushing the footer out.
 */
export const StyledBody = styled.div`
  grid-area: body;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;

  /* In portrait both columns are the band's own grid items. */
  [data-orientation='portrait'] & {
    display: contents;
  }
`;

export const StyledColumn = styled.div<{ $side: 'left' | 'right' }>`
  display: contents;

  [data-orientation='portrait'] & {
    grid-area: ${({ $side }) => $side};
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    /* The left column alone sets the band's height. The right one is sized
       to contribute nothing, then stretched to what the left one made, and
       its calendar scrolls within that. */
    ${({ $side }) => ($side === 'right' ? 'contain: size;' : '')}
  }
`;

export const StyledArea = styled.div<{ $area: string }>`
  grid-area: ${({ $area }) => $area};
  min-width: 0;
  /* Every block keeps its content's height; the calendar alone gives way. */
  flex: none;

  &:not(:empty) {
    padding-bottom: ${u(0.6)};
  }

  /* The calendar takes the space that is left and scrolls within it. */
  &[data-area='calendar'] {
    flex: 1 1 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  /* The last block sits on the card's own padding, not on its own too. */
  &[data-area='footer'] {
    padding-bottom: 0;
  }

  [data-orientation='portrait'] &[data-area='footer'] {
    align-self: end;
  }
`;

export const StyledSidebarTitle = styled.h3`
  margin: ${u(0.5)} 0 ${u(0.2)} ${u(0.2)};
  font-size: ${u(1.2)};
  font-weight: 600;
`;
