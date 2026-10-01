/**
 * Whether a custom icon set is installed in Home Assistant -- Simple Icons
 * registers itself as "si" on `window.customIconsets`, the way every custom
 * set does (see CLAUDE.md, section 6). Its names drawn where it is not would
 * be empty squares.
 */
export function hasIconSet(prefix: string): boolean {
  const sets = (window as unknown as { customIconsets?: Record<string, unknown> }).customIconsets;
  return Boolean(sets && prefix in sets);
}
