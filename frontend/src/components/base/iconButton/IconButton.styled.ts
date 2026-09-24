import styled from 'styled-components';
import { u } from '../../../themes/default.theme';

export const StyledIconButtonBadge = styled.span`
  position: absolute;
  top: ${u(-0.1)};
  right: ${u(-0.1)};
  background-color: ${({ theme }) => theme.colors.alert};
  color: #fff;
  border-radius: ${u(0.6)};
  min-width: ${u(1.2)};
  height: ${u(1.2)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${u(0.7)};
  font-weight: 600;
  line-height: 1;
  padding: 0 ${u(0.35)};
  pointer-events: none;
`;

export const StyledIconButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${u(3)};
  height: ${u(3)};
  border-radius: 50%;
  flex-shrink: 0;
  font-size: ${u(1.5)};
  color: ${({ theme, $active }) => ($active === false ? theme.text.secondary : theme.text.primary)};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.bubble.background};
  }

  &:active {
    background-color: ${({ theme }) => theme.bubble.pressed};
  }
`;
