/**
 * Whether a custom icon set is installed in Home Assistant -- custom-brand-icons
 * registers itself as "phu", Simple Icons as "si" on `window.customIconsets`, the way every custom
 * set does (see CLAUDE.md, section 6). Its names drawn where it is not would
 * be empty squares.
 */
export function hasIconSet(prefix: string): boolean {
  const sets = (window as unknown as { customIconsets?: Record<string, unknown> }).customIconsets;
  return Boolean(sets && prefix in sets);
}

/** The brand icon sets installed, of those the dashboard knows names in. */
export function brandIconSets(): string[] {
  return ['phu', 'si'].filter(hasIconSet);
}
