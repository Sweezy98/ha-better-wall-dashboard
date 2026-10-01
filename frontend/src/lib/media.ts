/**
 * Media players: which one to show, where it is in its track, how loud it
 * is, and the tile's own lists -- presets, switches, devices.
 *
 * Pure, so the rules test without Home Assistant.
 */
import { parseLayout, type SpeakerLayout } from './speakers';
import { runService } from './actions';
import { MOUNTS, SOFAS, type HeightMounts, type Mount, type Sofa } from './room';

/** Home Assistant's MediaPlayerEntityFeature bits. */
const FEATURES = {
  pause: 1,
  seek: 2,
  volumeSet: 4,
  volumeMute: 8,
  previous: 16,
  next: 32,
  turnOn: 128,
  turnOff: 256,
  volumeStep: 1024,
  selectSource: 2048,
  stop: 4096,
  play: 16384,
  shuffle: 32768,
  repeat: 262144,
} as const;

export type MediaFeature = keyof typeof FEATURES;

export function mediaFeatures(supported: unknown): Record<MediaFeature, boolean> {
  const bits = typeof supported === 'number' ? supported : 0;
  return Object.fromEntries(Object.entries(FEATURES).map(([name, bit]) => [name, (bits & bit) !== 0])) as Record<MediaFeature, boolean>;
}

export interface PlayerLike {
  state: string;
  attributes: Record<string, unknown>;
}

const OFF_STATES = ['off', 'standby', 'unavailable', 'unknown'];

export function playerOn(player: PlayerLike | undefined): boolean {
  return Boolean(player) && !OFF_STATES.includes(player!.state);
}

/** How much a player has to show: playing beats paused beats a title beats merely on. */
function rank(player: PlayerLike | undefined): number {
  if (!playerOn(player)) return 0;
  if (player!.state === 'playing') return 4;
  if (player!.state === 'paused' || player!.state === 'buffering') return 3;
  return player!.attributes.media_title ? 2 : 1;
}

/**
 * The player to show of several: the one with the most going on, the
 * earlier in the list on a tie -- so the Shield that plays wins over the
 * receiver it plays through, and the receiver's own stream wins while the
 * Shield idles. With nothing on, the first.
 */
export function activePlayer(ids: string[], entities: Record<string, PlayerLike | undefined>): string | undefined {
  let best: string | undefined;
  let bestRank = -1;
  for (const id of ids) {
    const value = rank(entities[id]);
    if (value > bestRank) {
      best = id;
      bestRank = value;
    }
  }
  return best;
}

/** Where a player is in its track, in seconds, moved on to `now` while it plays; null without a duration. */
export function mediaProgress(player: PlayerLike | undefined, now: number): { position: number; duration: number } | null {
  const duration = Number(player?.attributes.media_duration);
  if (!player || !Number.isFinite(duration) || duration <= 0) return null;
  let position = Number(player.attributes.media_position);
  if (!Number.isFinite(position)) position = 0;
  const updated = Date.parse(String(player.attributes.media_position_updated_at ?? ''));
  if (player.state === 'playing' && Number.isFinite(updated)) position += Math.max(0, now - updated) / 1000;
  return { position: Math.min(duration, Math.max(0, position)), duration };
}

/** Seconds as a player shows them: 02:34, or 1:02:34 past an hour. */
export function formatPlayTime(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const rest = String(total % 60).padStart(2, '0');
  return hours ? `${hours}:${String(minutes).padStart(2, '0')}:${rest}` : `${String(minutes).padStart(2, '0')}:${rest}`;
}

export const VOLUME_UNITS = ['auto', 'db', 'percent'] as const;
export type VolumeUnit = (typeof VOLUME_UNITS)[number];

/**
 * Whether a volume reads in decibels: asked for, or by itself for Home
 * Assistant's Denon integration, whose level is the receiver's dB scale
 * (-80 to +18) moved to 0..1.
 */
export function volumeInDb(option: unknown, platform: string | undefined): boolean {
  if (option === 'db') return true;
  if (option === 'percent') return false;
  return platform === 'denonavr';
}

/** The receiver's decibels for a Denon level, to its half-dB steps. */
export function denonDb(level: number): number {
  return Math.round((level * 100 - 80) * 2) / 2;
}

// --- the tile's lists -------------------------------------------------------

export const PRESET_KINDS = ['source', 'app', 'run'] as const;
export type PresetKind = (typeof PRESET_KINDS)[number];

export interface MediaPreset {
  id: string;
  entity: string;
  name: string;
  icon: string;
  /** Switch its input (`source`), open an app on it (`app`), or run a script or scene (`run`). */
  kind: PresetKind;
  /** The source's name, or the app's package or id. */
  value: string;
}

