import { memo, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { TileProps } from '../registry';
import { StyledTile, tileButton } from './Tile.styled';
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
  ${tileButton}

  /* The head every card has: its icon in a circle, the name over the value. */
  .head {
    display: flex;
    align-items: center;
    gap: ${u(0.8)};
    min-width: 0;
    padding: ${u(0.8)} ${u(0.8)} 0;
  }

  .icon {
    flex: none;
    width: ${u(2.8)};
    height: ${u(2.8)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.4)};
    background: color-mix(in srgb, var(--graph-color) 18%, transparent);
    color: var(--graph-color);
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: ${u(0.3)};
    min-width: 0;
  }

  .name {
    font-size: ${u(1.05)};
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .value {
    font-size: ${u(0.95)};
    color: ${({ theme }) => theme.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
  const deviceClass = entity?.attributes.device_class as string | undefined;
  const icon =
    tile.icon ||
    (entity?.attributes.icon as string | undefined) ||
    (deviceClass === 'temperature' ? 'mdi:thermometer' : deviceClass === 'humidity' ? 'mdi:water-percent' : 'mdi:chart-line');
  return (
    <>
      <StyledSensor onClick={() => setOpen(true)} disabled={!tile.entity} style={{ '--graph-color': color } as React.CSSProperties}>
        <span className='head'>
          <span className='icon'>
            <Icon icon={icon} />
          </span>
          <span className='text'>
            <span className='name'>{name}</span>
            <span className='value'>
              {formatMeasurement(entity?.state, entity?.attributes.unit_of_measurement as string | undefined, language, precision)}
            </span>
          </span>
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
