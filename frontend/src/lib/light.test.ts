import { describe, expect, it } from 'vitest';
import { heightOfKelvin, hsAt, hsToRgb, kelvinAt, kelvinToRgb, lightColor, lightFeatures, pointOf } from './light';

describe('light', () => {
  it('tints by colour first, then by white', () => {
    expect(lightColor({ rgb_color: [255, 0, 0], color_temp_kelvin: 2700 })).toBe('rgb(255, 0, 0)');
    expect(lightColor({ color_temp_kelvin: 6600 })).toBe(`rgb(${kelvinToRgb(6600).join(', ')})`);
    expect(lightColor({})).toBeUndefined();
    const [red, , blue] = kelvinToRgb(2700);
    expect(red).toBe(255);
    expect(blue).toBeLessThan(200);
  });

  it('reads what a light can do from its colour modes', () => {
    expect(lightFeatures(['onoff'])).toEqual({ brightness: false, color: false, temperature: false });
    expect(lightFeatures(['brightness'])).toEqual({ brightness: true, color: false, temperature: false });
    expect(lightFeatures(['color_temp', 'hs'])).toEqual({ brightness: true, color: true, temperature: true });
    expect(lightFeatures(['rgbww'])).toEqual({ brightness: true, color: true, temperature: false });
    expect(lightFeatures(undefined)).toEqual({ brightness: false, color: false, temperature: false });
  });

  it('lays the wheel out red right, clockwise, white in the middle', () => {
    expect(hsAt(100, 0, 100)).toEqual([0, 100]);
    expect(hsAt(0, 50, 100)).toEqual([90, 50]);
    expect(hsAt(-100, 0, 100)).toEqual([180, 100]);
    expect(hsAt(0, -200, 100)).toEqual([270, 100]);
    const point = pointOf([90, 50], 100);
    expect(Math.round(point.x)).toBe(0);
    expect(Math.round(point.y)).toBe(50);
    expect(hsAt(point.x, point.y, 100)).toEqual([90, 50]);
  });

  it('puts warm at the top of the temperature slider and cold at the foot', () => {
    expect(kelvinAt(1, 2000, 6500)).toBe(2000);
    expect(kelvinAt(0, 2000, 6500)).toBe(6500);
    expect(kelvinAt(0.5, 2000, 6500)).toBe(4250);
    expect(heightOfKelvin(2000, 2000, 6500)).toBe(1);
    expect(heightOfKelvin(6500, 2000, 6500)).toBe(0);
    expect(heightOfKelvin(3000, 3000, 3000)).toBe(0.5);
  });

  it('turns a hue and saturation into a colour', () => {
    expect(hsToRgb([0, 100])).toEqual([255, 0, 0]);
    expect(hsToRgb([120, 100])).toEqual([0, 255, 0]);
    expect(hsToRgb([0, 0])).toEqual([255, 255, 255]);
  });
});
