import { memo } from 'react';
import Icon from '../icon/Icon';
import {
  StyledBubble,
  StyledBubbleIcon,
  StyledBubbleName,
  StyledBubbleState,
  StyledBubbleText,
  StyledBubbleTrailing,
} from './Bubble.styled';

interface BubbleProps {
  name: string;
  state?: React.ReactNode;
  icon?: string;
  /** Replaces the icon: a person's photo. */
  picture?: string;
  /** Full-opacity icon; Bubble Card dims the icon of anything that is off. */
  active?: boolean;
  iconColor?: string;
  background?: string;
  trailing?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * The row every sidebar item is drawn with: icon in a circle, name over state.
 *
 * A <button> only when it does something, so a person's row is not a tab
 * stop and does not flash on touch. A span otherwise, so it may sit inside
 * another button, as the graph card's header does.
 */
const Bubble: React.FC<BubbleProps> = ({
  name,
  state,
  icon,
  picture,
  active = true,
  iconColor,
  background,
  trailing,
  onClick,
  className,
}) => (
  <StyledBubble
    as={onClick ? 'button' : 'span'}
    type={onClick ? 'button' : undefined}
    onClick={onClick}
    $interactive={Boolean(onClick)}
    $background={background}
    className={className}
  >
    <StyledBubbleIcon $active={active || Boolean(picture)} $color={iconColor}>
      {picture ? <img src={picture} alt='' /> : icon ? <Icon icon={icon} /> : null}
    </StyledBubbleIcon>
    <StyledBubbleText>
      <StyledBubbleName>{name}</StyledBubbleName>
      {state !== undefined && state !== null && state !== '' && <StyledBubbleState>{state}</StyledBubbleState>}
    </StyledBubbleText>
    {trailing && <StyledBubbleTrailing>{trailing}</StyledBubbleTrailing>}
  </StyledBubble>
);

export default memo(Bubble);
