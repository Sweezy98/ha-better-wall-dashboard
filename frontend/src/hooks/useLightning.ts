import { useEffect, useMemo, useState } from 'react';
import { useHass } from '@hakit/core';
import { useConnection } from './useHa';
import { bearing, findBlitzortung, type BlitzortungSensors, type RegistryDisplayEntry, type Strike } from '../lib/lightning';

/**
 * The Blitzortung integration's sensors, looked up once in the entity
 * registry: `list_for_display` is what Home Assistant's own frontend reads
 * for every user, so a tablet's non-admin account may read it too. Null
 * while asking, and when the integration is not installed.
 */
function useBlitzortungSensors(): BlitzortungSensors | null {
  const connection = useConnection();
  const [sensors, setSensors] = useState<BlitzortungSensors | null>(null);
  useEffect(() => {
    if (!connection) return;
    let cancelled = false;
    connection
      .sendMessagePromise<{ entities: RegistryDisplayEntry[] }>({ type: 'config/entity_registry/list_for_display' })
      .then(result => !cancelled && setSensors(findBlitzortung(result.entities ?? [])))
      .catch(() => !cancelled && setSensors(null));
    return () => {
      cancelled = true;
    };
  }, [connection]);
  return sensors;
}

export interface Lightning {
  sensors: BlitzortungSensors;
  /** Every strike the integration still tracks, newest first. */
  strikes: Strike[];
  unit: string;
}

/**
 * Lightning near the house, or null without Blitzortung.
 *
 * The strikes are its `geo_location` entities, each placed on the radar by
 * its own distance and its bearing from the home zone. Selected as one string
 * so the popup redraws when a strike arrives or ages out, not on every state
 * change in the house.
 */
export function useLightning(): Lightning | null {
  const sensors = useBlitzortungSensors();
  const key = useHass(state => {
    const home = state.entities['zone.home']?.attributes;
    const rows = [`${home?.latitude},${home?.longitude}`];
    for (const [id, entity] of Object.entries(state.entities)) {
      if (!id.startsWith('geo_location.') || entity.attributes.source !== 'blitzortung') continue;
      const a = entity.attributes;
      rows.push([entity.state, a.latitude, a.longitude, a.publication_date, a.unit_of_measurement].join(','));
    }
    return rows.join('|');
  });

  return useMemo(() => {
    if (!sensors) return null;
    const [homeRow, ...rows] = key.split('|');
    const [homeLat, homeLon] = homeRow.split(',').map(Number);
    let unit = 'km';
    const strikes = rows
      .map(row => {
        const [distance, lat, lon, published, rowUnit] = row.split(',');
        if (rowUnit) unit = rowUnit;
        return {
          distance: Number(distance),
          bearing: bearing({ lat: homeLat, lon: homeLon }, { lat: Number(lat), lon: Number(lon) }),
          time: Date.parse(published),
        };
      })
      .filter(strike => Number.isFinite(strike.distance) && Number.isFinite(strike.bearing))
      .sort((a, b) => b.time - a.time);
    return { sensors, strikes, unit };
  }, [sensors, key]);
}
