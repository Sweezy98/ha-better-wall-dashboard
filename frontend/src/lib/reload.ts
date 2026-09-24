/**
 * Reloading the dashboard past Home Assistant's service worker.
 *
 * The worker answers from its cache before the network, so a plain reload
 * serves the old page -- and on a wall tablet there is no hard refresh. But
 * emptying every cache and unregistering the worker throws away Home
 * Assistant's whole precached frontend, megabytes over Wi-Fi, and reloads
 * through a worker whose cache was pulled out from under it; one chunk failing
 * to arrive then breaks the page. (CLAUDE.md, section 6, learned the hard way.)
 *
 * So: confirm the new file is actually served, delete only the cache entries
 * that can be stale -- ours, and documents, which carry the script tags --
 * ask the worker to update rather than removing it, then reload.
 */

import { getEntryUrl } from '../panel/entry';

/** The fingerprint this copy of the dashboard was loaded under, if any. */
export function loadedFingerprint(moduleUrl: string | null = getEntryUrl()): string | null {
  if (!moduleUrl) return null;
  try {
    return new URL(moduleUrl).searchParams.get('v');
  } catch {
    return null;
  }
}

/** Whether a cached request can be stale: ours, or a page rather than a file. */
export function isStaleCandidate(url: string, ownPrefix: string): boolean {
  try {
    const { pathname } = new URL(url);
    if (pathname.startsWith(ownPrefix)) return true;
    const last = pathname.split('/').pop() ?? '';
    return !last.includes('.');
  } catch {
    return false;
  }
}

export async function reloadDashboard(entryUrl: string | null, ownPrefix = '/better_wall_dashboard/'): Promise<'reloading' | 'missing'> {
  if (entryUrl) {
    try {
      const response = await fetch(entryUrl, { cache: 'reload' });
      // A file that is genuinely not there is a broken install, and
      // reloading at it only swaps a working old page for a blank one.
      if (!response.ok) return 'missing';
    } catch {
      return 'missing';
    }
  }
  try {
    if ('caches' in window) {
      for (const name of await caches.keys()) {
        const cache = await caches.open(name);
        for (const request of await cache.keys()) {
          if (isStaleCandidate(request.url, ownPrefix)) await cache.delete(request);
        }
      }
    }
    const registration = await navigator.serviceWorker?.getRegistration();
    await registration?.update();
  } catch {
    // Best effort: a reload without the cleanup is still a reload.
  }
  window.location.reload();
  return 'reloading';
}
