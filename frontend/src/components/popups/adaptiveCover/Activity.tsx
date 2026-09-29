import { memo, useEffect, useMemo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import Accordion from '../../base/accordion/Accordion';
import { useHass } from '@hakit/core';
import { useCallService, useConnection, useLanguage, useT } from '../../../hooks/useHa';
import { COVER_STATES } from '../../../lib/cover';
import { CONTROL_STATUS, handlerKey } from './acpLabels';
import { ACP_BADGES, handlerBadge, type AcpEntities } from '../../../lib/adaptiveCover';

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${u(24)};
  overflow-y: auto;
  padding-right: ${u(0.3)};

  .day {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: ${u(0.4)} 0 ${u(0.3)};
    font-size: ${u(0.85)};
    font-weight: 600;
    color: ${({ theme }) => theme.text.secondary};
    background: rgba(24, 24, 28, 0.96);
  }

  .row {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: ${u(0.7)};
    align-items: baseline;
    padding: ${u(0.45)} ${u(0.2)};
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  .dot {
    width: ${u(0.6)};
    height: ${u(0.6)};
    border-radius: 50%;
    transform: translateY(-1px);
  }

  .what {
    font-size: ${u(0.92)};
    font-weight: 600;
    overflow-wrap: anywhere;
  }

  .who {
    font-size: ${u(0.82)};
    font-weight: 400;
    color: ${({ theme }) => theme.text.secondary};
  }

  .when {
    font-size: ${u(0.82)};
    color: ${({ theme }) => theme.text.secondary};
    font-variant-numeric: tabular-nums;
  }

  .empty {
    padding: ${u(0.6)} 0;
    font-size: ${u(0.9)};
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const StyledBuffer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${u(0.6)};

  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${u(1)};
    font-size: ${u(0.82)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .copy {
    margin-left: auto;
    font-size: ${u(0.85)};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
  }

  input {
    padding: ${u(0.55)} ${u(0.8)};
    border-radius: ${u(1)};
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: ${({ theme }) => theme.bubble.background};
    color: inherit;
    font: inherit;
    font-size: ${u(0.9)};
  }

  .event {
    display: grid;
    grid-template-columns: ${u(3.6)} minmax(0, 0.9fr) minmax(0, 1.4fr);
    gap: ${u(0.8)};
    padding: ${u(0.5)} ${u(0.6)};
    border-left: 3px solid var(--event-color);
    border-radius: ${u(0.3)};
    background: ${({ theme }) => theme.bubble.background};
    font-size: ${u(0.82)};
  }

  .event .name {
    font-weight: 600;
    overflow-wrap: anywhere;
  }

  .event .details {
    font-family: ui-monospace, 'SFMono-Regular', Menlo, monospace;
    font-size: ${u(0.75)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
`;

interface LogbookEntry {
  /** Seconds since the epoch. */
  when: number;
  entity_id?: string;
  name?: string;
  state?: string;
  message?: string;
}

/** What happened to the cover and its instance over the last day, from Home Assistant's logbook. */
const Logbook: React.FC<{ entityIds: string[]; decisionId?: string; controlId?: string; coverId: string }> = ({
  entityIds,
  decisionId,
  controlId,
  coverId,
}) => {
  const t = useT();
  const theme = useTheme();
  const language = useLanguage();
  const connection = useConnection();
  const [entries, setEntries] = useState<LogbookEntry[] | null>(null);
  const key = entityIds.join(' ');
  // The logbook sends ids, not names: named here, as one string so the list
  // re-renders when a name changes and not on every state change.
  const names = useHass(state =>
    entityIds.map(id => (state.entities[id]?.attributes.friendly_name as string | undefined) ?? id).join('\n')
  );

  useEffect(() => {
    if (!connection) return;
    let alive = true;
    const end = Date.now();
    connection
      .sendMessagePromise<LogbookEntry[]>({
        type: 'logbook/get_events',
        start_time: new Date(end - 86_400_000).toISOString(),
        end_time: new Date(end).toISOString(),
        entity_ids: key.split(' '),
      })
      .then(result => alive && setEntries([...result].sort((a, b) => b.when - a.when)))
      .catch(() => alive && setEntries([]));
    return () => {
      alive = false;
    };
  }, [connection, key]);

  if (!entries)
    return (
      <StyledList>
        <div className='empty'>{t('loading_short')}</div>
      </StyledList>
    );
  if (!entries.length)
    return (
      <StyledList>
        <div className='empty'>{t('acp_no_activity')}</div>
      </StyledList>
    );

  const colorOf = (entry: LogbookEntry) => {
    if (entry.entity_id === coverId) return theme.colors.cover;
    if (entry.entity_id === decisionId) return ACP_BADGES[handlerBadge(entry.state) ?? 'auto'].color;
    return theme.text.muted;
  };
  const nameOf = (entityId: string | undefined) => {
    const index = entityId ? entityIds.indexOf(entityId) : -1;
    return index >= 0 ? names.split('\n')[index] : (entityId ?? '');
  };
  // In our words: a cover's state, a handler's name, on and off.
  const said = (entry: LogbookEntry) => {
    if (entry.message) return entry.message;
    const state = entry.state ?? '';
    if (entry.entity_id === coverId && COVER_STATES[state]) return t(COVER_STATES[state]);
    const handler = entry.entity_id === decisionId ? handlerKey(state) : undefined;
    if (handler) return t(handler);
    if (entry.entity_id === controlId && CONTROL_STATUS[state]) return t(CONTROL_STATUS[state]);
    if (state === 'on') return t('on');
    if (state === 'off') return t('off');
    return state;
  };
  const dayOf = (when: number) => new Date(when * 1000).toLocaleDateString(language, { weekday: 'long', day: 'numeric', month: 'long' });
  return (
    <StyledList>
      {entries.map((entry, index) => {
        const day = dayOf(entry.when);
        const newDay = index === 0 || dayOf(entries[index - 1].when) !== day;
        return (
          <div key={`${entry.when}-${entry.entity_id}-${index}`}>
            {newDay && <div className='day'>{day}</div>}
            <div className='row'>
              <span className='dot' style={{ background: colorOf(entry) }} />
              <span className='what'>
                {said(entry)} <span className='who'>{entry.name ?? nameOf(entry.entity_id)}</span>
              </span>
              <span className='when'>
                {new Date(entry.when * 1000).toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        );
      })}
    </StyledList>
  );
};

interface TimelineEvent {
  ts?: string | number;
  event?: string;
  [key: string]: unknown;
}

interface Diagnostics {
  event_timeline?: TimelineEvent[];
  data_window?: { start?: string; end?: string };
  debug_config?: { debug_event_buffer_size?: number };
}

/** An event's colour: what went wrong red, what was skipped amber, the rest grey. */
const eventColor = (name: string) =>
  /fail|error|gave_up/.test(name)
    ? '#f44336'
    : /skip/.test(name)
      ? '#ff9800'
      : /sent|command/.test(name)
        ? '#4caf50'
        : 'rgba(255,255,255,0.25)';

/** Adaptive Cover Pro's own record of what it did and why: its diagnostics' event buffer. */
const EventBuffer: React.FC<{ targetId: string }> = ({ targetId }) => {
  const t = useT();
  const language = useLanguage();
  const callService = useCallService();
  const [diagnostics, setDiagnostics] = useState<{ raw: unknown; value: Diagnostics } | null>(null);
  const [filter, setFilter] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let alive = true;
    callService('adaptive_cover_pro', 'get_diagnostics', {}, { entity_id: targetId }, true)
      .then(result => {
        if (!alive) return;
        const entries = (result?.response as { entries?: Record<string, { diagnostics?: Diagnostics }> } | undefined)?.entries ?? {};
        const first = Object.values(entries)[0];
        setDiagnostics({ raw: result?.response, value: first?.diagnostics ?? {} });
      })
      .catch(() => alive && setDiagnostics({ raw: null, value: {} }));
    return () => {
      alive = false;
    };
  }, [callService, targetId]);

  const events = useMemo(() => [...(diagnostics?.value.event_timeline ?? [])].reverse(), [diagnostics]);
  if (!diagnostics)
    return (
      <StyledBuffer>
        <div className='meta'>{t('loading_short')}</div>
      </StyledBuffer>
    );
  const needle = filter.trim().toLowerCase();
  const shown = needle ? events.filter(event => JSON.stringify(event).toLowerCase().includes(needle)) : events;
  const time = (ts: unknown) => {
    const at = typeof ts === 'number' ? ts * (ts < 1e12 ? 1000 : 1) : Date.parse(String(ts));
    return Number.isFinite(at) ? new Date(at).toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' }) : '';
  };
  const copy = async () => {
    const text = JSON.stringify(diagnostics.raw, null, 2);
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Not on a page served over plain http: the old way.
      const area = document.createElement('textarea');
      area.value = text;
      document.body.append(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };
  const window_ = diagnostics.value.data_window;

  return (
    <StyledBuffer>
      <div className='meta'>
        <span>{t('acp_events_count', { shown: shown.length, all: events.length })}</span>
        {diagnostics.value.debug_config?.debug_event_buffer_size !== undefined && (
          <span>{t('acp_buffer_size', { size: diagnostics.value.debug_config.debug_event_buffer_size })}</span>
        )}
        {window_?.start && (
          <span>
            {time(window_.start)} – {time(window_.end)}
          </span>
        )}
        <button type='button' className='copy' onClick={() => void copy()}>
          {copied ? t('acp_copied') : t('acp_copy_diagnostics')}
        </button>
      </div>
      <input type='search' value={filter} placeholder={t('acp_filter_events')} onChange={event => setFilter(event.target.value)} />
      <StyledList>
        {shown.map((event, index) => {
          const { ts, event: name = '', ...details } = event;
          return (
            <div key={`${String(ts)}-${index}`} className='event' style={{ '--event-color': eventColor(name) } as React.CSSProperties}>
              <span>{time(ts)}</span>
              <span className='name'>{name}</span>
              <span className='details'>
                {Object.entries(details)
                  .map(([key, value]) => `${key}=${typeof value === 'object' ? JSON.stringify(value) : String(value)}`)
                  .join('\n')}
              </span>
            </div>
          );
        })}
      </StyledList>
    </StyledBuffer>
  );
};

/**
 * The details' foot, folded away until wanted, as Adaptive Cover Pro's
 * history card has it: the last day's activity from the logbook, and under
 * it the instance's own event buffer.
 */
const Activity: React.FC<{ coverId: string; entities: AcpEntities }> = ({ coverId, entities }) => {
  const t = useT();
  const ids = [coverId, entities.decision, entities.lastAction, entities.manual, entities.sunInFront, entities.control].filter(
    (id): id is string => Boolean(id)
  );
  return (
    <>
      <Accordion title={t('acp_activity')}>
        {() => <Logbook entityIds={ids} decisionId={entities.decision} controlId={entities.control} coverId={coverId} />}
      </Accordion>
      {entities.target && <Accordion title={t('acp_event_buffer')}>{() => <EventBuffer targetId={entities.target!} />}</Accordion>}
    </>
  );
};

export default memo(Activity);
