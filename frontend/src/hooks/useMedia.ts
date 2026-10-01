import { useMemo } from 'react';
import { useHass } from '@hakit/core';
import { useEntity, useHassUrl, useLanguage } from './useHa';
import { activePlayer, audioSensors, denonDb, playerOn, volumeInDb, type AudioSensor, type VolumeUnit } from '../lib/media';
import { formatNumber } from '../lib/format';

/** Of several players, the one to show (see activePlayer); the tile re-renders when that changes, not with every state. */
export function useActivePlayer(ids: string[]): string | undefined {
  return useHass(state => activePlayer(ids, state.entities));
}

/** A player's picture as a URL to load: Home Assistant's proxy paths joined to its address. */
export function usePlayerArt(entityId: string | undefined): string | undefined {
  const player = useEntity(entityId);
  const join = useHassUrl();
  const picture = player?.attributes.entity_picture as string | undefined;
  if (!picture) return undefined;
  return picture.startsWith('/') && join ? join(picture) : picture;
}

/** Denon's own sensors on the receiver's device, found once and compared as text so the lookup does not re-render. */
function useAudioSensors(entityId: string): Partial<Record<AudioSensor, string>> {
  const found = useHass(state => JSON.stringify(audioSensors(entityId, state.entitiesRegistryDisplay)));
  return useMemo(() => JSON.parse(found) as Partial<Record<AudioSensor, string>>, [found]);
}

/** A reading worth showing: not "unknown" in any case, nor a blank. */
const reading = (state: string | undefined) => {
  const text = state?.trim();
  return text && !['unknown', 'unavailable', 'none'].includes(text.toLowerCase()) ? text : undefined;
};

export interface Volume {
  /** 0..1, or null for a player that does not say. */
  level: number | null;
  text: string;
  muted: boolean;
}

export interface Audio {
  on: boolean;
  volume: Volume;
  /** What the receiver renders: the mode it reports. */
  mode?: string;
  /** The source's channels, e.g. "3/2/.1". */
  format?: string;
  decoder?: string;
  signal?: string;
  sampleRate?: string;
  /** The receiver's subwoofer output: false while switched off, undefined where unknown. */
  subOutput?: boolean;
}

/**
 * What the volume player says about its sound: its volume -- in dB for a
 * Denon receiver -- the sound mode it renders in, and, where Denon's HACS
 * integration or a chosen sensor has it, what the source carries.
 */
export function useAudio(entityId: string, unit: VolumeUnit, modeEntity: string, formatEntity: string, subOutputEntity = ''): Audio {
  const language = useLanguage();
  const player = useEntity(entityId || undefined);
  const platform = useHass(state => state.entitiesRegistryDisplay[entityId]?.platform);
  const sensors = useAudioSensors(entityId);
  const dbSensor = useEntity(sensors.volume);
  const modeInfo = useEntity(sensors.modeInfo);
  const soundMode = useEntity(sensors.soundMode);
  const modeOverride = useEntity(modeEntity || undefined);
  const format = useEntity(formatEntity || sensors.format);
  const decoder = useEntity(sensors.decoder);
  const signal = useEntity(sensors.signal);
  const sampleRate = useEntity(sensors.sampleRate);
  const subOutput = useEntity(subOutputEntity || sensors.subOutput);

  const attributes = (player?.attributes ?? {}) as Record<string, unknown>;
  const rawLevel = Number(attributes.volume_level);
  const level = attributes.volume_level === undefined || !Number.isFinite(rawLevel) ? null : rawLevel;
  const db = Number(reading(dbSensor?.state));
  let text = '–';
  if (unit !== 'percent' && Number.isFinite(db)) text = `${formatNumber(db, language, 1)} dB`;
  else if (level !== null && volumeInDb(unit, platform)) text = `${formatNumber(denonDb(level), language, 1)} dB`;
  else if (level !== null) text = `${Math.round(level * 100)} %`;

  const mode =
    reading(modeOverride?.state) ??
    reading(modeInfo?.state) ??
    (attributes.sound_mode_raw as string | undefined) ??
    (attributes.sound_mode as string | undefined) ??
    reading(soundMode?.state);

  return {
    on: playerOn(player),
    volume: { level, text, muted: attributes.is_volume_muted === true },
    mode,
    format: reading(format?.state),
    decoder: reading(decoder?.state),
    // Denon's raw signal code ("12") means nothing to anyone: words only.
    signal: /[a-z]/i.test(signal?.state ?? '') ? reading(signal?.state) : undefined,
    sampleRate: reading(sampleRate?.state),
    subOutput: subOutput?.state === 'on' ? true : subOutput?.state === 'off' ? false : undefined,
  };
}
