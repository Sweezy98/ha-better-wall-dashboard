import { memo, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { u } from '../../../themes/default.theme';
import { glass } from '../../../themes/glass';
import { useT } from '../../../hooks/useHa';
import { useTick } from '../../../hooks/useNow';

/**
 * mdi:lan-disconnect, drawn here rather than fetched: icons come from Home
 * Assistant, which is exactly what cannot be reached while this is shown.
 */
const LAN_DISCONNECT =
  'M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z';

const breathe = keyframes`
  0%, 100% { opacity: 0.45; transform: scale(0.94); }
  50% { opacity: 1; transform: scale(1); }
`;

const StyledOverlay = styled.div`
  /* A popover in the top layer: over the dashboard and any popup open on it. */
  &:popover-open {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    margin: 0;
    padding: ${u(1.6)};
    border: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(8, 8, 10, 0.72);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: ${({ theme }) => theme.text.primary};
    font-family: ${({ theme }) => theme.font};
    user-select: none;
    -webkit-user-select: none;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${u(0.8)};
    max-width: ${u(34)};
    padding: ${u(2.4)} ${u(2.6)};
    border-radius: ${u(1.8)};
    text-align: center;
    ${glass('rgba(24, 24, 28, 0.62)')}
  }

  .mark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${u(4.6)};
    height: ${u(4.6)};
    margin-bottom: ${u(0.4)};
    border-radius: 50%;
    font-size: ${u(2.3)};
    background: color-mix(in srgb, ${({ theme }) => theme.colors.warm} 16%, transparent);
    color: ${({ theme }) => theme.colors.warm};
    animation: ${breathe} 2s ease-in-out infinite;
  }

  h2 {
    margin: 0;
    font-size: ${u(1.5)};
    font-weight: 600;
  }

  p {
    margin: 0;
    font-size: ${u(1)};
    line-height: 1.45;
    color: ${({ theme }) => theme.text.secondary};
  }

  .since {
    font-size: ${u(0.9)};
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.text.muted};
  }
`;

/** 0:42, 12:05, 1:02:05. */
function elapsed(ms: number): string {
  const seconds = Math.max(0, Math.floor(ms / 1000));
  const pad = (value: number) => String(value).padStart(2, '0');
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours ? `${hours}:${pad(minutes)}:${pad(seconds % 60)}` : `${minutes}:${pad(seconds % 60)}`;
}

/**
 * Over everything while Home Assistant cannot be reached -- a restart, an
 * update, the network: what happened, that it comes back by itself, and for
 * how long it has been gone. Gone again the moment the connection is back.
 */
const ConnectionLost: React.FC<{ since: number }> = ({ since }) => {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const now = useTick(1000);

  useEffect(() => {
    const element = ref.current;
    if (!element?.showPopover) return;
    element.showPopover();
    return () => {
      if (element.matches(':popover-open')) element.hidePopover();
    };
  }, []);

  return (
    <StyledOverlay ref={ref} popover='manual' role='alert' aria-live='assertive'>
      <div className='card'>
        <span className='mark'>
          <svg viewBox='0 0 24 24' width='1em' height='1em' fill='currentColor' aria-hidden='true'>
            <path d={LAN_DISCONNECT} />
          </svg>
        </span>
        <h2>{t('connection_lost')}</h2>
        <p>{t('connection_lost_hint')}</p>
        <span className='since'>{t('connection_lost_since', { time: elapsed(now - since) })}</span>
      </div>
    </StyledOverlay>
  );
};

export default memo(ConnectionLost);
