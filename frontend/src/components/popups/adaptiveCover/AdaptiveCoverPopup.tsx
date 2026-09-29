import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import Popup from '../../base/popup/Popup';
import Bubble from '../../base/bubble/Bubble';
import Icon from '../../base/icon/Icon';
import { StyledFacts } from '../WeatherFacts.styled';
import AcpBadges from './AcpBadges';
import PositionChart from './PositionChart';
import WindowView from './WindowView';
import Activity from './Activity';
import CoverButtons from '../cover/CoverButtons';
import CoverPresets from '../cover/CoverPresets';
import { useCoverHistory } from './useCoverHistory';
import { useSteering } from './useSteering';
import { CLIMATE_STATUS, CONTROL_STATUS, MOTION_STATUS, handlerKey } from './acpLabels';
import { useCallService, useEntity, useLanguage, useT } from '../../../hooks/useHa';
import { useTick } from '../../../hooks/useNow';
import { ACP_BADGES, handlerBadge, shownSteps, type AcpEntities, type AcpRole } from '../../../lib/adaptiveCover';
import { spans, type TimePoint } from '../../../lib/timeline';
import { COVER_STATES } from '../../../lib/cover';
import { formatNumber } from '../../../lib/format';
import type { TranslationKey } from '../../../lib/i18n';

