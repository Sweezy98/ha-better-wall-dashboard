import styled, { keyframes } from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';

const rise = keyframes`
  from { opacity: 0; transform: translateY(${u(3)}) scale(0.98); }
  to { opacity: 1; transform: none; }
`;

export const StyledDialog = styled.dialog<{ $width: number; $full: boolean }>`
  /* The dialog is in the top layer, so none of this is relative to the
     dashboard: no transformed ancestor can offset it and no stacking context
     can bury it. */
  width: ${({ $width, $full }) => ($full ? 'calc(100vw - 32px)' : `min(calc(100vw - 32px), ${u($width)})`)};
  max-width: ${({ $full }) => ($full ? '1600px' : 'none')};
  /* fit-content, not auto: a modal dialog is positioned with inset: 0, and
     height: auto would stretch it from top to bottom whatever it holds. */
  height: ${({ $full }) => ($full ? 'calc(100dvh - 32px)' : 'fit-content')};
  max-height: ${({ $full }) => ($full ? 'none' : 'min(calc(100dvh - 32px), 92dvh)')};
  padding: 0;
  border: ${({ theme }) => theme.card.border};
  border-radius: ${u(1.8)};
  background: ${({ theme }) => theme.popup.background};
  backdrop-filter: blur(${({ theme }) => theme.common.blur});
  -webkit-backdrop-filter: blur(${({ theme }) => theme.common.blur});
  box-shadow: 0 ${u(1)} ${u(4)} rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.text.primary};
  font-family: ${({ theme }) => theme.font};
  overflow: hidden;

  &[open] {
    display: flex;
    flex-direction: column;
    animation: ${rise} 0.28s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &::backdrop {
    background: ${({ theme }) => theme.popup.backdrop};
  }
`;

export const StyledPopupHeader = styled.header`
  display: flex;
  align-items: center;
  gap: ${u(0.8)};
  padding: ${u(1.2)} ${u(1.2)} ${u(0.8)} ${u(1.4)};
  flex-shrink: 0;
`;

export const StyledPopupIcon = styled.span<{ $color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${u(3.2)};
  height: ${u(3.2)};
  border-radius: 50%;
  background: ${({ theme }) => theme.bubble.icon};
  font-size: ${u(1.7)};
  color: ${({ $color }) => $color ?? 'inherit'};
  flex-shrink: 0;
`;

export const StyledPopupTitle = styled.div`
  flex: 1;
  min-width: 0;

  h2 {
    margin: 0;
    font-size: ${u(1.5)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: ${u(1)};
    color: ${({ theme }) => theme.text.secondary};
    margin-top: ${u(0.15)};
  }
`;

export const StyledPopupClose = styled.button`
  width: ${u(3.4)};
  height: ${u(3.4)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${u(1.8)};
  flex-shrink: 0;
  ${({ theme }) => pressable(theme.bubble.background, theme.bubble.pressed)}
`;

export const StyledPopupBody = styled.div<{ $fixed: boolean }>`
  flex: 1;
  padding: ${u(0.4)} ${u(1.4)} ${u(1.6)};
  font-size: ${u(1.05)};
  overflow-y: ${({ $fixed }) => ($fixed ? 'hidden' : 'auto')};
  overscroll-behavior: contain;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: ${u(0.7)};

  /* Sections keep their size and the body scrolls. A child with its own
     overflow -- the hourly forecast strip -- would otherwise be allowed to
     shrink below its content, and did, to a sliver. */
  > * {
    flex-shrink: 0;
  }
`;

/**
 * The one part of a fixed-body popup that scrolls -- by finger, wheel or
 * mouse drag -- and the only part that gives way when the screen is short.
 */
export const StyledPopupScroll = styled.div`
  ${StyledPopupBody} > & {
    flex: 0 1 auto;
  }

  min-height: ${u(6)};
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
