import { useHass } from '@hakit/core';
import { useShallow } from 'zustand/react/shallow';
import styled, { useTheme } from 'styled-components';
import { u } from '../../themes/default.theme';
import Popup from '../base/popup/Popup';
import Bubble from '../base/bubble/Bubble';
import { useEntity, useLanguage, useT } from '../../hooks/useHa';
import { batteryIcon, byUrgency, findBatteries, readBattery } from '../../lib/batteries';
import { formatNumber } from '../../lib/format';
import type { BatteriesConfig } from '../../config/types';

/** The openings popup's list, two to a row. */
const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${u(0.6)};
`;

const StyledNone = styled.p`
  margin: 0;
  padding: ${u(1)} 0;
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
`;

const Battery: React.FC<{ entityId: string; threshold: number }> = ({ entityId, threshold }) => {
  const t = useT();
  const theme = useTheme();
  const language = useLanguage();
  const entity = useEntity(entityId);
  const reading = readBattery(entityId, entity, threshold);
  const state = reading.unknown
    ? t('unavailable')
    : reading.level !== null
      ? `${formatNumber(reading.level, language, 0)} %`
      : reading.critical
        ? t('battery_low')
        : t('battery_fine');
  return (
    <Bubble
      name={(entity?.attributes.friendly_name as string | undefined) ?? entityId}
      state={state}
      icon={batteryIcon(reading)}
      iconColor={reading.critical ? theme.colors.alert : undefined}
      active={reading.critical}
    />
  );
};

const BatteriesList: React.FC<{ config: BatteriesConfig }> = ({ config }) => {
  const t = useT();
  const { threshold, hidden, only_critical: onlyCritical } = config;
  // Which batteries there are and their states, compared shallowly.
  const ids = useHass(useShallow(state => findBatteries(state.entities, hidden)));
  const readings = useHass(useShallow(state => ids.map(id => state.entities[id]?.state)));
  const listed = ids
    .map((id, index) => ({ id, reading: readBattery(id, { state: readings[index] ?? 'unknown', attributes: {} }, threshold) }))
    .filter(item => !onlyCritical || item.reading.critical)
    .sort((a, b) => byUrgency(a.reading, b.reading));
  if (!listed.length) return <StyledNone>{onlyCritical ? t('batteries_none_critical') : t('batteries_none')}</StyledNone>;
  return (
    <StyledList>
      {listed.map(item => (
        <Battery key={item.id} entityId={item.id} threshold={threshold} />
      ))}
    </StyledList>
  );
};

/** Every battery, the ones running out first -- or, set so, only those. */
const BatteriesPopup: React.FC<{ open: boolean; onClose: () => void; config: BatteriesConfig }> = ({ open, onClose, config }) => {
  const t = useT();
  return (
    <Popup open={open} onClose={onClose} title={t('batteries')} icon='mdi:battery-high' width={58}>
      <BatteriesList config={config} />
    </Popup>
  );
};

export default BatteriesPopup;
