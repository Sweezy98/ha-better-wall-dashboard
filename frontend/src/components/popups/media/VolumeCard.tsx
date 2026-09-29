import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import Icon from '../../base/icon/Icon';
import { useCallService, useEntity, useT } from '../../../hooks/useHa';
import { fractionAlong, useDragValue } from '../../../hooks/useDragValue';
import { mediaFeatures, playerOn, volumeIcon } from '../../../lib/media';
import type { Volume } from '../../../hooks/useMedia';

const STEPS = 16;

/** A fact tile (icon, label, value) grown by a row of steps and the buttons under it. */
const StyledVolume = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${u(0.7)};
  padding: ${u(0.8)} ${u(0.9)};
  border-radius: ${u(1)};
  background: ${({ theme }) => theme.bubble.background};

  .head {
    display: flex;
    align-items: center;
    gap: ${u(0.5)};
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .head .icon {
    font-size: ${u(1.3)};
  }

  .value {
    font-size: ${u(2.2)};
    font-weight: 700;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(${STEPS}, minmax(0, 1fr));
    gap: ${u(0.25)};
    height: ${u(0.9)};
    cursor: pointer;
    /* The steps take the finger, or the page would swipe instead. */
    touch-action: none;
  }

  .steps[data-disabled='true'] {
    cursor: default;
  }

  .steps span {
    border-radius: ${u(0.2)};
    background: ${({ theme }) => theme.bubble.header};
    transition: background 0.2s ease;
  }

  .steps span[data-lit='true'] {
    background: ${({ theme }) => theme.colors.accent};
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${u(0.6)};
  }

  .buttons button {
    height: ${u(3)};
    border-radius: ${u(1.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.35)};
    background-color: ${({ theme }) => theme.bubble.icon};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  .buttons button[aria-pressed='true'] {
    color: ${({ theme }) => theme.colors.accent};
  }

  .buttons button:disabled {
    opacity: 0.35;
  }
`;

/** How loud, in the receiver's own dB where it has them, with quieter, mute and louder. */
const VolumeCard: React.FC<{ entityId: string; volume: Volume }> = ({ entityId, volume }) => {
  const t = useT();
  const player = useEntity(entityId);
  const callService = useCallService();
  const can = mediaFeatures(player?.attributes.supported_features);
  const on = playerOn(player);
  const call = (service: string, data?: Record<string, unknown>) =>
    void callService('media_player', service, data, { entity_id: entityId });
  const settable = on && can.volumeSet;
  const drag = useDragValue<HTMLDivElement, number>(
    (event, box) => fractionAlong(event, box, 'x'),
    level => settable && call('volume_set', { volume_level: Math.round(level * 100) / 100 }),
    player?.attributes.volume_level
  );
  const level = drag.value ?? volume.level ?? 0;
  const lit = Math.round(level * STEPS);
  return (
    <StyledVolume>
      <div className='head'>
        <Icon className='icon' icon={volumeIcon(volume.level, volume.muted)} />
        <span>{t('media_volume')}</span>
      </div>
      <div className='value'>{volume.muted ? t('media_muted') : volume.text}</div>
      <div className='steps' ref={settable ? drag.ref : undefined} data-disabled={!settable} aria-hidden='true'>
        {Array.from({ length: STEPS }, (_, index) => (
          <span key={index} data-lit={index < lit} />
        ))}
      </div>
      <div className='buttons'>
        <button
          type='button'
          aria-label={t('media_volume_down')}
          disabled={!on || !(can.volumeStep || can.volumeSet)}
          onClick={() => call('volume_down')}
        >
          <Icon icon='mdi:volume-minus' />
        </button>
        <button
          type='button'
          aria-label={t('media_mute')}
          aria-pressed={volume.muted}
          disabled={!on || !can.volumeMute}
          onClick={() => call('volume_mute', { is_volume_muted: !volume.muted })}
        >
          <Icon icon={volume.muted ? 'mdi:volume-off' : 'mdi:volume-mute'} />
        </button>
        <button
          type='button'
          aria-label={t('media_volume_up')}
          disabled={!on || !(can.volumeStep || can.volumeSet)}
          onClick={() => call('volume_up')}
        >
          <Icon icon='mdi:volume-plus' />
        </button>
      </div>
    </StyledVolume>
  );
};

export default memo(VolumeCard);
