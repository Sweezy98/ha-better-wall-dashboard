import styled from 'styled-components';
import { u } from '../../../themes/default.theme';

/**
 * The value under a finger or the pointer on a chart, above the point it
 * is for -- every chart's the same.
 */
const ChartTooltip = styled.div`
  position: absolute;
  z-index: 2;
  transform: translate(-50%, calc(-100% - ${u(0.9)}));
  padding: ${u(0.25)} ${u(0.6)};
  border-radius: ${u(0.6)};
  background: rgba(18, 18, 22, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text.primary};
  font-size: ${u(0.9)};
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
`;

export default ChartTooltip;
