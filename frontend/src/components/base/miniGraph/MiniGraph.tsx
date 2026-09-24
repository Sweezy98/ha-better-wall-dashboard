import { memo, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { buildGraph, GRAPH_WIDTH, type Sample } from '../../../lib/graph';
import { u } from '../../../themes/default.theme';

interface MiniGraphProps {
  samples: Sample[];
  hours: number;
  /** mini-graph-card's `points_per_hour`; 0.5 is its default. */
  pointsPerHour?: number;
  color: string;
  /** In the 500-wide viewBox, as mini-graph-card's `line_width`. */
  lineWidth?: number;
  fill?: boolean;
  showPoints?: boolean;
  /** Max at the top left, min at the bottom left, as `show.labels`. */
  labels?: (value: number) => string;
  className?: string;
}

// mini-graph-card's own animations, from its style.js: the line draws itself
// over a second, the fill fades up to 0.15 in half of one.
const dash = keyframes`
  0% { opacity: 0; stroke-dashoffset: 1; }
  25% { opacity: 1; }
  100% { opacity: 1; stroke-dashoffset: 0; }
`;
const reveal = keyframes`
  0% { opacity: 0; }
  100% { opacity: 0.15; }
`;
const pop = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const StyledGraph = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;

  svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
  }

  path {
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .line {
    stroke-dasharray: 1;
    animation: ${dash} 1s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }

  .fill {
    opacity: 0;
    animation: ${reveal} 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
  }

  .points {
    opacity: 0;
    animation: ${pop} 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s forwards;
  }
`;

const StyledLabels = styled.div`
  position: absolute;
  inset: ${u(0.3)} auto ${u(0.3)} ${u(0.8)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${u(0.85)};
  font-weight: 500;
  color: ${({ theme }) => theme.text.primary};
  pointer-events: none;
  z-index: 1;

  /* A dark chip under each, so it reads over the line and the fill alike. */
  span {
    background: rgba(18, 18, 22, 0.72);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-radius: ${u(0.5)};
    padding: ${u(0.05)} ${u(0.45)};
  }
`;

/**
 * mini-graph-card's graph, as a React component.
 *
 * The geometry comes from `lib/graph`, a port of its algorithm. The viewBox
 * keeps the box's own aspect ratio, measured, rather than stretching a fixed
 * one: a stretched viewBox would draw the line thicker along one axis and turn
 * the point markers into ellipses.
 */
const MiniGraph: React.FC<MiniGraphProps> = ({
  samples,
  hours,
  pointsPerHour = 0.5,
  color,
  lineWidth = 5,
  fill = true,
  showPoints = false,
  labels,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [aspect, setAspect] = useState(0.25);
  const id = useId();

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const measure = () => {
      const { width, height } = element.getBoundingClientRect();
      if (width && height) setAspect(Math.round((height / width) * 1000) / 1000);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const height = Math.max(20, GRAPH_WIDTH * aspect);
  const graph = useMemo(
    () => buildGraph(samples, { hours, pointsPerHour, lineWidth, fill, height }),
    [samples, hours, pointsPerHour, lineWidth, fill, height]
  );

  return (
    <StyledGraph ref={ref} className={className}>
      {graph && (
        <svg viewBox={`0 0 ${GRAPH_WIDTH} ${graph.height}`} preserveAspectRatio='none' aria-hidden='true'>
          {fill && <path className='fill' d={graph.fill} fill={color} />}
          <path className='line' d={graph.line} fill='none' stroke={color} strokeWidth={lineWidth} pathLength={1} />
          {showPoints && (
            <g className='points' fill='rgba(30, 30, 34, 1)' stroke={color} strokeWidth={lineWidth / 2}>
              {graph.points.map((point, index) => (
                <circle key={`${id}-${index}`} cx={point.x} cy={point.y} r={lineWidth} />
              ))}
            </g>
          )}
        </svg>
      )}
      {graph && labels && (
        <StyledLabels>
          <span>{labels(graph.max)}</span>
          <span>{labels(graph.min)}</span>
        </StyledLabels>
      )}
    </StyledGraph>
  );
};

export default memo(MiniGraph);
