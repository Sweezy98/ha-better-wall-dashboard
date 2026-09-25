/**
 * Whether a notification is meant for this tablet: its id starts with one of
 * the dashboard's prefixes. No prefixes, every notification.
 */
export function isForTablet(notificationId: string, prefixes: string[]): boolean {
  return !prefixes.length || prefixes.some(prefix => notificationId.startsWith(prefix));
}

/**
 * The dashboard's prefixes, from a backend that sends the list -- or, older
 * than this page, only its single `prefix`.
 */
export function notificationPrefixes(config: { prefix?: string; prefixes?: string[] }): string[] {
  if (config.prefixes) return config.prefixes;
  return config.prefix ? [config.prefix] : [];
}

/**
 * Every prefix any of these dashboards uses, in order of first use: what the
 * editor offers when a prefix is added elsewhere. One used nowhere any more
 * is not in it -- there is no list of its own to fall out of date.
 */
export function prefixesInUse(dashboards: { sidebar: { notifications: { prefix?: string; prefixes?: string[] } } }[]): string[] {
  return [...new Set(dashboards.flatMap(dashboard => notificationPrefixes(dashboard.sidebar.notifications)))];
}
