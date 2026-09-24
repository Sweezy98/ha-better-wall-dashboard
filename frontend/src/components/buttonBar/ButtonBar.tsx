import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { tileButton, tileSurface } from '../library/tiles/Tile.styled';
import { u } from '../../themes/default.theme';
import type { BarButton } from '../../config/types';
import Icon from '../base/icon/Icon';
import Popup from '../base/popup/Popup';
import TileGrid from '../library/TileGrid';
import { useT } from '../../hooks/useHa';

const StyledButtonBarContainer = styled.nav<{ $count: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $count }) => $count}, minmax(0, 1fr));
  column-gap: ${u(0.7)};
  height: ${u(3.2)};
`;

/** The reference config's bottom buttons: a 20 pt icon, the name centred. */
const StyledBarButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 0;
  padding: 0 ${u(1)} 0 ${u(3.4)};
  ${tileSurface}
  ${tileButton}
  font-size: ${u(1.15)};

  .icon {
    position: absolute;
    left: ${u(1.4)};
    font-size: ${u(1.8)};
  }

  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledEmpty = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
  padding: ${u(2)} 0;
`;

/** The popup grid: as many rows as the tiles need, each cell square-ish. */
const StyledPopupGrid = styled.div<{ $rows: number }>`
  height: ${({ $rows }) => u($rows * 8)};
  max-height: 60dvh;
`;

const ButtonPopupContent: React.FC<{ button: BarButton }> = ({ button }) => {
  const t = useT();
  if (!button.tiles.length) return <StyledEmpty>{t('empty_popup')}</StyledEmpty>;
  const cells = button.tiles.reduce((sum, tile) => sum + tile.w * tile.h, 0);
  const rows = Math.max(1, Math.ceil(cells / button.columns));
  return (
    <StyledPopupGrid $rows={rows}>
      <TileGrid tiles={button.tiles} columns={button.columns} rows={rows} square={false} />
    </StyledPopupGrid>
  );
};

const ButtonBar: React.FC<{ buttons: BarButton[] }> = ({ buttons }) => {
  const [open, setOpen] = useState<string | null>(null);
  const close = useCallback(() => setOpen(null), []);
  if (!buttons.length) return null;
  return (
    <StyledButtonBarContainer $count={buttons.length}>
      {buttons.map(button => (
        <StyledBarButton key={button.id} type='button' onClick={() => setOpen(button.id)}>
          {button.icon && <Icon className='icon' icon={button.icon} />}
          <span className='name'>{button.name}</span>
        </StyledBarButton>
      ))}
      {buttons.map(button => (
        <Popup
          key={button.id}
          open={open === button.id}
          onClose={close}
          title={button.name}
          icon={button.icon}
          width={Math.max(50, button.columns * 14)}
        >
          <ButtonPopupContent button={button} />
        </Popup>
      ))}
    </StyledButtonBarContainer>
  );
};

export default memo(ButtonBar);
