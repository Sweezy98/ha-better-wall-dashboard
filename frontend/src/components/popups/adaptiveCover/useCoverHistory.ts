import { useEffect, useState } from 'react';
import { useConnection } from '../../../hooks/useHa';
import type { TimePoint } from '../../../lib/timeline';

interface CompressedState {
  s: string;
  a?: Record<string, unknown>;
  /** Seconds since the epoch. */
  lu: number;
  lc?: number;
}

export interface CoverHistory {
  actual: TimePoint[];
  target: TimePoint[];
  winners: { t: number; key: string }[];
}

/** How often the history is asked again while the popup stays open. */
const REFRESH_MS = 5 * 60_000;

/**
 * A cover's last `hours`: where it stood, where Adaptive Cover Pro wanted
 * it, and which of its handlers won -- one recorder query, as ACP's history
 * card makes, asked again every five minutes while it is shown.
 *
 * With attributes: a cover's position is one, not its state. An attribute
 * not repeated on a row is the one before it.
 */
export function useCoverHistory(coverId: string, targetId: string | undefined, decisionId: string | undefined, hours: number) {
  const connection = useConnection();
  const [history, setHistory] = useState<{ key: string; value: CoverHistory; start: number; end: number } | null>(null);
  const key = `${coverId}|${targetId}|${decisionId}|${hours}`;

  useEffect(() => {
    if (!connection) return;
    let alive = true;
    const load = () => {
      const end = Date.now();
      const start = end - hours * 3_600_000;
      const ids = [coverId, targetId, decisionId].filter((id): id is string => Boolean(id));
      connection
        .sendMessagePromise<Record<string, CompressedState[]>>({
          type: 'history/history_during_period',
          entity_ids: ids,
          start_time: new Date(start).toISOString(),
          end_time: new Date(end).toISOString(),
          minimal_response: false,
          no_attributes: false,
          significant_changes_only: false,
        })
        .then(result => {
          if (!alive) return;
          const when = (row: CompressedState) => (row.lc ?? row.lu) * 1000;
          let attributes: Record<string, unknown> = {};
          const actual = (result[coverId] ?? []).flatMap(row => {
            attributes = row.a ?? attributes;
            const v = Number(attributes.current_position);
            return Number.isFinite(v) ? [{ t: when(row), v }] : [];
          });
          // The state, not `linear_position`: during a hand's hold the state
          // is the position held, while `linear_position` stays what the sun
          // would want -- and the hold is what happened.
          const target = (targetId ? (result[targetId] ?? []) : []).flatMap(row => {
            const v = Number(row.s);
            return row.s !== '' && Number.isFinite(v) ? [{ t: when(row), v }] : [];
          });
          const winners = (decisionId ? (result[decisionId] ?? []) : [])
            .filter(row => row.s !== 'unknown' && row.s !== 'unavailable')
            .map(row => ({ t: when(row), key: row.s }));
          setHistory({ key, value: { actual, target, winners }, start, end });
        })
        .catch(() => undefined);
    };
    load();
    const timer = window.setInterval(load, REFRESH_MS);
    return () => {
      alive = false;
      window.clearInterval(timer);
    };
  }, [connection, coverId, targetId, decisionId, hours, key]);

  return history?.key === key ? history : null;
}
