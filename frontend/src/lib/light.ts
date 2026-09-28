/**
 * A light as its popup controls it: what it can do, and where on the
 * colour wheel and the temperature slider a value sits.
 *
 * Pure, so it tests without a browser.
 */

/** Tanner Helland's approximation: good enough to tint a control the way the light glows. */
export function kelvinToRgb(kelvin: number): [number, number, number] {
  const t = kelvin / 100;
  const clamp = (value: number) => Math.round(Math.min(255, Math.max(0, value)));
  const red = t <= 66 ? 255 : 329.698727446 * (t - 60) ** -0.1332047592;
  const green = t <= 66 ? 99.4708025861 * Math.log(t) - 161.1195681661 : 288.1221695283 * (t - 60) ** -0.0755148492;
  const blue = t >= 66 ? 255 : t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  return [clamp(red), clamp(green), clamp(blue)];
}

/** The colour a light is lit in, if it says: its colour, else its white. */
export function lightColor(attributes: {
  rgb_color?: [number, number, number] | null;
  color_temp_kelvin?: number | null;
}): string | undefined {
  const rgb = attributes.rgb_color ?? (attributes.color_temp_kelvin ? kelvinToRgb(attributes.color_temp_kelvin) : null);
  return rgb ? `rgb(${rgb.join(', ')})` : undefined;
}

/** How bright, 0 to 100; a light that is off is 0 whatever it last was. */
export function brightnessPercent(on: boolean, brightness: number | null | undefined): number {
  return on && brightness ? Math.round((brightness / 255) * 100) : 0;
}

const COLOR_MODES = new Set(['hs', 'xy', 'rgb', 'rgbw', 'rgbww']);

export interface LightFeatures {
  brightness: boolean;
  color: boolean;
  temperature: boolean;
}

/** What a light can be set to, from its `supported_color_modes`. */
export function lightFeatures(modes: string[] | undefined): LightFeatures {
  const list = modes ?? [];
  return {
    brightness: list.some(mode => mode !== 'onoff'),
    color: list.some(mode => COLOR_MODES.has(mode)),
    temperature: list.includes('color_temp'),
  };
}

/**
 * Hue and saturation at a point of the wheel, measured from its centre with
 * y downwards: red to the right, hue running clockwise, white in the middle
 * -- as Home Assistant's own wheel is drawn.
 */
export function hsAt(x: number, y: number, radius: number): [number, number] {
  const hue = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
  const saturation = Math.min(1, Math.hypot(x, y) / radius) * 100;
  return [Math.round(hue), Math.round(saturation)];
}

/** The point of the wheel a hue and saturation sit at, from its centre, y downwards. */
export function pointOf([hue, saturation]: [number, number], radius: number): { x: number; y: number } {
  const angle = (hue * Math.PI) / 180;
  const distance = (Math.min(100, Math.max(0, saturation)) / 100) * radius;
  return { x: Math.cos(angle) * distance, y: Math.sin(angle) * distance };
}

/**
 * The white at a height of the temperature slider, 0 at the bottom to 1 at
 * the top: cold at the foot, warm at the head, as Home Assistant's is.
 * Rounded to 50 K, finer than any lamp tells apart.
 */
export function kelvinAt(fraction: number, min: number, max: number): number {
  const kelvin = max - Math.min(1, Math.max(0, fraction)) * (max - min);
  return Math.min(max, Math.max(min, Math.round(kelvin / 50) * 50));
}

/** The height of the temperature slider a white sits at, 0 at the bottom. */
export function heightOfKelvin(kelvin: number, min: number, max: number): number {
  if (max <= min) return 0.5;
  return Math.min(1, Math.max(0, (max - kelvin) / (max - min)));
}

/** A white as a colour and a colour as a CSS one: HSV with full value. */
export function hsToRgb([hue, saturation]: [number, number]): [number, number, number] {
  const s = saturation / 100;
  const f = (n: number) => {
    const k = (n + hue / 60) % 6;
    return Math.round(255 * (1 - s * Math.max(0, Math.min(k, 4 - k, 1))));
  };
  return [f(5), f(3), f(1)];
}

/** The quick choices under the controls, Home Assistant's own defaults: four whites, four colours. */
export const WHITE_PRESETS = [2000, 2700, 4000, 6500];
export const COLOR_PRESETS: [number, number, number][] = [
  [127, 172, 255],
  [215, 150, 255],
  [255, 158, 243],
  [255, 110, 84],
];
