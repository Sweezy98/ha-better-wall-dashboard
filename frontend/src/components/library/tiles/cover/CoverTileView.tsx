import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../../themes/default.theme';
import { pressable } from '../../../../themes/interaction';
import type { Tile } from '../../../../config/types';
import { StyledTile } from '../Tile.styled';
import Icon from '../../../base/icon/Icon';
import { domainIcon, useCallService, useEntity, useT } from '../../../../hooks/useHa';
import { useTaps } from '../../../../hooks/useTaps';
import { coverFeatures, coverView } from '../../../../lib/cover';
import type { TranslationKey } from '../../../../lib/i18n';

const STATES: Record<string, TranslationKey> = {
  open: 'cover_open',
  closed: 'cover_closed',
  opening: 'cover_opening',
  closing: 'cover_closing',
};

const StyledCover = styled(StyledTile)<{ $color: string }>`
  padding: ${u(0.8)};
  /* Asked how tall it came out, in units (one to the em): see the end. */
  container-type: size;
  font-size: ${u(1)};

  /* The rows in a box of their own: a size query styles what is inside the
     container, never the container itself, so the gap has to live here. */
  .body {
    display: flex;
    flex-direction: column;
    gap: ${u(0.6)};
    height: 100%;
  }

  .head {
    display: flex;
    align-items: center;
    gap: ${u(0.8)};
    min-width: 0;
    text-align: left;
  }

  /* With details behind it, the head is the button that opens them. */
  button.head {
    margin: ${u(-0.4)};
    padding: ${u(0.4)};
    border-radius: ${u(1.4)};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  .icon {
    flex: none;
    width: ${u(2.8)};
    height: ${u(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.4)};
    background: ${({ theme }) => theme.bubble.icon};
    color: ${({ theme }) => theme.text.secondary};
    transition:
      background 0.3s ease,
      color 0.3s ease;
  }

  &[data-on='true'] .icon {
    background: color-mix(in srgb, ${({ $color }) => $color} 22%, transparent);
    color: ${({ $color }) => $color};
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: ${u(0.3)};
    min-width: 0;
  }

  .name {
    font-size: ${u(1.05)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .state {
    font-size: ${u(0.95)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .state .short {
    display: none;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: ${u(0.35)};
  }

  .controls {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: ${u(0.5)};
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${u(0.5)};
  }

  .buttons button {
    height: ${u(2.8)};
    border-radius: ${u(1.4)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.35)};
    background-color: ${({ theme }) => theme.bubble.icon};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  .buttons button:disabled {
    opacity: 0.35;
  }

  /* Short, as a 2x1 with badges is (head 2.8, badges 1.8, buttons 2.8 and
     their gaps, inside the padding): the gaps close up and the buttons come
     down a little. Last, so it wins over the layout above. */
  /* Narrow, as a 1x1 is: the badges by their icons alone, where the cover
     stands by its number alone. */
  @container (width < 13em) {
    .chips .chip-label {
      display: none;
    }

    .state .full {
      display: none;
    }

    .state .short {
      display: inline;
    }
  }

  @container (height < 8.8em) {
    .body {
      gap: ${u(0.25)};
    }

    .text {
      gap: ${u(0.05)};
    }

    .chips > * {
      height: ${u(1.55)};
    }

    .buttons button {
      height: ${u(2.1)};
    }
  }
`;

interface CoverTileViewProps {
  tile: Tile;
  /** Small named states under the head, e.g. what Adaptive Cover Pro is doing. */
  chips?: React.ReactNode;
  /** What a double tap on the head opens, if anything. */
  onDetails?: () => void;
}

/**
 * A cover as a tile: what it is, where it stands, and up, stop and down.
 * The plain cover tile is exactly this; the Adaptive Cover Pro tile adds
 * its chips and its details.
 */
const CoverTileView: React.FC<CoverTileViewProps> = ({ tile, chips, onDetails }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(tile.entity || undefined);
  const callService = useCallService();
  const attributes = (entity?.attributes ?? {}) as Record<string, unknown>;
  const features = coverFeatures(attributes.supported_features as number | undefined);
  const view = coverView(entity?.state, attributes.current_position as number | undefined);
  const name = tile.name || (attributes.friendly_name as string | undefined) || tile.entity;
  const icon = tile.icon || (attributes.icon as string | undefined) || domainIcon(tile.entity || 'cover.x');
  const stateKey = entity ? STATES[entity.state] : undefined;
  const stateText = !entity
    ? t('not_found')
    : [stateKey ? t(stateKey) : entity.state, view.position !== undefined ? `${view.position} %` : ''].filter(Boolean).join(' · ');
  const call = (service: string) => void callService('cover', service, undefined, { entity_id: tile.entity });
  // A single tap on the head does nothing -- the buttons move the cover --
  // but waits, when there are details, to see whether a second follows.
  const headTap = useTaps(() => undefined, onDetails);
  const lit = { '--on-color': theme.colors.cover } as React.CSSProperties;

  const head = (
    <>
      <span className='icon'>
        <Icon icon={icon} />
      </span>
      <span className='text'>
        <span className='name'>{name}</span>
        <span className='state'>
          <span className='full'>{stateText}</span>
          <span className='short'>{view.position !== undefined ? `${view.position} %` : stateText}</span>
        </span>
      </span>
    </>
  );

  return (
    <StyledCover $color={theme.colors.cover} data-on={view.open} style={lit}>
      <div className='body'>
        {onDetails ? (
          <button type='button' className='head' onClick={headTap}>
            {head}
          </button>
        ) : (
          <div className='head'>{head}</div>
        )}
        {/* Beside the head, not in it: a chip may be a button of its own. */}
        {chips && <div className='chips'>{chips}</div>}
        <div className='controls'>
          <div className='buttons'>
            <button
              type='button'
              aria-label={t('cover_up')}
              disabled={!entity || !features.open || !view.canOpen}
              onClick={() => call('open_cover')}
            >
              <Icon icon='mdi:arrow-up' />
            </button>
            <button type='button' aria-label={t('cover_stop')} disabled={!entity || !features.stop} onClick={() => call('stop_cover')}>
              <Icon icon='mdi:stop' />
            </button>
            <button
              type='button'
              aria-label={t('cover_down')}
              disabled={!entity || !features.close || !view.canClose}
              onClick={() => call('close_cover')}
            >
              <Icon icon='mdi:arrow-down' />
            </button>
          </div>
        </div>
      </div>
    </StyledCover>
  );
};

export default memo(CoverTileView);
