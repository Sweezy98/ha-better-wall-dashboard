/**
 * Which entities each tile type offers in the editor's picker, beyond its
 * domains: only those it can do something with.
 *
 * Pure, so it tests without a browser.
 */

interface EntityLike {
  state: string;
  attributes: Record<string, unknown>;
}

/**
 * What a graph can be drawn from: a number now, or a sensor Home Assistant
 * records as a measurement -- one briefly unavailable still has its day.
 */
export function hasNumericHistory(entityId: string, entity: EntityLike): boolean {
  const domain = entityId.split('.')[0];
  if (domain === 'input_number' || domain === 'number' || domain === 'counter') return true;
  if (domain !== 'sensor') return false;
  return Number.isFinite(Number(entity.state)) && entity.state !== '' ? true : 'state_class' in entity.attributes;
}

/**
 * The covers Adaptive Cover Pro steers: the ones its Target Position
 * sensors report in `actual_positions`, as its own tile card finds them.
 */
export function coversSteered(entities: Record<string, EntityLike>, platformOf: (entityId: string) => string | undefined): string[] {
  const covers = new Set<string>();
  for (const [entityId, entity] of Object.entries(entities)) {
    if (!entityId.startsWith('sensor.') || platformOf(entityId) !== 'adaptive_cover_pro') continue;
    const positions = entity.attributes.actual_positions;
    if (positions && typeof positions === 'object') Object.keys(positions).forEach(cover => covers.add(cover));
  }
  return [...covers].sort();
}
