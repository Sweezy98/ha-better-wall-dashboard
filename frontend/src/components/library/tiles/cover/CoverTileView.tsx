import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../../themes/default.theme';
import { hoverable, pressable } from '../../../../themes/interaction';
import type { Tile } from '../../../../config/types';
import { StyledTile } from '../Tile.styled';
import Icon from '../../../base/icon/Icon';
import { domainIcon, useCallService, useEntity, useT } from '../../../../hooks/useHa';
import { useTaps } from '../../../../hooks/useTaps';
import { coverActive, coverFeatures, coverView } from '../../../../lib/cover';
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
  /* The tile is the button, as a light's is: glass that glows under the
     pointer and gives when pressed (bounce.ts, by data-press). */
  cursor: pointer;
  ${({ theme }) => hoverable(theme.bubble.hover)}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
  }

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

  /* Where it stands, then small grey signs of what is steering it -- as the
     Better Lighting card has them. */
  .state {
    display: flex;
    align-items: center;
    gap: ${u(0.4)};
    font-size: ${u(0.95)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
    min-width: 0;
  }

  .state .full,
  .state .short {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .state .short {
    display: none;
  }

  .state .sign {
    display: inline-flex;
    flex: none;
    font-size: ${u(1.05)};
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

  /* Narrow, as a 1x1 is: where the cover stands by its number alone, and a
     smaller icon to leave it and its signs room. Last, as the query below,
     so they win over the layout above. */
  @container (width < 13em) {
    .head {
      gap: ${u(0.5)};
    }

    .icon {
      width: ${u(2.2)};
      height: ${u(2.2)};
      font-size: ${u(1.15)};
    }

    .state {
      gap: ${u(0.25)};
    }

    .state .sign {
      font-size: ${u(0.95)};
    }

    .state .full {
      display: none;
    }

    .state .short {
      display: inline;
    }
  }

  /* Short, as a 1x1 is (head 2.8, buttons 2.8 and their gap, inside the
     padding): the buttons come down a little. */
  @container (height < 6.4em) {
    .body {
      gap: ${u(0.3)};
    }

    .buttons button {
      height: ${u(2.1)};
    }
  }
`;

interface CoverTileViewProps {
  tile: Tile;
  /** Small signs after where it stands, e.g. what Adaptive Cover Pro is doing. */
  signs?: React.ReactNode;
  /** What a double tap opens, if anything. */
  onDetails?: () => void;
}

/**
 * A cover as a tile: what it is, where it stands, and up, stop and down.
 * A tap anywhere else on it moves the cover the other way -- or stops it
 * while it moves -- as a light's tile switches the light. The plain cover
 * tile is exactly this; the Adaptive Cover Pro tile adds its signs and, on
 * a double tap, its details.
 *
 * Options: `active_when` -- lit when `open` (the default), when `closed`,
 * or `never`.
 */
const CoverTileView: React.FC<CoverTileViewProps> = ({ tile, signs, onDetails }) => {
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
  const tap = useTaps(() => call('toggle'), onDetails);
  const active = coverActive(view, tile.options.active_when, Boolean(entity));
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
          {signs}
        </span>
      </span>
    </>
  );

  return (
    <StyledCover
      $color={theme.colors.cover}
      data-on={active}
      data-press
      style={lit}
      role='button'
      tabIndex={0}
      aria-label={name}
      onClick={event => {
        // Its own buttons do their own thing; anywhere else moves the cover.
        if (!entity || (event.target as Element).closest('button, dialog')) return;
        tap();
      }}
      onKeyDown={event => {
        if (!entity || event.target !== event.currentTarget || (event.key !== 'Enter' && event.key !== ' ')) return;
        event.preventDefault();
        tap();
      }}
    >
      <div className='body'>
        <div className='head'>{head}</div>
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
