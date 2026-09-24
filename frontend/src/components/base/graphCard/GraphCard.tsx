import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
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
  /* The card's own tint starts halfway down the header: behind the
     header's top corners there is nothing of it to show as a darker rim. */
  background: linear-gradient(transparent ${u(1.7)}, ${({ theme }) => theme.bubble.inset} ${u(1.7)});
  border: ${({ theme }) => theme.card.border};
  overflow: hidden;
  cursor: pointer;
  ${({ theme }) => pressable(theme.bubble.background, theme.bubble.hover)}

  /* The header fills the card's top corners: the card's inner radius there,
     a pill's round underneath. */
  > :first-child {
    border-radius: calc(${u(1.65)} - 0.5px) calc(${u(1.65)} - 0.5px) ${u(1.7)} ${u(1.7)};
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
