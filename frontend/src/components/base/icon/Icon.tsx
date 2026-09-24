import { memo } from 'react';
import { Icon as Iconify } from '@iconify/react';
import styled from 'styled-components';

interface IconProps {
  /** An icon name as Home Assistant writes them: "mdi:sofa", "hue:room-other". */
  icon: string;
  /** Any CSS length; defaults to the surrounding font size. */
  size?: string;
  color?: string;
  className?: string;
}

const StyledIcon = styled.span<{ $size?: string; $color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ $size }) => $size ?? '1em'};
  height: ${({ $size }) => $size ?? '1em'};
  color: ${({ $color }) => $color ?? 'inherit'};
  --mdc-icon-size: ${({ $size }) => $size ?? '1em'};
  transition:
    color 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

  ha-icon,
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

/**
 * An icon by name, drawn by Home Assistant when we are inside it.
 *
 * `<ha-icon>` resolves Material Design Icons from Home Assistant's own cached
 * icon database and every custom icon set the user has installed, so an icon
 * name that works in Lovelace works here. It exists only inside a Home
 * Assistant page, so it is looked up before it is used; outside -- the dev
 * server -- Iconify draws the MDI ones from its public API instead.
 */
const Icon: React.FC<IconProps> = ({ icon, size, color, className }) => {
  const native = typeof customElements !== 'undefined' && customElements.get('ha-icon');
  return (
    <StyledIcon $size={size} $color={color} className={className}>
      {native ? <ha-icon icon={icon} /> : <Iconify icon={icon} />}
    </StyledIcon>
  );
};

export default memo(Icon);
