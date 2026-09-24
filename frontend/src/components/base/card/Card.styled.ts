import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { glass } from '../../../themes/glass';

export const StyledCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${u(1.2)};
  ${glass('rgba(255, 255, 255, 0.03)', 20)}
  padding: ${u(1)};
  display: flex;
  overflow: hidden;
`;
