import { memo, useId, useMemo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import Icon from '../../base/icon/Icon';
import { useT } from '../../../hooks/useHa';
import type { TranslationKey } from '../../../lib/i18n';
import {
  DRIVERS,
  FACES,
  ROOM,
  SCREEN,
  corners,
  driverRing,
  listenerFigure,
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
import { useRoomView } from './useRoomView';

/**
 * A home cinema at night, as a render of one would show it: a dark blue
 * room, the furniture in grey, and the speakers that play drawn in the
 * accent -- edges, drivers and a pool of light on the floor under them.
 */
const StyledRoom = styled.figure`
  --lit: ${({ theme }) => theme.colors.accent};
  position: relative;
  margin: 0;
  display: flex;
  min-height: 0;
  padding: ${u(0.6)};
  border-radius: ${u(1)};
  background: radial-gradient(ellipse at 50% 40%, #0e1a28, #05090e 75%);
  border: 1px solid rgba(120, 190, 255, 0.08);

  /* As big as the space it is given allows, whichever way that runs out first. */
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Lines as thick on a small room as on a big one. */
  svg * {
    vector-effect: non-scaling-stroke;
  }

  &[data-movable='true'] svg {
    cursor: grab;
    touch-action: none;
  }

  /* Back to where it started, once moved: the popup's round buttons. */
  .reset {
    position: absolute;
    top: ${u(0.7)};
    right: ${u(0.7)};
    width: ${u(2.6)};
    height: ${u(2.6)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.3)};
    background-color: ${({ theme }) => theme.bubble.icon};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
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

  /* Not the lines' own width here: a limb's stroke is its thickness, and scales with the room. */
  .person .limb,
  .person .light {
    vector-effect: none;
    stroke-linecap: round;
  }

  .person .limb {
    stroke: #465467;
  }

  .person .light {
    stroke: #6f8098;
    opacity: 0.55;
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
    fill: color-mix(in srgb, var(--lit) 18%, #07111b);
    stroke: var(--lit);
    stroke-width: 1.6;
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

/** How big a length in metres comes out on screen at a point, as the camera sees it across. */
function screenLength(point: Point3, metres: number, camera: Camera): number {
  const [x, y] = onScreen(point, camera);
  const [ex, ey] = onScreen(
    [point[0] + camera.right[0] * metres, point[1] + camera.right[1] * metres, point[2] + camera.right[2] * metres],
    camera
  );
  return Math.hypot(ex - x, ey - y);
}

/**
 * The listener, seated: each limb a rounded stroke as thick as it is, with
 * a lighter one along its top for the light on it -- and a shaded head.
 * Each part painted in turn with the room, so the sofa's back hides what it
 * should.
 */
function figure(camera: Camera, id: string): Drawn[] {
  const { limbs, head, headRadius } = listenerFigure();
  const parts: Drawn[] = limbs.map((limb, index) => {
    const middle: Point3 = [0, 1, 2].map(axis => (limb.from[axis] + limb.to[axis]) / 2) as Point3;
    const width = screenLength(middle, limb.radius * 2, camera);
    const [a, b] = [onScreen(limb.from, camera), onScreen(limb.to, camera)];
    return {
      key: `limb-${index}`,
      depth: project(middle, camera).depth,
      element: (
        <g className='person'>
          <line className='limb' x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} strokeWidth={width} />
          <line className='light' x1={a[0]} y1={a[1] - width * 0.18} x2={b[0]} y2={b[1] - width * 0.18} strokeWidth={width * 0.45} />
        </g>
      ),
    };
  });
  const [cx, cy] = onScreen(head, camera);
  parts.push({
    key: 'head',
    depth: project(head, camera).depth,
    element: (
      <g className='person'>
        <circle cx={cx} cy={cy} r={screenLength(head, headRadius, camera)} fill={`url(#${id}-head)`} />
      </g>
    ),
  });
  return parts;
}

const [W, D, H] = [ROOM.width / 2, ROOM.depth, ROOM.height];

