import { memo, useMemo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import { hoverable, pressable } from '../../../themes/interaction';
import type { TileProps } from '../registry';
import { StyledTile } from './Tile.styled';
import Icon from '../../base/icon/Icon';
import MediaControls from '../../popups/media/MediaControls';
import MediaTimeline from '../../popups/media/MediaTimeline';
import MediaPopup from '../../popups/media/MediaPopup';
import { toggleService, useCallService, useEntity, useT } from '../../../hooks/useHa';
import { useActivePlayer, useAudio, usePlayerArt } from '../../../hooks/useMedia';
import { useTaps } from '../../../hooks/useTaps';
import { pressedInside } from '../../../lib/dom';
import { mediaConfig, playerApp, playerOn, volumeIcon } from '../../../lib/media';

const StyledMedia = styled(StyledTile)`
  /* Asked how big it came out, in units (one to the em): see the end. */
  container-type: size;
  font-size: ${u(1)};
  cursor: pointer;
  ${({ theme }) => hoverable(theme.bubble.hover)}
  /* A double tap opens the details: not a zoom. */
  touch-action: manipulation;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
  }

  /* The album art behind it all, darkened toward the text at the foot. */
  .art {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    pointer-events: none;
  }

  .shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 28%, rgba(0, 0, 0, 0.55) 55%, rgba(0, 0, 0, 0.85) 100%);
    pointer-events: none;
  }

  .body {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${u(0.6)};
    height: 100%;
    padding: ${u(0.8)};
    box-sizing: border-box;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${u(0.5)};
  }

  /* The cover tile's round head button, in the accent while on. */
  .power {
    flex: none;
    width: ${u(2.8)};
    height: ${u(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.35)};
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bubble.header};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  .power[aria-pressed='true'] {
    color: ${({ theme }) => theme.colors.accent};
  }

  .volume {
    display: flex;
    align-items: center;
    gap: ${u(0.45)};
    height: ${u(2.8)};
    padding: 0 ${u(1)} 0 ${u(0.8)};
    border-radius: ${u(1.4)};
    font-size: ${u(0.95)};
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bubble.header};
  }

  .volume .speaker {
    font-size: ${u(1.2)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .info {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: ${u(0.15)};
    min-width: 0;
    text-shadow: 0 1px ${u(0.4)} rgba(0, 0, 0, 0.5);
  }

  .info > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .source {
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .title {
    font-size: ${u(1.45)};
    font-weight: 700;
    line-height: 1.2;
  }

  .artist {
    font-size: ${u(0.95)};
    color: ${({ theme }) => theme.text.primary};
  }

  .album {
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.text.secondary};
  }

  /* Smaller, the lines that matter least go first: the album, the artist,
     the times, the source. Last, so they win over the rules above. */
  @container (height < 19em) {
    .album {
      display: none;
    }
  }

  @container (height < 16em) {
    .artist {
      display: none;
    }

    .title {
      font-size: ${u(1.2)};
    }
  }

  /* One row high: the head, the title and the controls, and nothing else. */
  @container (height < 14em) {
    .source,
    .timeline {
      display: none;
    }

    .body {
      gap: ${u(0.45)};
    }

    .title {
      font-size: ${u(1.1)};
    }

    .controls .main {
      width: ${u(2.8)};
      height: ${u(2.8)};
      font-size: ${u(1.35)};
    }
  }

  @container (width < 15em) {
    .volume {
      padding: 0 ${u(0.7)};
    }

    .volume .speaker {
      display: none;
    }
  }
`;

/**
 * What plays, as a tile: its art behind it, the power button and the
 * volume at the top, and the track, where it is in it and its controls at
 * the foot. It shows whichever of its players has the most going on; a
 * double tap opens the details.
 */
const MediaTile: React.FC<TileProps> = ({ tile }) => {
  const t = useT();
  const theme = useTheme();
  const callService = useCallService();
  const config = useMemo(() => mediaConfig(tile.entity, tile.options), [tile.entity, tile.options]);
  const activeId = useActivePlayer(config.players);
  const player = useEntity(activeId);
  const main = useEntity(tile.entity || undefined);
  const power = useEntity(config.power || undefined);
  const art = usePlayerArt(playerOn(player) ? activeId : undefined);
  const audio = useAudio(config.volume, config.volumeUnit, config.modeEntity, config.formatEntity);
  const [open, setOpen] = useState(false);
  // A picture that does not load is left out, not drawn broken.
  const [failed, setFailed] = useState<string | null>(null);
  const tap = useTaps(
    () => undefined,
    () => setOpen(true)
  );

  const attributes = (player?.attributes ?? {}) as Record<string, unknown>;
  const name = tile.name || (main?.attributes.friendly_name as string | undefined) || tile.entity;
  const on = playerOn(player);
  const app = playerApp(player);
  const playerName = (attributes.friendly_name as string | undefined) ?? name;
  const mediaTitle = attributes.media_title as string | undefined;
  // The app above the title; with no title, the app is the title and the player above it.
  const title = on ? (mediaTitle ?? app ?? t('media_nothing')) : main ? t('off') : t('not_found');
  const above = on ? (mediaTitle ? (app ?? playerName) : playerName) : name;
  const artist = (attributes.media_artist as string | undefined) ?? (attributes.media_series_title as string | undefined);
  const powerOn = playerOn(power) || power?.state === 'on';

  return (
    <>
      <StyledMedia
        data-on={on}
        data-press
        style={{ '--on-color': theme.colors.accent } as React.CSSProperties}
        role='button'
        tabIndex={0}
        aria-label={name}
        onClick={event => {
          if (!main || pressedInside(event, 'button')) return;
          tap();
        }}
        onKeyDown={event => {
          if (!main || event.target !== event.currentTarget || (event.key !== 'Enter' && event.key !== ' ')) return;
          event.preventDefault();
          setOpen(true);
        }}
      >
        {art && art !== failed && <img className='art' src={art} alt='' onError={() => setFailed(art)} />}
        {art && art !== failed && <div className='shade' />}
        <div className='body'>
          <div className='top'>
            <button
              type='button'
              className='power'
              aria-label={t('media_power')}
              data-tip={t('media_power')}
              aria-pressed={powerOn}
              disabled={!power}
              onClick={() => {
                const [domain, service] = toggleService(config.power);
                void callService(domain, service, undefined, { entity_id: config.power });
              }}
            >
              <Icon icon='mdi:power' />
            </button>
            {audio.volume.level !== null && (
              <span className='volume' data-tip={t('media_volume')}>
                <Icon className='speaker' icon={volumeIcon(audio.volume.level, audio.volume.muted)} />
                {audio.volume.muted ? t('media_muted') : audio.volume.text}
              </span>
            )}
          </div>
          <div className='info'>
            <span className='source'>{above}</span>
            <span className='title'>{title}</span>
            {on && artist && <span className='artist'>{artist}</span>}
            {on && typeof attributes.media_album_name === 'string' && <span className='album'>{attributes.media_album_name}</span>}
          </div>
          <MediaTimeline className='timeline' entityId={on ? activeId : undefined} />
          <MediaControls className='controls' entityId={activeId} />
        </div>
      </StyledMedia>
      {/* Beside the tile, not in it: its class rules would reach into the popup. */}
      {main && <MediaPopup open={open} onClose={() => setOpen(false)} config={config} activeId={activeId} name={name} />}
    </>
  );
};

export default memo(MediaTile);
