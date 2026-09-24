import styled, { useTheme } from 'styled-components';
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

const StyledDial = styled.div`
  grid-column: 1 / -1;
  position: relative;
  justify-self: center;
  width: 100%;
  max-width: ${u(11)};
  aspect-ratio: ${WIDTH} / ${HEIGHT};
  margin-top: ${u(0.7)};
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

/** A small wedge on the track pointing at the centre: where the days' low or high was. */
const marker = (fraction: number) =>
  [point(fraction, RADIUS - TRACK / 2), point(fraction - 0.035, RADIUS + TRACK / 2 + 3), point(fraction + 0.035, RADIUS + TRACK / 2 + 3)]
    .map(({ x, y }) => `${x},${y}`)
    .join(' ');

/** What the weather does along the dial: rain low, changeable in the middle, sun high. */
const GLYPHS = [
  { fraction: 0.14, icon: 'mdi:weather-pouring' },
  { fraction: 0.5, icon: 'mdi:weather-partly-cloudy' },
  { fraction: 0.86, icon: 'mdi:weather-sunny' },
];

/**
 * The air pressure as one of the weather facts, two rows high: the reading,
 * and a flat half dial from storm to settled: now as a white dot, the last
 * three days' low and high as a blue and a red wedge on the track.
 */
const Barometer: React.FC<{ entityId: string; value: number; unit: string | undefined }> = ({ entityId, value, unit }) => {
  const t = useT();
  const language = useLanguage();
  const theme = useTheme();
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
      <StyledDial>
        <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden='true'>
          <path d={arc(0, 1)} fill='none' stroke='rgba(255, 255, 255, 0.08)' strokeWidth={TRACK} strokeLinecap='round' />
          {shownRange && (
            <>
              <polygon points={marker(toDial(shownRange.min))} fill={theme.colors.temperature}>
                <title>{`${t('pressure_low')}: ${formatNumber(shownRange.min, language, digits)}`}</title>
              </polygon>
              <polygon points={marker(toDial(shownRange.max))} fill={theme.colors.alert}>
                <title>{`${t('pressure_high')}: ${formatNumber(shownRange.max, language, digits)}`}</title>
              </polygon>
            </>
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
