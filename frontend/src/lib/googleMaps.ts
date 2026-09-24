/**
 * Loading Google's Maps JavaScript API, once per page.
 *
 * Loaded on demand -- the first time a travel popup with an API key opens --
 * so a dashboard without one never talks to Google at all. The script sets a
 * global, which is why this is module state and not component state: two
 * popups, or one popup opened twice, share one load.
 */
let loading: Promise<typeof google.maps> | null = null;
let refused = false;
const refusalListeners = new Set<() => void>();

const CALLBACK = '__betterWallDashboardMapsReady';

/**
 * Google refuses a key -- API not enabled, or not in the key's restrictions --
 * through a global callback, and only after the map exists, painting its own
 * error box over it. Listeners hear about it so the popup can show a hint of
 * its own in place of Google's.
 */
export function onMapsRefused(listener: () => void): () => void {
  if (refused) listener();
  refusalListeners.add(listener);
  return () => refusalListeners.delete(listener);
}

export function loadGoogleMaps(apiKey: string, language: string): Promise<typeof google.maps> {
  if (typeof google !== 'undefined' && google.maps?.Map) return Promise.resolve(google.maps);
  if (loading) return loading;
  loading = new Promise((resolve, reject) => {
    const params = new URLSearchParams({ key: apiKey, v: 'weekly', libraries: 'geometry', language, callback: CALLBACK, loading: 'async' });
    (window as unknown as Record<string, () => void>)[CALLBACK] = () => resolve(google.maps);
    (window as unknown as Record<string, () => void>).gm_authFailure = () => {
      refused = true;
      refusalListeners.forEach(listener => listener());
      reject(new Error('auth'));
    };
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?${params}`;
    script.async = true;
    script.onerror = () => reject(new Error('load'));
    document.head.append(script);
  }).catch(error => {
    // A failed load may succeed later -- the Wi-Fi came back, the key was
    // fixed -- so it is not remembered.
    loading = null;
    throw error;
  }) as Promise<typeof google.maps>;
  return loading;
}
