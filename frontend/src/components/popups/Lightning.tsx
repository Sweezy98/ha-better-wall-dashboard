import styled, { useTheme } from 'styled-components';
import { u } from '../../themes/default.theme';
import Icon from '../base/icon/Icon';
import { useEntity, useLanguage, useT } from '../../hooks/useHa';
import { useTick } from '../../hooks/useNow';
import type { Lightning } from '../../hooks/useLightning';
import { StyledFacts } from './WeatherFacts.styled';
import { formatNumber, formatRelative, toNumber } from '../../lib/format';
import { compassPoint } from '../../lib/weather';
import { radarPoint, radarRange } from '../../lib/lightning';

/** The radar square, two fact rows high, beside the facts in two columns. */
const StyledStorm = styled(StyledFacts)`
  grid-template-columns: ${u(7.8)} repeat(2, minmax(0, 1fr));

  > .radar {
    display: block;
    grid-row: span 2;
    padding: ${u(0.4)};
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

/** Radar radius in its own units, in a box of 112 around the house. */
const R = 50;

/**
 * The strikes around the house, north up: flat rings like the barometer's
 * track, home as the same white dot, each strike a warm dot that fades as
 * it ages, the newest the largest.
 */
const RadarDial: React.FC<{ lightning: Lightning; range: number }> = ({ lightning, range }) => {
  const theme = useTheme();
  const newest = lightning.strikes[0]?.time ?? 0;
  const oldest = lightning.strikes[lightning.strikes.length - 1]?.time ?? newest;
  const age = (time: number) => (newest === oldest ? 0 : (newest - time) / (newest - oldest));
  return (
    <div className='radar'>
      <svg viewBox='-56 -56 112 112' aria-hidden='true'>
        <g fill='none' stroke='rgba(255, 255, 255, 0.08)' strokeWidth={1.5}>
          <circle r={R} />
          <circle r={R / 2} />
          <path d={`M 0 ${-R} V ${R} M ${-R} 0 H ${R}`} strokeWidth={1} />
        </g>
        {/* North, as a tick on the outer ring. */}
        <path d={`M 0 ${-R - 5} V ${-R + 5}`} stroke='rgba(255, 255, 255, 0.35)' strokeWidth={2} strokeLinecap='round' />
        {/* Oldest first, so the newest is drawn on top. */}
        {[...lightning.strikes].reverse().map((strike, index) => {
          const at = radarPoint(strike, range);
          const first = index === lightning.strikes.length - 1;
          return (
            <circle
              key={`${strike.time}-${index}`}
              cx={at.x * R}
              cy={at.y * R}
              r={first ? 3.6 : 2.4}
              fill={theme.colors.warm}
              opacity={1 - 0.75 * age(strike.time)}
            />
          );
        })}
        <circle r={3.6} fill='#fff' stroke='#1c1c20' strokeWidth={1.8} />
      </svg>
    </div>
  );
};

/** The one tile shown while Blitzortung hears nothing near the house. */
export const QuietLightningFact: React.FC = () => {
  const t = useT();
  return (
    <div>
      <Icon className='icon' icon='mdi:flash-off-outline' />
      <span className='label'>{t('lightning_nearby')}</span>
      <span className='value'>{t('lightning_none')}</span>
    </div>
  );
};

/**
 * A thunderstorm nearby: the radar, two fact rows high, and beside it how
 * many strikes within its range, the nearest, the direction the last one
 * came from and how long ago that was.
 */
export const LightningFacts: React.FC<{ lightning: Lightning }> = ({ lightning }) => {
  const t = useT();
  const language = useLanguage();
  const now = useTick(30_000);
  const counter = toNumber(useEntity(lightning.sensors.counter || undefined)?.state);
  const azimuth = toNumber(useEntity(lightning.sensors.azimuth || undefined)?.state);
  const latest = lightning.strikes[0];
  const nearest = Math.min(...lightning.strikes.map(strike => strike.distance));
  const direction = azimuth ?? latest?.bearing;
  const count = counter || lightning.strikes.length;
  const range = radarRange(Math.max(...lightning.strikes.map(strike => strike.distance)));

  return (
    <StyledStorm>
      <RadarDial lightning={lightning} range={range} />
      <div>
        <Icon className='icon' icon='mdi:flash' />
        <span className='label'>{t('lightning_within', { range, unit: lightning.unit })}</span>
        <span className='value'>{t('lightning_count', { count })}</span>
      </div>
      <div>
        <Icon className='icon' icon='mdi:map-marker-radius-outline' />
        <span className='label'>{t('lightning_nearest')}</span>
        <span className='value'>{`${formatNumber(nearest, language, 0)} ${lightning.unit}`}</span>
      </div>
      {direction !== undefined && direction !== null && (
        <div>
          <Icon className='icon' icon='mdi:compass-outline' />
          <span className='label'>{t('lightning_direction')}</span>
          <span className='value'>{compassPoint(direction, language)}</span>
        </div>
      )}
      {latest && Number.isFinite(latest.time) && (
        <div>
          <Icon className='icon' icon='mdi:clock-outline' />
          <span className='label'>{t('lightning_last')}</span>
          <span className='value'>{formatRelative(new Date(latest.time), language, now)}</span>
        </div>
      )}
    </StyledStorm>
  );
};
