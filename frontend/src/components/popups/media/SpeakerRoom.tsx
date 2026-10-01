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
  sleeperFigure,
  roundFaces,
  facesEye,
  ON_STANDS,
  type Figure,
  type HeightMounts,
  boxBounds,
  limbBounds,
  paintOrder,
  sphereBounds,
  project,
  roomCamera,
  sofaBoxes,
  speakerBoxes,
  speakerKind,
  winding,
  type Box,
  type Bounds,
  type Camera,
  type Point2,
  type Point3,
  type Sofa,
} from '../../../lib/room';
import type { Channel, SpeakerLayout, SpeakerState } from '../../../lib/speakers';
import type { ScreenFit } from '../../../lib/media';
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
  .person .limb {
    vector-effect: none;
    stroke-linecap: round;
    /* Well lighter than the sofa, so one sitting on it stands out. */
    stroke: #8596ad;
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

  .speaker .can {
    fill: rgba(0, 0, 0, 0.35);
    stroke: rgba(150, 185, 220, 0.25);
  }

  .zz {
    fill: ${({ theme }) => theme.text.secondary};
    font-family: ${({ theme }) => theme.font};
    font-weight: 600;
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
  bounds: Bounds;
  element: React.ReactNode;
}

/** Where something's bounds come out on screen, as a rectangle to test overlaps with. */
function screenRect(bounds: Bounds, camera: Camera): [number, number, number, number] {
  const points = [0, 1, 2, 3, 4, 5, 6, 7].map(i =>
    onScreen([(i & 1 ? bounds.max : bounds.min)[0], (i & 2 ? bounds.max : bounds.min)[1], (i & 4 ? bounds.max : bounds.min)[2]], camera)
  );
  const xs = points.map(p => p[0]);
  const ys = points.map(p => p[1]);
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}

/** Cells the screen's picture is drawn in, across and down. */
const PICTURE_CELLS = [6, 4];

/**
 * A picture laid flat on the screen's face, in perspective: in cells, each
 * mapped onto its own piece of the face. One mapping for the whole of it is a
 * parallelogram, and the face a trapezoid -- turned, the picture slid off it.
 * In the face's own metres, so the picture fits at its own proportions.
 */
const FIT_ASPECT: Record<ScreenFit, string> = { contain: 'xMidYMid meet', cover: 'xMidYMid slice', stretch: 'none' };

function screenPicture(href: string, camera: Camera, id: string, scale: number, fit: ScreenFit): React.ReactNode {
  const { x, y, z, w, d, h } = SCREEN;
  // The picture's own area: this share of the screen, centred, the rest the screen's blue.
  const [pw, ph] = [(w * scale) / 100, (h * scale) / 100];
  // Seen from the seat: across from its left edge, down from its top.
  const at = (u: number, v: number) => onScreen([x - w / 2 + u, y + d / 2, z + h - v], camera);
  const [across, down] = PICTURE_CELLS;
  const cells: React.ReactNode[] = [];
  for (let i = 0; i < across; i++) {
    for (let j = 0; j < down; j++) {
      const [u0, u1, v0, v1] = [(i * w) / across, ((i + 1) * w) / across, (j * h) / down, ((j + 1) * h) / down];
      const [topLeft, topRight, bottomLeft] = [at(u0, v0), at(u1, v0), at(u0, v1)];
      const a = [(topRight[0] - topLeft[0]) / (u1 - u0), (topRight[1] - topLeft[1]) / (u1 - u0)];
      const c = [(bottomLeft[0] - topLeft[0]) / (v1 - v0), (bottomLeft[1] - topLeft[1]) / (v1 - v0)];
      const matrix = [a[0], a[1], c[0], c[1], topLeft[0] - a[0] * u0 - c[0] * v0, topLeft[1] - a[1] * u0 - c[1] * v0];
      // A hair wider than the cell, so no seam shows between them.
      const pad = 0.004;
      cells.push(
        <g key={`${i}-${j}`} transform={`matrix(${matrix.join(' ')})`}>
          <clipPath id={`${id}-cell-${i}-${j}`}>
            <rect x={u0 - pad} y={v0 - pad} width={u1 - u0 + pad * 2} height={v1 - v0 + pad * 2} />
          </clipPath>
          <image
            href={href}
            x={(w - pw) / 2}
            y={(h - ph) / 2}
            width={pw}
            height={ph}
            preserveAspectRatio={FIT_ASPECT[fit]}
            clipPath={`url(#${id}-cell-${i}-${j})`}
          />
        </g>
      );
    }
  }
  return cells;
}

/**
 * An in-ceiling speaker: a flat round can, its grille the bottom cap facing
 * down into the room -- seen from below, the grille and its driver; from
 * above, the can's back.
 */
function roundSpeaker(b: Box, camera: Camera): { faces: React.ReactNode[]; shown: Set<string> } {
  const shown = new Set<string>();
  const faces: React.ReactNode[] = [];
  roundFaces(b).forEach((face, index) => {
    if (!facesEye(face.normal, face.points[0], camera.eye)) return;
    shown.add(face.name);
    const points = face.points.map(point => onScreen(point, camera));
    faces.push(<polygon key={index} data-face={face.name === 'bottom' ? 'back' : face.name} points={pointsText(points)} />);
    if (face.name === 'bottom' || face.name === 'top') {
      // The driver behind the grille below; the can's narrower back above.
      const centre: Point3 = [b.x, b.y, face.points[0][2]];
      const inner = face.points.map(point =>
        onScreen([centre[0] + (point[0] - centre[0]) * 0.72, centre[1] + (point[1] - centre[1]) * 0.72, centre[2]], camera)
      );
      faces.push(<polygon key={`${index}-inner`} className={face.name === 'bottom' ? 'driver' : 'can'} points={pointsText(inner)} />);
    }
  });
  return { faces, shown };
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
 * The listener, seated: each limb a rounded stroke as thick as it is, all in
 * one colour, and a shaded head. One colour because two limbs meeting at a
 * joint have no one right order: a lighter stripe along each showed through
 * the limb before it whenever the view turned. Each limb is still painted in
 * turn with the room, so the sofa hides what it should.
 */
function figure(camera: Camera, id: string, pose: Figure, asleep: boolean): Drawn[] {
  const { limbs, head, headRadius } = pose;
  const parts: Drawn[] = limbs.map((limb, index) => {
    const middle: Point3 = [0, 1, 2].map(axis => (limb.from[axis] + limb.to[axis]) / 2) as Point3;
    const width = screenLength(middle, limb.radius * 2, camera);
    const [a, b] = [onScreen(limb.from, camera), onScreen(limb.to, camera)];
    return {
      key: `limb-${index}`,
      depth: project(middle, camera).depth,
      bounds: limbBounds(limb),
      element: (
        <g className='person'>
          <line className='limb' x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} strokeWidth={width} />
        </g>
      ),
    };
  });
  const [cx, cy] = onScreen(head, camera);
  const r = screenLength(head, headRadius, camera);
  const size = screenLength(head, headRadius * 1.6, camera);
  // Which way on screen leads from the body to the head.
  const bodyX = limbs.reduce((sum, limb) => sum + onScreen(limb.from, camera)[0] + onScreen(limb.to, camera)[0], 0) / (limbs.length * 2);
  const away = cx >= bodyX ? 1 : -1;
  parts.push({
    key: 'head',
    depth: project(head, camera).depth,
    bounds: sphereBounds(head, headRadius),
    element: (
      <g className='person'>
        <circle cx={cx} cy={cy} r={r} fill={`url(#${id}-head)`} />
        {asleep && (
          // Rising away from the body, on the head's side of it as the view has them.
          <g className='zz' fontSize={size}>
            <text x={cx + away * r * 1.3} y={cy - r * 1.1} textAnchor='middle'>
              z
            </text>
            <text x={cx + away * r * 2.2} y={cy - r * 2} textAnchor='middle' fontSize='1.3em'>
              Z
            </text>
          </g>
        )}
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
  /** The TV is on: the screen glows, and shows its picture. */
  on: boolean;
  /** Someone in the listening position -- or lying down asleep -- or no one. */
  listener: 'awake' | 'asleep' | null;
  /** The height speakers on the wall or in the ceiling. */
  mounts: HeightMounts;
  /** The picture's share of the screen, and how it fills it. */
  screenScale: number;
  screenFit: ScreenFit;
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
const SpeakerRoom: React.FC<SpeakerRoomProps> = ({
  layout,
  mounts,
  sofa,
  states,
  on,
  listener,
  movable,
  walls: withWalls,
  screen,
  screenScale,
  screenFit,
}) => {
  const t = useT();
  const id = useId().replace(/:/g, '');
  const { ref, view, moved, reset } = useRoomView<SVGSVGElement>(movable);
  const camera = useMemo(() => roomCamera(view), [view]);
  const places = useMemo(() => speakerBoxes(layout, mounts), [layout, mounts]);

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
  const solid = (key: string, className: string, b: Box, extra?: Record<string, unknown>, over?: React.ReactNode) => {
    const { faces, shown } = boxFaces(b, camera);
    drawn.push({
      key,
      depth: depthOf(b, camera),
      bounds: boxBounds(b),
      element: (
        <g className={`solid ${className}`} {...extra}>
          {faces}
          {shown.has('back') && over}
        </g>
      ),
    });
  };
  // The picture as part of the screen it lies on, so nothing can come between them.
  solid('screen', 'screen', SCREEN, { 'data-on': on }, screen ? screenPicture(screen, camera, id, screenScale, screenFit) : null);
  sofaBoxes(sofa).forEach((part, index) => solid(`sofa-${index}`, 'sofa', part));
  // Asleep on a sofa there is; with none, sitting up as ever.
  const asleep = listener === 'asleep' && sofa !== 'none';
  if (listener) drawn.push(...figure(camera, id, asleep ? sleeperFigure(sofa) : listenerFigure(), asleep));

  const pools: React.ReactNode[] = [];
  for (const [channel, place] of Object.entries(places) as [Channel, Box][]) {
    const state = states[channel] ?? 'unknown';
    const kind = speakerKind(channel, mounts);
    const round = kind === 'ceiling';
    const { faces, shown } = round ? roundSpeaker(place, camera) : boxFaces(place, camera);
    const drivers =
      !round && shown.has('back')
        ? DRIVERS[kind].map(([across, up, radius], index) => (
            <polygon
              key={`driver-${index}`}
              className='driver'
              points={pointsText(driverRing(place, 'back', across, up, radius).map(at))}
            />
          ))
        : null;
    const standing = ON_STANDS.includes(channel);
    // Light on the floor under what plays and stands low -- or is in the ceiling, shining down.
    if (state === 'active' && (place.z < 1.2 || round)) {
      const ring = driverRing({ ...place, z: 0, h: 0, d: 0, yaw: 0, pitch: 0 }, 'top', 0.5, 0, 0.6 / place.w, 28).map(at);
      pools.push(<polygon key={channel} points={pointsText(ring)} fill={`url(#${id}-pool)`} />);
    }
    const [foot, bottom] = [at([place.x, place.y, 0]), at([place.x, place.y, place.z])];
    drawn.push({
      key: channel,
      depth: depthOf(place, camera),
      // Down to the floor for one on a stand, so the stand is painted with it.
      bounds: standing ? { ...boxBounds(place), min: [boxBounds(place).min[0], boxBounds(place).min[1], 0] } : boxBounds(place),
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
  // Painted from the far end forwards, so the nearer covers the further (see paintOrder).
  const painted = paintOrder(
    drawn.map(item => ({ bounds: item.bounds, depth: item.depth, rect: screenRect(item.bounds, camera) })),
    camera.eye
  ).map(index => drawn[index]);

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
            <stop offset='0' stopColor='#b4c2d4' />
            <stop offset='1' stopColor='#7788a0' />
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
        {painted.map(item => (
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
