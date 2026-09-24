import styled from 'styled-components';
import { u } from '../../themes/default.theme';

export const StyledDashboardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* Until the first measurement; see useUnit. */
  --u: 12px;
  isolation: isolate;
`;

export const StyledBackground = styled.div<{ $image: string; $dim: number; $blur: number }>`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: #131313;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    /* Blur pulls the edges in; oversize so the corners stay covered. */
    inset: ${({ $blur }) => `-${$blur * 2}px`};
    background-image: url('${({ $image }) => $image}');
    background-size: cover;
    background-position: center;
    filter: ${({ $blur }) => ($blur ? `blur(${$blur}px)` : 'none')};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ $dim }) => `rgba(10, 10, 10, ${$dim})`};
  }
`;

export const StyledDashboardGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: clamp(${u(24)}, 24%, ${u(36)}) minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
  gap: ${u(1.1)};
  /* The notch and rounded corners of a tablet held in portrait. */
  padding: max(${u(1.1)}, env(safe-area-inset-top)) max(${u(1.1)}, env(safe-area-inset-right)) max(${u(1.1)}, env(safe-area-inset-bottom))
    max(${u(1.1)}, env(safe-area-inset-left));

  [data-orientation='portrait'] > & {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);
  }
`;
