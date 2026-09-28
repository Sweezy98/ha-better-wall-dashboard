import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import Popup from '../../base/popup/Popup';
import Icon from '../../base/icon/Icon';
import { LevelColumn } from '../light/LightControls';
import { useCallService, useEntity, useT } from '../../../hooks/useHa';
import { coverFeatures, coverView } from '../../../lib/cover';

const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${u(1.4)};

  .columns {
    display: flex;
    gap: ${u(1.6)};
  }

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${u(0.5)};
    font-size: ${u(0.9)};
    color: ${({ theme }) => theme.text.secondary};
  }

  .buttons {
    display: flex;
    gap: ${u(0.5)};
    padding: ${u(0.4)};
    border-radius: ${u(2.2)};
    background: ${({ theme }) => theme.bubble.background};
  }

  .buttons button {
    width: ${u(4.4)};
    height: ${u(3.4)};
    border-radius: ${u(1.7)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.45)};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  .buttons button:disabled {
    opacity: 0.35;
  }
`;

/** What a cover can be set to, for the popup to show while it is open. */
const CoverPanel: React.FC<{ entityId: string }> = ({ entityId }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(entityId);
  const callService = useCallService();
  if (!entity) return <p>{t('not_found')}</p>;
  const attributes = entity.attributes as Record<string, unknown>;
  const features = coverFeatures(attributes.supported_features as number | undefined);
  const view = coverView(entity.state, attributes.current_position as number | undefined);
  const tilt = Number(attributes.current_tilt_position);
  const call = (service: string, data?: Record<string, unknown>) => void callService('cover', service, data, { entity_id: entityId });
  return (
    <StyledPanel>
      {(features.position || features.tilt) && (
        <div className='columns'>
          {features.position && (
            <div className='column'>
              <LevelColumn
                label={t('cover_position')}
                reported={entity.last_updated}
                percent={view.position ?? 0}
                color={theme.colors.cover}
                min={0}
                onChange={position => call('set_cover_position', { position })}
              />
              {t('cover_position')}
            </div>
          )}
          {features.tilt && (
            <div className='column'>
              <LevelColumn
                label={t('cover_tilt')}
                reported={entity.last_updated}
                percent={Number.isFinite(tilt) ? tilt : 0}
                color={theme.colors.cover}
                min={0}
                onChange={tilt_position => call('set_cover_tilt_position', { tilt_position })}
              />
              {t('cover_tilt')}
            </div>
          )}
        </div>
      )}
      <div className='buttons'>
        <button type='button' aria-label={t('cover_up')} disabled={!features.open || !view.canOpen} onClick={() => call('open_cover')}>
          <Icon icon='mdi:arrow-up' />
        </button>
        <button type='button' aria-label={t('cover_stop')} disabled={!features.stop} onClick={() => call('stop_cover')}>
          <Icon icon='mdi:stop' />
        </button>
        <button type='button' aria-label={t('cover_down')} disabled={!features.close || !view.canClose} onClick={() => call('close_cover')}>
          <Icon icon='mdi:arrow-down' />
        </button>
      </div>
    </StyledPanel>
  );
};

interface CoverPopupProps {
  open: boolean;
  onClose: () => void;
  entityId: string;
  name: string;
  icon: string;
}

/**
 * A cover up close, as a light's popup has it: its position as one tall
 * column dragged to where it should be, its tilt beside it where it has
 * one, and up, stop and down.
 */
const CoverPopup: React.FC<CoverPopupProps> = ({ open, onClose, entityId, name, icon }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(entityId);
  const position = Number(entity?.attributes.current_position);
  const subtitle = !entity ? t('not_found') : Number.isFinite(position) ? `${position} %` : undefined;
  return (
    <Popup open={open} onClose={onClose} title={name} subtitle={subtitle} icon={icon} iconColor={theme.colors.cover} width={34}>
      <CoverPanel entityId={entityId} />
    </Popup>
  );
};

export default memo(CoverPopup);
