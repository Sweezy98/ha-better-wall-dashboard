import { describe, expect, it } from 'vitest';
import { remoteCall, remoteTargets, sourceTarget } from './remote';

const registry = {
  'media_player.box': { entity_id: 'media_player.box', device_id: 'd1', platform: 'androidtv_remote' },
  'remote.box': { entity_id: 'remote.box', device_id: 'd1', platform: 'androidtv_remote' },
  'media_player.box_cast': { entity_id: 'media_player.box_cast', device_id: 'd2', platform: 'cast' },
  'media_player.tv': { entity_id: 'media_player.tv', device_id: 'd3', platform: 'webostv' },
  'media_player.receiver': { entity_id: 'media_player.receiver', device_id: 'd4', platform: 'denonavr' },
};

describe('remote', () => {
  it('finds the players with a remote, the Android box by its remote entity', () => {
    const targets = remoteTargets(
      ['media_player.receiver', 'media_player.box_cast', 'media_player.box', 'media_player.tv', 'media_player.box'],
      registry
    );
    expect(targets).toEqual([
      { player: 'media_player.box', kind: 'android', entity: 'remote.box' },
      { player: 'media_player.tv', kind: 'webos', entity: 'media_player.tv' },
    ]);
  });

  it('sends Android key names and webOS buttons', () => {
    const [box, tv] = remoteTargets(['media_player.box', 'media_player.tv'], registry);
    expect(remoteCall(box, 'ok')).toEqual({
      domain: 'remote',
      service: 'send_command',
      data: { command: 'DPAD_CENTER' },
      entity: 'remote.box',
    });
    expect(remoteCall(tv, 'ok')).toEqual({ domain: 'webostv', service: 'button', data: { button: 'ENTER' }, entity: 'media_player.tv' });
    expect(remoteCall(tv, 'playPause').service).toBe('media_play_pause');
  });

  it('steers what is being watched: the box while the TV shows its HDMI input', () => {
    const targets = remoteTargets(['media_player.box', 'media_player.tv'], registry);
    const tvOn = (app: string) => ({ state: 'on', attributes: { app_id: app } });
    const box = { state: 'playing', attributes: {} };
    expect(
      sourceTarget(targets, 'media_player.box_cast', { 'media_player.box': box, 'media_player.tv': tvOn('com.webos.app.hdmi2') })?.player
    ).toBe('media_player.box');
    expect(sourceTarget(targets, undefined, { 'media_player.box': box, 'media_player.tv': tvOn('netflix') })?.player).toBe(
      'media_player.tv'
    );
    expect(sourceTarget(targets, 'media_player.tv', { 'media_player.tv': tvOn('youtube.leanback.v4') })?.player).toBe('media_player.tv');
    expect(
      sourceTarget(targets, undefined, {
        'media_player.box': { state: 'off', attributes: {} },
        'media_player.tv': { state: 'off', attributes: {} },
      })
    ).toBeUndefined();
  });
});
