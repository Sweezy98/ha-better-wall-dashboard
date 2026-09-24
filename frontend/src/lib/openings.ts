/**
 * Whether a window or door is open, from whatever entity reports it.
 *
 * `null` when it cannot be told -- unavailable, or a state this does not
 * recognise -- because "no idea" is not "closed", and counting it as closed
 * would show a green all-clear for a sensor whose battery died last week.
 */
export function isOpen(entityId: string, state: string | undefined): boolean | null {
  if (state === undefined || state === 'unavailable' || state === 'unknown') return null;
  const domain = entityId.split('.')[0];
  switch (domain) {
    case 'binary_sensor':
    case 'input_boolean':
    case 'switch':
      return state === 'on';
    case 'cover':
      return state === 'open' || state === 'opening' || state === 'closing';
    case 'lock':
      return state === 'unlocked' || state === 'open' || state === 'opening';
    default:
      // A template sensor like the reference config's `sensor.openwindows`
      // reports a count, not a state.
      if (state === 'open' || state === 'on') return true;
      if (state === 'closed' || state === 'off') return false;
      return null;
  }
}

/**
 * How many things are open. A sensor that reports a number contributes that
 * number, so a single "open windows" template sensor works as well as a list
 * of contacts.
 */
export function countOpen(items: { entityId: string; state: string | undefined }[]): number {
  let total = 0;
  for (const { entityId, state } of items) {
    if (entityId.startsWith('sensor.') && state !== undefined && Number.isFinite(Number(state))) {
      total += Math.max(0, Math.round(Number(state)));
    } else if (isOpen(entityId, state)) {
      total += 1;
    }
  }
  return total;
}
