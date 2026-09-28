import { useEntity } from '../../../hooks/useHa';
import { acpBadge, showsAuto, type AcpBadge, type AcpEntities, type TraceStep } from '../../../lib/adaptiveCover';

export interface Steering {
  /** What steers the cover, as one badge; null while automatic control is off. */
  badge: AcpBadge | null;
  /** A plain "Auto" beside it. */
  auto: boolean;
  manual: boolean;
  /** When a hand's hold on the cover lapses, if it does. */
  manualUntil: Date | null;
  trace: TraceStep[];
  winner: string | undefined;
}

/** What Adaptive Cover Pro is doing with a cover, from its switches, sensors and decision trace. */
export function useSteering(entities: AcpEntities): Steering {
  const enabled = useEntity(entities.enabled);
  const automatic = useEntity(entities.automatic);
  const manual = useEntity(entities.manual);
  const decision = useEntity(entities.decision);
  const manualEnd = useEntity(entities.manualEnd);
  const on = (state: string | undefined) => (state === 'on' ? true : state === 'off' ? false : undefined);
  const trace = Array.isArray(decision?.attributes.trace) ? (decision.attributes.trace as TraceStep[]) : [];
  const input = {
    enabled: on(enabled?.state),
    automatic: on(automatic?.state),
    manual: manual?.state === 'on',
    winner: decision?.state,
    trace,
    inTimeWindow: decision?.attributes.in_time_window as boolean | undefined,
  };
  const badge = acpBadge(input);
  const until = manualEnd ? Date.parse(manualEnd.state) : NaN;
  return {
    badge,
    auto: showsAuto(input, badge),
    manual: input.manual,
    manualUntil: input.manual && Number.isFinite(until) ? new Date(until) : null,
    trace,
    winner: decision?.state,
  };
}
