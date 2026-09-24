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

/**
 * The time and date, in the user's locale.
 *
 * Ticks on the minute -- the display has no seconds -- and is the only thing
 * on the dashboard that re-renders because time passed.
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

export default memo(Clock);
