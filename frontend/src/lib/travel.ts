/**
 * Which map to show for the travel-time popup.
 *
 * A pasted Google Maps embed URL, for dashboards without an API key. (With
 * one, the popup draws its own map instead; see TravelMap.) Only Google Maps
 * embed URLs are accepted: the URL is stored by an admin but
 * rendered on a tablet anyone can touch, and an iframe pointing anywhere else
 * is a web page on the wall.
 */
export function mapEmbedUrl(config: { map_url: string }): string | null {
  const pasted = config.map_url.trim();
  if (!pasted) return null;
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
