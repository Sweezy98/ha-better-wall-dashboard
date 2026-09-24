import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import type { DashboardUser } from '../../config/types';
import { useConnection, useT } from '../../hooks/useHa';
import { CheckField, SelectField } from './fields';
import { StyledGroup } from './fields.styled';

const StyledTable = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1.2fr) auto auto;
  gap: ${u(0.5)} ${u(1.2)};
  align-items: center;
  font-size: ${u(0.9)};

  .head {
    color: ${({ theme }) => theme.text.secondary};
    font-size: ${u(0.8)};
  }

  .badge {
    margin-left: ${u(0.5)};
    padding: 0 ${u(0.4)};
    border-radius: ${u(0.4)};
    background: ${({ theme }) => theme.bubble.background};
    font-size: ${u(0.7)};
    color: ${({ theme }) => theme.text.secondary};
  }
`;

/**
 * Who sees which dashboard, who gets it full screen, and whose Home
 * Assistant opens on it.
 *
 * Saved immediately, row by row, rather than with the dashboard: these are
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
    async (user: DashboardUser, patch: Partial<Pick<DashboardUser, 'dashboard' | 'kiosk' | 'default_panel'>>) => {
      if (!connection) return;
      setUsers(list => list?.map(item => (item.id === user.id ? { ...item, ...patch } : item)) ?? null);
      const result = await connection.sendMessagePromise<Pick<DashboardUser, 'dashboard' | 'kiosk' | 'default_panel'>>({
        type: 'better_wall_dashboard/save_user',
        user_id: user.id,
        ...patch,
      });
      setUsers(list => list?.map(item => (item.id === user.id ? { ...item, ...result } : item)) ?? null);
    },
    [connection]
  );

  return (
    <StyledGroup>
      <legend>{t('tab_users')}</legend>
      <StyledTable>
        <span className='head'>{t('user')}</span>
        <span className='head'>{t('assigned_dashboard')}</span>
        <span className='head'>{t('kiosk')}</span>
        <span className='head'>{t('start_page')}</span>
        {users?.map(user => (
          <Row key={user.id} user={user} dashboards={dashboards} onSave={save} />
        ))}
      </StyledTable>
    </StyledGroup>
  );
};

const Row: React.FC<{
  user: DashboardUser;
  dashboards: { id: string; name: string }[];
  onSave: (user: DashboardUser, patch: Partial<DashboardUser>) => void;
}> = ({ user, dashboards, onSave }) => {
  const t = useT();
  return (
    <>
      <span>
        {user.name}
        {user.is_admin && <span className='badge'>{t('admin')}</span>}
        {!user.is_active && <span className='badge'>{t('inactive')}</span>}
      </span>
      <SelectField
        label=''
        value={user.dashboard}
        options={dashboards.map(item => ({ value: item.id, label: item.name }))}
        onChange={dashboard => onSave(user, { dashboard })}
      />
      <CheckField label='' value={user.kiosk} onChange={kiosk => onSave(user, { kiosk })} />
      <CheckField label='' value={Boolean(user.default_panel)} onChange={default_panel => onSave(user, { default_panel })} />
    </>
  );
};

export default UsersForm;
