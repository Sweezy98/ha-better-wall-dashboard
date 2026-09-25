import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import Popup from '../base/popup/Popup';
import MiniGraph from '../base/miniGraph/MiniGraph';
import { useEntity, useLanguage, usePrecision, useT } from '../../hooks/useHa';
import { useHistory } from '../../hooks/useHistory';
import { useTick } from '../../hooks/useNow';
import { extrema } from '../../lib/graph';
import { formatMeasurement, formatRelative, formatTime } from '../../lib/format';

const RANGES = [6, 24, 72, 168] as const;

const StyledState = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${u(1)};

  strong {
    font-size: ${u(3.12)};
    font-weight: 400;
  }
`;

const StyledRanges = styled.div`
  display: flex;
  gap: ${u(0.3)};

  button {
    padding: ${u(0.3)} ${u(0.7)};
    border-radius: ${u(1)};
    font-size: ${u(0.96)};
    color: ${({ theme }) => theme.text.secondary};
  }

  button[aria-pressed='true'] {
    background: ${({ theme }) => theme.bubble.header};
    color: ${({ theme }) => theme.text.primary};
  }
`;

/** On the popup's own glass: no card of its own around it, but its corners. */
const StyledGraph = styled.div`
  height: ${u(11)};
  border-radius: ${u(1.2)};
  overflow: hidden;
`;

const StyledExtrema = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${u(0.6)};

  div {
    background: ${({ theme }) => theme.bubble.background};
    border-radius: ${u(1)};
    padding: ${u(0.6)} ${u(0.8)};
    display: flex;
    flex-direction: column;
    gap: ${u(0.15)};
  }

  span {
    font-size: ${u(0.9)};
    color: ${({ theme }) => theme.text.secondary};
  }

  strong {
    font-size: ${u(1.26)};
    font-weight: 600;
  }
`;

interface HistoryPopupProps {
  open: boolean;
  onClose: () => void;
  entityId: string;
  name: string;
  icon: string;
  color: string;
}

/**
 * A reading's history in detail, drawn as the sidebar draws it.
 *
 * The reference config's popup: mini-graph-card at one point per hour, a
 * three-unit line, labels, points and extrema -- the same graph as the
 * sidebar's, only bigger and with its numbers shown.
 */
const HistoryPopup: React.FC<HistoryPopupProps> = ({ open, onClose, entityId, name, icon, color }) => {
  const entity = useEntity(entityId);
  const language = useLanguage();
  const subtitle = entity ? formatRelative(new Date(entity.last_changed), language) : undefined;
  return (
    <Popup open={open} onClose={onClose} title={name} subtitle={subtitle} icon={icon} iconColor={color} width={58}>
      <HistoryContent entityId={entityId} color={color} />
    </Popup>
  );
};

const HistoryContent: React.FC<{ entityId: string; color: string }> = ({ entityId, color }) => {
  const [hours, setHours] = useState<number>(24);
  const entity = useEntity(entityId);
  const precision = usePrecision(entityId);
  const language = useLanguage();
  const t = useT();
  const samples = useHistory(entityId, hours);
  const now = useTick(60_000);
  const unit = entity?.attributes.unit_of_measurement as string | undefined;
  const format = (value: number) => formatMeasurement(String(value), unit, language, precision);
  const range = useMemo(() => extrema(samples), [samples]);
  const mean = useMemo(() => {
    // Time-weighted: a reading that held for six hours counts for six hours,
    // not for one sample.
    if (samples.length < 2) return samples[0]?.v;
    const start = now - hours * 3_600_000;
    let total = 0;
    let weight = 0;
    samples.forEach((sample, index) => {
      const from = Math.max(sample.t, start);
      const to = index + 1 < samples.length ? samples[index + 1].t : now;
      if (to > from) {
        total += sample.v * (to - from);
        weight += to - from;
      }
    });
    return weight ? total / weight : undefined;
  }, [samples, hours, now]);

  const when = (time: number) => {
    const date = new Date(time);
    const sameDay = new Date().toDateString() === date.toDateString();
    return sameDay
      ? formatTime(date, language)
      : `${date.toLocaleDateString(language, { weekday: 'short' })} ${formatTime(date, language)}`;
  };

  return (
    <>
      <StyledState>
        <strong>{formatMeasurement(entity?.state, unit, language, precision)}</strong>
        <StyledRanges role='group' aria-label={t('history')}>
          {RANGES.map(value => (
            <button key={value} type='button' aria-pressed={value === hours} onClick={() => setHours(value)}>
              {value < 48 ? `${value} h` : `${value / 24} d`}
            </button>
          ))}
        </StyledRanges>
      </StyledState>
      <StyledGraph>
        <MiniGraph
          samples={samples}
          hours={hours}
          pointsPerHour={hours <= 24 ? 1 : 24 / hours}
          lineWidth={3}
          color={color}
          showPoints
          labels={format}
          tooltip={point => `${format(point.v)} · ${when(point.t)}`}
        />
      </StyledGraph>
      {range && (
        <StyledExtrema>
          <div>
            <span>
              {t('lowest')} · {when(range.min.t)}
            </span>
            <strong>{format(range.min.v)}</strong>
          </div>
          <div>
            <span>{t('average')}</span>
            <strong>{mean !== undefined ? format(mean) : '–'}</strong>
          </div>
          <div>
            <span>
              {t('highest')} · {when(range.max.t)}
            </span>
            <strong>{format(range.max.v)}</strong>
          </div>
        </StyledExtrema>
      )}
    </>
  );
};

export default HistoryPopup;
