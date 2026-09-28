import { describe, expect, it } from 'vitest';
import { coverFeatures, coverView } from './cover';

describe('cover', () => {
  it('reads what a cover can do from its feature bits', () => {
    expect(coverFeatures(15)).toEqual({ open: true, close: true, position: true, stop: true });
    expect(coverFeatures(3)).toEqual({ open: true, close: true, position: false, stop: false });
    expect(coverFeatures(undefined)).toEqual({ open: false, close: false, position: false, stop: false });
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
});