export interface MediaSwitch {
  id: string;
  entity: string;
  name: string;
  icon: string;
  /** The subwoofers it powers (SW1..SW4): drawn off while it is. */
  subs: string[];
}

export interface MediaDevice {
  id: string;
  entity: string;
  name: string;
  icon: string;
  /** A sensor saying what it shows, e.g. "4K HDR"; empty for its own source. */
  info: string;
}

export const MAX_PRESETS = 8;
export const MAX_SWITCHES = 4;
export const MAX_DEVICES = 4;

const text = (value: unknown): string => (typeof value === 'string' ? value : '');

function list<T>(raw: unknown, max: number, read: (item: Record<string, unknown>, index: number) => T): T[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((item): item is Record<string, unknown> => Boolean(item) && typeof item === 'object')
    .slice(0, max)
    .map(read);
}

const base = (item: Record<string, unknown>, index: number) => ({
  id: text(item.id) || `item-${index}`,
  entity: text(item.entity),
  name: text(item.name),
  icon: text(item.icon),
});

export const mediaPresets = (raw: unknown): MediaPreset[] =>
  list(raw, MAX_PRESETS, (item, index) => ({
    ...base(item, index),
    kind: PRESET_KINDS.includes(item.kind as PresetKind) ? (item.kind as PresetKind) : 'source',
    value: text(item.value),
  }));

export const mediaSwitches = (raw: unknown): MediaSwitch[] =>
  list(raw, MAX_SWITCHES, (item, index) => ({
    ...base(item, index),
    subs: Array.isArray(item.subs) ? item.subs.filter((sub): sub is string => typeof sub === 'string') : [],
  }));

export const mediaDevices = (raw: unknown): MediaDevice[] =>
  list(raw, MAX_DEVICES, (item, index) => ({ ...base(item, index), info: text(item.info) }));

/** Whether a preset is what its player is on now. A script is never "on". */
export function presetActive(preset: MediaPreset, player: PlayerLike | undefined): boolean {
  if (!playerOn(player) || !preset.value) return false;
  const value = preset.value.toLowerCase();
  if (preset.kind === 'source') return String(player!.attributes.source ?? '').toLowerCase() === value;
  if (preset.kind === 'app') return String(player!.attributes.app_id ?? '').toLowerCase() === value;
  return false;
}

export type ServiceCall = { domain: string; service: string; data?: Record<string, unknown> };

/** What pressing a preset calls, in order: a player that is off is switched on first. */
export function presetCalls(preset: MediaPreset, player: PlayerLike | undefined): ServiceCall[] {
  if (preset.kind === 'run') {
    const [domain, service] = runService(preset.entity);
    return [{ domain, service }];
  }
  const wake: ServiceCall[] = playerOn(player) ? [] : [{ domain: 'media_player', service: 'turn_on' }];
  if (preset.kind === 'app') {
    return [
      ...wake,
      { domain: 'media_player', service: 'play_media', data: { media_content_type: 'app', media_content_id: preset.value } },
    ];
  }
  return [...wake, { domain: 'media_player', service: 'select_source', data: { source: preset.value } }];
}

/**
 * The sensors Denon's HACS integration (`denon_avr`) adds to a receiver:
 * its volume in dB and what the input carries. Found on the receiver's
 * device by the key each is translated by, so nobody has to pick them.
 */
export const DENON_SENSORS = {
  volume: 'volume',
  format: 'audio_format',
  decoder: 'decoder',
  signal: 'input_signal',
  sampleRate: 'sample_rate',
  modeInfo: 'mode_info',
  soundMode: 'sound_mode',
  /** A switch, not a sensor: the receiver's subwoofer output on or off. */
  subOutput: 'subwoofer_switch',
} as const;

export type AudioSensor = keyof typeof DENON_SENSORS;

interface DisplayEntry {
  entity_id: string;
  device_id?: string;
  platform?: string;
  translation_key?: string;
}

export function audioSensors(entityId: string, registry: Record<string, DisplayEntry>): Partial<Record<AudioSensor, string>> {
  const device = registry[entityId]?.device_id;
  if (!device) return {};
  const found: Partial<Record<AudioSensor, string>> = {};
  for (const entry of Object.values(registry)) {
    if (entry.device_id !== device || entry.platform !== 'denon_avr') continue;
    const role = (Object.keys(DENON_SENSORS) as AudioSensor[]).find(key => DENON_SENSORS[key] === entry.translation_key);
    // The sub's output is the one switch among them.
    if (role && !entry.entity_id.startsWith(role === 'subOutput' ? 'switch.' : 'sensor.')) continue;
    if (role) found[role] = entry.entity_id;
  }
  return found;
}

// --- a media tile's settings -------------------------------------------------

