import styled from 'styled-components';
import { u } from '../../../themes/default.theme';

export const StyledCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border-radius: ${u(1.2)};
  background-color: ${({ theme }) => theme.card.background};
  box-shadow: ${({ theme }) => theme.card.shadow};
  backdrop-filter: blur(${({ theme }) => theme.common.blur});
  -webkit-backdrop-filter: blur(${({ theme }) => theme.common.blur});
  padding: ${u(1)};
  display: flex;
  overflow: hidden;
`;
