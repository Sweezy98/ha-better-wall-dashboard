/**
 * The service that runs an entity once -- a button pressed, a script or
 * scene started, an automation triggered -- rather than switching it: an
 * automation toggled would be disabled, not run.
 */
export function runService(entityId: string): [string, string] {
  const domain = entityId.split('.')[0];
  switch (domain) {
    case 'button':
    case 'input_button':
      return [domain, 'press'];
    case 'script':
    case 'scene':
      return [domain, 'turn_on'];
    case 'automation':
      return [domain, 'trigger'];
    case 'switch':
    case 'input_boolean':
    case 'light':
    case 'fan':
      return [domain, 'toggle'];
    default:
      return ['homeassistant', 'turn_on'];
  }
}
