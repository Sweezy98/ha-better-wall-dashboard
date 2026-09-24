import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import Icon from '../base/icon/Icon';
import { useLanguage, useT } from '../../hooks/useHa';
import { useAttributeRange } from '../../hooks/useAttributeRange';
import { formatNumber } from '../../lib/format';
import { barometerFraction, pressureToHpa } from '../../lib/weather';

// A half circle in a 120 x 68 box, left to right over the top, with room
// above it for the weather it stands for.
const WIDTH = 120;
const HEIGHT = 68;
const CX = 60;
const CY = 62;
const RADIUS = 40;
const TRACK = 5;

const StyledRange = styled.span`
  grid-column: 2;
  display: flex;
  align-items: center;
  gap: ${u(0.6)};
  font-size: ${u(0.85)};
  color: ${({ theme }) => theme.text.secondary};

  span {
    display: inline-flex;
    align-items: center;
  }
`;

const StyledDial = styled.div`
  grid-column: 1 / -1;
  position: relative;
  justify-self: center;
  width: 100%;
  max-width: ${u(11)};
  aspect-ratio: ${WIDTH} / ${HEIGHT};
  margin-top: ${u(0.3)};
  color: ${({ theme }) => theme.text.secondary};

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .glyph {
    position: absolute;
    width: 15%;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
  }
`;

const point = (fraction: number, radius = RADIUS) => {
  const radians = Math.PI * (1 + fraction);
  return { x: +(CX + radius * Math.cos(radians)).toFixed(2), y: +(CY + radius * Math.sin(radians)).toFixed(2) };
};

const arc = (from: number, to: number) => {
  const start = point(from);
  const end = point(to);
  return `M ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 0 1 ${end.x} ${end.y}`;
};

/** What the weather does along the dial: rain low, changeable in the middle, sun high. */
const GLYPHS = [
  { fraction: 0.14, icon: 'mdi:weather-pouring' },
  { fraction: 0.5, icon: 'mdi:weather-partly-cloudy' },
  { fraction: 0.86, icon: 'mdi:weather-sunny' },
];

/**
 * The air pressure as one of the weather facts, two rows high: the reading,
 * the last three days' low and high, and a flat half dial from storm to
 * settled -- the days' range a lighter stretch of the track, now a white dot.
 */
const Barometer: React.FC<{ entityId: string; value: number; unit: string | undefined }> = ({ entityId, value, unit }) => {
  const t = useT();
  const language = useLanguage();
  const range = useAttributeRange(entityId, 'pressure', 72);
  const toDial = (reading: number) => barometerFraction(pressureToHpa(reading, unit));
  const digits = unit === 'inHg' || unit === 'kPa' ? 2 : 0;
  const now = point(toDial(value));
  const shownRange = range && range.max > range.min ? range : null;

  return (
    <div className='barometer'>
      <Icon className='icon' icon='mdi:gauge' />
      <span className='label'>{t('pressure')}</span>
      <span className='value'>
        {formatNumber(value, language, digits)} {unit ?? 'hPa'}
      </span>
      {shownRange && (
        <StyledRange title={t('pressure_range')}>
          <span>
            <Icon icon='mdi:arrow-down-thin' />
            {formatNumber(shownRange.min, language, digits)}
          </span>
          <span>
            <Icon icon='mdi:arrow-up-thin' />
            {formatNumber(shownRange.max, language, digits)}
          </span>
        </StyledRange>
      )}
      <StyledDial>
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden='true'>
          <path d={arc(0, 1)} fill='none' stroke='rgba(255, 255, 255, 0.08)' strokeWidth={TRACK} strokeLinecap='round' />
          {shownRange && (
            <path
              d={arc(toDial(shownRange.min), toDial(shownRange.max))}
              fill='none'
              stroke='rgba(255, 255, 255, 0.3)'
              strokeWidth={TRACK}
              strokeLinecap='round'
            />
          )}
          <circle cx={now.x} cy={now.y} r={4.6} fill='#fff' stroke='#1c1c20' strokeWidth={2} />
        </svg>
        {GLYPHS.map(glyph => {
          const at = point(glyph.fraction, RADIUS + 15);
          return (
            <span key={glyph.icon} className='glyph' style={{ left: `${(at.x / WIDTH) * 100}%`, top: `${(at.y / HEIGHT) * 100}%` }}>
              <Icon icon={glyph.icon} size='100%' />
            </span>
          );
        })}
      </StyledDial>
    </div>
  );
};

export default Barometer;
