/**
 * The home cinema drawn in 3D: a room, its furniture and its speakers as
 * boxes, seen from behind the seat and above, the screen at the far wall.
 *
 * In metres: x across (right as seen from the seat), y from the front wall
 * back, z up. Pure, so the projection tests without a browser.
 */
import type { Channel, SpeakerLayout } from './speakers';
import { layoutChannels } from './speakers';

export const ROOM = { width: 4.2, depth: 5.4, height: 2.6 };

export interface Box {
  /** Centre across and along; bottom. */
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  /** Turned about its upright, and tilted, in radians: its `back` face is the one aimed. */
  yaw?: number;
  pitch?: number;
}

export type Point3 = [number, number, number];
export type Point2 = [number, number];

const box = (x: number, y: number, z: number, w: number, d: number, h: number): Box => ({ x, y, z, w, d, h });

/** Where each speaker stands, in the places a 7.x.4 room has them. */
export function speakerBoxes(layout: SpeakerLayout): Partial<Record<Channel, Box>> {
  const back = ROOM.depth;
  const places: Record<Channel, Box> = {
    FL: box(-1.35, 0.4, 0, 0.3, 0.32, 1.1),
    FR: box(1.35, 0.4, 0, 0.3, 0.32, 1.1),
    C: box(0, 0.32, 0.6, 0.62, 0.26, 0.2),
    SL: box(-1.8, 4.05, 0.95, 0.22, 0.26, 0.36),
    SR: box(1.8, 4.05, 0.95, 0.22, 0.26, 0.36),
    SBL: box(-0.6, back - 0.3, 0.95, 0.26, 0.26, 0.4),
    SBR: box(0.6, back - 0.3, 0.95, 0.26, 0.26, 0.4),
    FHL: box(-1.3, 0.13, 2.05, 0.24, 0.22, 0.32),
    FHR: box(1.3, 0.13, 2.05, 0.24, 0.22, 0.32),
    TML: box(-0.8, 2.9, ROOM.height - 0.08, 0.3, 0.3, 0.08),
    TMR: box(0.8, 2.9, ROOM.height - 0.08, 0.3, 0.3, 0.08),
    // Above the surround backs, clear of the side surrounds in the view.
    RHL: box(-1.05, back - 0.13, 2.05, 0.24, 0.22, 0.32),
    RHR: box(1.05, back - 0.13, 2.05, 0.24, 0.22, 0.32),
    // One sub stands in the middle; a pair either side of it.
    SW1: box(layout.subs === 1 ? 0 : -0.4, 0.34, 0, 0.4, 0.4, 0.42),
    SW2: box(0.4, 0.34, 0, 0.4, 0.4, 0.42),
    // Behind the sofa, in the room's back corners; one alone in the middle.
    SW3: box(layout.subs === 3 ? 0 : -ROOM.width / 2 + 0.3, back - 0.3, 0, 0.4, 0.4, 0.42),
    SW4: box(ROOM.width / 2 - 0.3, back - 0.3, 0, 0.4, 0.4, 0.42),
  };
  return Object.fromEntries(
    layoutChannels(layout).map(channel => [channel, AIMED.includes(channel) ? aimAt(places[channel], LISTENER) : places[channel]])
  );
}

/** The main listening position: the middle of the sofa, at a seated ear's height. */
export const LISTENER: Point3 = [0, 4.05, 1.0];

/** The speakers turned to the listener: all but the centre and the subwoofers, which face down the room, and those in the ceiling. */
const AIMED: Channel[] = ['FL', 'FR', 'SL', 'SR', 'SBL', 'SBR', 'FHL', 'FHR', 'RHL', 'RHR'];

/** A box turned, and tilted, so that its `back` face looks at a point. */
export function aimAt(b: Box, target: Point3): Box {
  const [dx, dy, dz] = [target[0] - b.x, target[1] - b.y, target[2] - (b.z + b.h / 2)];
  return { ...b, yaw: Math.atan2(-dx, dy), pitch: Math.atan2(dz, Math.hypot(dx, dy)) };
}

