import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { fractionOf, stepPath, type TimePoint, type TimeSpan } from '../../../lib/timeline';
import { useLanguage } from '../../../hooks/useHa';

const WIDTH = 500;
const HEIGHT = 100;

const StyledChart = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${u(0.35)};
  padding: ${u(0.8)};
  border-radius: ${u(1)};
  background: ${({ theme }) => theme.bubble.background};

  svg {
    display: block;
    width: 100%;
    height: ${u(7)};
    overflow: visible;
  }

  .grid {
    stroke: rgba(255, 255, 255, 0.07);
    stroke-width: 1;
  }

  .band {
    position: relative;
    height: ${u(0.5)};
    border-radius: ${u(0.3)};
    overflow: hidden;
    background: ${({ theme }) => theme.bubble.icon};
  }

  .band span {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .axis {
    display: flex;
    justify-content: space-between;
    font-size: ${u(0.8)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: ${u(1)};
    font-size: ${u(0.8)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .legend span {
    display: inline-flex;
    align-items: center;
    gap: ${u(0.35)};
  }

  .legend i {
    width: ${u(0.9)};
    height: ${u(0.25)};
    border-radius: ${u(0.15)};
  }
`;

export interface ChartLine {
  points: TimePoint[];
  color: string;
  label: string;
  dashed?: boolean;
}

interface PositionChartProps {
  start: number;
  end: number;
  lines: ChartLine[];
  /** Under the chart: what was in charge when, each in its own colour. */
  bands?: (TimeSpan & { color: string })[];
  /** A line down the chart at this time: now, on a plan. */
  marker?: number;
}

/**
 * Positions, 0 to 100, as step lines over a stretch of time -- a cover jumps
 * and stays -- with the times at its foot and a band of what steered it.
 */
const PositionChart: React.FC<PositionChartProps> = ({ start, end, lines, bands, marker }) => {
  const language = useLanguage();
  const frame = { start, end, width: WIDTH, height: HEIGHT };
  const time = (t: number) => new Date(t).toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' });
  return (
    <StyledChart>
      {/* A little room above and below, so a line at 0 or 100 % is not lost on the edge. */}
      <svg viewBox={`0 -4 ${WIDTH} ${HEIGHT + 8}`} preserveAspectRatio='none' aria-hidden='true'>
        {[0, 50, 100].map(level => (
          <line key={level} className='grid' x1={0} x2={WIDTH} y1={HEIGHT - level} y2={HEIGHT - level} vectorEffect='non-scaling-stroke' />
        ))}
        {lines.map(line => (
          <path
            key={line.label}
            d={stepPath(line.points, frame)}
            fill='none'
            stroke={line.color}
            strokeWidth={2}
            strokeDasharray={line.dashed ? '5 4' : undefined}
            strokeLinejoin='round'
            vectorEffect='non-scaling-stroke'
          />
        ))}
        {marker !== undefined && (
          <line
            x1={fractionOf(marker, start, end) * WIDTH}
            x2={fractionOf(marker, start, end) * WIDTH}
            y1={0}
            y2={HEIGHT}
            stroke='rgba(255, 255, 255, 0.5)'
            strokeWidth={1}
            vectorEffect='non-scaling-stroke'
          />
        )}
      </svg>
      {bands && bands.length > 0 && (
        <div className='band'>
          {bands.map(band => (
            <span
              key={`${band.from}-${band.key}`}
              title={band.key}
              style={{
                left: `${fractionOf(band.from, start, end) * 100}%`,
                width: `${(fractionOf(band.to, start, end) - fractionOf(band.from, start, end)) * 100}%`,
                background: band.color,
              }}
            />
          ))}
        </div>
      )}
      <div className='axis'>
        <span>{time(start)}</span>
        <span>{time((start + end) / 2)}</span>
        <span>{time(end)}</span>
      </div>
      <div className='legend'>
        {lines.map(line => (
          <span key={line.label}>
            <i style={{ background: line.color }} />
            {line.label}
          </span>
        ))}
      </div>
    </StyledChart>
  );
};

export default memo(PositionChart);
