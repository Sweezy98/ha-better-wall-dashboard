import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import Bubble from '../bubble/Bubble';
import MiniGraph from '../miniGraph/MiniGraph';
import { useHistory } from '../../../hooks/useHistory';

const StyledGraphCard = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  border-radius: ${u(1.65)};
  background: ${({ theme }) => theme.bubble.inset};
  border: ${({ theme }) => theme.card.border};
  overflow: hidden;
  cursor: pointer;

  &:active {
    background: ${({ theme }) => theme.bubble.background};
  }
`;

const StyledGraphArea = styled.div`
  height: ${u(3.9)};
  pointer-events: none;
`;

interface GraphCardProps {
  entityId: string;
  name: string;
  state: string;
  icon: string;
  color: string;
  hours: number;
  onClick: () => void;
}

/**
 * A reading with a day of its history underneath: the reference config's
 * `bubble_card_graph` template -- a Bubble Card button stacked on a
 * mini-graph-card with its name, icon and state hidden -- as one component.
 */
const GraphCard: React.FC<GraphCardProps> = ({ entityId, name, state, icon, color, hours, onClick }) => {
  const samples = useHistory(entityId, hours);
  const theme = useTheme();
  return (
    <StyledGraphCard type='button' onClick={onClick} aria-label={`${name}: ${state}`}>
      <Bubble name={name} state={state} icon={icon} background={theme.bubble.header} />
      <StyledGraphArea>
        <MiniGraph samples={samples} hours={hours} color={color} />
      </StyledGraphArea>
    </StyledGraphCard>
  );
};

export default memo(GraphCard);
