import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import Popup from '../base/popup/Popup';
import Icon from '../base/icon/Icon';
import { useLanguage, useT } from '../../hooks/useHa';
import type { Notification } from '../../hooks/useNotifications';
import { formatRelative } from '../../lib/format';
import { pressable } from '../../themes/interaction';
import { useSwipeDismiss } from '../../hooks/useSwipeDismiss';

const StyledItem = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${u(0.2)} ${u(0.8)};
  padding: ${u(0.8)} ${u(0.8)} ${u(0.8)} ${u(1)};
  cursor: grab;
  user-select: none;
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

  h4,
  time,
  .message {
    grid-column: 1;
    min-width: 0;
  }

  /* Its own column, so a long line wraps before it rather than under it. */
  .message {
    font-size: ${u(1.08)};
    white-space: pre-line;
    overflow-wrap: anywhere;
    color: ${({ theme }) => theme.text.primary};
  }

  /* Centred on the whole card, however many lines the message takes. */
  button {
    grid-row: 1 / 4;
    grid-column: 2;
    align-self: center;
    width: ${u(3)};
    height: ${u(3)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.5)};
    color: ${({ theme }) => theme.text.secondary};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
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

/** One message: swipe it away either way, or press its X. */
const NotificationCard: React.FC<{ item: Notification; onDismiss: () => void }> = ({ item, onDismiss }) => {
  const t = useT();
  const language = useLanguage();
  const swipe = useSwipeDismiss(onDismiss);
  return (
    <StyledItem style={swipe.style} {...swipe.handlers}>
      <h4>{item.title || t('notifications')}</h4>
      <button type='button' onClick={onDismiss} aria-label={t('dismiss')} title={t('dismiss')}>
        <Icon icon='mdi:close' />
      </button>
      <time dateTime={item.created_at}>{formatRelative(new Date(item.created_at), language)}</time>
      <p className='message'>{item.message.replace(/\*\*|__|`/g, '')}</p>
    </StyledItem>
  );
};

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
        <NotificationCard key={item.notification_id} item={item} onDismiss={() => onDismiss(item.notification_id)} />
      ))}
    </Popup>
  );
};

export default NotificationsPopup;
