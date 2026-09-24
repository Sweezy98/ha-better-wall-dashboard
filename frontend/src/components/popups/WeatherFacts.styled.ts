import styled from 'styled-components';
import { u } from '../../themes/default.theme';

/** The weather popup's fact tiles -- icon, label, value -- shared by every part of it. */
export const StyledFacts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${u(10.5)}, 1fr));
  gap: ${u(0.6)};

  grid-auto-flow: dense;

  > div {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto auto;
    column-gap: ${u(0.6)};
    align-items: center;
    padding: ${u(0.6)} ${u(0.8)};
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.background};
  }

  /* Two rows high: the reading on top as in every fact, a dial under it. */
  > .tall {
    grid-row: span 2;
    grid-template-rows: auto auto minmax(0, 1fr);
    align-items: start;
  }

  .icon {
    grid-row: 1 / 3;
    font-size: ${u(1.6)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .label {
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .value {
    font-size: ${u(1.15)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