/** A point given from a box's centre in its own axes, in the room's: tilted, then turned. */
function toRoom(b: Box, [dx, dy, dz]: Point3): Point3 {
  const pitch = b.pitch ?? 0;
  const yaw = b.yaw ?? 0;
  const [py, pz] = [dy * Math.cos(pitch) - dz * Math.sin(pitch), dy * Math.sin(pitch) + dz * Math.cos(pitch)];
  const [rx, ry] = [dx * Math.cos(yaw) - py * Math.sin(yaw), dx * Math.sin(yaw) + py * Math.cos(yaw)];
  return [b.x + rx, b.y + ry, b.z + b.h / 2 + pz];
}

export const SOFAS = ['none', 'straight', 'l_left', 'l_right'] as const;
export type Sofa = (typeof SOFAS)[number];

/**
 * The seat, from parts that do not overlap -- overlapping boxes painted in
 * the wrong order made ragged edges: a back from the floor up, the seat with
 * its cushions, an arm at each end -- and for an L, a chaise running forward
 * on one side in place of that arm, as long as the seat is deep.
 */
export function sofaBoxes(sofa: Sofa): Box[] {
  if (sofa === 'none') return [];
  const [left, right, front, rear, back] = [-1.4, 1.4, 3.72, 4.37, 4.57];
  const seat = 0.28;
  const cushion = 0.16;
  const arm = 0.14;
  const span = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number) =>
    box((x0 + x1) / 2, (y0 + y1) / 2, z0, x1 - x0, y1 - y0, z1 - z0);
  const mirror = (b: Box): Box => ({ ...b, x: -b.x });
  const cushions = (x0: number, x1: number, count: number) =>
    Array.from({ length: count }, (_, index) => {
      const width = (x1 - x0) / count;
      return span(x0 + index * width + 0.01, x0 + (index + 1) * width - 0.01, front + 0.02, rear, seat, seat + cushion);
    });
  const parts = [span(left, right, rear, back, 0, 0.83), span(right - arm, right, front, rear, 0, 0.62)];
  if (sofa === 'straight') {
    return [
      ...parts,
      span(left, left + arm, front, rear, 0, 0.62),
      span(left + arm, right - arm, front, rear, 0, seat),
      ...cushions(left + arm, right - arm, 3),
    ];
  }
  const chaiseEnd = left + 0.86;
  const l = [
    ...parts,
    span(chaiseEnd, right - arm, front, rear, 0, seat),
    ...cushions(chaiseEnd, right - arm, 2),
    span(left, chaiseEnd, 2.45, rear, 0, seat),
    span(left + 0.02, chaiseEnd - 0.02, 2.47, rear, seat, seat + cushion),
  ];
  return sofa === 'l_right' ? l.map(mirror) : l;
}

/** The lowboard under the screen, the centre on it and the front subwoofers beneath. */
export const LOWBOARD = box(0, 0.33, 0.52, 1.9, 0.5, 0.06);

export const SCREEN = box(0, 0.05, 0.95, 1.5, 0.06, 0.86);

export type SpeakerKind = 'tower' | 'center' | 'sub' | 'ceiling' | 'bookshelf';

export function speakerKind(channel: Channel): SpeakerKind {
  if (channel === 'FL' || channel === 'FR') return 'tower';
  if (channel === 'C') return 'center';
  if (channel.startsWith('SW')) return 'sub';
  return channel === 'TML' || channel === 'TMR' ? 'ceiling' : 'bookshelf';
}

