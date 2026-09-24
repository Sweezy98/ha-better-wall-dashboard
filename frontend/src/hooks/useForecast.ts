import { useState } from 'react';
import { useSubscription } from './useSubscription';

export interface ForecastEntry {
  datetime: string;
  condition?: string;
  temperature?: number;
  templow?: number;
  precipitation?: number;
  precipitation_probability?: number;
  wind_speed?: number;
  humidity?: number;
  is_daytime?: boolean;
}

/**
 * A weather entity's forecast, pushed whenever the provider updates it.
 *
 * `weather/subscribe_forecast` replaced the `forecast` attribute in 2024;
 * reading the attribute finds nothing on any current provider.
 */
export function useForecast(entityId: string | undefined, type: 'hourly' | 'daily') {
  const [forecast, setForecast] = useState<ForecastEntry[] | null>(null);
  const [unsupported, setUnsupported] = useState(false);
  useSubscription<{ forecast: ForecastEntry[] | null }>(
    entityId ? `${entityId}|${type}` : null,
    () => ({ type: 'weather/subscribe_forecast', entity_id: entityId, forecast_type: type }),
    event => {
      setUnsupported(false);
      setForecast(event.forecast ?? []);
    },
    // A provider without this forecast type answers with an error rather
    // than an empty list.
    () => setUnsupported(true)
  );
  return { forecast, unsupported };
}