/**
 * The room's surfaces, each drawn only while the camera sees its inside:
 * the walls nearest the camera are left open, as a cutaway, and only their
 * top edge stays to show where the room ends.
 */
const SURFACES: { key: string; corners: Point3[]; inside: (eye: number[]) => boolean }[] = [
  {
    key: 'floor',
    corners: [
      [-W, 0, 0],
      [W, 0, 0],
      [W, D, 0],
      [-W, D, 0],
    ],
    inside: eye => eye[2] > 0,
  },
  {
    key: 'front',
    corners: [
      [-W, 0, 0],
      [-W, 0, H],
      [W, 0, H],
      [W, 0, 0],
    ],
    inside: eye => eye[1] > 0,
  },
  {
    key: 'back',
    corners: [
      [W, D, 0],
      [W, D, H],
      [-W, D, H],
      [-W, D, 0],
    ],
    inside: eye => eye[1] < D,
  },
  {
    key: 'left',
    corners: [
      [-W, 0, 0],
      [-W, D, 0],
      [-W, D, H],
      [-W, 0, H],
    ],
    inside: eye => eye[0] > -W,
  },
  {
    key: 'right',
    corners: [
      [W, 0, 0],
      [W, 0, H],
      [W, D, H],
      [W, D, 0],
    ],
    inside: eye => eye[0] < W,
  },
];

interface SpeakerRoomProps {
  layout: SpeakerLayout;
  sofa: Sofa;
  states: Record<string, SpeakerState>;
  /** The receiver is on: the screen glows. */
  on: boolean;
  /** Someone drawn in the listening position. */
  listener: boolean;
  /** Turned, tilted, panned and zoomed by hand. */
  movable: boolean;
  /** The walls drawn, or the floor alone. */
  walls: boolean;
  /** A picture on the screen. */
  screen?: string;
}

/**
 * The room from behind the seat: the screen at the far wall, the sofa, and
 * each speaker where it stands, lit while the receiver plays through it --
 * the model alone, with nothing written over it.
 */
