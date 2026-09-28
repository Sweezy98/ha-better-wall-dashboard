import { describe, expect, it } from 'vitest';
import { coverActive, coverFeatures, coverView } from './cover';

describe('cover', () => {
  it('reads what a cover can do from its feature bits', () => {
    expect(coverFeatures(15)).toEqual({ open: true, close: true, position: true, stop: true, tilt: false });
    expect(coverFeatures(143).tilt).toBe(true);
    expect(coverFeatures(3)).toEqual({ open: true, close: true, position: false, stop: false, tilt: false });
    expect(coverFeatures(undefined)).toEqual({ open: false, close: false, position: false, stop: false, tilt: false });
  });

  it('offers only the way a cover can still go, and both while it moves', () => {
    expect(coverView('open', 100)).toMatchObject({ canOpen: false, canClose: true, open: true });
    expect(coverView('closed', 0)).toMatchObject({ canOpen: true, canClose: false, open: false });
    expect(coverView('open', 40)).toMatchObject({ canOpen: true, canClose: true, open: true, position: 40 });
    expect(coverView('closing', 100)).toMatchObject({ canOpen: true, canClose: true, moving: true });
  });

  it('goes by its state when it reports no position', () => {
    expect(coverView('open', undefined)).toMatchObject({ canOpen: false, canClose: true, open: true, position: undefined });
    expect(coverView('closed', undefined)).toMatchObject({ canOpen: true, canClose: false, open: false });
  });

  it('is lit when open, when closed, or never, as the tile is set', () => {
    const open = coverView('open', 40);
    const closed = coverView('closed', 0);
    expect(coverActive(open, undefined, true)).toBe(true);
    expect(coverActive(closed, undefined, true)).toBe(false);
    expect(coverActive(closed, 'closed', true)).toBe(true);
    expect(coverActive(open, 'closed', true)).toBe(false);
    expect(coverActive(coverView('closing', 20), 'closed', true)).toBe(false);
    expect(coverActive(open, 'never', true)).toBe(false);
    expect(coverActive(closed, 'closed', false)).toBe(false);
  });
});
