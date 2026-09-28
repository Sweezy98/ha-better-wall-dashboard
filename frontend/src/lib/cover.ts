/**
 * A cover -- a blind, a shutter, an awning -- as its tile controls it.
 *
 * Pure, so it tests without a browser.
 */

/** Home Assistant's `CoverEntityFeature` bits. */
const OPEN = 1;
const CLOSE = 2;
const SET_POSITION = 4;
const STOP = 8;

export interface CoverFeatures {
  open: boolean;
  close: boolean;
  position: boolean;
  stop: boolean;
}

export function coverFeatures(supported: number | undefined): CoverFeatures {
  const bits = supported ?? 0;
  return { open: (bits & OPEN) !== 0, close: (bits & CLOSE) !== 0, position: (bits & SET_POSITION) !== 0, stop: (bits & STOP) !== 0 };
}

export interface CoverView {
  /** 0 closed to 100 open, when the cover reports one. */
  position: number | undefined;
  moving: boolean;
  /** Whether a press on up (or down) would move it at all. */
  canOpen: boolean;
  canClose: boolean;
  /** Open at all, for the tile's lit look: a blind a crack open is open. */
  open: boolean;
}

/**
 * Where a cover is and where it can go. Up is pointless on one fully open
 * and down on one fully closed -- unless it is moving, when either reverses
 * it -- as Home Assistant's own cover buttons have it.
 */
export function coverView(state: string | undefined, position: number | undefined): CoverView {
  const moving = state === 'opening' || state === 'closing';
  const known = typeof position === 'number' ? Math.min(100, Math.max(0, Math.round(position))) : undefined;
  const fullyOpen = known !== undefined ? known >= 100 : state === 'open';
  const fullyClosed = known !== undefined ? known <= 0 : state === 'closed';
  return {
    position: known,
    moving,
    canOpen: moving || !fullyOpen,
    canClose: moving || !fullyClosed,
    open: known !== undefined ? known > 0 : state === 'open' || moving,
  };
}
