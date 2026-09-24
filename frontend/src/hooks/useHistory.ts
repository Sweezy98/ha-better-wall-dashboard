import { useMemo, useState } from 'react';
import type { Sample } from '../lib/graph';
import { useSubscription } from './useSubscription';
import { useTick } from './useNow';

const EMPTY: Sample[] = [];

interface CompressedState {
  /** state */
  s: string;
  /** last updated, seconds since the epoch */
  lu: number;
  /** last changed, when it differs from last updated */
  lc?: number;
}

interface StreamEvent {
  states: Record<string, CompressedState[]>;
  start_time?: number;
  end_time?: number;
}

/**
 * A sensor's numeric history over the last `hours`, kept live.
 *
 * `history/stream` is the subscription Home Assistant's own history graphs
 * use: it sends the window's history once and then every new state as it
 * happens, so the graph moves when the sensor does rather than on a polling
 * interval -- and a tablet on the wall for a week never re-downloads a day of
 * history it already has.
 */
export function useHistory(entityId: string | undefined, hours: number): Sample[] {
  // Keyed by what they are the history of, and only ever updated through a
  // function of the previous value: the first event (the history) and the
  // second (a live update) can arrive before React renders between them, and
  // a check against rendered state would then throw the history away.
  const [store, setStore] = useState<{ key: string | null; samples: Sample[] }>({ key: null, samples: [] });
  // The window slides even when the sensor is quiet; ten minutes is finer
  // than any bucket the graphs draw.
  const now = useTick(600_000);

  const key = entityId ? `${entityId}|${hours}` : null;
  useSubscription<StreamEvent>(
    key,
    // Built when subscribing, so "the last `hours`" is measured from then.
    () => ({
      type: 'history/stream',
      entity_ids: [entityId!],
      start_time: new Date(Date.now() - hours * 3_600_000).toISOString(),
      minimal_response: true,
      no_attributes: true,
      significant_changes_only: false,
    }),
    event => {
      const incoming = (event.states?.[entityId!] ?? [])
        .map(state => ({ t: (state.lc ?? state.lu) * 1000, v: Number(state.s) }))
        .filter(sample => Number.isFinite(sample.v));
      setStore(previous => ({
        key,
        // A fresh subscription's first event replaces whatever an earlier
        // entity left behind.
        samples: [...(previous.key === key ? previous.samples : []), ...incoming].sort((a, b) => a.t - b.t),
      }));
    }
  );

  const samples = store.key === key ? store.samples : EMPTY;
  return useMemo(() => {
    const start = now - hours * 3_600_000;
    // Keep the last reading before the window: it is the value the window
    // opens with, and without it a sensor that has not changed all day would
    // draw nothing at all.
    let firstInside = samples.findIndex(sample => sample.t >= start);
    if (firstInside === -1) firstInside = samples.length;
    return samples.slice(Math.max(0, firstInside - 1));
  }, [samples, now, hours]);
}
