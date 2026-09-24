import { useState } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import { pressable } from '../../themes/interaction';
import Popup from '../base/popup/Popup';
import Icon from '../base/icon/Icon';
import { useConnection, useT } from '../../hooks/useHa';

const MAX_DIGITS = 8;

const StyledPin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${u(1.2)};
  padding-bottom: ${u(0.4)};

  .dots {
    display: flex;
    gap: ${u(0.8)};
    height: ${u(1.2)};
    align-items: center;
  }

  .dot {
    width: ${u(1)};
    height: ${u(1)};
    border-radius: 50%;
    background: ${({ theme }) => theme.text.primary};
  }

  .hint {
    min-height: 1.4em;
    font-size: ${u(1)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .hint.error {
    color: ${({ theme }) => theme.colors.alert};
  }
`;

const StyledKeypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, ${u(4.6)});
  gap: ${u(0.8)};

  button {
    width: ${u(4.6)};
    height: ${u(4.6)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.8)};
    background: ${({ theme }) => theme.bubble.background};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  button:disabled {
    opacity: 0.35;
  }

  .confirm {
    color: ${({ theme }) => theme.colors.temperature};
  }
`;

interface PinPopupProps {
  open: boolean;
  onClose: () => void;
  /** The dashboard whose PIN is asked for: the one on screen. */
  dashboardId: string;
  /** Whether the dashboard has a PIN; without one only the dev server asks. */
  required: boolean;
  onUnlocked: () => void;
}

/**
 * Asks for the dashboard's PIN before the tablet opens Home Assistant's own
 * sidebar, behind which every setting is. Checked by the integration: the
 * tablet is never sent the PIN, so its login alone cannot read it.
 *
 * The dev server asks for 0000 when the dashboard has no PIN of its own, so
 * the prompt can be tried without setting one.
 */
const PinPopup: React.FC<PinPopupProps> = ({ open, onClose, dashboardId, required, onUnlocked }) => {
  const t = useT();
  const connection = useConnection();
  const [entered, setEntered] = useState('');
  const [hint, setHint] = useState<{ text: string; error: boolean } | null>(null);
  const [checking, setChecking] = useState(false);
  const devPin = import.meta.env.DEV && !required ? '0000' : null;

  const close = () => {
    setEntered('');
    setHint(null);
    onClose();
  };

  const check = async () => {
    if (!entered || checking) return;
    setChecking(true);
    try {
      const result = devPin
        ? { ok: entered === devPin, locked_for: 0 }
        : await connection?.sendMessagePromise<{ ok: boolean; locked_for: number }>({
            type: 'better_wall_dashboard/verify_pin',
            pin: entered,
            dashboard: dashboardId,
          });
      setEntered('');
      if (result?.ok) {
        close();
        onUnlocked();
        return;
      }
      setHint({
        text: result?.locked_for ? t('pin_locked', { seconds: result.locked_for }) : t('pin_wrong'),
        error: true,
      });
    } finally {
      setChecking(false);
    }
  };

  const press = (digit: string) => {
    setHint(null);
    setEntered(value => (value.length < MAX_DIGITS ? value + digit : value));
  };

  return (
    <Popup open={open} onClose={close} title={t('pin_title')} icon='mdi:lock-outline' width={30} idleMs={30_000}>
      <StyledPin
        tabIndex={-1}
        onKeyDown={event => {
          if (/^[0-9]$/.test(event.key)) press(event.key);
          if (event.key === 'Backspace') setEntered(value => value.slice(0, -1));
          if (event.key === 'Enter') void check();
        }}
      >
        <div className='dots' aria-label={t('pin_title')}>
          {Array.from({ length: entered.length }, (_, index) => (
            <span key={index} className='dot' />
          ))}
        </div>
        <div className={hint?.error ? 'hint error' : 'hint'}>{hint?.text ?? ''}</div>
        <StyledKeypad>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(digit => (
            <button key={digit} type='button' onClick={() => press(digit)}>
              {digit}
            </button>
          ))}
          <button type='button' aria-label={t('pin_delete')} disabled={!entered} onClick={() => setEntered(value => value.slice(0, -1))}>
            <Icon icon='mdi:backspace-outline' />
          </button>
          <button type='button' onClick={() => press('0')}>
            0
          </button>
          <button
            type='button'
            className='confirm'
            aria-label={t('pin_confirm')}
            disabled={!entered || checking}
            onClick={() => void check()}
          >
            <Icon icon='mdi:check' />
          </button>
        </StyledKeypad>
      </StyledPin>
    </Popup>
  );
};

export default PinPopup;
