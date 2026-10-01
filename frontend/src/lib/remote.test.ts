import { describe, expect, it } from 'vitest';
import { defaultTarget, remoteCall, remoteTargets } from './remote';

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

  it('opens on what plays, else on what is on', () => {
    const targets = remoteTargets(['media_player.box', 'media_player.tv'], registry);
    expect(defaultTarget(targets, 'media_player.tv', () => false)?.player).toBe('media_player.tv');
    expect(defaultTarget(targets, 'media_player.box_cast', id => id === 'media_player.tv')?.player).toBe('media_player.tv');
    expect(defaultTarget([], undefined, () => true)).toBeUndefined();
  });
});
