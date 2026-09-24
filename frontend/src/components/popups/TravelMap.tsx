import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import { useLanguage, useT } from '../../hooks/useHa';
import { loadGoogleMaps, onMapsRefused } from '../../lib/googleMaps';
import {
  DARK_MAP_STYLE,
  mergeRoutes,
  parseRoutes,
  ROUTES_FIELDS,
  ROUTES_URL,
  routesRequests,
  trafficDelayMinutes,
  type TravelRoute,
} from '../../lib/routes';
import { formatMinutes } from '../../lib/format';

const StyledMap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${u(1.2)};
  overflow: hidden;
  background: #1d2126;
`;

const StyledRoutes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${u(13)}, 1fr));
  gap: ${u(0.6)};

  button {
    display: flex;
    flex-direction: column;
    gap: ${u(0.15)};
    padding: ${u(0.7)} ${u(1)};
    border-radius: ${u(1)};
    background: ${({ theme }) => theme.bubble.background};
    border: 2px solid transparent;
    text-align: left;
  }

  button[aria-pressed='true'] {
    border-color: ${({ theme }) => theme.colors.temperature};
  }

  .time {
    font-size: ${u(1.5)};
    font-weight: 600;
  }

  .via {
    font-size: ${u(0.95)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .delay {
    font-size: ${u(0.9)};
    color: ${({ theme }) => theme.colors.warm};
  }
`;

const StyledHint = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: ${u(1)};
  padding: ${u(1)} 0;
`;

const PRIMARY = '#03a9f4';
const OTHER = '#7d8892';

/**
 * The drive to work on a map of our own: every suggested route, the one
 * chosen in blue, nothing of Google's interface on top.
 *
 * Needs a key with the Maps JavaScript API and the Routes API enabled. The
 * routes are fetched when the popup opens and every five minutes while it
 * stays open; traffic moves, a map left open should too.
 */
const TravelMap: React.FC<{ apiKey: string; origin: string; destination: string }> = ({ apiKey, origin, destination }) => {
  const t = useT();
  const language = useLanguage();
  const box = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const lines = useRef<google.maps.Polyline[]>([]);
  const [routes, setRoutes] = useState<TravelRoute[]>([]);
  const [selected, setSelected] = useState(0);
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);
  const [mapRefused, setMapRefused] = useState(false);

  useEffect(() => onMapsRefused(() => setMapRefused(true)), []);

  // The map, once.
  useEffect(() => {
    let cancelled = false;
    loadGoogleMaps(apiKey, language)
      .then(maps => {
        if (cancelled || !box.current || map.current) return;
        map.current = new maps.Map(box.current, {
          // No Google interface at all: no zoom buttons, no map type, no
          // street view, no "view larger map", no clickable places. A finger
          // still pans and pinches -- "greedy" so one finger is enough.
          disableDefaultUI: true,
          clickableIcons: false,
          keyboardShortcuts: false,
          gestureHandling: 'greedy',
          backgroundColor: '#1d2126',
          styles: DARK_MAP_STYLE,
          center: { lat: 0, lng: 0 },
          zoom: 2,
        });
        setReady(true);
      })
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, [apiKey, language]);

  // The routes, now and every five minutes.
  useEffect(() => {
    let cancelled = false;
    const fetchOne = (body: unknown) =>
      fetch(ROUTES_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': ROUTES_FIELDS },
        body: JSON.stringify(body),
      })
        .then(response => response.json())
        .then(parseRoutes);
    // Settled, not all: the second request failing still leaves the first.
    const fetchRoutes = () =>
      Promise.allSettled(routesRequests(origin, destination, language).map(fetchOne)).then(results => {
        if (cancelled) return;
        const merged = mergeRoutes(results.map(result => (result.status === 'fulfilled' ? result.value : [])));
        setError(merged.length === 0);
        setRoutes(merged);
      });
    void fetchRoutes();
    const timer = window.setInterval(fetchRoutes, 300_000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [apiKey, origin, destination, language]);

  // Draw them: alternatives underneath in grey, the chosen one on top.
  useEffect(() => {
    const instance = map.current;
    if (!instance || !routes.length || typeof google === 'undefined') return;
    lines.current.forEach(line => line.setMap(null));
    const bounds = new google.maps.LatLngBounds();
    const endpoint = (offset: string): google.maps.IconSequence => ({
      offset,
      icon: { path: google.maps.SymbolPath.CIRCLE, scale: 6, fillColor: PRIMARY, fillOpacity: 1, strokeColor: '#ffffff', strokeWeight: 2 },
    });
    lines.current = routes.map((route, index) => {
      const path = google.maps.geometry.encoding.decodePath(route.polyline);
      path.forEach(point => bounds.extend(point));
      const chosen = index === selected;
      return new google.maps.Polyline({
        map: instance,
        path,
        strokeColor: chosen ? PRIMARY : OTHER,
        strokeOpacity: chosen ? 1 : 0.7,
        strokeWeight: chosen ? 6 : 5,
        zIndex: chosen ? 2 : 1,
        clickable: false,
        icons: chosen ? [endpoint('0%'), endpoint('100%')] : [],
      });
    });
    instance.fitBounds(bounds, 32);
  }, [routes, selected, ready]);

  if (error && !routes.length) return <StyledHint>{t('map_key_error')}</StyledHint>;

  return (
    <>
      {/* Kept mounted but hidden once refused: Google has already drawn its
          error box into it, and the routes below still work. */}
      <StyledMap ref={box} style={mapRefused ? { display: 'none' } : undefined} />
      {mapRefused && <StyledHint>{t('map_blocked')}</StyledHint>}
      {routes.length > 0 && (
        <StyledRoutes>
          {routes.map((route, index) => {
            const delay = trafficDelayMinutes(route);
            return (
              <button key={route.polyline} type='button' aria-pressed={index === selected} onClick={() => setSelected(index)}>
                <span className='time'>{formatMinutes(route.duration / 60, language)}</span>
                {route.description && (
                  <span className='via'>
                    {t('via')} {route.description}
                  </span>
                )}
                {delay > 0 && <span className='delay'>{t('traffic_delay', { minutes: delay })}</span>}
              </button>
            );
          })}
        </StyledRoutes>
      )}
    </>
  );
};

export default TravelMap;
