import { memo, useMemo } from 'react';
import styled, { useTheme } from 'styled-components';
import { useHass } from '@hakit/core';
import { u } from '../../../themes/default.theme';
import { useEntity, useLanguage, useT } from '../../../hooks/useHa';
import { useTick } from '../../../hooks/useNow';
import { skyPoint, sunDay, wedgePath } from '../../../lib/sun';
import { fractionOf } from '../../../lib/timeline';
import { formatNumber } from '../../../lib/format';
import type { AcpEntities } from '../../../lib/adaptiveCover';

/** The sky map's radius in its own units; the SVG scales it to the panel. */
const R = 100;
/** The day chart's elevations, bottom to top. */
const LOW = -20;
const HIGH = 90;

const StyledWindow = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${u(0.6)};

  > div {
    display: flex;
    flex-direction: column;
    gap: ${u(0.5)};
    padding: ${u(0.8)};
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.background};
    min-width: 0;
  }

  .compass svg {
    width: ${u(13)};
    height: ${u(13)};
    overflow: visible;
  }

  .plot {
    position: relative;
  }

  .plot svg {
    display: block;
    width: 100%;
    height: ${u(10.5)};
    overflow: visible;
  }

  /* Now, as HTML over the chart: it stays round however the chart is stretched. */
  .dot {
    position: absolute;
    width: ${u(0.9)};
    height: ${u(0.9)};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 0 ${u(0.3)} rgba(0, 0, 0, 0.35);
  }

  .ring {
    fill: none;
    stroke: rgba(255, 255, 255, 0.1);
    stroke-width: 1;
  }

  .cardinal {
    font-size: 13px;
    fill: ${({ theme }) => theme.text.secondary};
    text-anchor: middle;
    dominant-baseline: central;
  }

  .caption {
    display: flex;
    justify-content: space-between;
    gap: ${u(0.6)};
    font-size: ${u(0.82)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .caption strong {
    color: ${({ theme }) => theme.text.primary};
    font-weight: 600;
  }

  .axis {
    display: flex;
    justify-content: space-between;
    font-size: ${u(0.8)};
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const num = (value: unknown): number | undefined => (Number.isFinite(Number(value)) && value !== null ? Number(value) : undefined);

/**
 * The window and the sun, as ACP's sky compass and elevation chart show
 * them: on the left the sky from above -- the window's bearing, the part of
 * the sky it sees, today's path of the sun and where it is now -- and on the
 * right the sun's height through the day, the hours it is on the window
 * shaded, and now.
 */
const WindowView: React.FC<{ entities: AcpEntities }> = ({ entities }) => {
  const t = useT();
  const theme = useTheme();
  const language = useLanguage();
  const sun = useEntity(entities.sun);
  const startSun = useEntity(entities.startSun);
  const endSun = useEntity(entities.endSun);
  const inFront = useEntity(entities.sunInFront);
  const latitude = useHass(state => state.config?.latitude);
  const longitude = useHass(state => state.config?.longitude);
  // The path is today's; now moves on each minute.
  const now = useTick(60_000);
  const dayStart = new Date(now).setHours(0, 0, 0, 0);
  const dayEnd = dayStart + 86_400_000;
  const path = useMemo(
    () => (latitude !== undefined && longitude !== undefined ? sunDay(dayStart, latitude, longitude) : []),
    [dayStart, latitude, longitude]
  );

  const attributes = (sun?.attributes ?? {}) as Record<string, unknown>;
  const azimuth = num(sun?.state);
  const elevation = num(attributes.elevation);
  const windowAzimuth = num(attributes.window_azimuth);
  const left = num(attributes.fov_left) ?? 0;
  const right = num(attributes.fov_right) ?? 0;
  const blindSpots = Array.isArray(attributes.blind_spot_ranges) ? (attributes.blind_spot_ranges as [number, number][]) : [];
  const onWindow = inFront?.state === 'on';
  const time = (value: string | undefined) => {
    const parsed = value ? Date.parse(value) : NaN;
    return Number.isFinite(parsed) ? new Date(parsed).toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' }) : '–';
  };
  const degrees = (value: number | undefined) => (value === undefined ? '–' : `${formatNumber(value, language, 0)}°`);

  const sunColor = theme.colors.warm;
  const above = path.filter(step => step.elevation > 0);
  const skyLine = above.map(step => skyPoint(step.azimuth, step.elevation, R)).map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`);
  const sunNow = azimuth !== undefined && elevation !== undefined ? skyPoint(azimuth, elevation, R) : null;
  const arrow = windowAzimuth !== undefined ? skyPoint(windowAzimuth, 0, R * 0.78) : null;

  // The day chart: x through the day, y the sun's height.
  const W = 500;
  const H = 100;
  const y = (value: number) => H - ((Math.min(HIGH, Math.max(LOW, value)) - LOW) / (HIGH - LOW)) * H;
  const dayLine = path
    .map((step, index) => `${index ? 'L' : 'M'}${(fractionOf(step.t, dayStart, dayEnd) * W).toFixed(1)},${y(step.elevation).toFixed(1)}`)
    .join(' ');
  const shadeFrom = startSun ? Date.parse(startSun.state) : NaN;
  const shadeTo = endSun ? Date.parse(endSun.state) : NaN;
  const nowX = fractionOf(now, dayStart, dayEnd) * W;
  const nowElevation = path.length
    ? path[Math.min(path.length - 1, Math.round(((now - dayStart) / 86_400_000) * (path.length - 1)))].elevation
    : undefined;

  if (!sun) return null;
  return (
    <StyledWindow>
      <div className='compass'>
        <svg viewBox={`${-R - 14} ${-R - 14} ${2 * R + 28} ${2 * R + 28}`} aria-hidden='true'>
          {[R, (R * 2) / 3, R / 3].map(radius => (
            <circle key={radius} className='ring' r={radius} />
          ))}
          {windowAzimuth !== undefined && (
            <path
              d={wedgePath(windowAzimuth - left, windowAzimuth + right, R)}
              fill={`color-mix(in srgb, ${theme.colors.accent} 16%, transparent)`}
              stroke={`color-mix(in srgb, ${theme.colors.accent} 45%, transparent)`}
              strokeDasharray='4 3'
            />
          )}
          {blindSpots.map(([from, to]) => (
            <path key={`${from}-${to}`} d={wedgePath(from, to, R)} fill={`color-mix(in srgb, ${theme.colors.alert} 16%, transparent)`} />
          ))}
          {skyLine.length > 1 && (
            <polyline
              points={skyLine.join(' ')}
              fill='none'
              stroke={sunColor}
              strokeOpacity={0.55}
              strokeWidth={1.5}
              strokeDasharray='2 4'
            />
          )}
          {arrow && <line x1={0} y1={0} x2={arrow.x} y2={arrow.y} stroke={theme.colors.cover} strokeWidth={3} strokeLinecap='round' />}
          <circle r={3} fill={theme.colors.cover} />
          {(['N', 'E', 'S', 'W'] as const).map((letter, index) => {
            const point = skyPoint(index * 90, 0, R + 9);
            return (
              <text key={letter} className='cardinal' x={point.x} y={point.y}>
                {t(`compass_${letter.toLowerCase()}` as 'compass_n')}
              </text>
            );
          })}
          {sunNow && elevation !== undefined && elevation > 0 && (
            <>
              {onWindow && <circle cx={sunNow.x} cy={sunNow.y} r={13} fill={sunColor} opacity={0.25} />}
              <circle cx={sunNow.x} cy={sunNow.y} r={7} fill={sunColor} />
            </>
          )}
        </svg>
        <div className='caption'>
          <span>
            {t('acp_window')} <strong>{degrees(windowAzimuth)}</strong>
          </span>
          <span>
            {t('acp_sun')} <strong>{degrees(azimuth)}</strong> / <strong>{degrees(elevation)}</strong>
          </span>
        </div>
      </div>

      <div className='day'>
        <div className='caption'>
          <span>{t('acp_sun_today')}</span>
          <span>
            {t('acp_sun_window')} <strong>{time(startSun?.state)}</strong> – <strong>{time(endSun?.state)}</strong>
          </span>
        </div>
        <div className='plot'>
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio='none' aria-hidden='true'>
            {Number.isFinite(shadeFrom) && Number.isFinite(shadeTo) && (
              <rect
                x={fractionOf(shadeFrom, dayStart, dayEnd) * W}
                width={(fractionOf(shadeTo, dayStart, dayEnd) - fractionOf(shadeFrom, dayStart, dayEnd)) * W}
                y={0}
                height={H}
                fill={`color-mix(in srgb, ${theme.colors.accent} 16%, transparent)`}
              />
            )}
            <line x1={0} x2={W} y1={y(0)} y2={y(0)} stroke='rgba(255, 255, 255, 0.18)' strokeWidth={1} vectorEffect='non-scaling-stroke' />
            <path d={dayLine} fill='none' stroke={sunColor} strokeWidth={2} vectorEffect='non-scaling-stroke' />
            <line x1={nowX} x2={nowX} y1={0} y2={H} stroke='rgba(255, 255, 255, 0.45)' strokeWidth={1} vectorEffect='non-scaling-stroke' />
          </svg>
          {nowElevation !== undefined && (
            <span className='dot' style={{ left: `${(nowX / W) * 100}%`, top: `${(y(nowElevation) / H) * 100}%`, background: sunColor }} />
          )}
        </div>
        <div className='axis'>
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>
    </StyledWindow>
  );
};

export default memo(WindowView);
