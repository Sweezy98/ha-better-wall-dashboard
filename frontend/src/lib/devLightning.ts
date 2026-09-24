import type { Strike } from './lightning';

/**
 * A storm to look at on the dev server, whose Home Assistant may not have
 * Blitzortung: `VITE_DEV_DEMO_LIGHTNING=1` in `.env.development`. Never in
 * the build -- the only caller is behind `import.meta.env.DEV`.
 *
 * A front passing to the north-east, a strike every two and a half minutes
 * over the last three quarters of an hour, the newest nearest.
 */
export function demoStrikes(now = Date.now()): Strike[] {
  return Array.from({ length: 18 }, (_, index) => ({
    distance: 12 + index * 1.6 + (index % 3) * 3,
    bearing: 40 + index * 4 + (index % 2) * 10,
    time: now - index * 150_000,
  }));
}
