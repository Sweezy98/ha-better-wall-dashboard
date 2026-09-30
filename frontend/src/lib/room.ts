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
    // Behind the sofa's corners.
    // Three-way bookshelves, a little taller than the other small ones.
    SBL: box(-1.2, back - 0.3, 0.9, 0.28, 0.28, 0.52),
    SBR: box(1.2, back - 0.3, 0.9, 0.28, 0.28, 0.52),
    FHL: box(-1.3, 0.13, 2.05, 0.24, 0.22, 0.32),
    FHR: box(1.3, 0.13, 2.05, 0.24, 0.22, 0.32),
    TML: box(-0.8, 2.9, ROOM.height - 0.08, 0.3, 0.3, 0.08),
    TMR: box(0.8, 2.9, ROOM.height - 0.08, 0.3, 0.3, 0.08),
    // High on the back wall, above the surround backs.
    RHL: box(-1.3, back - 0.13, 2.05, 0.24, 0.22, 0.32),
    RHR: box(1.3, back - 0.13, 2.05, 0.24, 0.22, 0.32),
    // One sub stands in the middle; a pair either side of it.
    SW1: box(layout.subs === 1 ? 0 : -0.4, 0.34, 0, 0.4, 0.4, 0.42),
    SW2: box(0.4, 0.34, 0, 0.4, 0.4, 0.42),
    // Behind the sofa, in the room's back corners; one alone in the middle.
    // Facing the front, as the ones there face back down the room.
    SW3: { ...box(layout.subs === 3 ? 0 : -ROOM.width / 2 + 0.3, back - 0.3, 0, 0.4, 0.4, 0.42), yaw: Math.PI },
    SW4: { ...box(ROOM.width / 2 - 0.3, back - 0.3, 0, 0.4, 0.4, 0.42), yaw: Math.PI },
  };
  return Object.fromEntries(
    layoutChannels(layout).map(channel => [
      channel,
      AIMED.includes(channel) ? aimAt(places[channel], LISTENER, TILTED.includes(channel)) : places[channel],
    ])
  );
}

/** The main listening position: the middle of the sofa, at a seated ear's height. */
export const LISTENER: Point3 = [0, 4.05, 1.0];

/** The speakers turned to the listener: all but the centre and the subwoofers, which face down the room, and those in the ceiling. */
const AIMED: Channel[] = ['FL', 'FR', 'SL', 'SR', 'SBL', 'SBR', 'FHL', 'FHR', 'RHL', 'RHR'];

/** Of those, the ones up on the wall, tilted down as well; the rest stand upright, only turned in. */
const TILTED: Channel[] = ['FHL', 'FHR', 'RHL', 'RHR'];

/** A box turned -- and tilted, where it may be -- so that its `back` face looks at a point. */
export function aimAt(b: Box, target: Point3, tilt = true): Box {
  const [dx, dy, dz] = [target[0] - b.x, target[1] - b.y, target[2] - (b.z + b.h / 2)];
  return { ...b, yaw: Math.atan2(-dx, dy), pitch: tilt ? Math.atan2(dz, Math.hypot(dx, dy)) : 0 };
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
 * its cushions, an arm at each end -- and for an L, a second seat running
 * forward on one side, with a back of its own, in place of that arm.
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
  // The extension has a back of its own along its outer side, as a corner
  // sofa does -- from the corner two thirds of the way, the end left open.
  const side = left + 0.2;
  const sideBackEnd = 3.1;
  const l = [
    ...parts,
    span(chaiseEnd, right - arm, front, rear, 0, seat),
    ...cushions(chaiseEnd, right - arm, 2),
    span(left, side, sideBackEnd, rear, 0, 0.83),
    // Its seat and cushion run the whole of it: behind the back rest's end
    // narrower, past it the full width -- no gap where the back stops.
    span(side, chaiseEnd, sideBackEnd, rear, 0, seat),
    span(left, chaiseEnd, 2.45, sideBackEnd, 0, seat),
    span(side + 0.02, chaiseEnd - 0.02, sideBackEnd, rear, seat, seat + cushion),
    span(left + 0.02, chaiseEnd - 0.02, 2.47, sideBackEnd - 0.01, seat, seat + cushion),
  ];
  return sofa === 'l_right' ? l.map(mirror) : l;
}

