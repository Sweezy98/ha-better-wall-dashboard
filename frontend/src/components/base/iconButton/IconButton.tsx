import Icon from '../icon/Icon';
import { StyledIconButton, StyledIconButtonBadge } from './IconButton.styled';

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  badge?: number;
  /** A dot without a number: something is waiting, e.g. an update. */
  dot?: boolean;
  label: string;
  active?: boolean;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, badge, dot, label, active, color }) => (
  <StyledIconButton type='button' onClick={onClick} aria-label={label} data-tip={label} $active={active}>
    <Icon icon={icon} color={color} />
    {badge !== undefined && badge > 0 && <StyledIconButtonBadge>{badge > 99 ? '99+' : badge}</StyledIconButtonBadge>}
    {dot && !badge && <StyledIconButtonBadge data-dot />}
  </StyledIconButton>
);

export default IconButton;
