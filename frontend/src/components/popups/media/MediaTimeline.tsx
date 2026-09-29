import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { useCallService, useEntity } from '../../../hooks/useHa';
import { useTick } from '../../../hooks/useNow';
import { fractionAlong, useDragValue } from '../../../hooks/useDragValue';
import { formatPlayTime, mediaFeatures, mediaProgress } from '../../../lib/media';

/** The forecast's day bar: a faint track, the accent up to now, and a white dot where it is. */
const StyledTimeline = styled.div<{ $seekable: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${u(0.35)};

  /* Inline, the times sit either side of the track, as a player's own "now playing" has them. */
  &[data-inline='true'] {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: ${u(0.9)};
  }

  &[data-inline='true'] .times {
    display: contents;
  }

  &[data-inline='true'] .times span:first-child {
    grid-column: 1;
    grid-row: 1;
  }

  &[data-inline='true'] .times span:last-child {
    grid-column: 3;
    grid-row: 1;
  }

  &[data-inline='true'] .track {
    grid-column: 2;
    grid-row: 1;
  }

  .track {
    position: relative;
    height: ${u(0.35)};
    border-radius: ${u(0.2)};
    background: ${({ theme }) => theme.bubble.header};
    cursor: ${({ $seekable }) => ($seekable ? 'pointer' : 'default')};
    /* The track takes the finger, or the page would swipe instead. */
    touch-action: ${({ $seekable }) => ($seekable ? 'none' : 'auto')};
  }

  /* A taller target than it looks, for a finger. */
  .track::before {
    content: '';
    position: absolute;
    inset: ${u(-0.8)} 0;
  }

  .fill {
    position: absolute;
    inset: 0 auto 0 0;
    border-radius: inherit;
    background: ${({ theme }) => theme.colors.accent};
  }

  .dot {
    position: absolute;
    top: 50%;
    width: ${u(0.9)};
    height: ${u(0.9)};
    border-radius: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 ${u(0.4)} rgba(0, 0, 0, 0.4);
  }

  .times {
    display: flex;
    justify-content: space-between;
    font-size: ${u(0.8)};
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

interface MediaTimelineProps {
  entityId: string | undefined;
  /** Dragged to a place in the track, where the player can seek. */
  seekable?: boolean;
  /** The times either side of the track rather than under it. */
  inline?: boolean;
  className?: string;
}

/** How far into its track a player is, and what is left -- nothing for one that has no duration. */
const MediaTimeline: React.FC<MediaTimelineProps> = ({ entityId, seekable = false, inline = false, className }) => {
  const player = useEntity(entityId);
  const callService = useCallService();
  const now = useTick(1000);
  const progress = mediaProgress(player, now);
  const canSeek = seekable && mediaFeatures(player?.attributes.supported_features).seek;
  const drag = useDragValue<HTMLDivElement, number>(
    (event, box) => fractionAlong(event, box, 'x'),
    fraction =>
      progress &&
      entityId &&
      void callService('media_player', 'media_seek', { seek_position: Math.round(fraction * progress.duration) }, { entity_id: entityId }),
    player?.attributes.media_position_updated_at
  );
  if (!progress) return null;
  const fraction = canSeek && drag.value !== null ? drag.value : progress.position / progress.duration;
  const position = fraction * progress.duration;
  return (
    <StyledTimeline $seekable={canSeek} data-inline={inline} className={className}>
      <div className='track' ref={canSeek ? drag.ref : undefined}>
        <span className='fill' style={{ width: `${fraction * 100}%` }} />
        <span className='dot' style={{ left: `${fraction * 100}%` }} />
      </div>
      <div className='times'>
        <span>{formatPlayTime(position)}</span>
        <span>-{formatPlayTime(progress.duration - position)}</span>
      </div>
    </StyledTimeline>
  );
};

export default memo(MediaTimeline);
