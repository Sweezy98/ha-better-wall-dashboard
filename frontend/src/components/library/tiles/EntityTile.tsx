import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { TileProps } from '../registry';
import { StyledTile } from './Tile.styled';
import Icon from '../../base/icon/Icon';
import { domainIcon, toggleService, useCallService, useEntity, useT } from '../../../hooks/useHa';

const ACTIVE = new Set(['on', 'open', 'opening', 'unlocked', 'playing', 'heat', 'cool', 'heat_cool', 'auto', 'home']);

const StyledButton = styled(StyledTile).attrs({ as: 'button', type: 'button' })<{ $active: boolean; $glow?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${u(0.8)};
  text-align: left;
  background-color: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.16)' : undefined)};
  transition: background-color 0.3s ease;

  &:active {
    transform: scale(0.98);
  }

  .icon {
    width: ${u(2.6)};
    height: ${u(2.6)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.4)};
    background: ${({ theme }) => theme.bubble.icon};
    color: ${({ $active, $glow, theme }) => ($active ? ($glow ?? theme.colors.warm) : theme.text.secondary)};
  }

  .name {
    font-size: ${u(0.9)};
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .state {
    font-size: ${u(0.8)};
    color: ${({ theme }) => theme.text.secondary};
  }
`;

/**
 * Any entity, as a tile that toggles it.
 *
 * Deliberately generic: the dedicated device controls come later, as their
 * own library entries. A light shows the colour it is actually lit in.
 */
const EntityTile: React.FC<TileProps> = ({ tile }) => {
  const entity = useEntity(tile.entity || undefined);
  const callService = useCallService();
  const t = useT();
  const active = entity ? ACTIVE.has(entity.state) : false;
  const rgb = entity?.attributes.rgb_color as [number, number, number] | undefined;
  const glow = active && rgb ? `rgb(${rgb.join(',')})` : undefined;
  const state = !entity ? t('not_found') : entity.state === 'on' ? t('on') : entity.state === 'off' ? t('off') : entity.state;
  return (
    <StyledButton
      $active={active}
      $glow={glow}
      disabled={!entity}
      onClick={() => {
        const [domain, service] = toggleService(tile.entity);
        void callService(domain, service, undefined, { entity_id: tile.entity });
      }}
    >
      <span className='icon'>
        <Icon icon={tile.icon || (entity?.attributes.icon as string | undefined) || domainIcon(tile.entity)} />
      </span>
      <span>
        <div className='name'>{tile.name || (entity?.attributes.friendly_name as string) || tile.entity}</div>
        <div className='state'>{state}</div>
      </span>
    </StyledButton>
  );
};

export default memo(EntityTile);
