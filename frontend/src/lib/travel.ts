/**
 * Which map to show for the travel-time popup.
 *
 * Only Google Maps embed URLs are accepted: the URL is stored by an admin but
 * rendered on a tablet anyone can touch, and an iframe pointing anywhere else
 * is a web page on the wall.
 */
export function mapEmbedUrl(
  config: { map_url: string; maps_api_key: string },
  origin: string | undefined,
  destination: string | undefined,
  language: string
): string | null {
  const pasted = config.map_url.trim();
  if (pasted) {
    // People paste the whole <iframe ...> snippet as often as its src.
    const src = pasted.match(/src="([^"]+)"/)?.[1] ?? pasted;
    try {
      const url = new URL(src);
      if (url.protocol === 'https:' && url.hostname === 'www.google.com' && url.pathname.startsWith('/maps/embed')) return url.toString();
    } catch {
      // not a URL
    }
    return null;
  }
  if (config.maps_api_key && origin && destination) {
    const url = new URL('https://www.google.com/maps/embed/v1/directions');
    url.searchParams.set('key', config.maps_api_key);
    url.searchParams.set('origin', origin);
    url.searchParams.set('destination', destination);
    url.searchParams.set('mode', 'driving');
    url.searchParams.set('language', language);
    return url.toString();
  }
  return null;
}