export const SCREEN = box(0, 0.05, 0.95, 1.5, 0.06, 0.86);

export type SpeakerKind = 'tower' | 'center' | 'sub' | 'ceiling' | 'bookshelf' | 'threeWay';

export function speakerKind(channel: Channel): SpeakerKind {
  if (channel === 'FL' || channel === 'FR') return 'tower';
  if (channel === 'C') return 'center';
  if (channel.startsWith('SW')) return 'sub';
  if (channel === 'SBL' || channel === 'SBR') return 'threeWay';
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
  // Tweeter, mid and woofer.
  threeWay: [
    [0.5, 0.87, 0.12],
    [0.5, 0.67, 0.2],
    [0.5, 0.33, 0.32],
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

/** How the view has been moved from the one it starts at: turned, tilted, zoomed and panned. */
export interface RoomView {
  /** Radians round the room's upright, and up or down. */
  turn: number;
  tilt: number;
  /** Distance as a share of the first. */
  zoom: number;
  /** Metres across and along the floor, as the camera looks. */
  panX: number;
  panY: number;
}

export const HOME_VIEW: RoomView = { turn: 0, tilt: 0, zoom: 1, panX: 0, panY: 0 };

const HOME_EYE: Vector = [0, ROOM.depth + 2.2, ROOM.height + 3.6];
const HOME_TARGET: Vector = [0, ROOM.depth * 0.46, 0];

const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value));

/**
 * A view kept to one that works: above the floor and short of straight
 * down, and far enough off to stay outside the room -- a camera inside it
 * would have furniture behind it.
 */
export function clampView(view: RoomView): RoomView {
  const home = sub(HOME_EYE, HOME_TARGET);
  const tilt = Math.asin(home[2] / Math.hypot(...home));
  return {
    turn: view.turn,
    tilt: clamp(view.tilt, 0.12 - tilt, 1.5 - tilt),
    zoom: clamp(view.zoom, 0.75, 1.8),
    panX: clamp(view.panX, -1.5, 1.5),
    panY: clamp(view.panY, -1.5, 1.5),
  };
}

/** Behind the back wall and above it, looking down the room at the screen -- or wherever the view was moved to. */
export function roomCamera(view: RoomView = HOME_VIEW): Camera {
  const offset = sub(HOME_EYE, HOME_TARGET);
  const distance = Math.hypot(...offset) * view.zoom;
  const tilt = Math.asin(offset[2] / Math.hypot(...offset)) + view.tilt;
  const turn = Math.atan2(offset[0], offset[1]) + view.turn;
  // Panned along the floor, across and along the way the camera looks.
  const target: Vector = [
    HOME_TARGET[0] + view.panX * Math.cos(turn) - view.panY * Math.sin(turn),
    HOME_TARGET[1] - view.panX * Math.sin(turn) - view.panY * Math.cos(turn),
    HOME_TARGET[2],
  ];
  const eye: Vector = [
    target[0] + distance * Math.cos(tilt) * Math.sin(turn),
    target[1] + distance * Math.cos(tilt) * Math.cos(turn),
    target[2] + distance * Math.sin(tilt),
  ];
  const forward = unit(sub(target, eye));
  const right = unit(cross([0, 0, 1], forward));
  return { eye, forward, right, up: cross(forward, right) };
}

/** A rounded limb: a capsule from one point to another, this thick. */
export interface Limb {
  from: Point3;
  to: Point3;
  radius: number;
}

