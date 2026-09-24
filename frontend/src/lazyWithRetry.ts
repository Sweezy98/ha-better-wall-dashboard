import { lazy, type ComponentType } from 'react';

/**
 * React.lazy, retried.
 *
 * React.lazy remembers a failed import for the life of the page, so one
 * chunk that did not arrive -- a Wi-Fi blip, or Home Assistant still starting
 * up when the page asked -- would leave that part of the app broken until
 * somebody reloads. On a wall tablet nobody does. Three tries, a second
 * apart, then the error is real.
 */
export function lazyWithRetry<T extends ComponentType<object>>(load: () => Promise<{ default: T }>, tries = 3) {
  return lazy(async () => {
    for (let attempt = 1; ; attempt += 1) {
      try {
        return await load();
      } catch (error) {
        if (attempt >= tries) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
  });
}
