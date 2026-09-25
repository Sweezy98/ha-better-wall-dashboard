/**
 * A Better Lighting room, read from its light's attributes: what the tile
 * shows and which scene an arrow steps to.
 *
 * Pure, so it tests without a browser. The attributes are the integration's
 * own (`better_lighting/light.py`); every `bl_` one may be missing on an
 * older version, and `null` there means "does not apply", never "no".
 */

export const BETTER_LIGHTING = 'better_lighting';

export interface RoomAttributes {
  bl_room_id?: string;
  brightness?: number | null;
  rgb_color?: [number, number, number] | null;
  color_temp_kelvin?: number | null;
  bl_adaptive?: boolean | null;
  bl_presence?: boolean | null;
  bl_night?: boolean | null;
  bl_simulating?: boolean | null;
  bl_held_by_hand?: boolean | null;
  bl_off_at?: string | null;
}

/** A light Better Lighting draws a room with, rather than one of its members. */
export function isRoomLight(entityId: string, attributes: Record<string, unknown> | undefined): boolean {
  return entityId.startsWith('light.') && attributes?.bl_room_id !== undefined;
}

/** How bright, 0 to 100; a room that is off is 0 whatever it last was. */
export function brightnessPercent(on: boolean, brightness: number | null | undefined): number {
  return on && brightness ? Math.round((brightness / 255) * 100) : 0;
}

/** Tanner Helland's approximation: good enough to tint a bar the way the room glows. */
export function kelvinToRgb(kelvin: number): [number, number, number] {
  const t = kelvin / 100;
  const clamp = (value: number) => Math.round(Math.min(255, Math.max(0, value)));
  const red = t <= 66 ? 255 : 329.698727446 * (t - 60) ** -0.1332047592;
  const green = t <= 66 ? 99.4708025861 * Math.log(t) - 161.1195681661 : 288.1221695283 * (t - 60) ** -0.0755148492;
  const blue = t >= 66 ? 255 : t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  return [clamp(red), clamp(green), clamp(blue)];
}

/** The colour the room is lit in, if it says: its colour, else its white. */
export function roomColor(attributes: RoomAttributes): string | undefined {
  const rgb = attributes.rgb_color ?? (attributes.color_temp_kelvin ? kelvinToRgb(attributes.color_temp_kelvin) : null);
  return rgb ? `rgb(${rgb.join(', ')})` : undefined;
}

/** Seconds until the room switches itself off, or null when it is not about to. */
export function secondsUntilOff(offAt: string | null | undefined, now: number): number | null {
  if (!offAt) return null;
  const seconds = Math.round((Date.parse(offAt) - now) / 1000);
  return Number.isFinite(seconds) && seconds > 0 ? seconds : null;
}

/** `4:05` under an hour, `1h 05m` from there. */
export function formatCountdown(seconds: number): string {
  const pad = (value: number) => String(value).padStart(2, '0');
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}:${pad(seconds % 60)}`;
  return `${Math.floor(minutes / 60)}h ${pad(minutes % 60)}m`;
}

/**
 * The scene an arrow steps to, round the end. From a scene not in the list
 * (a hidden one, or none), forward is the first and back the last.
 */
export function neighbourScene(options: string[], current: string | undefined, step: 1 | -1): string | undefined {
  if (!options.length) return undefined;
  const index = current === undefined ? -1 : options.indexOf(current);
  if (index < 0) return step > 0 ? options[0] : options[options.length - 1];
  return options[(index + step + options.length) % options.length];
}

export type RoomBadge = 'presence' | 'nobody' | 'night' | 'simulating' | 'by_hand' | 'automatic';

/**
 * The small signs after the brightness, in the card's order. Presence only
 * for a room with a sensor. How it came to be on only while no countdown is
 * running: the countdown already says it will go off by itself.
 */
export function roomBadges(attributes: RoomAttributes, on: boolean, countingDown: boolean): RoomBadge[] {
  const badges: RoomBadge[] = [];
  if (attributes.bl_presence === true) badges.push('presence');
  if (attributes.bl_presence === false) badges.push('nobody');
  if (attributes.bl_night === true) badges.push('night');
  if (attributes.bl_simulating === true) badges.push('simulating');
  if (on && !countingDown && attributes.bl_held_by_hand !== undefined) badges.push(attributes.bl_held_by_hand ? 'by_hand' : 'automatic');
  return badges;
}
