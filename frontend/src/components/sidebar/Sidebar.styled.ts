import styled from 'styled-components';
import { StyledCardContainer } from '../base/card/Card.styled';
import { u } from '../../themes/default.theme';

/**
 * One column in landscape; in portrait a band across the top in two columns.
 *
 * The same elements either way, so rotating the tablet moves them instead of
 * mounting new ones -- nothing re-subscribes, no graph redraws its history.
 * In landscape the two column wrappers are `display: contents` and every
 * block takes its grid area. In portrait they are two independent stacks:
 * one shared grid made the tall calendar on the right stretch the rows on
 * the left into big empty gaps.
 */
export const StyledSidebarContainer = styled(StyledCardContainer)`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto auto auto auto auto auto minmax(0, 1fr) auto;
  grid-template-areas:
    'header'
    'climate'
    'persons'
    'openings'
    'travel'
    'quick'
    'calendar'
    'footer';
  /* No row-gap: an unconfigured block is an empty area, and a gap would
     still be drawn around it. Spacing sits on the blocks that have content. */
  row-gap: 0;
  padding: ${u(0.9)} ${u(1.1)} ${u(0.6)};
  align-content: start;

  [data-orientation='portrait'] & {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: auto;
    grid-template-areas: none;
    column-gap: ${u(1.4)};
  }
`;

export const StyledColumn = styled.div<{ $side: 'left' | 'right' }>`
  display: contents;

  [data-orientation='portrait'] & {
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    /* The left column alone sets the band's height. The right one is sized
       to contribute nothing, then stretched to what the left one made, and
       its calendar scrolls within that. */
    ${({ $side }) => ($side === 'right' ? 'contain: size;' : '')}
  }

  [data-orientation='portrait'] & > [data-area='calendar'] {
    flex: 1;
  }

  [data-orientation='portrait'] & > [data-area='footer'] {
    margin-top: auto;
  }
`;

export const StyledArea = styled.div<{ $area: string }>`
  grid-area: ${({ $area }) => $area};
  min-width: 0;
  min-height: 0;

  &:not(:empty) {
    padding-bottom: ${u(0.6)};
  }

  /* The last block sits on the card's own padding, not on its own too. */
  &[data-area='footer'] {
    padding-bottom: 0;
  }
`;

export const StyledSidebarTitle = styled.h3`
  margin: ${u(0.5)} 0 ${u(0.2)} ${u(0.2)};
  font-size: ${u(1.2)};
  font-weight: 600;
`;
