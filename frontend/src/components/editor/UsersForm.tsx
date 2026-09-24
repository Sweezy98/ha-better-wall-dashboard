import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import type { DashboardUser } from '../../config/types';
import { useConnection, useT } from '../../hooks/useHa';
import Icon from '../base/icon/Icon';
import { CheckField, SelectField } from './fields';
import { StyledRow } from './fields.styled';
import { StyledDetails } from './editor.styled';
import { ScreenTitle } from './screens/common';

const StyledBadge = styled.span`
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 400;
  background: var(--secondary-background-color, #282828);
  color: var(--secondary-text-color, #9b9b9b);
`;

type UserPatch = Partial<Pick<DashboardUser, 'dashboard' | 'kiosk' | 'default_panel'>>;

/**
 * Who sees which dashboard, who gets it full screen, and whose Home
 * Assistant opens on it.
 *
 * Saved immediately, user by user, rather than with the dashboard: these are
 * settings of a user, not of a dashboard, and "Opens on start" writes the
 * user's own Home Assistant profile.
 */
const UsersForm: React.FC<{ dashboards: { id: string; name: string }[] }> = ({ dashboards }) => {
  const t = useT();
  const connection = useConnection();
  const [users, setUsers] = useState<DashboardUser[] | null>(null);

  useEffect(() => {
    connection
      ?.sendMessagePromise<{ users: DashboardUser[] }>({ type: 'better_wall_dashboard/users' })
      .then(result => setUsers(result.users))
      .catch(() => setUsers([]));
  }, [connection]);

  const save = useCallback(
    async (user: DashboardUser, patch: UserPatch) => {
      if (!connection) return;
      setUsers(list => list?.map(item => (item.id === user.id ? { ...item, ...patch } : item)) ?? null);
      const result = await connection.sendMessagePromise<UserPatch>({
        type: 'better_wall_dashboard/save_user',
        user_id: user.id,
        ...patch,
      });
      setUsers(list => list?.map(item => (item.id === user.id ? { ...item, ...result } : item)) ?? null);
    },
    [connection]
  );

  return (
    <>
      <ScreenTitle title={t('tab_users')} lead={t('lead_users')} />
      {users?.map(user => (
        <StyledDetails key={user.id} open={!user.is_admin || undefined}>
          <summary>
            <Icon className='icon' icon={user.is_admin ? 'mdi:shield-account-outline' : 'mdi:tablet'} />
            <span className='text'>
              <span>
                {user.name}
                {user.is_admin && <StyledBadge>{t('admin')}</StyledBadge>}
                {!user.is_active && <StyledBadge>{t('inactive')}</StyledBadge>}
              </span>
              <span className='secondary'>{dashboards.find(item => item.id === user.dashboard)?.name ?? user.dashboard}</span>
            </span>
          </summary>
          <div className='fold-body'>
            <SelectField
              label={t('assigned_dashboard')}
              value={user.dashboard}
              options={dashboards.map(item => ({ value: item.id, label: item.name }))}
              onChange={dashboard => save(user, { dashboard })}
            />
            <StyledRow>
              <CheckField label={t('kiosk')} hint={t('kiosk_user_hint')} value={user.kiosk} onChange={kiosk => save(user, { kiosk })} />
              <CheckField
                label={t('start_page')}
                hint={t('start_page_hint')}
                value={Boolean(user.default_panel)}
                onChange={default_panel => save(user, { default_panel })}
              />
            </StyledRow>
          </div>
        </StyledDetails>
      ))}
    </>
  );
};

export default UsersForm;
