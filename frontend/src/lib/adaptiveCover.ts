/**
 * Adaptive Cover Pro, read the way its own cards read it.
 *
 * One config entry is one instance, steering one or more covers. Its
 * entities are found by the registry, not by name or device -- they may sit
 * on the physical cover's own device -- each by the fixed suffix of its
 * unique id (`{entry_id}_{suffix}`), qualified by domain, because
 * `manual_override` is both a binary sensor and a switch.
 *
 * Pure, so it tests without a browser.
 */

export const ADAPTIVE_COVER_PRO = 'adaptive_cover_pro';

export const ACP_ROLES = {
  target: 'sensor:Cover_Position',
  control: 'sensor:control_status',
  decision: 'sensor:decision_trace',
  forecast: 'sensor:position_forecast',
  manualEnd: 'sensor:manual_override_end_time',
  motion: 'sensor:motion_status',
  climate: 'sensor:climate_status',
  startSun: 'sensor:Start Sun',
  endSun: 'sensor:End Sun',
  sun: 'sensor:sun_position',
  lastAction: 'sensor:last_cover_action',
  manual: 'binary_sensor:manual_override',
  sunInFront: 'binary_sensor:sun_motion',
  enabled: 'switch:Integration Enabled',
  automatic: 'switch:Automatic Control',
  climateMode: 'switch:Climate Mode',
  motionControl: 'switch:Motion Control',
  resetManual: 'button:Reset Manual Override',
} as const;

export type AcpRole = keyof typeof ACP_ROLES;
export type AcpEntities = Partial<Record<AcpRole, string>>;

export interface RegistryEntry {
  entity_id: string;
  unique_id: string;
  platform: string;
  config_entry_id: string | null;
}

/** An instance's entities by what they are, from its registry entries. */
export function acpEntities(entries: RegistryEntry[], entryId: string): AcpEntities {
  const byKey = new Map<string, string>();
  for (const entry of entries) {
    if (entry.platform !== ADAPTIVE_COVER_PRO || entry.config_entry_id !== entryId) continue;
    const prefix = `${entryId}_`;
    if (!entry.unique_id.startsWith(prefix)) continue;
    byKey.set(`${entry.entity_id.split('.')[0]}:${entry.unique_id.slice(prefix.length)}`, entry.entity_id);
  }
  const found: AcpEntities = {};
  for (const [role, key] of Object.entries(ACP_ROLES) as [AcpRole, string][]) {
    const entityId = byKey.get(key);
    if (entityId) found[role] = entityId;
  }
  return found;
}

/**
 * The Target Position sensor steering a cover: the one whose
 * `actual_positions` names it -- which is how ACP tells what it steers.
 */
export function targetSensorOf(coverId: string, states: Record<string, { attributes: Record<string, unknown> }>): string | undefined {
  for (const [entityId, state] of Object.entries(states)) {
    if (!entityId.startsWith('sensor.')) continue;
    const positions = state.attributes.actual_positions;
    if (positions && typeof positions === 'object' && coverId in positions) return entityId;
  }
  return undefined;
}

export type AcpBadge =
  'auto' | 'manual' | 'weather' | 'glare_zone' | 'climate' | 'cloud' | 'custom_position' | 'solar' | 'motion' | 'off' | 'off_schedule';

/** Each badge's look, as the ACP tile card draws it. */
export const ACP_BADGES: Record<AcpBadge, { icon: string; color: string }> = {
  auto: { icon: 'mdi:autorenew', color: '#4caf50' },
  manual: { icon: 'mdi:hand-back-right', color: '#ff9800' },
  weather: { icon: 'mdi:shield-sun', color: '#f44336' },
  glare_zone: { icon: 'mdi:weather-sunny-alert', color: '#f44336' },
  climate: { icon: 'mdi:thermostat', color: '#009688' },
  cloud: { icon: 'mdi:weather-cloudy', color: '#2196f3' },
  custom_position: { icon: 'mdi:bookmark', color: '#9c27b0' },
  solar: { icon: 'mdi:white-balance-sunny', color: '#4caf50' },
  motion: { icon: 'mdi:motion-sensor', color: '#ffeb3b' },
  off: { icon: 'mdi:power', color: '#9e9e9e' },
  off_schedule: { icon: 'mdi:clock-alert-outline', color: '#607d8b' },
};

/** A decision trace's handler or winner, as the badge it is shown with; undefined for one without a badge. */
export function handlerBadge(handler: string | undefined): AcpBadge | undefined {
  if (!handler) return undefined;
  if (handler.startsWith('custom_position')) return 'custom_position';
  const map: Record<string, AcpBadge> = {
    manual_override: 'manual',
    manual: 'manual',
    weather_override: 'weather',
    weather: 'weather',
    motion_timeout: 'motion',
    motion: 'motion',
    cloud_suppression: 'cloud',
    cloud: 'cloud',
    glare_zone: 'glare_zone',
    climate: 'climate',
    solar: 'solar',
  };
  return map[handler];
}

export interface TraceStep {
  handler: string;
  matched: boolean;
  reason?: string;
  position?: number;
  held_position?: number;
}

export interface BadgeInput {
  enabled: boolean | undefined;
  automatic: boolean | undefined;
  manual: boolean;
  /** The decision trace's state: the handler that won. */
  winner: string | undefined;
  /** Highest priority first, as the integration evaluates them. */
  trace: TraceStep[];
  inTimeWindow: boolean | undefined;
}

/**
 * What is steering the cover, as one badge -- the tile card's rules: off
 * when the integration is, manual while a hand holds it, else the winner;
 * a winner without a badge of its own (the default, summer, winter) is
 * "auto", or the most important handler that matched and has one. Outside
 * its schedule it says so. Nothing while automatic control is off.
 */
export function acpBadge(input: BadgeInput): AcpBadge | null {
  if (input.enabled === false) return 'off';
  if (input.automatic === false) return null;
  const winner = handlerBadge(input.winner);
  let badge: AcpBadge = input.manual && winner !== 'custom_position' ? 'manual' : (winner ?? 'auto');
  if (badge === 'auto') {
    const promoted = input.trace
      .map(step => (step.matched ? handlerBadge(step.handler) : undefined))
      .find(kind => kind && kind !== 'motion');
    if (promoted) badge = promoted;
  }
  if (input.inTimeWindow === false && badge !== 'manual') return 'off_schedule';
  return badge;
}

/** The plain "Auto" beside another badge: automatic control on and nothing overruling it. */
export function showsAuto(input: BadgeInput, badge: AcpBadge | null): boolean {
  return input.enabled !== false && input.automatic === true && !input.manual && badge !== 'auto' && badge !== 'off_schedule';
}

/** A trace handler by the name `enabled_handlers` lists it under. */
const ENABLED_NAMES: Record<string, string> = {
  manual_override: 'manual',
  motion_timeout: 'motion',
  cloud_suppression: 'cloud',
};

/**
 * The trace steps worth showing: those of handlers the instance has on, as
 * ACP's card leaves the rest out -- a group's handlers on a single cover,
 * glare zones nobody set up. Without the list, all of them.
 */
export function shownSteps(trace: TraceStep[], enabled: string[] | undefined): TraceStep[] {
  if (!enabled) return trace;
  return trace.filter(step => {
    const name = step.handler.startsWith('custom_position') ? 'custom_position' : (ENABLED_NAMES[step.handler] ?? step.handler);
    return enabled.includes(name);
  });
}
