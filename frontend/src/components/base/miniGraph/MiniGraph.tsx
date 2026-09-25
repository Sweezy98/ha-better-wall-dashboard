import { memo, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { buildGraph, GRAPH_WIDTH, type GraphPoint, type Sample } from '../../../lib/graph';
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
  /**
   * What a point says when hovered or tapped -- the big graphs in popups.
   * Without it the graph shows nothing more than its line.
   */
  tooltip?: (point: GraphPoint) => string;
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

  /* A graph that answers a finger keeps vertical swipes for the popup. */
  &[data-inspectable] {
    touch-action: pan-y;
  }

  .inspect {
    pointer-events: none;
  }

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

/** A point's value and time, above it, in the labels' dark chip. */
/** Always above the point -- past the graph's top edge, if it must be: nothing clips it. */
const StyledTooltip = styled.div`
  position: absolute;
  z-index: 2;
  transform: translate(-50%, calc(-100% - ${u(0.9)}));
  padding: ${u(0.25)} ${u(0.6)};
  border-radius: ${u(0.6)};
  background: rgba(18, 18, 22, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text.primary};
  font-size: ${u(0.9)};
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
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
  tooltip,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [aspect, setAspect] = useState(0.25);
  const [active, setActive] = useState<number | null>(null);
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

  // The point nearest the pointer, by time along the graph.
  const inspect = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!graph || !tooltip || !graph.points.length) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width) * GRAPH_WIDTH;
    let nearest = 0;
    graph.points.forEach((point, index) => {
      if (Math.abs(point.x - x) < Math.abs(graph.points[nearest].x - x)) nearest = index;
    });
    setActive(nearest);
  };
  const shown = graph && active !== null ? graph.points[active] : undefined;

  return (
    <StyledGraph
      ref={ref}
      className={className}
      data-inspectable={tooltip ? '' : undefined}
      onPointerMove={tooltip ? inspect : undefined}
      onPointerDown={tooltip ? inspect : undefined}
      // A mouse that leaves takes the tooltip with it; a finger's stays
      // until the next tap.
      onPointerLeave={tooltip ? event => event.pointerType === 'mouse' && setActive(null) : undefined}
    >
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
          {shown && (
            <g className='inspect'>
              <line
                x1={shown.x}
                x2={shown.x}
                y1={0}
                y2={graph.height}
                stroke='rgba(255, 255, 255, 0.25)'
                strokeWidth={1}
                vectorEffect='non-scaling-stroke'
              />
              <circle cx={shown.x} cy={shown.y} r={lineWidth * 1.6} fill={color} stroke='#fff' strokeWidth={lineWidth / 2} />
            </g>
          )}
        </svg>
      )}
      {graph && shown && tooltip && (
        <StyledTooltip
          style={{
            // Kept inside the graph at either end.
            left: `${Math.min(88, Math.max(12, (shown.x / GRAPH_WIDTH) * 100))}%`,
            top: `${(shown.y / graph.height) * 100}%`,
          }}
        >
          {tooltip(shown)}
        </StyledTooltip>
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
