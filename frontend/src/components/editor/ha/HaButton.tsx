import { createElement, useSyncExternalStore } from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../base/icon/Icon';

type Appearance = 'accent' | 'filled' | 'plain';

interface HaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: string;
  appearance?: Appearance;
  danger?: boolean;
  disabled?: boolean;
  title?: string;
}

/** Home Assistant's pill buttons, in its own colours, for when `ha-button` is not defined. */
const StyledPill = styled.button<{ $appearance: Appearance; $danger: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 40px;
  padding: 0 18px;
  border-radius: 999px;
  font: inherit;
  font-weight: 500;
  cursor: pointer;
  ${({ $appearance, $danger }) => {
    const color = $danger ? 'var(--error-color, #db4437)' : 'var(--primary-color, #03a9f4)';
    if ($appearance === 'accent')
      return css`
        background: ${color};
        color: var(--text-primary-color, #fff);
      `;
    if ($appearance === 'filled')
      return css`
        background: color-mix(in srgb, ${color} 16%, transparent);
        color: ${color};
      `;
    return css`
      background: transparent;
      color: ${color};
    `;
  }}

  &:hover:enabled {
    filter: brightness(1.1);
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  ha-icon,
  span[class] {
    --mdc-icon-size: 18px;
  }
`;

const subscribeNever = () => () => {};

/**
 * A button as Home Assistant draws its own: `ha-button` when the page has it,
 * the same pill in the same colours when it does not (the dev server).
 * Accent is the one thing on a screen you are meant to press; filled a
 * quieter second; plain the rest.
 */
const HaButton: React.FC<HaButtonProps> = ({ children, onClick, icon, appearance = 'plain', danger = false, disabled, title }) => {
  const native = useSyncExternalStore(subscribeNever, () => Boolean(customElements.get('ha-button')));
  const content = (
    <>
      {icon && (
        <span slot='start' style={{ display: 'inline-flex' }}>
          <Icon icon={icon} size='18px' />
        </span>
      )}
      {children}
    </>
  );
  if (native) {
    return createElement(
      'ha-button',
      { appearance, variant: danger ? 'danger' : 'brand', disabled: disabled || undefined, title, onClick },
      content
    );
  }
  return (
    <StyledPill type='button' $appearance={appearance} $danger={danger} disabled={disabled} title={title} onClick={onClick}>
      {content}
    </StyledPill>
  );
};

export default HaButton;
