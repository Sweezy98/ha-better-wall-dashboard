import { memo, useCallback, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import { hoverable, pressable } from '../../../themes/interaction';
import type { TileProps } from '../registry';
import { StyledTile } from './Tile.styled';
import Icon from '../../base/icon/Icon';
import Bubble from '../../base/bubble/Bubble';
import Popup from '../../base/popup/Popup';
import BrightnessBar from '../../base/brightnessBar/BrightnessBar';
import { brightnessPercent, lightColor } from '../../../lib/light';
import { domainIcon, toggleService, useCallService, useEntity, useT } from '../../../hooks/useHa';
import { useRoomSelect } from '../../../hooks/useBetterLighting';
import { useTick } from '../../../hooks/useNow';
import { useTaps } from '../../../hooks/useTaps';
import LightPopup from '../../popups/light/LightPopup';
import type { TranslationKey } from '../../../lib/i18n';
import {
  formatCountdown,
  neighbourScene,
  roomBadges,
  secondsUntilOff,
  type RoomAttributes,
  type RoomBadge,
} from '../../../lib/betterLighting';

const BADGES: Record<RoomBadge, { icon: string; label: TranslationKey }> = {
  presence: { icon: 'mdi:motion-sensor', label: 'bl_presence' },
  nobody: { icon: 'mdi:motion-sensor-off', label: 'bl_nobody' },
  night: { icon: 'mdi:weather-night', label: 'bl_night' },
  simulating: { icon: 'mdi:home-clock', label: 'bl_simulating' },
  by_hand: { icon: 'mdi:hand-back-right', label: 'bl_by_hand' },
  automatic: { icon: 'mdi:auto-mode', label: 'bl_automatic' },
};

/** States in which the extra button's entity is not doing anything. */
const IDLE = new Set(['off', 'closed', 'idle', 'unavailable', 'unknown', '']);

const StyledRoom = styled(StyledTile)<{ $glow: string }>`
  display: flex;
  flex-direction: column;
  gap: ${u(0.6)};
  padding: ${u(0.8)};
  /* Sized by its cells, and asked how tall it came out: one unit to the em,
     so the query below reads in the same units as the rows it adds up. */
  container-type: size;
  font-size: ${u(1)};
  /* The card is the button that switches the room: glass that glows under
     the pointer, and gives when pressed (bounce.ts, by data-press). */
  cursor: pointer;
  ${({ theme }) => hoverable(theme.bubble.hover)}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
  }

  .head {
    display: flex;
    align-items: center;
    gap: ${u(0.4)};
    min-width: 0;
  }

  .power {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    gap: ${u(0.8)};
    min-width: 0;
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

  /* On: the icon in the room's own colour, on a wash of it -- as a light's tile. */
  &[data-on='true'] .power .icon {
    background: color-mix(in srgb, ${({ $glow }) => $glow} 22%, transparent);
    color: ${({ $glow }) => $glow};
  }

  .text {
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
    display: flex;
    align-items: center;
    gap: ${u(0.4)};
    font-size: ${u(0.95)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
  }

  .badge {
    display: inline-flex;
    font-size: ${u(1.05)};
  }

  .countdown {
    display: inline-flex;
    align-items: center;
    gap: ${u(0.15)};
    font-variant-numeric: tabular-nums;
  }

  .round {
    flex: none;
    width: ${u(2.8)};
    height: ${u(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.35)};
    background-color: ${({ theme }) => theme.bubble.icon};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  .round[aria-pressed='true'] {
    color: ${({ theme }) => theme.colors.accent};
  }

  .round.adaptive {
    background-color: color-mix(in srgb, ${({ theme }) => theme.colors.warm} 16%, transparent);
    color: ${({ theme }) => theme.colors.warm};
  }

  .controls {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: ${u(0.5)};
  }

  .scenes {
    display: grid;
    grid-template-columns: ${u(2.8)} minmax(0, 1fr) ${u(2.8)};
    gap: ${u(0.5)};
  }

  .scenes .round {
    border-radius: ${u(1.4)};
  }

  .scene {
    display: flex;
    align-items: center;
    gap: ${u(0.6)};
    min-width: 0;
    height: ${u(2.8)};
    padding: 0 ${u(0.9)};
    border-radius: ${u(1.4)};
    font-size: ${u(0.95)};
    background-color: ${({ theme }) => theme.bubble.icon};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  .scene .label {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .scene .lead {
    font-size: ${u(1.2)};
  }

  button:disabled {
    opacity: 0.4;
  }

  /* Too short for the scenes under the bar (three rows of 2.8 and their
     gaps, measured inside the padding): the bar and the scenes share one
     row, as a 2x1 tile has room for across. Only a tile short and narrow
     both, a 1x1, leaves the scenes out. Last, so it wins over the rows' own
     layout above. */
  @container (height < 9.6em) {
    .controls {
      flex-direction: row;
      align-items: center;
    }

    .controls > * {
      flex: 1 1 0;
      min-width: 0;
    }
  }

  @container (height < 9.6em) and (width < 18em) {
    .scenes {
      display: none;
    }
  }
`;

const StyledSceneList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${u(14)}, 1fr));
  gap: ${u(0.6)};
