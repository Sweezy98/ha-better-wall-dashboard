import { memo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import Popup from '../../base/popup/Popup';
import Icon from '../../base/icon/Icon';
import Bubble from '../../base/bubble/Bubble';
import BrightnessBar from '../../base/brightnessBar/BrightnessBar';
import { LevelColumn, ColorWheel, TemperatureColumn } from './LightControls';
import { useCallService, useEntity, useT } from '../../../hooks/useHa';
import { COLOR_PRESETS, WHITE_PRESETS, brightnessPercent, kelvinToRgb, lightColor, lightFeatures } from '../../../lib/light';

type Mode = 'brightness' | 'color' | 'temperature';

const StyledPanel = styled.div<{ $side: boolean }>`
  display: grid;
  grid-template-columns: ${({ $side }) => ($side ? 'auto minmax(0, 1fr)' : 'auto')};
  justify-content: ${({ $side }) => ($side ? 'stretch' : 'center')};
  gap: ${u(2.4)};
  align-items: start;

  .control {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${u(1.4)};
    min-width: ${u(21)};
  }

  .modes {
    display: flex;
    align-items: center;
    gap: ${u(0.4)};
    padding: ${u(0.4)};
    border-radius: ${u(2.2)};
    background: ${({ theme }) => theme.bubble.background};
  }

  .divider {
    width: 1px;
    align-self: stretch;
    margin: ${u(0.4)} ${u(0.2)};
    background: rgba(255, 255, 255, 0.12);
  }

  .mode {
    width: ${u(3.4)};
    height: ${u(3.4)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.45)};
    color: ${({ theme }) => theme.text.secondary};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  .mode[data-selected='true'] {
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.bubble.pressed};
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.8);
  }

  .mode.power[aria-pressed='true'] {
    color: ${({ theme }) => theme.colors.warm};
  }

  /* The colour and white modes drawn as what they set, as Home Assistant's are. */
  .swatch {
    width: ${u(1.7)};
    height: ${u(1.7)};
    border-radius: 50%;
  }

  .swatch.wheel {
    background:
      radial-gradient(circle closest-side, #fff, rgba(255, 255, 255, 0)),
      conic-gradient(from 90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
  }

  .swatch.white {
    background: linear-gradient(to bottom, rgb(${kelvinToRgb(2000).join(', ')}), #fff, rgb(${kelvinToRgb(6500).join(', ')}));
  }

  .side {
    display: flex;
    flex-direction: column;
    gap: ${u(1.6)};
    min-width: 0;
  }

  .side h3 {
    margin: 0 0 ${u(0.2)};
    font-size: ${u(1.05)};
    font-weight: 600;
    color: ${({ theme }) => theme.text.secondary};
  }

  .presets {
    display: grid;
    grid-template-columns: repeat(4, ${u(3.4)});
    gap: ${u(1)};
  }

  .preset {
    width: ${u(3.4)};
    height: ${u(3.4)};
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
    transition: transform 0.15s ease;
  }

  .preset:active {
    transform: scale(0.9);
  }

  .members {
    display: flex;
    flex-direction: column;
    gap: ${u(0.6)};
  }

  .member {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    gap: ${u(0.6)};
    align-items: center;
  }

  /* Off, a lamp has no level to show: its row is only the switch. */
  .member[data-on='false'] {
    grid-template-columns: minmax(0, 1fr);
  }
`;

/** One lamp of a group or a room: switched by its name, dimmed by its bar. */
const MemberLight: React.FC<{ entityId: string }> = memo(({ entityId }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(entityId);
  const callService = useCallService();
  if (!entity) return null;
  const on = entity.state === 'on';
  const attributes = entity.attributes as Record<string, unknown>;
  const color = lightColor(attributes as Parameters<typeof lightColor>[0]) ?? theme.colors.warm;
  const percent = brightnessPercent(on, attributes.brightness as number | undefined);
  const features = lightFeatures(attributes.supported_color_modes as string[] | undefined);
  return (
    <div className='member' data-on={on}>
      <Bubble
        name={(attributes.friendly_name as string | undefined) ?? entityId}
        state={on ? (features.brightness ? `${percent} %` : t('on')) : t('off')}
        icon={(attributes.icon as string | undefined) ?? 'mdi:lightbulb'}
        active={on}
        lit={on}
        iconColor={on ? color : undefined}
        onClick={() => void callService('light', 'toggle', undefined, { entity_id: entityId })}
      />
      {on && features.brightness && (
        <BrightnessBar
          percent={percent}
          color={color}
          height={3.4}
          label={t('brightness')}
          reported={entity.last_updated}
          onChange={brightness_pct => void callService('light', 'turn_on', { brightness_pct }, { entity_id: entityId })}
        />
      )}
    </div>
  );
});

/** Everything a light can be set to, for the popup to show while it is open. */
const LightPanel: React.FC<{ entityId: string; presets: boolean }> = ({ entityId, presets: withPresets }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(entityId);
  const callService = useCallService();
  const attributes = (entity?.attributes ?? {}) as Record<string, unknown>;
  const features = lightFeatures(attributes.supported_color_modes as string[] | undefined);
  const [mode, setMode] = useState<Mode>(() =>
    features.brightness ? 'brightness' : features.color ? 'color' : features.temperature ? 'temperature' : 'brightness'
  );
  if (!entity) return <p>{t('not_found')}</p>;

  const on = entity.state === 'on';
  const color = lightColor(attributes as Parameters<typeof lightColor>[0]) ?? theme.colors.warm;
  const percent = brightnessPercent(on, attributes.brightness as number | undefined);
  const turnOn = (data: Record<string, unknown>) => void callService('light', 'turn_on', data, { entity_id: entityId });
  const members = ((attributes.entity_id as string[] | undefined) ?? []).filter(id => id.startsWith('light.') && id !== entityId);
  const min = (attributes.min_color_temp_kelvin as number | undefined) ?? 2000;
  const max = (attributes.max_color_temp_kelvin as number | undefined) ?? 6500;
  const presets = !withPresets
    ? []
    : [
        ...(features.temperature ? WHITE_PRESETS.filter(kelvin => kelvin >= min && kelvin <= max) : []).map(kelvin => ({
          key: `k${kelvin}`,
          color: `rgb(${kelvinToRgb(kelvin).join(', ')})`,
          apply: () => turnOn({ color_temp_kelvin: kelvin }),
        })),
        ...(features.color ? COLOR_PRESETS : []).map(rgb => ({
          key: rgb.join(','),
          color: `rgb(${rgb.join(', ')})`,
          apply: () => turnOn({ rgb_color: rgb }),
        })),
      ];
  const side = members.length > 0;
  const shown: Mode = (mode === 'color' && !features.color) || (mode === 'temperature' && !features.temperature) ? 'brightness' : mode;

  return (
    <StyledPanel $side={side}>
      <div className='control'>
        {shown === 'color' ? (
          <ColorWheel
            label={t('light_color')}
            reported={entity.last_updated}
            hs={on ? (attributes.hs_color as [number, number] | undefined) : undefined}
            onChange={hs_color => turnOn({ hs_color })}
          />
        ) : shown === 'temperature' ? (
          <TemperatureColumn
            label={t('light_temperature')}
            reported={entity.last_updated}
            kelvin={on ? (attributes.color_temp_kelvin as number | undefined) : undefined}
            min={min}
            max={max}
            onChange={color_temp_kelvin => turnOn({ color_temp_kelvin })}
          />
        ) : (
          features.brightness && (
            <LevelColumn
              label={t('brightness')}
              reported={entity.last_updated}
              percent={percent}
              color={color}
              onChange={brightness_pct => turnOn({ brightness_pct })}
            />
          )
        )}
        <div className='modes'>
          <button
            type='button'
            className='mode power'
            aria-pressed={on}
            aria-label={t('light_power')}
            title={t('light_power')}
            onClick={() => void callService('light', 'toggle', undefined, { entity_id: entityId })}
          >
            <Icon icon='mdi:power' />
          </button>
          {(features.color || features.temperature) && <span className='divider' />}
          {features.brightness && (features.color || features.temperature) && (
            <button
              type='button'
              className='mode'
              data-selected={shown === 'brightness'}
              aria-label={t('brightness')}
              title={t('brightness')}
              onClick={() => setMode('brightness')}
            >
              <Icon icon='mdi:brightness-6' />
            </button>
          )}
          {features.color && (
            <button
              type='button'
              className='mode'
              data-selected={shown === 'color'}
              aria-label={t('light_color')}
              title={t('light_color')}
              onClick={() => setMode('color')}
            >
              <span className='swatch wheel' />
            </button>
          )}
          {features.temperature && (
            <button
              type='button'
              className='mode'
              data-selected={shown === 'temperature'}
              aria-label={t('light_temperature')}
              title={t('light_temperature')}
              onClick={() => setMode('temperature')}
            >
              <span className='swatch white' />
            </button>
          )}
        </div>
        {presets.length > 0 && (
          <div className='presets'>
            {presets.map(preset => (
              <button
                key={preset.key}
                type='button'
                className='preset'
                style={{ background: preset.color }}
                aria-label={preset.color}
                onClick={preset.apply}
              />
            ))}
          </div>
        )}
      </div>
      {side && (
        <div className='side'>
          {members.length > 0 && (
            <div>
              <h3>{t('light_members')}</h3>
              <div className='members'>
                {members.map(id => (
                  <MemberLight key={id} entityId={id} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </StyledPanel>
  );
};

interface LightPopupProps {
  open: boolean;
  onClose: () => void;
  entityId: string;
  name: string;
  icon: string;
  /** The quick colour and white choices under the controls; a tile's option. */
  presets?: boolean;
}

/**
 * A light up close, as Home Assistant's own dialog has it, on the
 * dashboard's glass: on and off, brightness, colour and white in one tall
 * control with a switch between them, quick choices beside it, and each
 * lamp of a group or a room on its own row.
 */
const LightPopup: React.FC<LightPopupProps> = ({ open, onClose, entityId, name, icon, presets = true }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(entityId);
  const attributes = (entity?.attributes ?? {}) as Record<string, unknown>;
  const on = entity?.state === 'on';
  const features = lightFeatures(attributes.supported_color_modes as string[] | undefined);
  const percent = brightnessPercent(on, attributes.brightness as number | undefined);
  const glow = on ? (lightColor(attributes as Parameters<typeof lightColor>[0]) ?? theme.colors.warm) : undefined;
  const subtitle = !entity ? t('not_found') : on ? (features.brightness ? `${t('on')} · ${percent} %` : t('on')) : t('off');
  // Beside the controls, a group's or a room's lamps; a single light keeps to one column.
  const wide = ((attributes.entity_id as string[] | undefined) ?? []).some(id => id.startsWith('light.') && id !== entityId);
  return (
    <Popup open={open} onClose={onClose} title={name} subtitle={subtitle} icon={icon} iconColor={glow} glow={glow} width={wide ? 68 : 34}>
      <LightPanel entityId={entityId} presets={presets} />
    </Popup>
  );
};

export default memo(LightPopup);
