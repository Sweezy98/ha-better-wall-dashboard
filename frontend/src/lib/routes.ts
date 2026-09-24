/**
 * Driving routes from Google's Routes API, for the travel popup's own map.
 *
 * The embedded Google map (a pasted embed URL, or the Maps Embed API) always
 * draws Google's route card over the map, addresses and all, and offers no
 * way to hide it. So with an API key the dashboard asks the Routes API for
 * the routes and draws them itself on a Maps JavaScript API map with every
 * control switched off.
 *
 * The request and the parsing are pure, so they test without Google.
 */

export interface TravelRoute {
  /** What Google calls the route, e.g. "A2" or "B67 and A9". */
  description: string;
  /** Seconds, with today's traffic. */
  duration: number;
  /** Seconds, as if the roads were empty. */
  staticDuration: number;
  distanceMeters: number;
  /** Google's encoded polyline. */
  polyline: string;
}

const COORDINATES = /^\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*$/;

/**
 * A waypoint from what a Google Travel Time sensor reports: an address, or
 * "lat,lng" when it was configured with coordinates or a zone.
 */
export function waypoint(value: string): { address: string } | { location: { latLng: { latitude: number; longitude: number } } } {
  const match = value.match(COORDINATES);
  if (match) return { location: { latLng: { latitude: Number(match[1]), longitude: Number(match[2]) } } };
  return { address: value };
}

export const ROUTES_URL = 'https://routes.googleapis.com/directions/v2:computeRoutes';

/** Only what the popup draws: Google bills by the fields asked for. */
export const ROUTES_FIELDS =
  'routes.description,routes.duration,routes.staticDuration,routes.distanceMeters,routes.polyline.encodedPolyline';

export function routesRequest(origin: string, destination: string, language: string) {
  return {
    origin: waypoint(origin),
    destination: waypoint(destination),
    travelMode: 'DRIVE',
    routingPreference: 'TRAFFIC_AWARE',
    computeAlternativeRoutes: true,
    languageCode: language,
    units: 'METRIC',
  };
}

/** "1234s" -> 1234. The Routes API writes durations as protobuf strings. */
function seconds(value: unknown): number {
  const parsed = typeof value === 'string' ? parseFloat(value) : Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

/** The routes in a response, fastest first. Anything unusable is dropped. */
export function parseRoutes(response: unknown): TravelRoute[] {
  const routes = (response as { routes?: unknown[] })?.routes;
  if (!Array.isArray(routes)) return [];
  return routes
    .map(raw => {
      const route = raw as Record<string, unknown>;
      return {
        description: typeof route.description === 'string' ? route.description : '',
        duration: seconds(route.duration),
        staticDuration: seconds(route.staticDuration),
        distanceMeters: Number(route.distanceMeters) || 0,
        polyline: ((route.polyline as { encodedPolyline?: string } | undefined)?.encodedPolyline ?? '').trim(),
      };
    })
    .filter(route => route.polyline && route.duration > 0)
    .sort((a, b) => a.duration - b.duration);
}

/**
 * Minutes of delay because of traffic, or 0. Shown only when it is worth
 * saying: two minutes on a twenty-minute drive is noise.
 */
export function trafficDelayMinutes(route: TravelRoute): number {
  const delay = Math.round((route.duration - route.staticDuration) / 60);
  return delay >= 3 ? delay : 0;
}

/**
 * A dark map to match the dashboard. Styled through `styles`, which works
 * without a cloud map ID -- the price being that the map cannot use
 * advanced markers, which it does not need.
 */
export const DARK_MAP_STYLE = [
  { elementType: 'geometry', stylers: [{ color: '#1d2126' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8a939c' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1d2126' }] },
  { featureType: 'administrative', elementType: 'geometry', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  { featureType: 'road', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2c333b' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#3a434d' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#121820' }] },
  { featureType: 'landscape.natural', elementType: 'geometry', stylers: [{ color: '#1a1f23' }] },
];