/** Each kind's drivers on its face: across and up it (0..1), and their radius as a share of its width. */
export const DRIVERS: Record<SpeakerKind, [number, number, number][]> = {
  tower: [
    [0.5, 0.9, 0.13],
    [0.5, 0.76, 0.22],
    [0.5, 0.54, 0.32],
    [0.5, 0.3, 0.32],
  ],
  bookshelf: [
    [0.5, 0.8, 0.14],
    [0.5, 0.4, 0.32],
  ],
  center: [
    [0.22, 0.5, 0.13],
    [0.78, 0.5, 0.13],
    [0.5, 0.5, 0.06],
  ],
  sub: [[0.5, 0.5, 0.36]],
  ceiling: [[0.5, 0.5, 0.36]],
};

/**
 * A driver as a ring in the plane of a box's face: the one turned down the
 * room (`back`), or the top for a speaker in the ceiling -- so perspective
 * draws it as the ellipse it is.
 */
export function driverRing(b: Box, face: 'back' | 'top', across: number, up: number, radius: number, steps = 24): Point3[] {
  const r = radius * b.w;
  const x = -b.w / 2 + across * b.w;
  return Array.from({ length: steps }, (_, index) => {
    const angle = (index / steps) * Math.PI * 2;
    return toRoom(
      b,
      face === 'back'
        ? [x + r * Math.cos(angle), b.d / 2, -b.h / 2 + up * b.h + r * Math.sin(angle)]
        : [x + r * Math.cos(angle), -b.d / 2 + up * b.d + r * Math.sin(angle), b.h / 2]
    );
  });
}

/** A box's eight corners: bottom four, then top four, each round the same way. */
export function corners(b: Box): Point3[] {
  const [x, y, z] = [b.w / 2, b.d / 2, b.h / 2];
  const local: Point3[] = [
    [-x, -y, -z],
    [x, -y, -z],
    [x, y, -z],
    [-x, y, -z],
    [-x, -y, z],
    [x, -y, z],
    [x, y, z],
    [-x, y, z],
  ];
  return local.map(point => toRoom(b, point));
}

/** Each face by its corners, wound the same way round as seen from outside: bottom left, bottom right, top right, top left. */
export const FACES: { name: 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom'; corners: number[] }[] = [
  { name: 'back', corners: [3, 2, 6, 7] },
  { name: 'front', corners: [1, 0, 4, 5] },
  { name: 'left', corners: [0, 3, 7, 4] },
  { name: 'right', corners: [2, 1, 5, 6] },
  { name: 'top', corners: [4, 7, 6, 5] },
  { name: 'bottom', corners: [0, 1, 2, 3] },
];

type Vector = [number, number, number];
const sub = (a: Vector, b: Vector): Vector => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a: Vector, b: Vector) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: Vector, b: Vector): Vector => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = (a: Vector): Vector => {
  const length = Math.hypot(...a);
  return [a[0] / length, a[1] / length, a[2] / length];
};

export interface Camera {
  eye: Vector;
  forward: Vector;
  right: Vector;
  up: Vector;
}

/** Behind the back wall and above it, looking down the room at the screen. */
export function roomCamera(): Camera {
  const eye: Vector = [0, ROOM.depth + 2.2, ROOM.height + 3.6];
  const target: Vector = [0, ROOM.depth * 0.46, 0];
  const forward = unit(sub(target, eye));
  const right = unit(cross([0, 0, 1], forward));
  return { eye, forward, right, up: cross(forward, right) };
}

/** A point on screen, y down, and how far ahead of the camera it is. */
export function project(point: Point3, camera: Camera): { x: number; y: number; depth: number } {
  const relative = sub(point, camera.eye);
  const depth = dot(relative, camera.forward);
  return { x: dot(relative, camera.right) / depth, y: -dot(relative, camera.up) / depth, depth };
}

/** Twice the area of a face on screen, positive when it is turned to the camera (see FACES) and negative when turned away. */
export function winding(points: Point2[]): number {
  let area = 0;
  for (let i = 0; i < points.length; i++) {
    const [x0, y0] = points[i];
    const [x1, y1] = points[(i + 1) % points.length];
    area += x0 * y1 - x1 * y0;
  }
  return -area;
}
