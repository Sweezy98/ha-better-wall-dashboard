import styled, { css } from 'styled-components';
import { u } from '../../../themes/default.theme';

/**
 * Bubble Card's button, measured from its stylesheet: a 50 px pill, a 38 px
 * icon circle inset by 6 px, the name at 13 px semibold over the state at
 * 12 px and 70 %. Here in units, so it scales with the tablet (at 1080 px of
 * height one unit is 13.5 px, and the pill comes out 50 px as the card's is).
 */
export const StyledBubble = styled.button<{ $interactive: boolean; $compact?: boolean; $background?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
  height: ${u(3.4)};
  border-radius: ${u(1.7)};
  background-color: ${({ theme, $background }) => $background ?? theme.bubble.background};
  overflow: hidden;
  transition: background-color 0.3s ease;
  cursor: ${({ $interactive }) => ($interactive ? 'pointer' : 'default')};
  ${({ $interactive, theme }) =>
    $interactive &&
    css`
      &:active {
        background-color: ${theme.bubble.pressed};
      }
    `}
`;

export const StyledBubbleIcon = styled.span<{ $active: boolean; $color?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${u(2.5)};
  height: ${u(2.5)};
  margin: ${u(0.4)};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bubble.icon};
  overflow: hidden;
  font-size: ${u(1.35)};
  color: ${({ theme, $color }) => $color ?? theme.text.primary};
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  transition:
    opacity 0.3s ease-in-out,
    color 0.3s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledBubbleText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  flex: 1;
  margin: 0 ${u(1)} 0 ${u(0.25)};
  line-height: 1.35;
  pointer-events: none;
`;

export const StyledBubbleName = styled.span`
  font-size: ${u(0.95)};
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledBubbleState = styled.span`
  font-size: ${u(0.88)};
  opacity: 0.7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledBubbleTrailing = styled.span`
  display: flex;
  align-items: center;
  gap: ${u(0.3)};
  margin-right: ${u(0.8)};
  font-size: ${u(0.8)};
  color: ${({ theme }) => theme.text.secondary};
  flex-shrink: 0;
`;
