import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import Icon from '../../base/icon/Icon';
import { useCallService, useEntity, useT } from '../../../hooks/useHa';
import { mediaFeatures, playerOn } from '../../../lib/media';

/**
 * The cover's pills (CoverButtons), with play and pause the round button in
 * the middle, ringed in the accent while it plays. In full, as a player's
 * own "now playing" has them: shuffle and repeat, then previous, play,
 * next and stop -- the extras round, skipping a wide pill either side of
 * play, which stays in the middle whatever the player offers.
 */
const StyledControls = styled.div<{ $large: boolean; $full: boolean }>`
  display: ${({ $full }) => ($full ? 'grid' : 'flex')};
  grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(0, 1.6fr) auto minmax(0, 1.6fr) repeat(2, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: ${({ $large }) => u($large ? 0.8 : 0.5)};

  button {
    flex: 1 1 0;
    min-width: 0;
    height: ${({ $large }) => u($large ? 3.4 : 2.8)};
    border-radius: ${({ $large }) => u($large ? 1.7 : 1.4)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ $large }) => u($large ? 1.45 : 1.35)};
    background-color: ${({ theme, $large }) => ($large ? theme.bubble.background : theme.bubble.icon)};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  button:disabled {
    opacity: 0.35;
  }

  .skip {
    width: 100%;
  }

  .round {
    flex: none;
    width: ${({ $large }) => u($large ? 3.4 : 2.8)};
  }

  button[aria-pressed='true'] {
    color: ${({ theme }) => theme.colors.accent};
  }

  .main {
    flex: none;
    width: ${({ $large }) => u($large ? 4.4 : 3.6)};
    height: ${({ $large }) => u($large ? 4.4 : 3.6)};
    border-radius: 50%;
    font-size: ${({ $large }) => u($large ? 1.9 : 1.6)};
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.bubble.header};
    transition: box-shadow 0.3s ease;
  }

  .main[data-playing='true'] {
    color: ${({ theme }) => theme.colors.accent};
    box-shadow:
      inset 0 0 0 2px ${({ theme }) => theme.colors.accent},
      0 0 ${u(1.2)} color-mix(in srgb, ${({ theme }) => theme.colors.accent} 35%, transparent);
  }
`;

const REPEAT_NEXT: Record<string, string> = { off: 'all', all: 'one', one: 'off' };
const REPEAT_ICON: Record<string, string> = { off: 'mdi:repeat-off', all: 'mdi:repeat', one: 'mdi:repeat-once' };

interface MediaControlsProps {
  entityId: string | undefined;
  /** Shuffle, repeat and stop too, as the details have them. */
  full?: boolean;
  large?: boolean;
  className?: string;
}

/** Previous, play or pause, and next for whatever plays -- in the details also shuffle, repeat and stop. */
const MediaControls: React.FC<MediaControlsProps> = ({ entityId, full = false, large = false, className }) => {
  const t = useT();
  const player = useEntity(entityId);
  const callService = useCallService();
  const attributes = (player?.attributes ?? {}) as Record<string, unknown>;
  const can = mediaFeatures(attributes.supported_features);
  const on = playerOn(player);
  const playing = player?.state === 'playing';
  const call = (service: string, data?: Record<string, unknown>) =>
    entityId && void callService('media_player', service, data, { entity_id: entityId });
  const repeat = typeof attributes.repeat === 'string' ? attributes.repeat : 'off';

  return (
    <StyledControls $large={large} $full={full} className={className}>
      {full && !can.shuffle && <span />}
      {full && can.shuffle && (
        <button
          className='round'
          type='button'
          aria-label={t('media_shuffle')}
          data-tip={t('media_shuffle')}
          aria-pressed={attributes.shuffle === true}
          disabled={!on}
          onClick={() => call('shuffle_set', { shuffle: attributes.shuffle !== true })}
        >
          <Icon icon={attributes.shuffle === true ? 'mdi:shuffle-variant' : 'mdi:shuffle-disabled'} />
        </button>
      )}
      {full && !can.repeat && <span />}
      {full && can.repeat && (
        <button
          className='round'
          type='button'
          aria-label={t('media_repeat')}
          data-tip={t('media_repeat')}
          aria-pressed={repeat !== 'off'}
          disabled={!on}
          onClick={() => call('repeat_set', { repeat: REPEAT_NEXT[repeat] ?? 'off' })}
        >
          <Icon icon={REPEAT_ICON[repeat] ?? 'mdi:repeat'} />
        </button>
      )}
      <button
        type='button'
        className='skip'
        aria-label={t('media_previous')}
        disabled={!on || !can.previous}
        onClick={() => call('media_previous_track')}
      >
        <Icon icon='mdi:skip-previous' />
      </button>
      <button
        type='button'
        className='main'
        data-playing={playing}
        aria-label={playing ? t('media_pause') : t('media_play')}
        disabled={!on || !(can.pause || can.play)}
        onClick={() => call('media_play_pause')}
      >
        <Icon icon={playing ? 'mdi:pause' : 'mdi:play'} />
      </button>
      <button
        type='button'
        className='skip'
        aria-label={t('media_next')}
        disabled={!on || !can.next}
        onClick={() => call('media_next_track')}
      >
        <Icon icon='mdi:skip-next' />
      </button>
      {full && !can.stop && <span />}
      {full && can.stop && (
        <button
          type='button'
          className='round'
          aria-label={t('media_stop')}
          data-tip={t('media_stop')}
          disabled={!on}
          onClick={() => call('media_stop')}
        >
          <Icon icon='mdi:stop' />
        </button>
      )}
      {/* The seventh place, so play stays in the middle. */}
      {full && <span />}
    </StyledControls>
  );
};

export default memo(MediaControls);
