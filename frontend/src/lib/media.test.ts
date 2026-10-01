import { describe, expect, it } from 'vitest';
import {
  activePlayer,
  appName,
  appIcon,
  knownApps,
  formatSampleRate,
  playerApp,
  mediaConfig,
  audioSensors,
  denonDb,
  formatPlayTime,
  mediaFeatures,
  mediaPresets,
  mediaProgress,
  mediaSwitches,
  presetActive,
  presetCalls,
  volumeInDb,
} from './media';

const player = (state: string, attributes: Record<string, unknown> = {}) => ({ state, attributes });

describe('media', () => {
  it('reads what a player can do from its feature bits', () => {
    expect(mediaFeatures(16 | 32 | 1)).toMatchObject({ pause: true, previous: true, next: true, seek: false });
    expect(mediaFeatures(undefined).pause).toBe(false);
  });

  it('shows the player with the most going on, the earlier on a tie', () => {
    const entities = {
      'media_player.shield': player('idle'),
      'media_player.receiver': player('playing', { media_title: 'Track' }),
      'media_player.tv': player('on'),
    };
    expect(activePlayer(['media_player.shield', 'media_player.receiver', 'media_player.tv'], entities)).toBe('media_player.receiver');
    expect(activePlayer(['media_player.tv', 'media_player.shield'], entities)).toBe('media_player.tv');
    expect(activePlayer(['media_player.gone', 'media_player.also_gone'], {})).toBe('media_player.gone');
    expect(activePlayer([], entities)).toBeUndefined();
  });

  it('moves the position on while playing, and only then', () => {
    const at = '2026-09-29T12:00:00Z';
    const now = Date.parse(at) + 10_000;
    const attributes = { media_duration: 200, media_position: 30, media_position_updated_at: at };
    expect(mediaProgress(player('playing', attributes), now)).toEqual({ position: 40, duration: 200 });
    expect(mediaProgress(player('paused', attributes), now)).toEqual({ position: 30, duration: 200 });
    expect(mediaProgress(player('playing', { ...attributes, media_position: 199 }), now)?.position).toBe(200);
    expect(mediaProgress(player('playing', {}), now)).toBeNull();
  });

  it('writes play times as a player does', () => {
    expect(formatPlayTime(154)).toBe('02:34');
    expect(formatPlayTime(3754)).toBe('1:02:34');
    expect(formatPlayTime(-3)).toBe('00:00');
  });

  it('reads Denon levels in dB, by itself only for its integration', () => {
    expect(volumeInDb('auto', 'denonavr')).toBe(true);
    expect(volumeInDb('auto', 'cast')).toBe(false);
    expect(volumeInDb('percent', 'denonavr')).toBe(false);
    expect(volumeInDb('db', 'cast')).toBe(true);
    expect(denonDb(0.66)).toBe(-14);
    expect(denonDb(0.655)).toBe(-14.5);
  });

  it('keeps presets and switches that make sense, at most so many', () => {
    const presets = mediaPresets([{ id: 'a', entity: 'media_player.tv', kind: 'bogus', value: 'HDMI 1' }, 'nonsense', null]);
    expect(presets).toEqual([{ id: 'a', entity: 'media_player.tv', name: '', icon: '', kind: 'source', value: 'HDMI 1' }]);
    expect(mediaPresets(Array.from({ length: 20 }, () => ({})))).toHaveLength(8);
    expect(mediaSwitches([{ entity: 'switch.sub', subs: ['SW1', 3] }])[0]).toMatchObject({ id: 'item-0', subs: ['SW1'] });
  });

  it('knows which preset a player is on', () => {
    const source = mediaPresets([{ kind: 'source', value: 'Bluetooth' }])[0];
    const app = mediaPresets([{ kind: 'app', value: 'com.example.video' }])[0];
    expect(presetActive(source, player('on', { source: 'bluetooth' }))).toBe(true);
    expect(presetActive(source, player('off', { source: 'Bluetooth' }))).toBe(false);
    expect(presetActive(app, player('playing', { app_id: 'com.example.video' }))).toBe(true);
    expect(presetActive(mediaPresets([{ kind: 'run', value: 'x' }])[0], player('on'))).toBe(false);
  });

  it('switches a player on before it picks a source', () => {
    const source = mediaPresets([{ entity: 'media_player.receiver', kind: 'source', value: 'TV' }])[0];
    expect(presetCalls(source, player('off')).map(call => call.service)).toEqual(['turn_on', 'select_source']);
    expect(presetCalls(source, player('on'))).toEqual([{ domain: 'media_player', service: 'select_source', data: { source: 'TV' } }]);
    const app = mediaPresets([{ kind: 'app', value: 'com.example.video' }])[0];
    expect(presetCalls(app, player('on'))[0].data).toEqual({ media_content_type: 'app', media_content_id: 'com.example.video' });
    expect(presetCalls(mediaPresets([{ entity: 'script.movie', kind: 'run' }])[0], undefined)).toEqual([
      { domain: 'script', service: 'turn_on' },
    ]);
    expect(presetCalls(mediaPresets([{ entity: 'button.x', kind: 'run' }])[0], undefined)[0].service).toBe('press');
  });

  it("finds Denon's own sensors on the receiver's device", () => {
    const registry = {
      'media_player.receiver': { entity_id: 'media_player.receiver', device_id: 'd1', platform: 'denon_avr' },
      'sensor.receiver_audio_format': {
        entity_id: 'sensor.receiver_audio_format',
        device_id: 'd1',
        platform: 'denon_avr',
        translation_key: 'audio_format',
      },
      'sensor.receiver_volume': { entity_id: 'sensor.receiver_volume', device_id: 'd1', platform: 'denon_avr', translation_key: 'volume' },
      'sensor.other_volume': { entity_id: 'sensor.other_volume', device_id: 'd2', platform: 'denon_avr', translation_key: 'volume' },
    };
    expect(audioSensors('media_player.receiver', registry)).toEqual({
      format: 'sensor.receiver_audio_format',
      volume: 'sensor.receiver_volume',
    });
    expect(audioSensors('media_player.unknown', registry)).toEqual({});
  });
});

