import Icon from '../icon/Icon';
import { StyledIconButton, StyledIconButtonBadge } from './IconButton.styled';

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  badge?: number;
  label: string;
  active?: boolean;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, badge, label, active, color }) => (
  <StyledIconButton type='button' onClick={onClick} aria-label={label} title={label} $active={active}>
    <Icon icon={icon} color={color} />
    {badge !== undefined && badge > 0 && <StyledIconButtonBadge>{badge > 99 ? '99+' : badge}</StyledIconButtonBadge>}
  </StyledIconButton>
);

export default IconButton;
