import { useId } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import Icon from '../base/icon/Icon';
import { useLanguage, useT } from '../../hooks/useHa';
import { useAttributeRange } from '../../hooks/useAttributeRange';
import { formatNumber } from '../../lib/format';
import { barometerFraction, pressureToHpa } from '../../lib/weather';

const StyledDial = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: end;
  gap: ${u(0.3)};
  margin-top: ${u(0.5)};
  color: ${({ theme }) => theme.text.secondary};
  font-size: ${u(1.2)};

  svg {
    display: block;
    width: 100%;
    max-height: ${u(4.4)};
  }
`;

// A half circle in a 100 x 54 box, left to right over the top.
const CX = 50;
const CY = 48;
const RADIUS = 42;
const TRACK = 5;

const point = (fraction: number) => {
  const radians = Math.PI * (1 + fraction);
  return { x: +(CX + RADIUS * Math.cos(radians)).toFixed(2), y: +(CY + RADIUS * Math.sin(radians)).toFixed(2) };
};

const arc = (from: number, to: number) => {
  const start = point(from);
  const end = point(to);
  return `M ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 0 1 ${end.x} ${end.y}`;
};

/**
 * The air pressure as one of the weather facts, two rows high: the reading,
 * then a half dial from storm to settled drawn like the forecast's day bars --
 * the scale faint, the last day's range in colour, now as a white dot.
 */
const Barometer: React.FC<{ entityId: string; value: number; unit: string | undefined }> = ({ entityId, value, unit }) => {
  const t = useT();
  const language = useLanguage();
  // Usable in url(#…) as it is: React's ids contain colons.
  const gradient = `barometer-${useId().replace(/[^\w-]/g, '')}`;
  const range = useAttributeRange(entityId, 'pressure', 24);
  const toDial = (reading: number) => barometerFraction(pressureToHpa(reading, unit));
  const digits = unit === 'inHg' || unit === 'kPa' ? 2 : 0;
  const now = point(toDial(value));
  const stroke = `url(#${gradient})`;

  return (
    <div className='barometer'>
      <Icon className='icon' icon='mdi:gauge' />
      <span className='label'>{t('pressure')}</span>
      <span className='value'>
        {formatNumber(value, language, digits)} {unit ?? 'hPa'}
      </span>
      <StyledDial>
        <Icon icon='mdi:weather-pouring' />
        <svg viewBox='0 0 100 54' aria-hidden='true'>
          <defs>
            <linearGradient id={gradient} gradientUnits='userSpaceOnUse' x1={CX - RADIUS} x2={CX + RADIUS} y1={0} y2={0}>
              <stop offset='0' stopColor='#4aa8e0' />
              <stop offset='0.35' stopColor='#7fd2c4' />
              <stop offset='0.65' stopColor='#ffd27a' />
              <stop offset='1' stopColor='#ff8a3c' />
            </linearGradient>
          </defs>
          <path d={arc(0, 1)} fill='none' stroke={stroke} strokeOpacity={0.25} strokeWidth={TRACK} strokeLinecap='round' />
          {range && range.max > range.min && (
            <path d={arc(toDial(range.min), toDial(range.max))} fill='none' stroke={stroke} strokeWidth={TRACK} strokeLinecap='round' />
          )}
          <circle cx={now.x} cy={now.y} r={4.6} fill='#fff' stroke='#1c1c20' strokeWidth={2} />
        </svg>
        <Icon icon='mdi:weather-sunny' />
      </StyledDial>
    </div>
  );
};

export default Barometer;