describe('media config', () => {
  it('fills every setting, the main player standing in for those left empty', () => {
    const config = mediaConfig('media_player.receiver', {
      players: ['media_player.tv', 'media_player.receiver', 3],
      speakers: '7.4.4',
      sofa: 'l_left',
    });
    expect(config.players).toEqual(['media_player.receiver', 'media_player.tv']);
    expect(config.power).toBe('media_player.receiver');
    expect(config.volume).toBe('media_player.receiver');
    expect(config.volumeUnit).toBe('auto');
    expect(config.layout).toEqual({ bed: 7, subs: 4, heights: 4 });
    expect(config.sofa).toBe('l_left');
    expect(config.screenScale).toBe(90);
    expect(config.screenFit).toBe('contain');
    expect(config.mounts).toEqual({ front: 'wall', rear: 'wall' });
    expect(mediaConfig('m.x', { screen_scale: 5, heights_rear: 'ceiling' })).toMatchObject({
      screenScale: 30,
      mounts: { rear: 'ceiling' },
    });
    expect(mediaConfig('media_player.receiver', { power: 'remote.box', sofa: 'round' })).toMatchObject({
      power: 'remote.box',
      sofa: 'none',
      layout: null,
    });
  });
});

describe('app names', () => {
  it('names the apps people use, reads an unknown package, keeps a name', () => {
    expect(appName('com.google.android.backdrop')).toBe('Screensaver');
    expect(appName('com.plexapp.android')).toBe('Plex');
    expect(appName('com.example.cinemabox')).toBe('Cinemabox');
    expect(appName('HDMI 3')).toBe('HDMI 3');
    expect(appName('Plex')).toBe('Plex');
    expect(playerApp({ state: 'on', attributes: { app_name: 'com.netflix.ninja' } })).toBe('Netflix');
  });
});

describe('sample rate', () => {
  it("reads a receiver's rate as kilohertz", () => {
    expect(formatSampleRate('48K', 'en')).toBe('48 kHz');
    expect(formatSampleRate('44.1K', 'de')).toBe('44,1 kHz');
    expect(formatSampleRate('96000', 'en')).toBe('96 kHz');
    expect(formatSampleRate('PCM', 'en')).toBe('PCM');
  });
});

describe('app icons', () => {
  it("finds an app's icon by package or by the title a TV gives it", () => {
    expect(appIcon('com.netflix.ninja')).toBe('mdi:netflix');
    expect(appIcon('Netflix')).toBe('mdi:netflix');
    expect(appIcon('HDMI 2')).toBeUndefined();
    expect(knownApps().find(app => app.name === 'Plex')?.id).toBe('com.plexapp.android');
    expect(new Set(knownApps().map(app => app.name)).size).toBe(knownApps().length);
  });
});
