import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
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

/** Straight on the sidebar: no face of its own behind the marks. */
const StyledDial = styled.div`
  width: ${u(7)};
  height: ${u(7)};
  flex: none;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
`;

/** The point on the dial `fraction` of the way round from twelve, at `radius`. */
const at = (fraction: number, radius: number) => {
  const angle = fraction * 2 * Math.PI;
  return { x: 50 + radius * Math.sin(angle), y: 50 - radius * Math.cos(angle) };
};

const RIM = 46;

/**
 * A wall clock in the dashboard's dial language, the barometer's: a faint
 * flat ring for the rim, the minutes of the hour run round it in the accent
 * colour, the hours as dots like the page dots, two white rounded hands and
 * the accent at their pivot. No second hand: it moves on the minute, like
 * the figures.
 */
export const AnalogClock: React.FC<{ timeProps?: React.HTMLAttributes<HTMLDivElement> }> = ({ timeProps }) => {
  const now = new Date(useTick(60_000));
  const accent = useTheme().colors.accent;
  const minutes = now.getMinutes();
  const hours = (now.getHours() % 12) + minutes / 60;
  const hand = (fraction: number, length: number, width: number) => {
    const tip = at(fraction, length);
    const tail = at(fraction + 0.5, 6);
    return <line x1={tail.x} y1={tail.y} x2={tip.x} y2={tip.y} stroke='#fff' strokeWidth={width} strokeLinecap='round' />;
  };
  // The hour so far, as an arc from twelve.
  const end = at(minutes / 60, RIM);
  const arc = minutes ? `M 50 ${50 - RIM} A ${RIM} ${RIM} 0 ${minutes > 30 ? 1 : 0} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}` : '';
  return (
    <StyledDial {...timeProps}>
      <svg viewBox='0 0 100 100' role='img' aria-label={now.toLocaleTimeString()}>
        <circle cx={50} cy={50} r={RIM} fill='none' stroke='rgba(255, 255, 255, 0.08)' strokeWidth={2.8} />
        {arc && <path d={arc} fill='none' stroke={accent} strokeOpacity={0.9} strokeWidth={2.8} strokeLinecap='round' />}
        {Array.from({ length: 12 }, (_, index) => {
          const dot = at(index / 12, 36);
          const quarter = index % 3 === 0;
          return <circle key={index} cx={dot.x} cy={dot.y} r={quarter ? 2.8 : 1.8} fill={`rgba(255, 255, 255, ${quarter ? 0.8 : 0.35})`} />;
        })}
        {hand(hours / 12, 22, 6)}
        {hand(minutes / 60, 32, 4)}
        <circle cx={50} cy={50} r={4.2} fill={accent} stroke='#fff' strokeWidth={1.5} />
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
