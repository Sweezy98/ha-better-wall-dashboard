import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { surfaceGlass } from '../../../themes/glass';

export const StyledCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${u(1.2)};
  ${surfaceGlass}
  padding: ${u(1)};
  display: flex;
  overflow: hidden;
`;
