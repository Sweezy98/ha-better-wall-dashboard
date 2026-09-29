/**
 * A cover -- a blind, a shutter, an awning -- as its tile controls it.
 *
 * Pure, so it tests without a browser.
 */

import type { TranslationKey } from './i18n';

/** A cover's states as shown: Home Assistant's own wording for them. */
export const COVER_STATES: Record<string, TranslationKey> = {
  open: 'cover_open',
  closed: 'cover_closed',
  opening: 'cover_opening',
  closing: 'cover_closing',
};

/** Home Assistant's `CoverEntityFeature` bits. */
const OPEN = 1;
const CLOSE = 2;
const SET_POSITION = 4;
const STOP = 8;
const SET_TILT_POSITION = 128;

export interface CoverFeatures {
  open: boolean;
  close: boolean;
  position: boolean;
  stop: boolean;
  tilt: boolean;
}

export function coverFeatures(supported: number | undefined): CoverFeatures {
  const bits = supported ?? 0;
  return {
    open: (bits & OPEN) !== 0,
    close: (bits & CLOSE) !== 0,
    position: (bits & SET_POSITION) !== 0,
    stop: (bits & STOP) !== 0,
    tilt: (bits & SET_TILT_POSITION) !== 0,
  };
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

/** When a cover's tile is drawn lit: the tile's `active_when` option. */
export type CoverActiveWhen = 'open' | 'closed' | 'never';

export const COVER_ACTIVE_WHEN: CoverActiveWhen[] = ['open', 'closed', 'never'];

/**
 * Whether the tile is lit. Open by default -- light is coming in -- but for
 * a shutter that matters when it is down, closed; or never, for one that is
 * only ever moved and never worth pointing out.
 */
export function coverActive(view: CoverView, when: unknown, known: boolean): boolean {
  if (!known) return false;
  if (when === 'never') return false;
  if (when === 'closed') return !view.open && !view.moving;
  return view.open;
}

export const MAX_COVER_PRESETS = 4;

/**
 * A tile's position presets (its `positions` option): whole percentages
 * 0 to 100, each once, in the order given, at most four. Anything else a
 * stored option holds is left out rather than shown wrong.
 */
export function coverPresets(raw: unknown): number[] {
  if (!Array.isArray(raw)) return [];
  const presets: number[] = [];
  for (const value of raw) {
    const number = Math.round(Number(value));
    if (value === '' || value === null || !Number.isFinite(number) || number < 0 || number > 100 || presets.includes(number)) continue;
    presets.push(number);
    if (presets.length === MAX_COVER_PRESETS) break;
  }
  return presets;
}
