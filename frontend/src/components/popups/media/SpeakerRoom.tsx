import { memo, useId, useMemo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { useT } from '../../../hooks/useHa';
import type { TranslationKey } from '../../../lib/i18n';
import {
  DRIVERS,
  FACES,
  LOWBOARD,
  ROOM,
  SCREEN,
  corners,
  driverRing,
  project,
  roomCamera,
  sofaBoxes,
  speakerBoxes,
  speakerKind,
  winding,
  type Box,
  type Camera,
  type Point2,
  type Point3,
  type Sofa,
} from '../../../lib/room';
import type { Channel, SpeakerLayout, SpeakerState } from '../../../lib/speakers';

/**
 * A home cinema at night, as a render of one would show it: a dark blue
 * room, the furniture in grey, and the speakers that play drawn in the
 * accent -- edges, drivers and a pool of light on the floor under them.
 */
const StyledRoom = styled.figure`
  --lit: ${({ theme }) => theme.colors.accent};
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${u(0.6)};
  padding: ${u(0.8)};
  border-radius: ${u(1)};
  background: radial-gradient(ellipse at 50% 40%, #0e1a28, #05090e 75%);
  border: 1px solid rgba(120, 190, 255, 0.08);

  svg {
    display: block;
    width: 100%;
    max-height: ${u(38)};
  }

  .wall {
    stroke: rgba(120, 190, 255, 0.2);
    stroke-width: 1.2;
    stroke-linejoin: round;
  }

  .grid {
    stroke: rgba(120, 190, 255, 0.06);
    stroke-width: 1;
  }

  .edge {
    fill: none;
    stroke: rgba(120, 190, 255, 0.2);
    stroke-width: 1.2;
  }

  .solid polygon {
    stroke-linejoin: round;
    stroke-width: 1;
  }

  .sofa polygon {
    fill: #343c49;
    stroke: rgba(255, 255, 255, 0.06);
  }

  .sofa polygon[data-face='top'] {
    fill: #465063;
  }

  .sofa polygon[data-face='left'],
  .sofa polygon[data-face='right'] {
    fill: #2c333e;
  }

  .board polygon {
    fill: #1c2632;
    stroke: rgba(255, 255, 255, 0.05);
  }

  .board polygon[data-face='top'] {
    fill: #2a3644;
  }

  .screen polygon {
    fill: #020406;
    stroke: #26303c;
  }

  .screen[data-on='true'] polygon[data-face='back'] {
    fill: var(--screen);
  }

  .stand {
    stroke: #3a4656;
    stroke-width: 2.5;
    stroke-linecap: round;
  }

  /* A speaker's body is dark; what it plays through lights its edges and drivers. */
  .speaker polygon {
    fill: #0b1520;
    stroke: rgba(150, 185, 220, 0.3);
    stroke-width: 1.2;
    stroke-linejoin: round;
    transition:
      fill 0.4s ease,
      stroke 0.4s ease;
  }

  .speaker polygon[data-face='top'] {
    fill: #122130;
  }

  .speaker .driver {
    fill: #060c12;
    stroke: rgba(150, 185, 220, 0.3);
    stroke-width: 1.1;
  }

  .speaker[data-state='active'] polygon {
    fill: color-mix(in srgb, var(--lit) 14%, #07111b);
    stroke: var(--lit);
  }

  .speaker[data-state='active'] polygon[data-face='top'] {
    fill: color-mix(in srgb, var(--lit) 30%, #07111b);
  }

  .speaker[data-state='active'] .driver {
    stroke: color-mix(in srgb, var(--lit) 70%, #fff);
    stroke-width: 1.4;
  }

  .speaker[data-state='unknown'] polygon {
    stroke: rgba(150, 185, 220, 0.5);
  }

  .speaker[data-state='unpowered'] {
    opacity: 0.35;
  }

  .speaker[data-state='unpowered'] polygon {
    stroke-dasharray: 3 3;
  }

  figcaption {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${u(0.4)} ${u(1)};
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.text.secondary};
  }

  figcaption strong {
    color: ${({ theme }) => theme.text.primary};
    font-weight: 600;
  }
`;

const SCALE = 1000;

const onScreen = (point: Point3, camera: Camera): Point2 => {
  const p = project(point, camera);
  return [p.x * SCALE, p.y * SCALE];
};

const pointsText = (points: Point2[]) => points.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');

/** A box as the faces of it turned to the camera, and which of them are. */
function boxFaces(b: Box, camera: Camera): { faces: React.ReactNode[]; shown: Set<string> } {
  const points = corners(b).map(point => onScreen(point, camera));
  const shown = new Set<string>();
  const faces = FACES.map(face => {
    const polygon = face.corners.map(index => points[index]);
    if (winding(polygon) <= 0) return null;
    shown.add(face.name);
    return <polygon key={face.name} data-face={face.name} points={pointsText(polygon)} />;
  });
  return { faces, shown };
}

const depthOf = (b: Box, camera: Camera) => project([b.x, b.y, b.z + b.h / 2], camera).depth;

interface Drawn {
  key: string;
  depth: number;
  element: React.ReactNode;
}

interface SpeakerRoomProps {
  layout: SpeakerLayout;
  sofa: Sofa;
  states: Record<string, SpeakerState>;
  /** The receiver is on: the screen glows. */
  on: boolean;
  caption: React.ReactNode;
}

/**
 * The room from behind the seat: the screen at the far wall, the sofa, and
 * each speaker where it stands, lit while the receiver plays through it.
 */
const SpeakerRoom: React.FC<SpeakerRoomProps> = ({ layout, sofa, states, on, caption }) => {
  const t = useT();
  const id = useId().replace(/:/g, '');
  const camera = useMemo(() => roomCamera(), []);
  const places = useMemo(() => speakerBoxes(layout), [layout]);

  const room = useMemo(() => {
    const at = (point: Point3) => onScreen(point, camera);
    const [w, d, h] = [ROOM.width / 2, ROOM.depth, ROOM.height];
    const floor = [at([-w, 0, 0]), at([w, 0, 0]), at([w, d, 0]), at([-w, d, 0])];
    const left = [at([-w, 0, 0]), at([-w, d, 0]), at([-w, d, h]), at([-w, 0, h])];
    const right = [at([w, 0, 0]), at([w, 0, h]), at([w, d, h]), at([w, d, 0])];
    const front = [at([-w, 0, 0]), at([-w, 0, h]), at([w, 0, h]), at([w, 0, 0])];
    const grid: [Point2, Point2][] = [];
    for (let x = -w + 0.6; x < w - 0.01; x += 0.6) grid.push([at([x, 0, 0]), at([x, d, 0])]);
    for (let y = 0.6; y < d - 0.01; y += 0.6) grid.push([at([-w, y, 0]), at([w, y, 0])]);
    const back = [at([-w, d, h]), at([w, d, h])];
    const all = [...floor, ...left, ...right, ...front];
    const xs = all.map(p => p[0]);
    const ys = all.map(p => p[1]);
    const pad = 10;
    const viewBox = [
      Math.min(...xs) - pad,
      Math.min(...ys) - pad,
      Math.max(...xs) - Math.min(...xs) + pad * 2,
      Math.max(...ys) - Math.min(...ys) + pad * 2,
    ]
      .map(value => Math.round(value))
      .join(' ');
    return { floor, left, right, front, grid, back, viewBox };
  }, [camera]);

  const drawn: Drawn[] = [];
  const solid = (key: string, className: string, b: Box, extra?: Record<string, unknown>) =>
    drawn.push({
      key,
      depth: depthOf(b, camera),
      element: (
        <g className={`solid ${className}`} {...extra}>
          {boxFaces(b, camera).faces}
        </g>
      ),
    });
  solid('screen', 'screen', SCREEN, { 'data-on': on });
  solid('board', 'board', LOWBOARD);
  sofaBoxes(sofa).forEach((part, index) => solid(`sofa-${index}`, 'sofa', part));

  const pools: React.ReactNode[] = [];
  for (const [channel, place] of Object.entries(places) as [Channel, Box][]) {
    const state = states[channel] ?? 'unknown';
    const kind = speakerKind(channel);
    const { faces, shown } = boxFaces(place, camera);
    const face = kind === 'ceiling' ? 'top' : 'back';
    const drivers = shown.has(face)
      ? DRIVERS[kind].map(([across, up, radius], index) => (
          <polygon
            key={`driver-${index}`}
            className='driver'
            points={pointsText(driverRing(place, face, across, up, radius).map(p => onScreen(p, camera)))}
          />
        ))
      : null;
    const standing = channel === 'SL' || channel === 'SR';
    // Light on the floor under what plays and stands low.
    if (state === 'active' && place.z < 1.2) {
      const ring = driverRing({ ...place, z: 0, h: 0, d: 0 }, 'top', 0.5, 0, 0.6 / place.w, 28).map(p => onScreen(p, camera));
      pools.push(<polygon key={channel} points={pointsText(ring)} fill={`url(#${id}-pool)`} />);
    }
    drawn.push({
      key: channel,
      depth: depthOf(place, camera),
      element: (
        <g
          className='speaker'
          data-state={state}
          data-tip={`${t(`speaker_${channel}` as TranslationKey)} · ${t(`speaker_${state}`)}`}
          filter={state === 'active' ? `url(#${id}-glow)` : undefined}
        >
          {standing && (
            <line
              className='stand'
              x1={onScreen([place.x, place.y, 0], camera)[0]}
              y1={onScreen([place.x, place.y, 0], camera)[1]}
              x2={onScreen([place.x, place.y, place.z], camera)[0]}
              y2={onScreen([place.x, place.y, place.z], camera)[1]}
            />
          )}
          {faces}
          {drivers}
        </g>
      ),
    });
  }
  // Painted from the far end forwards, so the nearer covers the further.
  drawn.sort((a, b) => b.depth - a.depth);

  return (
    <StyledRoom>
      <svg
        viewBox={room.viewBox}
        role='img'
        aria-label={t('media_speakers')}
        style={{ '--screen': `url(#${id}-screen)` } as React.CSSProperties}
      >
        <defs>
          <linearGradient id={`${id}-wall`} x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0' stopColor='#16283a' stopOpacity='0.9' />
            <stop offset='1' stopColor='#0b1520' stopOpacity='0.9' />
          </linearGradient>
          <radialGradient id={`${id}-floor`} cx='0.5' cy='0.45' r='0.7'>
            <stop offset='0' stopColor='#14222f' />
            <stop offset='1' stopColor='#070c12' />
          </radialGradient>
          <radialGradient id={`${id}-pool`}>
            <stop offset='0' stopColor='var(--lit)' stopOpacity='0.35' />
            <stop offset='1' stopColor='var(--lit)' stopOpacity='0' />
          </radialGradient>
          <linearGradient id={`${id}-screen`} x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0' stopColor='#12314a' />
            <stop offset='1' stopColor='#05101a' />
          </linearGradient>
          <filter id={`${id}-glow`} x='-60%' y='-60%' width='220%' height='220%'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='5' result='blur' />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <polygon className='wall' points={pointsText(room.front)} fill={`url(#${id}-wall)`} />
        <polygon className='wall' points={pointsText(room.left)} fill={`url(#${id}-wall)`} />
        <polygon className='wall' points={pointsText(room.right)} fill={`url(#${id}-wall)`} />
        <polygon className='wall' points={pointsText(room.floor)} fill={`url(#${id}-floor)`} />
        {room.grid.map(([a, b], index) => (
          <line key={index} className='grid' x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />
        ))}
        <polyline className='edge' points={pointsText(room.back)} />
        {pools}
        {drawn.map(item => (
          <g key={item.key}>{item.element}</g>
        ))}
      </svg>
      <figcaption>{caption}</figcaption>
    </StyledRoom>
  );
};

export default memo(SpeakerRoom);
