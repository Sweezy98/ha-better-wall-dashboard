import { memo, useCallback, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { SidebarConfig } from '../../../config/types';
import GraphCard from '../../base/graphCard/GraphCard';
import HistoryPopup from '../../popups/HistoryPopup';
import { useEntity, useLanguage, usePrecision, useT } from '../../../hooks/useHa';
import { formatMeasurement } from '../../../lib/format';

const StyledClimate = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: ${u(0.6)};
`;

interface ReadingProps {
  entityId: string;
  name: string;
  icon: string;
  color: string;
  hours: number;
}

const Reading: React.FC<ReadingProps> = ({ entityId, name, icon, color, hours }) => {
  const entity = useEntity(entityId);
  const precision = usePrecision(entityId);
  const language = useLanguage();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const state = formatMeasurement(entity?.state, entity?.attributes.unit_of_measurement as string | undefined, language, precision);
  return (
    <>
      <GraphCard entityId={entityId} name={name} state={state} icon={icon} color={color} hours={hours} onClick={() => setOpen(true)} />
      <HistoryPopup open={open} onClose={close} entityId={entityId} name={name} icon={icon} color={color} />
    </>
  );
};

/** The room this tablet hangs in: its temperature and humidity, with a day of each. */
const RoomClimate: React.FC<{ config: SidebarConfig['climate'] }> = ({ config }) => {
  const t = useT();
  const theme = useTheme();
  if (!config.temperature && !config.humidity) return null;
  return (
    <StyledClimate>
      {config.temperature && (
        <Reading
          entityId={config.temperature}
          name={t('temperature')}
          icon='mdi:thermometer'
          color={theme.colors.temperature}
          hours={config.hours}
        />
      )}
      {config.humidity && (
        <Reading entityId={config.humidity} name={t('humidity')} icon='mdi:water' color={theme.colors.humidity} hours={config.hours} />
      )}
    </StyledClimate>
  );
};

export default memo(RoomClimate);
