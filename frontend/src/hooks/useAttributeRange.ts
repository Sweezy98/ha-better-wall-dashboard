import { useEffect, useState } from 'react';
import { useConnection } from './useHa';
import { numericRange } from '../lib/graph';

interface CompressedState {
  /** attributes */
  a?: Record<string, unknown>;
}

/**
 * The lowest and highest value an attribute had over the last `hours` -- a
 * weather entity's pressure, which is no sensor of its own and so has no
 * numeric history to stream.
 *
 * Asked once, when the popup that shows it opens: a range over a day does not
 * need to move while someone looks at it.
 */
export function useAttributeRange(entityId: string, attribute: string, hours: number): { min: number; max: number } | null {
  const connection = useConnection();
  const [range, setRange] = useState<{ key: string; value: { min: number; max: number } | null } | null>(null);
  const key = `${entityId}|${attribute}|${hours}`;

  useEffect(() => {
    if (!connection) return;
    let cancelled = false;
    connection
      .sendMessagePromise<Record<string, CompressedState[]>>({
        type: 'history/history_during_period',
        entity_ids: [entityId],
        start_time: new Date(Date.now() - hours * 3_600_000).toISOString(),
        minimal_response: false,
        no_attributes: false,
        significant_changes_only: false,
      })
      .then(result => {
        if (cancelled) return;
        const values = (result[entityId] ?? []).map(state => Number(state.a?.[attribute]));
        setRange({ key, value: numericRange(values) });
      })
      .catch(() => !cancelled && setRange({ key, value: null }));
    return () => {
      cancelled = true;
    };
  }, [connection, entityId, attribute, hours, key]);

  return range?.key === key ? range.value : null;
}
