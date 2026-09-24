import { memo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { TileProps } from '../registry';
import { StyledTile } from './Tile.styled';
import Icon from '../../base/icon/Icon';
import MiniGraph from '../../base/miniGraph/MiniGraph';
import HistoryPopup from '../../popups/HistoryPopup';
import { useEntity, useLanguage, usePrecision } from '../../../hooks/useHa';
import { useHistory } from '../../../hooks/useHistory';
import { formatMeasurement } from '../../../lib/format';

const StyledSensor = styled(StyledTile).attrs({ as: 'button', type: 'button' })`
  display: flex;
  flex-direction: column;
  text-align: left;

  .head {
    display: flex;
    align-items: center;
    gap: ${u(0.5)};
    padding: ${u(0.7)} ${u(0.8)} 0;
    font-size: ${u(0.85)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
    overflow: hidden;
  }

  .value {
    padding: ${u(0.1)} ${u(0.8)};
    font-size: ${u(1.5)};
    font-weight: 500;
  }

  .graph {
    flex: 1;
    min-height: ${u(1.5)};
    pointer-events: none;
  }
`;

/**
 * A reading with a day of history behind it. `options.color` sets the line;
 * `options.hours` the window.
 */
const SensorTile: React.FC<TileProps> = ({ tile }) => {
  const entity = useEntity(tile.entity || undefined);
  const precision = usePrecision(tile.entity || undefined);
  const language = useLanguage();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const hours = typeof tile.options.hours === 'number' ? tile.options.hours : 24;
  const color = typeof tile.options.color === 'string' ? tile.options.color : theme.colors.temperature;
  const samples = useHistory(tile.entity || undefined, hours);
  const name = tile.name || (entity?.attributes.friendly_name as string) || tile.entity;
  const icon = tile.icon || (entity?.attributes.icon as string | undefined) || 'mdi:chart-line';
  return (
    <>
      <StyledSensor onClick={() => setOpen(true)} disabled={!tile.entity}>
        <span className='head'>
          <Icon icon={icon} />
          {name}
        </span>
        <span className='value'>
          {formatMeasurement(entity?.state, entity?.attributes.unit_of_measurement as string | undefined, language, precision)}
        </span>
        <span className='graph'>
          <MiniGraph samples={samples} hours={hours} color={color} />
        </span>
      </StyledSensor>
      {tile.entity && (
        <HistoryPopup open={open} onClose={() => setOpen(false)} entityId={tile.entity} name={name} icon={icon} color={color} />
      )}
    </>
  );
};

export default memo(SensorTile);
