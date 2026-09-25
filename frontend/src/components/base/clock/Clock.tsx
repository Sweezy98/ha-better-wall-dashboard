import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import { useTick } from '../../../hooks/useNow';
import { useLanguage } from '../../../hooks/useHa';
import { formatDate, formatTime, formatWeekday } from '../../../lib/format';

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

/**
 * The time and date as figures, in the user's locale. Ticks on the minute --
 * there are no seconds -- and is the only thing on the dashboard that
 * re-renders because time passed.
 */
const Clock: React.FC<{ timeProps?: React.HTMLAttributes<HTMLDivElement> }> = ({ timeProps }) => {
  const now = new Date(useTick(60_000));
  const language = useLanguage();
  return (
    <StyledClock>
      <div {...timeProps}>
        <StyledTime>{formatTime(now, language)}</StyledTime>
      </div>
      <StyledDate>{formatDate(now, language)}</StyledDate>
    </StyledClock>
  );
};

/** The glass of the tiles, round: a faint tint, a hairline edge, a highlight along the top. */
const StyledDial = styled.div`
  width: ${u(7)};
  height: ${u(7)};
  flex: none;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.035) 60%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 ${u(0.3)} ${u(1.2)} rgba(0, 0, 0, 0.28);

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

/** The point on the dial `fraction` of the way round from twelve, at `radius`. */
const at = (fraction: number, radius: number) => {
  const angle = fraction * 2 * Math.PI;
  return { x: 50 + radius * Math.sin(angle), y: 50 - radius * Math.cos(angle) };
};

/**
 * A wall clock in the dashboard's style: the tiles' glass for a face, the
 * hours as dots like the page dots with bars at the quarters, two white
 * rounded hands and the accent colour at their pivot. No second hand: it
 * moves on the minute, like the figures.
 */
export const AnalogClock: React.FC<{ timeProps?: React.HTMLAttributes<HTMLDivElement> }> = ({ timeProps }) => {
  const now = new Date(useTick(60_000));
  const accent = useTheme().colors.accent;
  const minutes = now.getMinutes();
  const hours = (now.getHours() % 12) + minutes / 60;
  const hand = (fraction: number, length: number, width: number) => {
    const tip = at(fraction, length);
    const tail = at(fraction + 0.5, 7);
    return <line x1={tail.x} y1={tail.y} x2={tip.x} y2={tip.y} stroke='#fff' strokeWidth={width} strokeLinecap='round' />;
  };
  return (
    <StyledDial {...timeProps}>
      <svg viewBox='0 0 100 100' role='img' aria-label={now.toLocaleTimeString()}>
        {Array.from({ length: 12 }, (_, index) => {
          if (index % 3 === 0) {
            const outer = at(index / 12, 40);
            const inner = at(index / 12, 32);
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
          const dot = at(index / 12, 37);
          return <circle key={index} cx={dot.x} cy={dot.y} r={1.8} fill='rgba(255, 255, 255, 0.35)' />;
        })}
        {hand(hours / 12, 22, 6)}
        {hand(minutes / 60, 33, 4)}
        <circle cx={50} cy={50} r={4.2} fill={accent} stroke='#fff' strokeWidth={1.5} />
      </svg>
    </StyledDial>
  );
};

const StyledSideDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.1;
  white-space: nowrap;

  .weekday {
    font-size: ${u(1.15)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .date {
    font-size: ${u(1.8)};
    font-weight: 300;
  }
`;

/** The date beside the dial, at the header's right: the weekday over it. */
export const ClockDate: React.FC = () => {
  const now = new Date(useTick(60_000));
  const language = useLanguage();
  return (
    <StyledSideDate>
      <span className='weekday'>{formatWeekday(now, language, 'long')}</span>
      <span className='date'>{formatDate(now, language)}</span>
    </StyledSideDate>
  );
};

export default memo(Clock);
