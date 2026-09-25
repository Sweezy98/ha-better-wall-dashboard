import { memo, useCallback, useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import type { TileProps } from '../registry';
import { StyledTile } from './Tile.styled';
import Icon from '../../base/icon/Icon';
import Bubble from '../../base/bubble/Bubble';
import Popup from '../../base/popup/Popup';
import { domainIcon, toggleService, useCallService, useEntity, useT } from '../../../hooks/useHa';
import { useRoomSelect } from '../../../hooks/useBetterLighting';
import { useTick } from '../../../hooks/useNow';
import type { TranslationKey } from '../../../lib/i18n';
import {
  brightnessPercent,
  formatCountdown,
  neighbourScene,
  roomBadges,
  roomColor,
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

  .head {
    display: flex;
    align-items: center;
    gap: ${u(0.4)};
    min-width: 0;
  }

  /* The icon and name together: one big target that switches the room. */
  .power {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    gap: ${u(0.8)};
    min-width: 0;
    margin: ${u(-0.4)};
    padding: ${u(0.4)};
    border-radius: ${u(1.4)};
    text-align: left;
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

  /* On: the icon in the room's own colour, on a wash of it -- as a light's tile. */
  .power[aria-pressed='true'] .icon {
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

  .bar {
    position: relative;
    height: ${u(2.8)};
    border-radius: ${u(1.4)};
    background: ${({ theme }) => theme.bubble.icon};
    overflow: hidden;
    cursor: pointer;
    /* The bar takes the finger, or the page would swipe instead. */
    touch-action: none;
  }

  .bar:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
  }

  .fill {
    position: absolute;
    inset: 0 auto 0 0;
    background: color-mix(in srgb, ${({ $glow }) => $glow} 45%, transparent);
    transition: width 0.3s ease;
  }

  .bar[data-dragging='true'] .fill {
    transition: none;
  }

  /* A grip at the end of the fill, so the level reads as something to drag. */
  .fill::after {
    content: '';
    position: absolute;
    top: 30%;
    bottom: 30%;
    right: ${u(0.6)};
    width: ${u(0.25)};
    border-radius: ${u(0.2)};
    background: ${({ $glow }) => $glow};
  }

  .fill[data-empty='true']::after {
    display: none;
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
`;

const StyledSceneList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${u(14)}, 1fr));
  gap: ${u(0.6)};
`;

/**
 * Dragging the brightness: follows the pointer and sends only on release,
 * as the card does -- a light asked for every pixel falls behind. The level
 * let go at stays drawn until the room reports it, so the bar does not jump
 * back to where it was in between.
 */
function useBrightnessDrag(onRelease: (percent: number) => void, reported: unknown) {
  const ref = useRef<HTMLDivElement>(null);
  // The level held, and what the room had reported when it was let go.
  const [held, setHeld] = useState<{ percent: number; since: unknown } | null>(null);
  const [dragging, setDragging] = useState(false);
  const release = useRef(onRelease);
  const latest = useRef(reported);

  useEffect(() => {
    release.current = onRelease;
    latest.current = reported;
  });

  useEffect(() => {
    const bar = ref.current;
    if (!bar) return;
    let pointer: number | null = null;
    let last = 0;
    let settle = 0;
    const at = (x: number) => {
      const box = bar.getBoundingClientRect();
      return Math.min(100, Math.max(1, Math.round(((x - box.left) / box.width) * 100)));
    };
    const onDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      // Natively, before the page's own mouse swipe sees it on the way up.
      event.stopPropagation();
      pointer = event.pointerId;
      bar.setPointerCapture(pointer);
      window.clearTimeout(settle);
      last = at(event.clientX);
      setHeld({ percent: last, since: latest.current });
      setDragging(true);
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerId !== pointer) return;
      last = at(event.clientX);
      setHeld({ percent: last, since: latest.current });
    };
    const onUp = (event: PointerEvent) => {
      if (event.pointerId !== pointer) return;
      pointer = null;
      setDragging(false);
      setHeld({ percent: last, since: latest.current });
      release.current(last);
      // Unchanged, the room reports nothing; let go of the value anyway.
      settle = window.setTimeout(() => setHeld(null), 4000);
    };
    const onCancel = (event: PointerEvent) => {
      if (event.pointerId !== pointer) return;
      pointer = null;
      setDragging(false);
      setHeld(null);
    };
    bar.addEventListener('pointerdown', onDown);
    bar.addEventListener('pointermove', onMove);
    bar.addEventListener('pointerup', onUp);
    bar.addEventListener('pointercancel', onCancel);
    return () => {
      window.clearTimeout(settle);
      bar.removeEventListener('pointerdown', onDown);
      bar.removeEventListener('pointermove', onMove);
      bar.removeEventListener('pointerup', onUp);
      bar.removeEventListener('pointercancel', onCancel);
    };
  }, []);

  // Once the room reports again, its own level is the one to draw.
  const value = held && (dragging || held.since === reported) ? held.percent : null;
  return { ref, value, dragging };
}

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
  const {
    ref: barRef,
    value: dragged,
    dragging,
  } = useBrightnessDrag(
    percent => void callService('light', 'turn_on', { brightness_pct: percent }, { entity_id: tile.entity }),
    entity?.last_updated
  );

  const hidden = Array.isArray(tile.options.hidden_scenes) ? (tile.options.hidden_scenes as string[]) : [];
  const buttonEntity = typeof tile.options.button_entity === 'string' ? tile.options.button_entity : '';
  const buttonIcon = typeof tile.options.button_icon === 'string' ? tile.options.button_icon : '';
  const name = tile.name || (attributes.friendly_name as string | undefined) || tile.entity;
  const glow = roomColor(attributes) ?? theme.colors.warm;
  const percent = dragged ?? brightnessPercent(on, attributes.brightness);
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

  const step = (delta: number) =>
    void callService('light', 'turn_on', { brightness_pct: Math.min(100, Math.max(1, percent + delta)) }, { entity_id: tile.entity });

  return (
    <StyledRoom $glow={glow}>
      <div className='head'>
        <button
          type='button'
          className='power'
          aria-pressed={on}
          onClick={() => void callService('light', 'toggle', undefined, { entity_id: tile.entity })}
        >
          <span className='icon'>
            <Icon icon={tile.icon || (attributes.icon as string | undefined) || 'mdi:lightbulb-group'} />
          </span>
          <span className='text'>
            <div className='name'>{name}</div>
            <div className='state'>
              <span>{on || dragged !== null ? `${percent} %` : t('off')}</span>
              {badges.map(badge => (
                <span key={badge} className='badge' title={t(BADGES[badge].label)} aria-label={t(BADGES[badge].label)}>
                  <Icon icon={BADGES[badge].icon} />
                </span>
              ))}
              {attributes.bl_off_at && <Countdown offAt={attributes.bl_off_at} />}
            </div>
          </span>
        </button>
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
        <div
          ref={barRef}
          className='bar'
          role='slider'
          tabIndex={0}
          aria-label={t('bl_brightness')}
          aria-valuemin={1}
          aria-valuemax={100}
          aria-valuenow={percent}
          data-dragging={dragging}
          onKeyDown={event => {
            if (event.key === 'ArrowRight' || event.key === 'ArrowUp') step(5);
            if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') step(-5);
          }}
        >
          <span className='fill' data-empty={percent === 0} style={{ width: `${percent}%` }} />
        </div>
        {selectId && tile.h > 1 && <Scenes selectId={selectId} hidden={hidden} on={on} title={name} />}
      </div>
    </StyledRoom>
  );
};

export default memo(BetterLightingTile);
