import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import { u } from '../../../themes/default.theme';
import { useTick } from '../../../hooks/useNow';
import { useLanguage } from '../../../hooks/useHa';
import { formatDate, formatTime } from '../../../lib/format';

const StyledClock = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  line-height: 1;
  font-weight: 300;
`;

const StyledTime = styled.p`
  font-size: ${u(6.4)};
  letter-spacing: -0.02em;
  margin-left: -0.04em;
`;

/** Seconds after the minutes: smaller and dimmer, so the time still reads first. */
const StyledSeconds = styled.span`
  font-size: 0.42em;
  margin-left: 0.08em;
  color: ${({ theme }) => theme.text.secondary};
  font-variant-numeric: tabular-nums;
`;

const StyledDate = styled.p`
  font-size: ${u(2.05)};
  margin-top: ${u(0.35)};
  padding-left: ${u(0.1)};
  white-space: nowrap;
`;

/**
 * The time and date as figures, in the user's locale. Ticks on the minute,
 * or every second when seconds are shown -- and is the only thing on the
 * dashboard that re-renders because time passed.
 */
const Clock: React.FC<{ timeProps?: React.HTMLAttributes<HTMLDivElement>; seconds?: boolean }> = ({ timeProps, seconds = false }) => {
  // Every second only when seconds are shown; otherwise on the minute.
  const now = new Date(useTick(seconds ? 1_000 : 60_000));
  const language = useLanguage();
  return (
    <StyledClock>
      <div {...timeProps}>
        <StyledTime>
          {formatTime(now, language)}
          {seconds && <StyledSeconds>{String(now.getSeconds()).padStart(2, '0')}</StyledSeconds>}
        </StyledTime>
      </div>
      <StyledDate>{formatDate(now, language)}</StyledDate>
    </StyledClock>
  );
};

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

/**
 * Straight on the sidebar: no face of its own behind the marks. As tall as
 * the digital clock's figures and date together, so the header keeps its
 * height whichever is chosen.
 */
const StyledDial = styled.div`
  width: ${u(8.8)};
  height: ${u(8.8)};
  flex: none;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  /* Each hand turns about the dial's centre, forever, at its own speed. */
  .hand {
    transform-box: view-box;
    transform-origin: 50px 50px;
    animation-name: ${spin};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

/** The point on the dial `fraction` of the way round from twelve, at `radius`. */
const at = (fraction: number, radius: number) => {
  const angle = fraction * 2 * Math.PI;
  return { x: 50 + radius * Math.sin(angle), y: 50 - radius * Math.cos(angle) };
};

/**
 * One hand, drawn pointing at twelve and turned by a CSS animation of
 * `period` seconds, started `into` seconds in: the browser moves it smoothly,
 * every frame, on its own -- no re-render, no stepping.
 */
const Hand: React.FC<{ period: number; into: number; length: number; width: number; opacity?: number }> = ({
  period,
  into,
  length,
  width,
  opacity = 1,
}) => (
  <g className='hand' style={{ animationDuration: `${period}s`, animationDelay: `-${into}s` }}>
    <line x1={50} y1={57} x2={50} y2={50 - length} stroke='#fff' strokeOpacity={opacity} strokeWidth={width} strokeLinecap='round' />
  </g>
);

/**
 * A wall clock in the dashboard's style, straight on the sidebar: the hours
 * as dots with bars at the quarters, and white rounded hands -- a thin second
 * hand too, when seconds are shown.
 *
 * The hands are re-set to the real time every ten minutes and whenever the
 * page comes back from sleep, by drawing them afresh: an animation keeps its
 * own time, and a clock that is changed or a tablet that is suspended would
 * otherwise leave it behind.
 */
export const AnalogClock: React.FC<{ timeProps?: React.HTMLAttributes<HTMLDivElement>; seconds?: boolean }> = ({
  timeProps,
  seconds = false,
}) => {
  const set = useTick(600_000);
  const now = new Date(set);
  const second = now.getSeconds() + now.getMilliseconds() / 1000;
  const minute = now.getMinutes() * 60 + second;
  const hour = (now.getHours() % 12) * 3600 + minute;
  return (
    <StyledDial {...timeProps}>
      <svg viewBox='0 0 100 100' role='img' aria-label={now.toLocaleTimeString()}>
        {Array.from({ length: 12 }, (_, index) => {
          if (index % 3 === 0) {
            const outer = at(index / 12, 44);
            const inner = at(index / 12, 35);
            return (
              <line
                key={index}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke='rgba(255, 255, 255, 0.75)'
                strokeWidth={3.5}
                strokeLinecap='round'
              />
            );
          }
          const dot = at(index / 12, 40);
          return <circle key={index} cx={dot.x} cy={dot.y} r={1.9} fill='rgba(255, 255, 255, 0.35)' />;
        })}
        <g key={set}>
          <Hand period={43_200} into={hour} length={24} width={6} />
          <Hand period={3_600} into={minute} length={35} width={4} />
          {seconds && <Hand period={60} into={second} length={39} width={1.6} opacity={0.75} />}
        </g>
        <circle cx={50} cy={50} r={3.4} fill='#fff' />
      </svg>
    </StyledDial>
  );
};

const StyledSideDate = styled.p`
  font-size: ${u(1.8)};
  font-weight: 300;
  line-height: 1.1;
  white-space: nowrap;
`;

/** The date beside the dial, at the header's right. */
export const ClockDate: React.FC = () => {
  const now = new Date(useTick(60_000));
  const language = useLanguage();
  return <StyledSideDate>{formatDate(now, language)}</StyledSideDate>;
};

export default memo(Clock);
