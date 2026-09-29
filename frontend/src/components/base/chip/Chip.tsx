import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import Icon from '../icon/Icon';

const StyledChip = styled.span<{ $color?: string }>`
  display: inline-flex;
  align-items: center;
  gap: ${u(0.3)};
  height: ${u(1.8)};
  padding: 0 ${u(0.7)} 0 ${u(0.5)};
  border-radius: ${u(0.9)};
  font-size: ${u(0.8)};
  font-weight: 600;
  white-space: nowrap;
  /* A wash of its colour, the way a lit icon sits on one. */
  background: ${({ $color, theme }) => ($color ? `color-mix(in srgb, ${$color} 18%, transparent)` : theme.bubble.icon)};
  color: ${({ $color, theme }) => $color ?? theme.text.secondary};

  .chip-icon {
    font-size: ${u(1)};
  }

  /* One that does something: a press brightens it, as a button's does. */
  &:is(button) {
    transition: filter 0.2s ease;
  }

  &:is(button):active {
    filter: brightness(1.3);
  }
`;

interface ChipProps {
  icon: string;
  label: string;
  /** Its colour; grey without one. */
  color?: string;
  title?: string;
  /** What a press does, e.g. give a cover back to automatic control; with it the chip is a button. */
  onClick?: () => void;
  /** After the label, what the press will do: mdi:restore. */
  action?: string;
}

/** A small named state beside a tile's name: "Auto", "Cloudy", "Manual". */
const Chip: React.FC<ChipProps> = ({ icon, label, color, title, onClick, action }) => (
  <StyledChip
    as={onClick ? 'button' : 'span'}
    type={onClick ? 'button' : undefined}
    onClick={onClick}
    $color={color}
    data-tip={title ?? label}
  >
    <Icon className='chip-icon' icon={icon} />
    {/* Its own element, so a narrow tile can show the icon alone. */}
    <span className='chip-label'>{label}</span>
    {action && <Icon className='chip-icon' icon={action} />}
  </StyledChip>
);

export default memo(Chip);
