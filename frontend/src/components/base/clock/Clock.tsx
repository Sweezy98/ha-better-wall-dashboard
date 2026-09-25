import { memo } from 'react';
import styled from 'styled-components';
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

const StyledDate = styled.p`
  font-size: ${u(2.05)};
  margin-top: ${u(0.35)};
  padding-left: ${u(0.1)};
  white-space: nowrap;
`;

/** As tall as the digital clock's figures, so the header keeps its height. */
const StyledDial = styled.svg`
  display: block;
  width: ${u(6.6)};
  height: ${u(6.6)};
  margin-bottom: ${u(0.3)};
`;

/** The point on the dial `fraction` of the way round from twelve, at `radius`. */
const at = (fraction: number, radius: number) => {
  const angle = fraction * 2 * Math.PI;
  return { x: 50 + radius * Math.sin(angle), y: 50 - radius * Math.cos(angle) };
};

/**
 * A wall clock in the dashboard's style: a faint glass face, twelve ticks
 * with the quarters stronger, and two white rounded hands. No second hand:
 * like the digital clock it moves on the minute, and a tablet on the wall
 * does not tick.
 */
const AnalogDial: React.FC<{ now: Date }> = ({ now }) => {
  const minutes = now.getMinutes();
  const hours = (now.getHours() % 12) + minutes / 60;
  const hand = (fraction: number, length: number, width: number, opacity: number) => {
    const tip = at(fraction, length);
    const tail = at(fraction + 0.5, 6);
    return (
      <line x1={tail.x} y1={tail.y} x2={tip.x} y2={tip.y} stroke='#fff' strokeOpacity={opacity} strokeWidth={width} strokeLinecap='round' />
    );
  };
  return (
    <StyledDial viewBox='0 0 100 100' role='img' aria-label={now.toLocaleTimeString()}>
      <circle cx={50} cy={50} r={48} fill='rgba(255, 255, 255, 0.04)' stroke='rgba(255, 255, 255, 0.1)' strokeWidth={1.2} />
      {Array.from({ length: 12 }, (_, index) => {
        const quarter = index % 3 === 0;
        const outer = at(index / 12, 43);
        const inner = at(index / 12, quarter ? 35 : 39);
        return (
          <line
            key={index}
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            stroke='#fff'
            strokeOpacity={quarter ? 0.8 : 0.35}
            strokeWidth={quarter ? 3 : 2}
            strokeLinecap='round'
          />
        );
      })}
      {hand(hours / 12, 25, 5.5, 0.95)}
      {hand(minutes / 60, 36, 3.5, 0.95)}
      <circle cx={50} cy={50} r={3.8} fill='#fff' />
    </StyledDial>
  );
};

/**
 * The time and date, in the user's locale -- as figures, or on a dial.
 *
 * Ticks on the minute -- neither has seconds -- and is the only thing on the
 * dashboard that re-renders because time passed.
 */
const Clock: React.FC<{ timeProps?: React.HTMLAttributes<HTMLDivElement>; analog?: boolean }> = ({ timeProps, analog = false }) => {
  const now = new Date(useTick(60_000));
  const language = useLanguage();
  return (
    <StyledClock>
      <div {...timeProps}>{analog ? <AnalogDial now={now} /> : <StyledTime>{formatTime(now, language)}</StyledTime>}</div>
      <StyledDate>{formatDate(now, language)}</StyledDate>
    </StyledClock>
  );
};

export default memo(Clock);
