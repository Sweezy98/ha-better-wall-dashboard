import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { NamedEntity } from '../../../config/types';
import Bubble from '../../base/bubble/Bubble';
import { StyledSidebarTitle } from '../Sidebar.styled';
import { domainIcon, toggleService, useCallService, useEntity, useT } from '../../../hooks/useHa';

/** Two to a row: four actions make two rows, six make three. */
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${u(0.6)};
`;

const ACTIVE_STATES = new Set(['on', 'open', 'unlocked', 'playing', 'home', 'heat', 'cool', 'auto']);

const QuickAction: React.FC<{ action: NamedEntity }> = ({ action }) => {
  const entity = useEntity(action.entity);
  const callService = useCallService();
  const t = useT();
  const active = entity ? ACTIVE_STATES.has(entity.state) : false;
  const state = !entity ? t('not_found') : entity.state === 'on' ? t('on') : entity.state === 'off' ? t('off') : entity.state;
  return (
    <Bubble
      name={action.name || (entity?.attributes.friendly_name as string) || action.entity}
      state={state}
      icon={action.icon || (entity?.attributes.icon as string | undefined) || domainIcon(action.entity)}
      active={active}
      onClick={
        entity
          ? () => {
              const [domain, service] = toggleService(action.entity);
              void callService(domain, service, undefined, { entity_id: action.entity });
            }
          : undefined
      }
    />
  );
};

const QuickActions: React.FC<{ actions: NamedEntity[] }> = ({ actions }) => {
  const t = useT();
  const configured = actions.filter(action => action.entity);
  if (!configured.length) return null;
  return (
    <div>
      <StyledSidebarTitle>{t('quick_actions')}</StyledSidebarTitle>
      <StyledGrid>
        {configured.map(action => (
          <QuickAction key={action.id} action={action} />
        ))}
      </StyledGrid>
    </div>
  );
};

export default memo(QuickActions);