/**
 * Someone seated in the listening position, facing the screen: body, arms
 * resting on the lap, legs down to the floor, as rounded limbs -- and a head.
 */
export function listenerFigure(): { limbs: Limb[]; head: Point3; headRadius: number } {
  // Seated clear of the sofa -- thighs just above the cushion, back just
  // before the back rest, shins before the seat's edge -- so a plane parts
  // each limb from each part of it, and turning the view cannot paint the
  // sofa over the one sitting on it (see paintOrder).
  const [x, y] = [LISTENER[0], LISTENER[1] - 0.04];
  const limb = (from: Point3, to: Point3, radius: number): Limb => ({ from, to, radius });
  const both = (make: (side: number) => Limb) => [make(-1), make(1)];
  return {
    limbs: [
      // Legs: thighs along the seat, shins down, feet forward.
      ...both(side => limb([x + side * 0.1, y + 0.1, 0.53], [x + side * 0.12, y - 0.34, 0.54], 0.08)),
      ...both(side => limb([x + side * 0.12, y - 0.4, 0.5], [x + side * 0.13, y - 0.44, 0.1], 0.06)),
      ...both(side => limb([x + side * 0.13, y - 0.44, 0.045], [x + side * 0.14, y - 0.6, 0.045], 0.045)),
      // The body, leaning back a little, and the shoulders across it.
      limb([x, y + 0.12, 0.6], [x, y + 0.18, 0.88], 0.16),
      limb([x - 0.19, y + 0.18, 0.93], [x + 0.19, y + 0.18, 0.93], 0.075),
      limb([x, y + 0.17, 0.96], [x, y + 0.15, 1.06], 0.05),
      // Arms: down at the sides, the forearms on the lap.
      // The forearms rest just clear of the thighs, so a plane parts them (see paintsBeforeLimb).
      ...both(side => limb([x + side * 0.22, y + 0.18, 0.9], [x + side * 0.25, y + 0.08, 0.68], 0.055)),
      ...both(side => limb([x + side * 0.25, y + 0.06, 0.67], [x + side * 0.16, y - 0.2, 0.68], 0.048)),
    ],
    head: [x, y + 0.13, 1.17],
    headRadius: 0.1,
  };
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

// --- painting order ------------------------------------------------------------

/** An axis-aligned box round something, in the room's metres. */
export interface Bounds {
  min: Point3;
  max: Point3;
}

function boundsOf(points: Point3[], pad = 0): Bounds {
  const min = [0, 1, 2].map(axis => Math.min(...points.map(point => point[axis])) - pad) as Point3;
  const max = [0, 1, 2].map(axis => Math.max(...points.map(point => point[axis])) + pad) as Point3;
  return { min, max };
}

export const boxBounds = (b: Box): Bounds => boundsOf(corners(b));
export const limbBounds = (limb: Limb): Bounds => boundsOf([limb.from, limb.to], limb.radius);
export const sphereBounds = (centre: Point3, radius: number): Bounds => boundsOf([centre], radius);

/**
 * Whether `a` must be painted before `b`: true or false where a plane across
 * one of the room's axes parts them -- the one on the camera's side of it is
 * the nearer -- and null where none does.
 */
export function paintsBefore(a: Bounds, b: Bounds, eye: Point3): boolean | null {
  for (const axis of [0, 1, 2]) {
    if (a.max[axis] <= b.min[axis] + 1e-6) return eye[axis] >= a.max[axis];
    if (b.max[axis] <= a.min[axis] + 1e-6) return eye[axis] <= b.max[axis];
  }
  return null;
}

type V3 = [number, number, number];
const minus = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const times = (a: V3, k: number): V3 => [a[0] * k, a[1] * k, a[2] * k];
const plus = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const dot3 = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

/** The closest points of two segments. */
export function closestPoints(p1: V3, q1: V3, p2: V3, q2: V3): [V3, V3] {
  const d1 = minus(q1, p1);
  const d2 = minus(q2, p2);
  const r = minus(p1, p2);
  const [a, e, f] = [dot3(d1, d1), dot3(d2, d2), dot3(d2, r)];
  let s = 0;
  let t = 0;
  if (a <= 1e-9 && e <= 1e-9) return [p1, p2];
  if (a <= 1e-9) t = clamp01(f / e);
  else {
    const c = dot3(d1, r);
    if (e <= 1e-9) s = clamp01(-c / a);
    else {
      const b = dot3(d1, d2);
      const denominator = a * e - b * b;
      s = denominator > 1e-9 ? clamp01((b * f - c * e) / denominator) : 0;
      t = (b * s + f) / e;
      if (t < 0) [t, s] = [0, clamp01(-c / a)];
      else if (t > 1) [t, s] = [1, clamp01((b - c) / a)];
    }
  }
  return [plus(p1, times(d1, s)), plus(p2, times(d2, t))];
}

/**
 * Whether limb `a` must be painted before limb `b`: where they do not touch,
 * the plane square to the line between their closest points parts them, and
 * the one on the camera's side is the nearer. Null where they touch -- a
 * knee, an elbow -- and either order looks the same. Their boxes are no use
 * here: a forearm resting on a thigh shares the thigh's, and by the distance
 * of their middles the forearm went under the thigh it lay on.
 */
export function paintsBeforeLimb(a: Limb, b: Limb, eye: Point3): boolean | null {
  const [pa, pb] = closestPoints(a.from, a.to, b.from, b.to);
  const between = minus(pb, pa);
  const distance = Math.hypot(...between);
  if (distance <= a.radius + b.radius) return null;
  const middle = plus(pa, times(between, (a.radius + (distance - a.radius - b.radius) / 2) / distance));
  // The eye on b's side of the plane: b is the nearer, a goes first.
  return dot3(minus(eye, middle), between) > 0;
}

/**
 * The order to paint things in, far to near.
 *
 * Not by the distance of their centres alone: a long, low part -- a sofa's
 * seat -- has its centre nearer than the end of a back rest it passes under,
 * and was painted over it, so turning the view made the sofa fold into
 * itself. Where a plane parts two things whose outlines overlap on screen,
 * the far one goes first; the distance only settles the rest, and breaks the
 * rare loop.
 */
export function paintOrder(
  items: { bounds: Bounds; depth: number; rect: [number, number, number, number]; limb?: Limb }[],
  eye: Point3
): number[] {
  const count = items.length;
  const after: number[][] = items.map(() => []);
  const waiting = new Array<number>(count).fill(0);
  const overlap = (p: number[], q: number[]) => p[0] < q[2] && q[0] < p[2] && p[1] < q[3] && q[1] < p[3];
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      if (!overlap(items[i].rect, items[j].rect)) continue;
      const [a, b] = [items[i], items[j]];
      // Two limbs by their own shape; anything else by its box.
      const first = a.limb && b.limb ? paintsBeforeLimb(a.limb, b.limb, eye) : paintsBefore(a.bounds, b.bounds, eye);
      if (first === null) continue;
      const [from, to] = first ? [i, j] : [j, i];
      after[from].push(to);
      waiting[to] += 1;
    }
  }
  const order: number[] = [];
  const done = new Array<boolean>(count).fill(false);
  while (order.length < count) {
    // The farthest of those nothing else must precede -- or, in a loop, the farthest left.
    let next = -1;
    for (let i = 0; i < count; i++) {
      if (done[i] || waiting[i] > 0) continue;
      if (next < 0 || items[i].depth > items[next].depth) next = i;
    }
    if (next < 0) {
      for (let i = 0; i < count; i++) if (!done[i] && (next < 0 || items[i].depth > items[next].depth)) next = i;
    }
    done[next] = true;
    order.push(next);
    for (const to of after[next]) waiting[to] -= 1;
  }
  return order;
}
