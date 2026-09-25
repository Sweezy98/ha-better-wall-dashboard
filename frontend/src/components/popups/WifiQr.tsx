import { useMemo } from 'react';
import styled from 'styled-components';
import { encode } from 'uqr';
import { u } from '../../themes/default.theme';
import Icon from '../base/icon/Icon';

const StyledQr = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Over the middle, where the code leaves room for it. */
  .badge {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 22%;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: ${u(3)};
  }
`;

/** The code's colour: white on the popup's dark glass. */
const INK = '#ffffff';

/** Whether a module is part of one of the three corner "eyes". */
const inEye = (x: number, y: number, size: number) => (x < 7 && y < 7) || (x >= size - 7 && y < 7) || (x < 7 && y >= size - 7);

/**
 * A QR code in the dashboard's own style: round white dots and rounded eyes
 * on the popup's dark glass, and the Wi-Fi symbol in the middle -- which the
 * highest error correction absorbs. The dots nearly touch on purpose: small
 * ones on dark were no longer read reliably. Light on dark is read by the
 * cameras of current phones; some older scanner apps want dark on light.
 */
const WifiQr: React.FC<{ payload: string }> = ({ payload }) => {
  const { data, size } = useMemo(() => encode(payload, { ecc: 'H', border: 0 }), [payload]);
  // The middle fifth or so is left clear for the badge.
  const clear = Math.ceil(size * 0.26);
  const from = (size - clear) / 2;
  const inBadge = (x: number, y: number) => x + 1 > from && x < from + clear && y + 1 > from && y < from + clear;

  const dots: React.ReactNode[] = [];
  data.forEach((row, y) =>
    row.forEach((dark, x) => {
      if (dark && !inEye(x, y, size) && !inBadge(x, y)) dots.push(<circle key={`${x}-${y}`} cx={x + 0.5} cy={y + 0.5} r={0.47} />);
    })
  );
  const eyes = [
    [0, 0],
    [size - 7, 0],
    [0, size - 7],
  ];

  return (
    <StyledQr>
      <svg viewBox={`0 0 ${size} ${size}`} role='img' aria-hidden='true'>
        <g fill={INK}>{dots}</g>
        {eyes.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <rect x={x + 0.5} y={y + 0.5} width={6} height={6} rx={1.9} fill='none' stroke={INK} strokeWidth={1} />
            <rect x={x + 2} y={y + 2} width={3} height={3} rx={0.9} fill={INK} />
          </g>
        ))}
      </svg>
      <span className='badge'>
        <Icon icon='mdi:wifi' />
      </span>
    </StyledQr>
  );
};

export default WifiQr;
