import styled from 'styled-components';
import { StyledCardContainer } from '../base/card/Card.styled';
import { u } from '../../themes/default.theme';

/**
 * One column in landscape; in portrait a band across the top in two columns.
 *
 * Grid areas rather than two layouts, so rotating the tablet moves the same
 * elements instead of mounting new ones -- nothing re-subscribes, no graph
 * redraws its history.
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
  padding: ${u(1.1)} ${u(1.1)} ${u(0.9)};
  align-content: start;

  [data-orientation='portrait'] & {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: auto auto auto auto minmax(0, 1fr);
    grid-template-areas:
      'header quick'
      'climate quick'
      'persons calendar'
      'openings calendar'
      'travel footer';
    column-gap: ${u(1.4)};
  }
`;

export const StyledArea = styled.div<{ $area: string }>`
  grid-area: ${({ $area }) => $area};
  min-width: 0;
  min-height: 0;

  &:not(:empty) {
    padding-bottom: ${u(0.6)};
  }
`;

export const StyledSidebarTitle = styled.h3`
  margin: ${u(0.5)} 0 ${u(0.2)} ${u(0.2)};
  font-size: ${u(1.2)};
  font-weight: 600;
`;
