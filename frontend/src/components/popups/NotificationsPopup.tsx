import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import Popup from '../base/popup/Popup';
import Icon from '../base/icon/Icon';
import { useLanguage, useT } from '../../hooks/useHa';
import type { Notification } from '../../hooks/useNotifications';
import { formatRelative } from '../../lib/format';

const StyledItem = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${u(0.2)} ${u(0.8)};
  padding: ${u(0.8)} ${u(0.8)} ${u(0.8)} ${u(1)};
  border-radius: ${u(1.2)};
  background: ${({ theme }) => theme.bubble.background};

  h4 {
    margin: 0;
    font-size: ${u(1.14)};
    font-weight: 600;
  }

  time {
    font-size: ${u(0.9)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .message {
    grid-column: 1 / -1;
    font-size: ${u(1.08)};
    white-space: pre-line;
    color: ${({ theme }) => theme.text.primary};
    user-select: text;
  }

  button {
    grid-row: 1 / 3;
    grid-column: 2;
    width: ${u(2.4)};
    height: ${u(2.4)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.44)};
    color: ${({ theme }) => theme.text.secondary};
  }

  button:active {
    background: ${({ theme }) => theme.bubble.pressed};
  }
`;

const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    padding: ${u(0.4)} ${u(1)};
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.background};
    font-size: ${u(1.02)};
  }
`;

const StyledEmpty = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
  padding: ${u(2)} 0;
`;

interface NotificationsPopupProps {
  open: boolean;
  onClose: () => void;
  notifications: Notification[];
  onDismiss: (id: string) => void;
  onDismissAll: () => void;
}

/**
 * The unread messages. Newest first; dismissing one here dismisses it
 * everywhere, because it is Home Assistant's own notification.
 *
 * Messages are shown as plain text. Home Assistant writes notifications in
 * Markdown, but rendering Markdown means rendering links, and a link on a
 * wall tablet leads out of the dashboard with nobody holding a keyboard.
 */
const NotificationsPopup: React.FC<NotificationsPopupProps> = ({ open, onClose, notifications, onDismiss, onDismissAll }) => {
  const t = useT();
  const language = useLanguage();
  return (
    <Popup open={open} onClose={onClose} title={t('notifications')} icon='mdi:bell' width={54}>
      {notifications.length === 0 && <StyledEmpty>{t('no_notifications')}</StyledEmpty>}
      {notifications.length > 1 && (
        <StyledActions>
          <button type='button' onClick={onDismissAll}>
            {t('dismiss_all')}
          </button>
        </StyledActions>
      )}
      {notifications.map(item => (
        <StyledItem key={item.notification_id}>
          <h4>{item.title || t('notifications')}</h4>
          <button type='button' onClick={() => onDismiss(item.notification_id)} aria-label={t('dismiss')} title={t('dismiss')}>
            <Icon icon='mdi:check' />
          </button>
          <time dateTime={item.created_at}>{formatRelative(new Date(item.created_at), language)}</time>
          <p className='message'>{item.message.replace(/\*\*|__|`/g, '')}</p>
        </StyledItem>
      ))}
    </Popup>
  );
};

export default NotificationsPopup;
