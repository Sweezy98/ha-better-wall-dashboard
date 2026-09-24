import styled from 'styled-components';
import { u } from '../../../themes/default.theme';

/** The glass tile every component sits on, and on its own an empty one. */
export const StyledTile = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${u(1.1)};
  background-color: ${({ theme }) => theme.card.background};
  box-shadow: ${({ theme }) => theme.card.shadow};
  overflow: hidden;
`;