const SpeakerRoom: React.FC<SpeakerRoomProps> = ({ layout, sofa, states, on, listener, movable, walls: withWalls, screen }) => {
  const t = useT();
  const id = useId().replace(/:/g, '');
  const { ref, view, moved, reset } = useRoomView<SVGSVGElement>(movable);
  const camera = useMemo(() => roomCamera(view), [view]);
  const places = useMemo(() => speakerBoxes(layout), [layout]);

  // Framed for the view it starts at, and kept so: a moved view zooms and turns within it.
  const viewBox = useMemo(() => {
    const home = roomCamera();
    const all = SURFACES.flatMap(surface => surface.corners.map(point => onScreen(point, home)));
    const xs = all.map(p => p[0]);
    const ys = all.map(p => p[1]);
    const pad = 10;
    return [
      Math.min(...xs) - pad,
      Math.min(...ys) - pad,
      Math.max(...xs) - Math.min(...xs) + pad * 2,
      Math.max(...ys) - Math.min(...ys) + pad * 2,
    ]
      .map(value => Math.round(value))
      .join(' ');
  }, []);

  const at = (point: Point3) => onScreen(point, camera);
  const walls = SURFACES.filter(surface => withWalls || surface.key === 'floor').map(surface =>
    surface.inside(camera.eye) ? (
      <polygon
        key={surface.key}
        className='wall'
        points={pointsText(surface.corners.map(at))}
        fill={`url(#${id}-${surface.key === 'floor' ? 'floor' : 'wall'})`}
      />
    ) : surface.key === 'floor' ? null : (
      <polyline key={surface.key} className='edge' points={pointsText([surface.corners[1], surface.corners[2]].map(at))} />
    )
  );
  const grid: [Point2, Point2][] = [];
  for (let x = -W + 0.6; x < W - 0.01; x += 0.6) grid.push([at([x, 0, 0]), at([x, D, 0])]);
  for (let y = 0.6; y < D - 0.01; y += 0.6) grid.push([at([-W, y, 0]), at([W, y, 0])]);

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
  if (screen) {
    // On the screen's face, mapped from its top left, top right and bottom
    // left corners: the parallelogram they span is all but exact for a face
    // this flat, and a picture needs no more.
    const face = FACES.find(item => item.name === 'back')!;
    const points = corners(SCREEN).map(point => onScreen(point, camera));
    const [bottomLeft, , topRight, topLeft] = face.corners.map(index => points[index]);
    if (winding(face.corners.map(index => points[index])) > 0) {
      const matrix = [
        topRight[0] - topLeft[0],
        topRight[1] - topLeft[1],
        bottomLeft[0] - topLeft[0],
        bottomLeft[1] - topLeft[1],
        topLeft[0],
        topLeft[1],
      ];
      drawn.push({
        key: 'picture',
        // Just in front of the screen it lies on.
        depth: depthOf(SCREEN, camera) - 0.001,
        element: (
          <g transform={`matrix(${matrix.join(' ')})`}>
            <image href={screen} x={0.04} y={0.06} width={0.92} height={0.88} preserveAspectRatio='xMidYMid meet' />
          </g>
        ),
      });
    }
  }
  sofaBoxes(sofa).forEach((part, index) => solid(`sofa-${index}`, 'sofa', part));
  if (listener) drawn.push(...figure(camera, id));

  const pools: React.ReactNode[] = [];
  for (const [channel, place] of Object.entries(places) as [Channel, Box][]) {
    const state = states[channel] ?? 'unknown';
    const kind = speakerKind(channel);
    const { faces, shown } = boxFaces(place, camera);
    const face = kind === 'ceiling' ? 'top' : 'back';
    const drivers = shown.has(face)
      ? DRIVERS[kind].map(([across, up, radius], index) => (
          <polygon key={`driver-${index}`} className='driver' points={pointsText(driverRing(place, face, across, up, radius).map(at))} />
        ))
      : null;
    const standing = channel === 'SL' || channel === 'SR';
    // Light on the floor under what plays and stands low.
    if (state === 'active' && place.z < 1.2) {
      const ring = driverRing({ ...place, z: 0, h: 0, d: 0, yaw: 0, pitch: 0 }, 'top', 0.5, 0, 0.6 / place.w, 28).map(at);
      pools.push(<polygon key={channel} points={pointsText(ring)} fill={`url(#${id}-pool)`} />);
    }
    const [foot, bottom] = [at([place.x, place.y, 0]), at([place.x, place.y, place.z])];
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
          {standing && <line className='stand' x1={foot[0]} y1={foot[1]} x2={bottom[0]} y2={bottom[1]} />}
          {faces}
          {drivers}
        </g>
      ),
    });
  }
  // Painted from the far end forwards, so the nearer covers the further.
  drawn.sort((a, b) => b.depth - a.depth);

  return (
    <StyledRoom data-movable={movable}>
      <svg
        ref={ref}
        viewBox={viewBox}
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
          <radialGradient id={`${id}-head`} cx='0.38' cy='0.32' r='0.75'>
            <stop offset='0' stopColor='#8394ab' />
            <stop offset='1' stopColor='#3e4a5c' />
          </radialGradient>
          <linearGradient id={`${id}-screen`} x1='0' y1='0' x2='1' y2='1'>
            <stop offset='0' stopColor='#12314a' />
            <stop offset='1' stopColor='#05101a' />
          </linearGradient>
          <filter id={`${id}-glow`} x='-60%' y='-60%' width='220%' height='220%'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='7' result='blur' />
            <feMerge>
              <feMergeNode in='blur' />
              <feMergeNode in='blur' />
              <feMergeNode in='blur' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        {walls}
        {camera.eye[2] > 0 && grid.map(([a, b], index) => <line key={index} className='grid' x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />)}
        {pools}
        {drawn.map(item => (
          <g key={item.key}>{item.element}</g>
        ))}
      </svg>
      {moved && (
        <button type='button' className='reset' aria-label={t('media_view_reset')} data-tip={t('media_view_reset')} onClick={reset}>
          <Icon icon='mdi:camera-retake-outline' />
        </button>
      )}
    </StyledRoom>
  );
};

export default memo(SpeakerRoom);
