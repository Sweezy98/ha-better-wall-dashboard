import { memo } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../../themes/default.theme';
import Popup from '../../base/popup/Popup';
import { LevelColumn } from '../light/LightControls';
import CoverButtons from './CoverButtons';
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
`;

/** What a cover can be set to, for the popup to show while it is open. */
const CoverPanel: React.FC<{ entityId: string; stopOnlyMoving: boolean }> = ({ entityId, stopOnlyMoving }) => {
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
      <CoverButtons entityId={entityId} stopOnlyMoving={stopOnlyMoving} />
    </StyledPanel>
  );
};

interface CoverPopupProps {
  open: boolean;
  onClose: () => void;
  entityId: string;
  name: string;
  icon: string;
  /** The tile's option: stop only while the cover moves. */
  stopOnlyMoving?: boolean;
}

/**
 * A cover up close, as a light's popup has it: its position as one tall
 * column dragged to where it should be, its tilt beside it where it has
 * one, and up, stop and down.
 */
const CoverPopup: React.FC<CoverPopupProps> = ({ open, onClose, entityId, name, icon, stopOnlyMoving = false }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(entityId);
  const position = Number(entity?.attributes.current_position);
  const subtitle = !entity ? t('not_found') : Number.isFinite(position) ? `${position} %` : undefined;
  return (
    <Popup open={open} onClose={onClose} title={name} subtitle={subtitle} icon={icon} iconColor={theme.colors.cover} width={34}>
      <CoverPanel entityId={entityId} stopOnlyMoving={stopOnlyMoving} />
    </Popup>
  );
};

export default memo(CoverPopup);
