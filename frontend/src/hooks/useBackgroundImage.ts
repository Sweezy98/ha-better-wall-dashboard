import { useEffect, useState } from 'react';
import { useConnection, useHassUrl } from './useHa';
import defaultBackground from '../assets/background.jpg';

const MEDIA_SOURCE = 'media-source://';
/** How long the signed address of a picture from the media library stays good. */
const EXPIRES_SECONDS = 7 * 86_400;
/** Signed again long before that, for a tablet that is never reloaded. */
const REFRESH_MS = 6 * 3_600_000;

/**
 * The address to draw a dashboard's background from.
 *
 * Stored as whatever the admin chose: empty for the picture the dashboard
 * ships with, a path on Home Assistant ("/local/wall.jpg"), a full URL, or a
 * picture from Home Assistant's media library ("media-source://…"). That last
 * one has no address of its own -- Home Assistant signs one on request, valid
 * for a while -- so it is asked for here, and asked for again before it lapses.
 */
export function useBackgroundImage(image: string): string {
  const connection = useConnection();
  const joinHassUrl = useHassUrl();
  const [resolved, setResolved] = useState<{ id: string; url: string } | null>(null);
  const fromMedia = image.startsWith(MEDIA_SOURCE);

  useEffect(() => {
    if (!fromMedia || !connection) return;
    let alive = true;
    const resolve = () =>
      connection
        .sendMessagePromise<{ url: string }>({ type: 'media_source/resolve_media', media_content_id: image, expires: EXPIRES_SECONDS })
        .then(result => alive && setResolved({ id: image, url: result.url }))
        // A picture since deleted from the library: the built-in one instead.
        .catch(error => {
          console.warn('Better Wall Dashboard: background picture not found', image, error);
          if (alive) setResolved({ id: image, url: '' });
        });
    void resolve();
    const timer = window.setInterval(resolve, REFRESH_MS);
    return () => {
      alive = false;
      window.clearInterval(timer);
    };
  }, [image, fromMedia, connection]);

  if (!image) return defaultBackground;
  if (fromMedia) {
    // Nothing while asking, rather than the built-in picture for a moment.
    if (resolved?.id !== image) return '';
    return resolved.url ? joinHassUrl(resolved.url) : defaultBackground;
  }
  // "/local/wall.jpg" is a path on Home Assistant. Inside Home Assistant that
  // is this page's origin anyway; on the dev server it is not.
  return image.startsWith('/') ? joinHassUrl(image) : image;
}
