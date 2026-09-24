import styled from 'styled-components';
import { u } from '../../themes/default.theme';

export const StyledField = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${u(0.25)};
  min-width: 0;
  font-size: ${u(0.85)};

  > span.label {
    color: ${({ theme }) => theme.text.secondary};
  }

  > small {
    color: ${({ theme }) => theme.text.muted};
    font-size: ${u(0.75)};
  }

  input:not([type='checkbox']):not([type='range']),
  select,
  textarea {
    width: 100%;
    min-width: 0;
    padding: ${u(0.5)} ${u(0.7)};
    border-radius: ${u(0.6)};
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(0, 0, 0, 0.25);
    color: inherit;
    font-size: ${u(0.9)};
    outline: none;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  option {
    background: #222;
  }
`;

export const StyledCheck = styled.label`
  display: flex;
  align-items: center;
  gap: ${u(0.6)};
  font-size: ${u(0.9)};
  min-height: ${u(2.2)};

  input {
    width: ${u(1.1)};
    height: ${u(1.1)};
    accent-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledRow = styled.div<{ $columns?: string }>`
  display: grid;
  grid-template-columns: ${({ $columns }) => $columns ?? 'repeat(auto-fill, minmax(14em, 1fr))'};
  gap: ${u(0.6)} ${u(0.9)};
  align-items: end;
`;

export const StyledGroup = styled.fieldset`
  border: ${({ theme }) => theme.card.border};
  border-radius: ${u(1)};
  background: rgba(255, 255, 255, 0.025);
  padding: ${u(0.8)} ${u(1)} ${u(1)};
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${u(0.7)};
  min-width: 0;

  > legend {
    padding: 0 ${u(0.4)};
    font-weight: 600;
    font-size: ${u(0.95)};
  }
`;

export const StyledSmallButton = styled.button<{ $danger?: boolean; $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${u(0.35)};
  padding: ${u(0.4)} ${u(0.8)};
  border-radius: ${u(0.6)};
  font-size: ${u(0.85)};
  white-space: nowrap;
  background: ${({ $primary, $danger, theme }) => ($primary ? theme.colors.accent : $danger ? 'rgba(255, 77, 77, 0.18)' : theme.bubble.background)};
  color: ${({ $primary }) => ($primary ? '#0b141d' : 'inherit')};
  font-weight: ${({ $primary }) => ($primary ? 600 : 400)};

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;
