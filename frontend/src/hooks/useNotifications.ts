import { useCallback, useMemo, useState } from 'react';
import { useSubscription } from './useSubscription';
import { useCallService } from './useHa';

export interface Notification {
  notification_id: string;
  title?: string | null;
  message: string;
  created_at: string;
}

interface NotificationEvent {
  type: 'current' | 'added' | 'removed' | 'updated';
  notifications: Record<string, Notification>;
}

/**
 * Home Assistant's persistent notifications, as "unread messages".
 *
 * Persistent notifications are what an automation already creates for "the
 * washing machine is done" (`persistent_notification.create`), and what stays
 * until somebody dismisses it -- exactly the life of an unread message. The
 * optional prefix keeps Home Assistant's own ("new devices discovered") off
 * the wall.
 */
export function useNotifications(enabled: boolean, prefix: string) {
  const [all, setAll] = useState<Record<string, Notification>>({});
  const callService = useCallService();

  useSubscription<NotificationEvent>(
    enabled ? 'notifications' : null,
    () => ({ type: 'persistent_notification/subscribe' }),
    event => {
      setAll(previous => {
        if (event.type === 'current') return { ...event.notifications };
        const next = { ...previous };
        for (const [id, notification] of Object.entries(event.notifications)) {
          if (event.type === 'removed') delete next[id];
          else next[id] = notification;
        }
        return next;
      });
    }
  );

  const notifications = useMemo(
    () =>
      Object.values(all)
        .filter(item => !prefix || item.notification_id.startsWith(prefix))
        .sort((a, b) => b.created_at.localeCompare(a.created_at)),
    [all, prefix]
  );

  const dismiss = useCallback((id: string) => callService('persistent_notification', 'dismiss', { notification_id: id }), [callService]);
  const dismissAll = useCallback(() => Promise.all(notifications.map(item => dismiss(item.notification_id))), [notifications, dismiss]);

  return { notifications: enabled ? notifications : [], dismiss, dismissAll };
}
