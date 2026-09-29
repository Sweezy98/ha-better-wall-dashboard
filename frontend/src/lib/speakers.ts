/**
 * A home cinema's speakers, and which of them the receiver is using.
 *
 * Receivers say what they decode and how they render it, not which
 * speakers sound; that is read from the two. Upmixers and object formats
 * (Dolby Atmos, DTS:X, Neural:X, Dolby Surround, multi-channel stereo) fill
 * every speaker; plain stereo the front pair; a decoder on its own -- Dolby
 * Digital, DTS, multi-channel PCM, Direct -- the channels the source has,
 * read from its format ("3/4/.1", "5.1"). A mode this cannot read is
 * `unknown`, never a guess.
 */

export type Channel =
  'FL' | 'FR' | 'C' | 'SL' | 'SR' | 'SBL' | 'SBR' | 'FHL' | 'FHR' | 'TML' | 'TMR' | 'RHL' | 'RHR' | 'SW1' | 'SW2' | 'SW3' | 'SW4';

export interface SpeakerLayout {
  /** Speakers at ear height: 2, 3, 5 or 7. */
  bed: number;
  /** Subwoofers: the first pair at the front, the second at the back. */
  subs: number;
  /** Height speakers: 2 front, 4 front and rear, 6 with a pair on the ceiling between. */
  heights: number;
}

export const BEDS = [2, 3, 5, 7];
export const SUB_COUNTS = [0, 1, 2, 3, 4];
export const HEIGHTS = [0, 2, 4, 6];

const nearest = (value: number, allowed: number[]) => [...allowed].reverse().find(item => item <= value) ?? allowed[0];

/** "7.4.4" as a layout; null for none or nonsense. */
export function parseLayout(value: unknown): SpeakerLayout | null {
  const match = typeof value === 'string' ? /^\s*(\d+)\.(\d+)(?:\.(\d+))?\s*$/.exec(value) : null;
  if (!match) return null;
  return {
    bed: nearest(Number(match[1]), BEDS),
    subs: Math.min(4, Number(match[2])),
    heights: nearest(Number(match[3] ?? 0), HEIGHTS),
  };
}

export const layoutText = (layout: SpeakerLayout) => `${layout.bed}.${layout.subs}.${layout.heights}`;

const BED: Record<number, Channel[]> = {
  2: ['FL', 'FR'],
  3: ['FL', 'FR', 'C'],
  5: ['FL', 'FR', 'C', 'SL', 'SR'],
  7: ['FL', 'FR', 'C', 'SL', 'SR', 'SBL', 'SBR'],
};

const HEIGHT: Record<number, Channel[]> = {
  0: [],
  2: ['FHL', 'FHR'],
  4: ['FHL', 'FHR', 'RHL', 'RHR'],
  6: ['FHL', 'FHR', 'TML', 'TMR', 'RHL', 'RHR'],
};

export const SUBS: Channel[] = ['SW1', 'SW2', 'SW3', 'SW4'];

export function layoutChannels(layout: SpeakerLayout): Channel[] {
  return [...(BED[layout.bed] ?? BED[2]), ...(HEIGHT[layout.heights] ?? []), ...SUBS.slice(0, layout.subs)];
}

export const isSubChannel = (channel: string) => channel.startsWith('SW');

type Rendering = 'all' | 'stereo' | 'source';

const FILLS_ALL = [
  /atmos/,
  /dts\s*[:-]?\s*x/,
  /neural/,
  /auro/,
  /imax/,
  /dolby\s*surround/,
  /\bdsur\b/,
  /\+\s*ds\b/,
  /(multi|m)\s*-?\s*ch(annel)?\s*stereo/,
  /all\s*(zone|ch)\s*stereo/,
  /virtual/,
  /rock arena|jazz club|matrix|mono movie|video game/,
];

const DECODES = [/dolby/, /dts/, /pcm/, /multi\s*ch/, /\bm\s*ch\s*in\b/, /true\s*hd/, /direct/, /\d\.\d/];

function rendering(mode: string | undefined): Rendering | null {
  const text = (mode ?? '').trim().toLowerCase();
  if (!text) return null;
  if (FILLS_ALL.some(pattern => pattern.test(text))) return 'all';
  if (/stereo/.test(text)) return 'stereo';
  if (DECODES.some(pattern => pattern.test(text))) return 'source';
  return null;
}

interface SourceChannels {
  front: number;
  surround: number;
  lfe: number;
  heights: number;
}

/** A source's channels from Denon's "3/4/.1" or a plain "7.1.4". */
export function sourceChannels(...texts: (string | undefined)[]): SourceChannels | null {
  for (const text of texts) {
    if (!text) continue;
    const denon = /(\d)\s*\/\s*(\d)\s*\/\s*\.?(\d)(?:\s*\/\s*(\d))?/.exec(text);
    if (denon) return { front: +denon[1], surround: +denon[2], lfe: +denon[3], heights: +(denon[4] ?? 0) };
    const dotted = /(\d{1,2})\.(\d)(?:\.(\d))?/.exec(text);
    if (dotted) {
      const bed = +dotted[1];
      const front = bed === 4 ? 2 : Math.min(3, bed);
      return { front, surround: Math.max(0, bed - front), lfe: +dotted[2], heights: +(dotted[3] ?? 0) };
    }
  }
  return null;
}

/** The speakers a source's own channels land on, of those there are. */
function sourceSpeakers(source: SourceChannels): Channel[] {
  const front: Channel[] = source.front === 1 ? ['C'] : source.front === 2 ? ['FL', 'FR'] : source.front >= 3 ? ['FL', 'FR', 'C'] : [];
  const surround: Channel[] = source.surround >= 3 ? ['SL', 'SR', 'SBL', 'SBR'] : source.surround >= 1 ? ['SL', 'SR'] : [];
  return [...front, ...surround, ...(source.heights > 0 ? HEIGHT[6] : []), ...(source.lfe > 0 ? SUBS : [])];
}

export type SpeakerState = 'active' | 'silent' | 'unknown' | 'unpowered';

export interface SoundInfo {
  /** The receiver is on. */
  on: boolean;
  /** What it renders: its sound mode as it reports it. */
  mode?: string;
  /** The source's channels, e.g. "3/4/.1". */
  format?: string;
}

/**
 * Each speaker's state. A subwoofer whose outlet is off is `unpowered`
 * whatever plays; stereo leaves the subwoofers silent.
 */
export function speakerStates(layout: SpeakerLayout, sound: SoundInfo, unpowered: string[] = []): Record<string, SpeakerState> {
  const channels = layoutChannels(layout);
  const how = sound.on ? rendering(sound.mode) : null;
  const source = how === 'source' ? sourceChannels(sound.format, sound.mode) : null;
  const sounding: Channel[] | null = !sound.on
    ? []
    : how === 'all'
      ? channels
      : how === 'stereo'
        ? ['FL', 'FR']
        : source
          ? sourceSpeakers(source)
          : null;
  const states: Record<string, SpeakerState> = {};
  for (const channel of channels) {
    if (isSubChannel(channel) && unpowered.includes(channel)) states[channel] = 'unpowered';
    else if (sounding === null) states[channel] = 'unknown';
    else states[channel] = sounding.includes(channel) ? 'active' : 'silent';
  }
  // A source centre with no centre speaker plays from the front pair; a
  // source height with no heights is simply not heard.
  if (sounding?.includes('C') && !channels.includes('C')) {
    for (const channel of ['FL', 'FR'] as Channel[]) if (states[channel] === 'silent') states[channel] = 'active';
  }
  return states;
}
