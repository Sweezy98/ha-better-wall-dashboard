import styled from 'styled-components';

/** A stretch of the dial, from and to a fraction of it, in its own colour. */
export interface GaugeSegment {
  from: number;
  to: number;
  color: string;
}

interface GaugeProps {
  /** Where the marker sits, from 0 to 1. */
  fraction: number;
  segments: GaugeSegment[];
  value: string;
  unit?: string;
  /** Under the value, in the colour of the segment the marker is in. */
  caption?: string;
  label: string;
}

const StyledGauge = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;

  .value {
    font-size: 23px;
    font-weight: 600;
    fill: ${({ theme }) => theme.text.primary};
  }

  .unit {
    font-size: 10px;
    fill: ${({ theme }) => theme.text.secondary};
  }

  .caption {
    font-size: 10.5px;
    font-weight: 600;
  }
`;

// A 240° dial open at the bottom, in a 100-wide box, as Home Assistant's own
// gauge card draws it. Angles run clockwise from three o'clock.
const START = 150;
const SWEEP = 240;
const RADIUS = 40;
const WIDTH = 7;
/** Between two segments, in degrees: the gaps are the dial's tick marks. */
const GAP = 2;

/** The point on the dial a fraction of the way along it. */
const point = (fraction: number) => {
  const radians = ((START + SWEEP * fraction) * Math.PI) / 180;
  return { x: +(50 + RADIUS * Math.cos(radians)).toFixed(2), y: +(50 + RADIUS * Math.sin(radians)).toFixed(2) };
};

const arc = (from: number, to: number) => {
  const start = point(from);
  const end = point(to);
  return `M ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 ${SWEEP * (to - from) > 180 ? 1 : 0} 1 ${end.x} ${end.y}`;
};

/**
 * A dial in the dashboard's own style: the scale in coloured segments, dim
 * except for the one the reading is in, a marker like the forecast bars'
 * "now" dot, and the reading itself in the middle.
 */
const Gauge: React.FC<GaugeProps> = ({ fraction, segments, value, unit, caption, label }) => {
  const clamped = Math.min(1, Math.max(0, fraction));
  const active = segments.find(segment => clamped >= segment.from && clamped <= segment.to);
  const gap = GAP / SWEEP / 2;
  const marker = point(clamped);
  return (
    <StyledGauge viewBox='0 4 100 86' role='img' aria-label={`${label}: ${value} ${unit ?? ''} ${caption ?? ''}`.trim()}>
      {segments.map(segment => (
        <path
          key={segment.from}
          d={arc(segment.from > 0 ? segment.from + gap : 0, segment.to < 1 ? segment.to - gap : 1)}
          fill='none'
          stroke={segment.color}
          strokeWidth={WIDTH}
          opacity={segment === active ? 1 : 0.28}
        />
      ))}
      <circle cx={marker.x} cy={marker.y} r={4.4} fill='#fff' stroke='#1c1c20' strokeWidth={1.8} />
      <text className='value' x={50} y={55} textAnchor='middle'>
        {value}
      </text>
      {unit && (
        <text className='unit' x={50} y={68} textAnchor='middle'>
          {unit}
        </text>
      )}
      {caption && (
        <text className='caption' x={50} y={87} textAnchor='middle' fill={active?.color}>
          {caption}
        </text>
      )}
    </StyledGauge>
  );
};

export default Gauge;