export interface MediaConfig {
  /** The main player: the receiver, say. */
  main: string;
  /** Where now playing comes from, the main player first. */
  players: string[];
  power: string;
  volume: string;
  volumeUnit: VolumeUnit;
  presets: MediaPreset[];
  switches: MediaSwitch[];
  switchesTitle: string;
  devices: MediaDevice[];
  night: string;
  nightText: string;
  /** Overrides for what is otherwise read from the volume player. */
  modeEntity: string;
  formatEntity: string;
  layout: SpeakerLayout | null;
  sofa: Sofa;
  /** Someone drawn in the listening position. */
  listener: boolean;
  /** The room turned, panned and zoomed by hand. */
  roomMovable: boolean;
  /** The room's walls drawn; the floor always is. */
  walls: boolean;
  /** What the room's screen shows: nothing, what plays, or a picture of one's own. */
  screen: ScreenShows;
  screenImage: string;
  /** How much of the screen the picture may take, in percent, and how it fills that. */
  screenScale: number;
  screenFit: ScreenFit;
  /** Whether the TV is on: dark without; the receiver's power when left empty. */
  tvEntity: string;
  /** The listener lies down asleep while the system is off. */
  sleeps: boolean;
  /** The height speakers on the wall or in the ceiling, front and rear each. */
  mounts: HeightMounts;
  /** The receiver's subwoofer output; found by itself for Denon's HACS integration. */
  subOutput: string;
}

export const SCREEN_FITS = ['contain', 'cover', 'stretch'] as const;
export type ScreenFit = (typeof SCREEN_FITS)[number];

export const SCREEN_SHOWS = ['off', 'art', 'image'] as const;
export type ScreenShows = (typeof SCREEN_SHOWS)[number];

/**
 * A media tile's options, each checked, from `tile.options`:
 * `players`, `power`, `volume`, `volume_unit`, `presets`, `switches`,
 * `switches_title`, `devices`, `night`, `night_text`, `mode_entity`,
 * `format_entity`, `speakers` ("7.4.4"), `sofa`, `listener`, `listener_sleeps`, `room_movable`,
 * `hide_walls`, `screen`, `screen_image`, `screen_scale`, `screen_fit`, `tv_entity`,
 * `heights_front`, `heights_rear` and `sub_output`.
 */
export function mediaConfig(entity: string, options: Record<string, unknown>): MediaConfig {
  const extra = Array.isArray(options.players) ? options.players.filter((id): id is string => typeof id === 'string' && id !== '') : [];
  return {
    main: entity,
    players: [...new Set([entity, ...extra].filter(Boolean))],
    power: text(options.power) || entity,
    volume: text(options.volume) || entity,
    volumeUnit: VOLUME_UNITS.includes(options.volume_unit as VolumeUnit) ? (options.volume_unit as VolumeUnit) : 'auto',
    presets: mediaPresets(options.presets),
    switches: mediaSwitches(options.switches),
    switchesTitle: text(options.switches_title),
    devices: mediaDevices(options.devices),
    night: text(options.night),
    nightText: text(options.night_text),
    modeEntity: text(options.mode_entity),
    formatEntity: text(options.format_entity),
    layout: parseLayout(options.speakers),
    sofa: SOFAS.includes(options.sofa as Sofa) ? (options.sofa as Sofa) : 'none',
    listener: options.listener === true,
    roomMovable: options.room_movable === true,
    walls: options.hide_walls !== true,
    screen: SCREEN_SHOWS.includes(options.screen as ScreenShows) ? (options.screen as ScreenShows) : 'off',
    screenImage: text(options.screen_image),
    screenScale: typeof options.screen_scale === 'number' ? Math.min(100, Math.max(30, Math.round(options.screen_scale))) : 90,
    screenFit: SCREEN_FITS.includes(options.screen_fit as ScreenFit) ? (options.screen_fit as ScreenFit) : 'contain',
    tvEntity: text(options.tv_entity),
    sleeps: options.listener_sleeps === true,
    mounts: {
      front: MOUNTS.includes(options.heights_front as Mount) ? (options.heights_front as Mount) : 'wall',
      rear: MOUNTS.includes(options.heights_rear as Mount) ? (options.heights_rear as Mount) : 'wall',
    },
    subOutput: text(options.sub_output),
  };
}

/** What a player is on: the app, or else the input -- "Plex", "HDMI 3"; undefined for neither. */
export function playerApp(player: PlayerLike | undefined): string | undefined {
  const attributes = player?.attributes ?? {};
  const app = attributes.app_name ?? attributes.source;
  return typeof app === 'string' && app ? app : undefined;
}

/** A speaker as loud as it is, or struck through while muted. */
export function volumeIcon(level: number | null, muted: boolean): string {
  if (muted) return 'mdi:volume-off';
  if (level === null || level < 0.34) return 'mdi:volume-low';
  return level < 0.67 ? 'mdi:volume-medium' : 'mdi:volume-high';
}
