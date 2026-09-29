import { useHass } from '@hakit/core';
import { useShallow } from 'zustand/react/shallow';
import styled, { useTheme } from 'styled-components';
import { u } from '../../themes/default.theme';
import Popup from '../base/popup/Popup';
import Bubble from '../base/bubble/Bubble';
import { useEntity, useLanguage, useT } from '../../hooks/useHa';
import { isOpen } from '../../lib/openings';
import { formatRelative } from '../../lib/format';

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${u(0.6)};
`;

/** By device class, which is what tells a door from a window; the entity id does not. */
function openingIcon(deviceClass: string | undefined, open: boolean): string {
  switch (deviceClass) {
    case 'door':
      return open ? 'mdi:door-open' : 'mdi:door-closed';
    case 'garage_door':
      return open ? 'mdi:garage-open' : 'mdi:garage';
    case 'lock':
      return open ? 'mdi:lock-open-variant' : 'mdi:lock';
    default:
      return open ? 'mdi:window-open-variant' : 'mdi:window-closed-variant';
  }
}

const Opening: React.FC<{ entityId: string }> = ({ entityId }) => {
  const entity = useEntity(entityId);
  const t = useT();
  const language = useLanguage();
  const theme = useTheme();
  const open = isOpen(entityId, entity?.state);
  const name = (entity?.attributes.friendly_name as string) || entityId;
  const since = entity ? formatRelative(new Date(entity.last_changed), language) : '';
  const icon = openingIcon(entity?.attributes.device_class as string | undefined, Boolean(open));
  return (
    <Bubble
      name={name}
      state={open === null ? t('unavailable') : `${open ? t('open') : t('closed')} · ${since}`}
      icon={(entity?.attributes.icon as string | undefined) ?? icon}
      iconColor={open ? theme.colors.alert : undefined}
      active={Boolean(open)}
    />
  );
};

const StyledNone = styled.p`
  margin: 0;
  padding: ${u(1)} 0;
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
`;

/** Every configured window and door, open ones first -- or, set so, only the open ones. */
const OpeningsPopup: React.FC<{ open: boolean; onClose: () => void; entities: string[]; onlyOpen?: boolean }> = ({
  open,
  onClose,
  entities,
  onlyOpen = false,
}) => {
  const t = useT();
  return (
    <Popup open={open} onClose={onClose} title={t('openings')} icon='mdi:window-open-variant' width={58}>
      <OpeningsList entities={entities} onlyOpen={onlyOpen} />
    </Popup>
  );
};

const OpeningsList: React.FC<{ entities: string[]; onlyOpen: boolean }> = ({ entities, onlyOpen }) => {
  const t = useT();
  const states = useHass(useShallow(state => entities.map(id => state.entities[id]?.state)));
  // Open first, then unknown, then closed; configured order within each.
  const rank = (index: number) => {
    const open = isOpen(entities[index], states[index]);
    return open ? 0 : open === null ? 1 : 2;
  };
  const sorted = entities
    .map((id, index) => ({ id, rank: rank(index) }))
    .filter(item => !onlyOpen || item.rank === 0)
    .sort((a, b) => a.rank - b.rank);
  if (!sorted.length) return <StyledNone>{t('none_open')}</StyledNone>;
  return (
    <StyledList>
      {sorted.map(({ id }) => (
        <Opening key={id} entityId={id} />
      ))}
    </StyledList>
  );
};

export default OpeningsPopup;