`;

/** The room's countdown to switching itself off, ticking only while there is one. */
const Countdown: React.FC<{ offAt: string }> = ({ offAt }) => {
  const t = useT();
  const now = useTick(1000);
  const seconds = secondsUntilOff(offAt, now);
  if (seconds === null) return null;
  return (
    <span className='countdown' title={t('bl_switching_off')}>
      <Icon className='badge' icon='mdi:timer-outline' />
      {formatCountdown(seconds)}
    </span>
  );
};

const ExtraButton: React.FC<{ entityId: string; icon: string }> = ({ entityId, icon }) => {
  const entity = useEntity(entityId);
  const callService = useCallService();
  if (!entity) return null;
  const label = (entity.attributes.friendly_name as string | undefined) ?? entityId;
  return (
    <button
      type='button'
      className='round'
      title={label}
      aria-label={label}
      aria-pressed={!IDLE.has(entity.state.toLowerCase())}
      onClick={() => {
        const [domain, service] = toggleService(entityId);
        void callService(domain, service, undefined, { entity_id: entityId });
      }}
    >
      <Icon icon={icon || (entity.attributes.icon as string | undefined) || domainIcon(entityId)} />
    </button>
  );
};

interface SceneProps {
  selectId: string;
  hidden: string[];
  on: boolean;
  title: string;
}

/** The room's scenes: a step either way, and all of them a tap away in a popup. */
const Scenes: React.FC<SceneProps> = ({ selectId, hidden, on, title }) => {
  const t = useT();
  const theme = useTheme();
  const select = useEntity(selectId);
  const callService = useCallService();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  if (!select) return null;
  const all = (select.attributes.options as string[] | undefined) ?? [];
  const options = all.filter(option => !hidden.includes(option));
  const icons = (select.attributes.bl_option_icons as Record<string, string> | undefined) ?? {};
  const current = select.state;
  const choose = (option: string | undefined) => {
    if (option && option !== current) void callService('select', 'select_option', { option }, { entity_id: selectId });
  };
  const stepping = on && options.length > 1;
  return (
    <div className='scenes'>
      <button
        type='button'
        className='round'
        aria-label={t('bl_previous_scene')}
        disabled={!stepping}
        onClick={() => choose(neighbourScene(options, current, -1))}
      >
        <Icon icon='mdi:chevron-left' />
      </button>
      {/* Named even when hidden from the list: it is what the room is in. */}
      <button type='button' className='scene' onClick={() => setOpen(true)}>
        <Icon className='lead' icon={icons[current] ?? 'mdi:palette'} />
        <span className='label'>{current}</span>
        <Icon icon='mdi:chevron-down' />
      </button>
      <button
        type='button'
        className='round'
        aria-label={t('bl_next_scene')}
        disabled={!stepping}
        onClick={() => choose(neighbourScene(options, current, 1))}
      >
        <Icon icon='mdi:chevron-right' />
      </button>
      <Popup open={open} onClose={close} title={title} subtitle={t('bl_scenes')} icon='mdi:palette-outline' width={46}>
        <StyledSceneList>
          {options.map(option => (
            <Bubble
              key={option}
              name={option}
              icon={icons[option] ?? 'mdi:palette'}
              iconColor={option === current ? theme.colors.accent : undefined}
              trailing={option === current ? <Icon icon='mdi:check' color={theme.colors.accent} /> : undefined}
              onClick={() => {
                choose(option);
                close();
              }}
            />
          ))}
        </StyledSceneList>
      </Popup>
    </div>
  );
};

/**
 * A Better Lighting room, as its own card draws it, on the dashboard's
 * glass: the room switched by its icon and name, how it is lit and why,
 * a brightness bar in the room's colour, and its scenes.
 *
 * Options: `hidden_scenes` (names left out of the list and the arrows),
 * `button_entity` and `button_icon` (one more button in the header).
 */
const BetterLightingTile: React.FC<TileProps> = ({ tile }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(tile.entity || undefined);
  const selectId = useRoomSelect(tile.entity || undefined);
  const callService = useCallService();
  const attributes = (entity?.attributes ?? {}) as RoomAttributes & Record<string, unknown>;
  const on = entity?.state === 'on';
  const [details, setDetails] = useState(false);
  // A tap on the card switches the room; a double tap opens it and its lamps up close.
  const tap = useTaps(
    () => void callService('light', 'toggle', undefined, { entity_id: tile.entity }),
    () => setDetails(true)
  );
  const hidden = Array.isArray(tile.options.hidden_scenes) ? (tile.options.hidden_scenes as string[]) : [];
  const buttonEntity = typeof tile.options.button_entity === 'string' ? tile.options.button_entity : '';
  const buttonIcon = typeof tile.options.button_icon === 'string' ? tile.options.button_icon : '';
  const name = tile.name || (attributes.friendly_name as string | undefined) || tile.entity;
  const icon = tile.icon || (attributes.icon as string | undefined) || 'mdi:lightbulb-group';
  const glow = lightColor(attributes) ?? theme.colors.warm;
  const percent = brightnessPercent(on, attributes.brightness);
  // Cleared by the room itself once nothing is waiting to switch it off.
  const countingDown = Boolean(attributes.bl_off_at);
  const badges = roomBadges(attributes, on, countingDown);

  if (!entity) {
    return (
      <StyledRoom $glow={glow}>
        <div className='name'>{name || t('tile_better_lighting')}</div>
        <div className='state'>{t('not_found')}</div>
      </StyledRoom>
    );
  }

  return (
    <>
      {/* Beside the tile, not in it: its class rules (.power, .icon) would reach into the popup. */}
      <LightPopup
        open={details}
        onClose={() => setDetails(false)}
        entityId={tile.entity}
        name={name}
        icon={icon}
        presets={tile.options.hide_presets !== true}
      />
      <StyledRoom
        $glow={glow}
        data-on={on}
        data-press
        style={{ '--on-color': glow } as React.CSSProperties}
        role='button'
        tabIndex={0}
        aria-pressed={on}
        aria-label={name}
        onClick={event => {
          // Its own controls do their own thing; anywhere else switches the room.
          if ((event.target as Element).closest('button, [role="slider"], dialog')) return;
          tap();
        }}
        onKeyDown={event => {
          if (event.target !== event.currentTarget || (event.key !== 'Enter' && event.key !== ' ')) return;
          event.preventDefault();
          tap();
        }}
      >
        <div className='head'>
          <span className='power'>
            <span className='icon'>
              <Icon icon={icon} />
            </span>
            <span className='text'>
              <div className='name'>{name}</div>
              <div className='state'>
                <span>{on ? `${percent} %` : t('off')}</span>
                {badges.map(badge => (
                  <span key={badge} className='badge' title={t(BADGES[badge].label)} aria-label={t(BADGES[badge].label)}>
                    <Icon icon={BADGES[badge].icon} />
                  </span>
                ))}
                {attributes.bl_off_at && <Countdown offAt={attributes.bl_off_at} />}
              </div>
            </span>
          </span>
          {on && attributes.bl_adaptive === false && (
            <button
              type='button'
              className='round adaptive'
              title={t('bl_back_to_adaptive')}
              aria-label={t('bl_back_to_adaptive')}
              onClick={() => void callService('better_lighting', 'set_adaptive', { entity_id: tile.entity })}
            >
              <Icon icon='mdi:white-balance-sunny' />
            </button>
          )}
          {buttonEntity && <ExtraButton entityId={buttonEntity} icon={buttonIcon} />}
        </div>
        <div className='controls'>
          <BrightnessBar
            percent={percent}
            color={glow}
            label={t('brightness')}
            reported={entity.last_updated}
            onChange={brightness_pct => void callService('light', 'turn_on', { brightness_pct }, { entity_id: tile.entity })}
          />
          {selectId && <Scenes selectId={selectId} hidden={hidden} on={on} title={name} />}
        </div>
      </StyledRoom>
    </>
  );
};

export default memo(BetterLightingTile);
