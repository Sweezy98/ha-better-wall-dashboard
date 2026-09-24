import styled from 'styled-components';

/*
 * The plain controls, drawn in Home Assistant's own colours and sizes so a
 * page without its controls still reads as one of its settings pages. In
 * pixels, as Home Assistant's are: the editor runs on a desk, not on the wall.
 */

export const StyledField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;

  > span.label {
    font-weight: 500;
  }

  small {
    display: block;
    color: var(--secondary-text-color);
    font-size: 13px;
  }

  input:not([type='checkbox']):not([type='range']),
  select,
  textarea {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: 9px 10px;
    border-radius: 8px;
    border: 1px solid var(--divider-color, #3d3d3d);
    background: var(--card-background-color, #1c1c1c);
    color: inherit;
    font: inherit;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: -1px;
  }

  input[type='range'] {
    accent-color: var(--primary-color, #03a9f4);
  }

  .with-icon {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const StyledCheck = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;

  input {
    width: 18px;
    height: 18px;
    margin-top: 2px;
    accent-color: var(--primary-color, #03a9f4);
  }

  small {
    display: block;
    color: var(--secondary-text-color);
    font-size: 13px;
  }
`;

/** Fields side by side where there is room, one under the other where there is not. */
export const StyledRow = styled.div<{ $columns?: string }>`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns ?? 'repeat(auto-fit, minmax(220px, 1fr))'};
  gap: 16px;
  align-items: start;
`;

/** Home Assistant's round icon button: 40 px, a wash on hover, red when it deletes. */
export const StyledIconButton = styled.button<{ $danger?: boolean }>`
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  border: none;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--secondary-text-color);
  cursor: pointer;
  --mdc-icon-size: 20px;
  font-size: 20px;

  &:hover:enabled {
    background: ${({ $danger }) => ($danger ? 'var(--error-color, #db4437)' : 'var(--secondary-background-color)')};
    color: ${({ $danger }) => ($danger ? '#fff' : 'var(--primary-text-color)')};
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &.add {
    color: var(--primary-color, #03a9f4);
  }
`;
