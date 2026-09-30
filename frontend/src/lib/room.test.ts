import { describe, expect, it } from 'vitest';
import {
  FACES,
  LISTENER,
  ROOM,
  boxBounds,
  clampView,
  corners,
  paintOrder,
  paintsBefore,
  project,
  roomCamera,
  sofaBoxes,
  speakerBoxes,
  winding,
} from './room';
import { parseLayout } from './speakers';

const camera = roomCamera();
const screen = (point: [number, number, number]) => project(point, camera);

describe('room', () => {
  it('sees right as right, up as up and the screen as far', () => {
    expect(screen([1, 2, 0]).x).toBeGreaterThan(screen([-1, 2, 0]).x);
    expect(screen([0, 2, 2]).y).toBeLessThan(screen([0, 2, 0]).y);
    expect(screen([0, 0, 0]).depth).toBeGreaterThan(screen([0, ROOM.depth, 0]).depth);
  });

  it('draws the faces turned to the camera and not the others', () => {
    const facing = (name: string) => {
      const face = FACES.find(item => item.name === name)!;
      const points = corners({ x: 0, y: 2.5, z: 0, w: 1, d: 1, h: 1 });
      return winding(face.corners.map(index => screen(points[index])).map(p => [p.x, p.y] as [number, number])) > 0;
    };
    expect(facing('back')).toBe(true);
    expect(facing('top')).toBe(true);
    expect(facing('front')).toBe(false);
    expect(facing('bottom')).toBe(false);
  });

  it('places the speakers a layout has, and no others', () => {
    expect(Object.keys(speakerBoxes(parseLayout('7.4.4')!))).toHaveLength(15);
    expect(Object.keys(speakerBoxes(parseLayout('2.0')!)).sort()).toEqual(['FL', 'FR']);
    expect(speakerBoxes(parseLayout('5.1')!).SW1?.x).toBe(0);
  });

  it('turns an L-shaped sofa either way', () => {
    const chaise = (sofa: 'l_left' | 'l_right') => sofaBoxes(sofa).at(-1)!.x;
    expect(chaise('l_left')).toBeLessThan(0);
    expect(chaise('l_right')).toBeGreaterThan(0);
    expect(sofaBoxes('none')).toEqual([]);
  });
});

describe('aim', () => {
  it('turns a speaker so its face looks at the listener', () => {
    const places = speakerBoxes(parseLayout('7.4.4')!);
    const facing = (channel: 'FL' | 'SR' | 'SBL' | 'FHL') => {
      const b = places[channel]!;
      const [a, c] = [corners(b)[3], corners(b)[6]];
      const face: [number, number, number] = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2, (a[2] + c[2]) / 2];
      const centre = [b.x, b.y, b.z + b.h / 2];
      const out = face.map((v, i) => v - centre[i]);
      const to = LISTENER.map((v, i) => v - centre[i]);
      return (out[0] * to[0] + out[1] * to[1] + out[2] * to[2]) / (Math.hypot(...out) * Math.hypot(...to));
    };
    for (const channel of ['FL', 'SR', 'SBL', 'FHL'] as const) expect(facing(channel)).toBeGreaterThan(0.99);
    expect(places.FL!.yaw).toBeLessThan(0);
    expect(places.FHL!.pitch).toBeLessThan(0);
    expect(places.C!.yaw).toBeUndefined();
  });
});

describe('view', () => {
  it('starts where the fixed camera stood, and keeps a moved one outside the room', () => {
    const home = roomCamera();
    const moved = roomCamera(clampView({ turn: Math.PI, tilt: -2, zoom: 0.1, panX: 9, panY: 9 }));
    expect(home.eye[1]).toBeCloseTo(ROOM.depth + 2.2);
    expect(home.eye[2]).toBeCloseTo(ROOM.height + 3.6);
    const inside = moved.eye[0] > -ROOM.width / 2 && moved.eye[0] < ROOM.width / 2 && moved.eye[1] > 0 && moved.eye[1] < ROOM.depth;
    expect(inside).toBe(false);
    expect(moved.eye[2]).toBeGreaterThan(0);
  });
});

describe('painting order', () => {
  it('paints the far side of a parting plane first, whatever the centres say', () => {
    // A long low seat, and a tall back behind it: seen from behind, the back is nearer.
    const seat = boxBounds({ x: 0, y: 4, z: 0, w: 3, d: 0.8, h: 0.3 });
    const back = boxBounds({ x: 0, y: 4.5, z: 0, w: 3, d: 0.2, h: 0.8 });
    expect(paintsBefore(seat, back, [0, 8, 5])).toBe(true);
    expect(paintsBefore(seat, back, [0, -3, 5])).toBe(false);
    expect(paintsBefore(seat, seat, [0, 8, 5])).toBeNull();
    const rect: [number, number, number, number] = [0, 0, 10, 10];
    expect(
      paintOrder(
        [
          { bounds: back, depth: 1, rect },
          { bounds: seat, depth: 9, rect },
        ],
        [0, -3, 5]
      )
    ).toEqual([0, 1]);
    expect(
      paintOrder(
        [
          { bounds: back, depth: 9, rect },
          { bounds: seat, depth: 1, rect },
        ],
        [0, 8, 5]
      )
    ).toEqual([1, 0]);
  });
});
