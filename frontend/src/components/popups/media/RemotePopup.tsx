import { useState } from 'react';
import { useHass } from '@hakit/core';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import Popup from '../../base/popup/Popup';
import Icon from '../../base/icon/Icon';
import Segmented from '../../base/segmented/Segmented';
import { useCallService, useEntity, useT } from '../../../hooks/useHa';
import { playerOn, type MediaConfig } from '../../../lib/media';
import { defaultTarget, remoteCall, type RemoteKey } from '../../../lib/remote';
import { useRemoteTargets } from '../../../hooks/useRemoteTargets';

/** A physical remote's face, in the details' pills and rounds: the pad, its ring of keys, the volume. */
const StyledRemote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${u(1.2)};
  padding: ${u(0.4)} 0 ${u(0.6)};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: ${u(1.5)};
    background-color: ${({ theme }) => theme.bubble.background};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  button:disabled {
    opacity: 0.35;
  }

  /* The pad: a ring of four arrows round OK, as a remote has it. */
  .pad {
    position: relative;
    width: ${u(17)};
    height: ${u(17)};
    border-radius: 50%;
    background: ${({ theme }) => theme.bubble.background};
  }

  .pad button {
    position: absolute;
    width: ${u(5)};
    height: ${u(5)};
    background-color: transparent;
    font-size: ${u(2)};
  }

  .pad .up {
    top: ${u(0.4)};
    left: 50%;
    transform: translateX(-50%);
  }

  .pad .down {
    bottom: ${u(0.4)};
    left: 50%;
    transform: translateX(-50%);
  }

  .pad .left {
    left: ${u(0.4)};
    top: 50%;
    transform: translateY(-50%);
  }

  .pad .right {
    right: ${u(0.4)};
    top: 50%;
    transform: translateY(-50%);
  }

  .pad .ok {
    left: 50%;
    top: 50%;
    width: ${u(6.4)};
    height: ${u(6.4)};
    transform: translate(-50%, -50%);
    font-size: ${u(1.1)};
    font-weight: 700;
    background-color: ${({ theme }) => theme.bubble.icon};
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.bubble.header};
  }

  .row {
    display: flex;
    gap: ${u(1)};
  }

  .row button {
    width: ${u(3.8)};
    height: ${u(3.8)};
  }
`;

interface RemotePopupProps {
  open: boolean;
  onClose: () => void;
  config: MediaConfig;
  activeId: string | undefined;
}

/**
 * A remote for the source in use -- the streaming box, the TV: the arrows
 * round OK, back, home and menu, play and pause, and the system's volume.
 */
const RemotePopup: React.FC<RemotePopupProps> = ({ open, onClose, config, activeId }) => {
  const t = useT();
  const targets = useRemoteTargets(config);
  const entities = useHass(state => state.entities);
  const [chosen, setChosen] = useState<string | null>(null);
  const target = targets.find(item => item.player === chosen) ?? defaultTarget(targets, activeId, id => playerOn(entities[id]));
  const callService = useCallService();
  const volume = useEntity(config.volume || undefined);
  const nameOf = (player: string) =>
    config.devices.find(device => device.entity === player)?.name ||
    (entities[player]?.attributes.friendly_name as string | undefined) ||
    player;
  const press = (key: RemoteKey) => {
    if (!target) return;
    const call = remoteCall(target, key);
    void callService(call.domain, call.service, call.data, { entity_id: call.entity });
  };
  const loudness = (service: string, data?: Record<string, unknown>) =>
    config.volume && void callService('media_player', service, data, { entity_id: config.volume });
  const key = (name: RemoteKey, icon: string, label: string, className?: string) => (
    <button type='button' className={className} aria-label={label} data-tip={label} disabled={!target} onClick={() => press(name)}>
      {name === 'ok' ? 'OK' : <Icon icon={icon} />}
    </button>
  );

  return (
    <Popup
      open={open}
      onClose={onClose}
      title={t('remote')}
      subtitle={target ? nameOf(target.player) : undefined}
      icon='mdi:remote-tv'
      width={34}
    >
      <StyledRemote>
        {targets.length > 1 && target && (
          <Segmented
            label={t('remote')}
            value={target.player}
            onChange={setChosen}
            options={targets.map(item => ({ value: item.player, label: nameOf(item.player) }))}
          />
        )}
        <div className='pad'>
          {key('up', 'mdi:chevron-up', t('remote_up'), 'up')}
          {key('left', 'mdi:chevron-left', t('remote_left'), 'left')}
          {key('ok', '', 'OK', 'ok')}
          {key('right', 'mdi:chevron-right', t('remote_right'), 'right')}
          {key('down', 'mdi:chevron-down', t('remote_down'), 'down')}
        </div>
        <div className='row'>
          {key('back', 'mdi:arrow-u-left-top', t('remote_back'))}
          {key('home', 'mdi:home', t('remote_home'))}
          {key('menu', 'mdi:menu', t('remote_menu'))}
          {key('playPause', 'mdi:play-pause', t('media_play'))}
        </div>
        {volume && (
          <div className='row'>
            <button type='button' aria-label={t('media_volume_down')} onClick={() => loudness('volume_down')}>
              <Icon icon='mdi:volume-minus' />
            </button>
            <button
              type='button'
              aria-label={t('media_mute')}
              onClick={() => loudness('volume_mute', { is_volume_muted: volume.attributes.is_volume_muted !== true })}
            >
              <Icon icon={volume.attributes.is_volume_muted === true ? 'mdi:volume-off' : 'mdi:volume-mute'} />
            </button>
            <button type='button' aria-label={t('media_volume_up')} onClick={() => loudness('volume_up')}>
              <Icon icon='mdi:volume-plus' />
            </button>
          </div>
        )}
      </StyledRemote>
    </Popup>
  );
};

export default RemotePopup;
