import { memo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useHass } from '@hakit/core';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import Icon from '../../base/icon/Icon';
import { useCallService, useT } from '../../../hooks/useHa';
import type { MediaConfig } from '../../../lib/media';
import { remoteCall, sourceTarget, type RemoteKey } from '../../../lib/remote';
import { useRemoteTargets } from '../../../hooks/useRemoteTargets';

/** A physical remote's face, in the details' pills and rounds: the pad, its ring of keys, the volume. */
const StyledRemote = styled.div`
  /* The pad, and its keys in two pairs beside it: low enough to fit under the volume. */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${u(1.2)};
  padding: ${u(0.8)};
  border-radius: ${u(1)};
  background: ${({ theme }) => theme.bubble.background};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: ${u(1.5)};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  button:disabled {
    opacity: 0.35;
  }

  /* The pad: a ring of four arrows round OK, as a remote has it. */
  .pad {
    position: relative;
    flex: none;
    width: ${u(10.4)};
    height: ${u(10.4)};
    border-radius: 50%;
    background: ${({ theme }) => theme.bubble.icon};
  }

  .pad button {
    position: absolute;
    width: ${u(3.2)};
    height: ${u(3.2)};
    background-color: transparent;
    font-size: ${u(1.6)};
  }

  .pad .up {
    top: ${u(0.2)};
    left: 50%;
    transform: translateX(-50%);
  }

  .pad .down {
    bottom: ${u(0.2)};
    left: 50%;
    transform: translateX(-50%);
  }

  .pad .left {
    left: ${u(0.2)};
    top: 50%;
    transform: translateY(-50%);
  }

  .pad .right {
    right: ${u(0.2)};
    top: 50%;
    transform: translateY(-50%);
  }

  .pad .ok {
    left: 50%;
    top: 50%;
    width: ${u(3.9)};
    height: ${u(3.9)};
    transform: translate(-50%, -50%);
    font-size: ${u(1.1)};
    font-weight: 700;
    background-color: ${({ theme }) => theme.bubble.icon};
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.bubble.header};
  }

  .row {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: ${u(0.6)};
  }

  .row button {
    width: ${u(3.6)};
    height: ${u(3.6)};
    font-size: ${u(1.35)};
    background-color: ${({ theme }) => theme.bubble.icon};
  }
`;

interface RemotePadProps {
  config: MediaConfig;
  activeId: string | undefined;
}

/**
 * A remote for what is being watched -- the streaming box, or the TV on one
 * of its own apps (see sourceTarget): the arrows round OK, then back, home,
 * menu and play/pause. Nothing while nothing with a remote is on; the
 * volume is the volume card's, above it.
 */
const RemotePad: React.FC<RemotePadProps> = ({ config, activeId }) => {
  const t = useT();
  const targets = useRemoteTargets(config);
  const players = useHass(useShallow(state => targets.map(target => state.entities[target.player])));
  const states = Object.fromEntries(targets.map((target, index) => [target.player, players[index]]));
  const target = sourceTarget(targets, activeId, states);
  const callService = useCallService();
  if (!target) return null;
  const name =
    config.devices.find(device => device.entity === target.player)?.name ||
    (states[target.player]?.attributes.friendly_name as string | undefined) ||
    target.player;
  const press = (key: RemoteKey) => {
    const call = remoteCall(target, key);
    void callService(call.domain, call.service, call.data, { entity_id: call.entity });
  };
  const key = (name: RemoteKey, icon: string, label: string, className?: string) => (
    <button type='button' className={className} aria-label={label} data-tip={label} onClick={() => press(name)}>
      {name === 'ok' ? 'OK' : <Icon icon={icon} />}
    </button>
  );

  return (
    <section>
      <h3>
        {t('remote')} · {name}
      </h3>
      <StyledRemote>
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
      </StyledRemote>
    </section>
  );
};

export default memo(RemotePad);
