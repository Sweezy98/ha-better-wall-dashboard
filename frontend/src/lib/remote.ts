/**
 * A remote control for the devices behind a media tile: which of them can be
 * steered key by key, and what pressing a key calls.
 *
 * Android TV Remote (the Shield, a Google TV) has a `remote` entity on the
 * player's device that sends Android's key names; LG's webOS integration a
 * `webostv.button` service on the TV's player. Others are left out rather
 * than given buttons that do nothing. Pure, so it tests without Home Assistant.
 */

export type RemoteKind = 'android' | 'webos';
export type RemoteKey = 'up' | 'down' | 'left' | 'right' | 'ok' | 'back' | 'home' | 'menu' | 'playPause';

export interface RemoteTarget {
  /** What the remote is named after: the player chosen in the tile. */
  player: string;
  kind: RemoteKind;
  /** The entity a key is sent to: the remote, or the TV's player. */
  entity: string;
}

interface DisplayEntry {
  entity_id: string;
  device_id?: string;
  platform?: string;
}

/** Of the players given, those with a remote, each once, in their order. */
export function remoteTargets(ids: string[], registry: Record<string, DisplayEntry | undefined>): RemoteTarget[] {
  const targets: RemoteTarget[] = [];
  const seen = new Set<string>();
  for (const id of ids) {
    const entry = registry[id];
    if (!entry) continue;
    let target: RemoteTarget | null = null;
    if (entry.platform === 'webostv' && id.startsWith('media_player.')) target = { player: id, kind: 'webos', entity: id };
    if (entry.platform === 'androidtv_remote') {
      const remote = id.startsWith('remote.')
        ? id
        : Object.values(registry).find(
            other => other?.device_id === entry.device_id && other?.platform === 'androidtv_remote' && other.entity_id.startsWith('remote.')
          )?.entity_id;
      if (remote) target = { player: id, kind: 'android', entity: remote };
    }
    if (target && !seen.has(target.entity)) {
      seen.add(target.entity);
      targets.push(target);
    }
  }
  return targets;
}

const ANDROID: Record<RemoteKey, string> = {
  up: 'DPAD_UP',
  down: 'DPAD_DOWN',
  left: 'DPAD_LEFT',
  right: 'DPAD_RIGHT',
  ok: 'DPAD_CENTER',
  back: 'BACK',
  home: 'HOME',
  menu: 'MENU',
  playPause: 'MEDIA_PLAY_PAUSE',
};

const WEBOS: Record<Exclude<RemoteKey, 'playPause'>, string> = {
  up: 'UP',
  down: 'DOWN',
  left: 'LEFT',
  right: 'RIGHT',
  ok: 'ENTER',
  back: 'BACK',
  home: 'HOME',
  menu: 'MENU',
};

/** The service a key press calls, its data, and the entity it goes to. */
export function remoteCall(
  target: RemoteTarget,
  key: RemoteKey
): { domain: string; service: string; data: Record<string, unknown>; entity: string } {
  if (target.kind === 'android')
    return { domain: 'remote', service: 'send_command', data: { command: ANDROID[key] }, entity: target.entity };
  if (key === 'playPause') return { domain: 'media_player', service: 'media_play_pause', data: {}, entity: target.entity };
  return { domain: 'webostv', service: 'button', data: { button: WEBOS[key] }, entity: target.entity };
}

/** Which remote to open with: the one for what plays, else the first that is on, else the first. */
export function defaultTarget(
  targets: RemoteTarget[],
  activeId: string | undefined,
  isOn: (id: string) => boolean
): RemoteTarget | undefined {
  return targets.find(target => target.player === activeId) ?? targets.find(target => isOn(target.player)) ?? targets[0];
}
