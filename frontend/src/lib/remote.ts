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

interface PlayerState {
  state: string;
  attributes: Record<string, unknown>;
}

const OFF = ['off', 'standby', 'unavailable', 'unknown'];

/** A TV showing one of its inputs -- a box or the receiver on HDMI -- is not itself the source. */
function onInput(player: PlayerState): boolean {
  const app = String(player.attributes.app_id ?? '');
  const source = String(player.attributes.source ?? '');
  return /^com\.webos\.app\.(hdmi|externalinput|composite|component)/i.test(app) || /^(hdmi|av|component|composite)\b/i.test(source);
}

/**
 * The remote for what is being watched, or none: the player that plays, if
 * it has one; else a TV on one of its own apps; else a box that is on. A TV
 * on an HDMI input is only the screen for a box, and a system that is off
 * has nothing to steer.
 */
export function sourceTarget(
  targets: RemoteTarget[],
  activeId: string | undefined,
  states: Record<string, PlayerState | undefined>
): RemoteTarget | undefined {
  const on = (target: RemoteTarget) => {
    const player = states[target.player];
    return Boolean(player) && !OFF.includes(player!.state);
  };
  const exact = targets.find(target => target.player === activeId && on(target));
  if (exact && !(exact.kind === 'webos' && onInput(states[exact.player]!))) return exact;
  return (
    targets.find(target => target.kind === 'webos' && on(target) && !onInput(states[target.player]!)) ??
    targets.find(target => target.kind === 'android' && on(target))
  );
}