/** The details, fewer to a row than the facts above: their values run longer. */
const StyledDetails = styled(StyledFacts)`
  grid-template-columns: repeat(auto-fit, minmax(${u(14)}, 1fr));
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${u(1.4)};

  h3 {
    margin: 0 0 ${u(0.5)};
    font-size: ${u(1.05)};
    font-weight: 600;
    color: ${({ theme }) => theme.text.secondary};
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: ${u(0.4)};
  }

  /* Two columns where there is room: what to do on the left, why and when on the right. */
  .columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${u(26)}, 1fr));
    gap: ${u(1.4)};
    align-items: start;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: ${u(1.4)};
    min-width: 0;
  }

  .cover-buttons {
    display: flex;
    flex-direction: column;
    gap: ${u(0.6)};
    margin-bottom: ${u(0.6)};
  }

  .switches {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${u(0.6)};
  }

  .steps {
    display: flex;
    flex-direction: column;
    gap: ${u(0.4)};
  }

  /* Each handler with its own sign, not a choice to tick: the one that
     decides lit in its colour and saying so, one that matched but lost
     still clear, the rest faded back without a box of their own. */
  .step {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: ${u(0.7)};
    align-items: center;
    padding: ${u(0.45)} ${u(0.8)} ${u(0.45)} ${u(0.45)};
    border-radius: ${u(1.4)};
    background: ${({ theme }) => theme.bubble.background};
  }

  .step[data-matched='false'] {
    background: none;
    opacity: 0.45;
  }

  .step[data-winner='true'] {
    background: color-mix(in srgb, var(--step-color) 14%, transparent);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--step-color) 40%, transparent);
  }

  .step .sign {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${u(2.3)};
    height: ${u(2.3)};
    border-radius: 50%;
    font-size: ${u(1.15)};
    background: ${({ theme }) => theme.bubble.icon};
    color: ${({ theme }) => theme.text.secondary};
  }

  .step[data-winner='true'] .sign {
    background: color-mix(in srgb, var(--step-color) 24%, transparent);
    color: var(--step-color);
  }

  .step .outcome {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${u(0.05)};
  }

  .step .verdict {
    font-size: ${u(0.75)};
    font-weight: 600;
    color: var(--step-color);
  }

  .step .name {
    font-size: ${u(0.95)};
    font-weight: 600;
  }

  .step .reason {
    font-size: ${u(0.82)};
    color: ${({ theme }) => theme.text.secondary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .step .position {
    font-size: ${u(0.95)};
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }

  .step[data-winner='false'] .position {
    font-weight: 400;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

/** Signs for the handlers that have no badge of their own. */
const HANDLER_SIGNS: Record<string, string> = {
  default: 'mdi:window-shutter',
  group_lock: 'mdi:lock-outline',
  group_scene: 'mdi:palette-outline',
};

const SWITCHES: { role: AcpRole; label: TranslationKey; icon: string }[] = [
  { role: 'enabled', label: 'acp_enabled', icon: 'mdi:power' },
  { role: 'automatic', label: 'acp_automatic', icon: 'mdi:autorenew' },
  { role: 'climateMode', label: 'acp_climate_mode', icon: 'mdi:thermostat' },
  { role: 'motionControl', label: 'acp_motion_control', icon: 'mdi:motion-sensor' },
];

const Switch: React.FC<{ entityId: string; label: string; icon: string }> = ({ entityId, label, icon }) => {
  const t = useT();
  const entity = useEntity(entityId);
  const callService = useCallService();
  if (!entity) return null;
  const on = entity.state === 'on';
  return (
    <Bubble
      name={label}
      state={on ? t('on') : t('off')}
      icon={icon}
      active={on}
      lit={on}
      onClick={() => void callService('switch', 'toggle', undefined, { entity_id: entityId })}
    />
  );
};

/** The epoch milliseconds of a forecast's `t`, which may come as text or as seconds. */
const toTime = (value: unknown): number => {
  if (typeof value === 'number') return value < 1e12 ? value * 1000 : value;
  return typeof value === 'string' ? Date.parse(value) : NaN;
};

const Body: React.FC<{ coverId: string; entities: AcpEntities; stopOnlyMoving: boolean; presets: number[] }> = ({
  coverId,
  entities,
  stopOnlyMoving,
  presets,
}) => {
  const t = useT();
  const theme = useTheme();
  const language = useLanguage();
  const callService = useCallService();
  const steering = useSteering(entities);
  const cover = useEntity(coverId);
  const target = useEntity(entities.target);
  const control = useEntity(entities.control);
  const sun = useEntity(entities.sun);
  const sunInFront = useEntity(entities.sunInFront);
  const motion = useEntity(entities.motion);
  const climate = useEntity(entities.climate);
  const lastAction = useEntity(entities.lastAction);
  const forecast = useEntity(entities.forecast);
  const history = useCoverHistory(coverId, entities.target, entities.decision, 24);
  const decision = useEntity(entities.decision);
  const enabledHandlers = decision?.attributes.enabled_handlers as string[] | undefined;
  const steps = shownSteps(steering.trace, Array.isArray(enabledHandlers) ? enabledHandlers : undefined);

  const time = (value: string | undefined) => {
    const parsed = value ? Date.parse(value) : NaN;
    return Number.isFinite(parsed) ? new Date(parsed).toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' }) : '–';
  };
  const percent = (value: unknown) => (Number.isFinite(Number(value)) && value !== null ? `${Math.round(Number(value))} %` : '–');
  const label = (map: Record<string, TranslationKey>, state: string | undefined) => (state && map[state] ? t(map[state]) : (state ?? '–'));
  const degrees = (value: unknown) => (Number.isFinite(Number(value)) ? `${formatNumber(Number(value), language, 0)}°` : '–');

  // The plan's line for now, moved on each minute.
  const now = useTick(60_000);
  const dayStart = new Date(now).setHours(0, 0, 0, 0);
  const dayEnd = dayStart + 86_400_000;
  const plan: TimePoint[] = (
    Array.isArray(forecast?.attributes.forecast) ? (forecast.attributes.forecast as Record<string, unknown>[]) : []
  )
    .map(step => ({ t: toTime(step.t), v: Number(step.position) }))
    .filter(point => Number.isFinite(point.t) && Number.isFinite(point.v));
  const bandColor = (winner: string) => ACP_BADGES[handlerBadge(winner) ?? 'auto'].color;
  const climateAttributes = (climate?.attributes ?? {}) as Record<string, unknown>;
  const unit = (climateAttributes.temperature_unit as string | undefined) ?? '°C';

  return (
    <StyledBody>
      <StyledFacts>
        <div>
          <Icon className='icon' icon='mdi:target' />
          <span className='label'>{t('acp_target')}</span>
          <span className='value'>{percent(target?.attributes.linear_position ?? target?.state)}</span>
        </div>
        <div>
          <Icon className='icon' icon='mdi:window-shutter' />
          <span className='label'>{t('acp_actual')}</span>
          <span className='value'>
            {cover && COVER_STATES[cover.state] ? `${t(COVER_STATES[cover.state])} · ` : ''}
            {percent(cover?.attributes.current_position)}
          </span>
        </div>
        <div>
          <Icon className='icon' icon='mdi:state-machine' />
          <span className='label'>{t('acp_control')}</span>
          <span className='value'>{label(CONTROL_STATUS, control?.state)}</span>
        </div>
        <div>
          <Icon className='icon' icon={sunInFront?.state === 'on' ? 'mdi:white-balance-sunny' : 'mdi:weather-sunny-off'} />
          <span className='label'>{t('acp_sun')}</span>
          <span className='value'>
            {sunInFront ? (sunInFront.state === 'on' ? t('acp_sun_on_window') : t('acp_sun_off_window')) : ''}
            {sun ? ` · ${degrees(sun.state)} / ${degrees(sun.attributes.elevation)}` : ''}
          </span>
        </div>
      </StyledFacts>

      <div className='badges'>
        <AcpBadges entities={entities} />
      </div>

      <WindowView entities={entities} />

      <div className='columns'>
        <div className='column'>
          <section>
            <h3>{t('acp_switches')}</h3>
            <div className='cover-buttons'>
              <CoverButtons entityId={coverId} stopOnlyMoving={stopOnlyMoving} />
              <CoverPresets entityId={coverId} presets={presets} large />
            </div>
            <div className='switches'>
              {SWITCHES.map(item => {
                const entityId = entities[item.role];
                return entityId ? <Switch key={item.role} entityId={entityId} label={t(item.label)} icon={item.icon} /> : null;
              })}
              {steering.manual && entities.resetManual && (
                <Bubble
                  name={t('acp_reset_manual')}
                  icon='mdi:restore'
                  iconColor={ACP_BADGES.manual.color}
                  onClick={() => void callService('button', 'press', undefined, { entity_id: entities.resetManual! })}
                />
              )}
            </div>
          </section>

          {steps.length > 0 && (
            <section>
              <h3>{t('acp_decision')}</h3>
              <div className='steps'>
                {steps.map(step => {
                  const key = handlerKey(step.handler);
                  // Highest priority first: the first that matched is the one that won.
                  const winner = step === steering.trace.find(other => other.matched);
                  const position = step.held_position ?? step.position;
                  const kind = handlerBadge(step.handler);
                  const shown = position !== undefined && position !== null ? `${Math.round(position)} %` : '';
                  return (
                    <div
                      key={step.handler}
                      className='step'
                      data-matched={step.matched}
                      data-winner={winner}
                      style={{ '--step-color': kind ? ACP_BADGES[kind].color : theme.colors.accent } as React.CSSProperties}
                    >
                      <span className='sign'>
                        <Icon icon={kind ? ACP_BADGES[kind].icon : (HANDLER_SIGNS[step.handler] ?? 'mdi:window-shutter')} />
                      </span>
                      <span>
                        <div className='name'>{key ? t(key) : step.handler}</div>
                        {step.reason && <div className='reason'>{step.reason}</div>}
                      </span>
                      {step.matched && shown && (
                        <span className='outcome'>
                          <span className='position'>{winner ? shown : t('acp_would', { position: shown })}</span>
                          {winner && <span className='verdict'>{t('acp_decides')}</span>}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        <div className='column'>
          <section>
            <h3>{t('acp_details')}</h3>
            <StyledDetails>
              {steering.manualUntil && (
                <div>
                  <Icon className='icon' icon='mdi:hand-back-right' />
                  <span className='label'>{t('acp_manual_until')}</span>
                  <span className='value'>{time(steering.manualUntil.toISOString())}</span>
                </div>
              )}
              {motion && motion.state !== 'not_configured' && (
                <div>
                  <Icon className='icon' icon='mdi:motion-sensor' />
                  <span className='label'>{t('acp_motion')}</span>
                  <span className='value'>{label(MOTION_STATUS, motion.state)}</span>
                </div>
              )}
              {/* Only once there has been one: before, the state is ACP's own English placeholder. */}
              {typeof lastAction?.attributes.timestamp === 'string' && (
                <div>
                  <Icon className='icon' icon='mdi:history' />
                  <span className='label'>{t('acp_last_action')}</span>
                  <span className='value'>
                    {time(lastAction.attributes.timestamp)}
                    {Number.isFinite(Number(lastAction.attributes.position)) ? ` · ${percent(lastAction.attributes.position)}` : ''}
                  </span>
                </div>
              )}
              {climate && (
                <div>
                  <Icon className='icon' icon='mdi:thermostat' />
                  <span className='label'>
                    {t('acp_climate')} · {label(CLIMATE_STATUS, climate.state)}
                  </span>
                  {/* Inside, then outside, as its thresholds read. */}
                  <span className='value' data-tip={`${t('acp_indoor')} / ${t('acp_outdoor')}`}>
                    {[climateAttributes.indoor_temperature, climateAttributes.outdoor_temperature]
                      .map(value => (value === undefined || value === null ? '–' : formatNumber(Number(value), language, 1)))
                      .join(' / ')}{' '}
                    {unit}
                  </span>
                </div>
              )}
            </StyledDetails>
          </section>

          {plan.length > 0 && (
            <section>
              <h3>{t('acp_forecast')}</h3>
              <PositionChart
                start={dayStart}
                end={dayEnd}
                marker={now}
                lines={[{ points: plan, color: theme.colors.warm, label: t('acp_history_target') }]}
              />
            </section>
          )}

          {history && (history.value.actual.length > 0 || history.value.target.length > 0) && (
            <section>
              <h3>{t('acp_history')}</h3>
              <PositionChart
                start={history.start}
                end={history.end}
                lines={[
                  { points: history.value.target, color: theme.colors.warm, label: t('acp_history_target'), dashed: true },
                  { points: history.value.actual, color: theme.colors.cover, label: t('acp_history_actual') },
                ]}
                bands={spans(history.value.winners, history.start, history.end).map(span => ({ ...span, color: bandColor(span.key) }))}
              />
            </section>
          )}
        </div>
      </div>

      <Activity coverId={coverId} entities={entities} />
    </StyledBody>
  );
};

const NO_PRESETS: number[] = [];

interface AdaptiveCoverPopupProps {
  open: boolean;
  onClose: () => void;
  coverId: string;
  entities: AcpEntities;
  name: string;
  /** The tile's option: stop only while the cover moves. */
  stopOnlyMoving?: boolean;
  /** The tile's position presets. */
  presets?: number[];
}

/**
 * A cover Adaptive Cover Pro steers, up close: where it is and is headed,
 * what is steering it and why -- each handler in the order it decided --
 * its switches, today's plan and the last day, as ACP's own cards show it.
 */
const AdaptiveCoverPopup: React.FC<AdaptiveCoverPopupProps> = ({
  open,
  onClose,
  coverId,
  entities,
  name,
  stopOnlyMoving = false,
  presets = NO_PRESETS,
}) => {
  const theme = useTheme();
  const cover = useEntity(coverId);
  const target = useEntity(entities.target);
  const title = name || (cover?.attributes.friendly_name as string | undefined) || coverId;
  return (
    <Popup
      open={open}
      onClose={onClose}
      title={title}
      subtitle={(target?.attributes.reason as string | undefined) ?? undefined}
      icon='mdi:window-shutter-auto'
      iconColor={theme.colors.cover}
      width={72}
    >
      <Body coverId={coverId} entities={entities} stopOnlyMoving={stopOnlyMoving} presets={presets} />
    </Popup>
  );
};

export default memo(AdaptiveCoverPopup);
