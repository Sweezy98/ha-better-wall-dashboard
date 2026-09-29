import { memo } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import { pressable } from '../../../themes/interaction';
import Icon from '../../base/icon/Icon';
import { useCallService, useEntity, useT } from '../../../hooks/useHa';
import { coverFeatures, coverView } from '../../../lib/cover';

/** Three pills in a row, each the height and glass of the switches beside them (Bubble). */
const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${u(0.6)};
  width: 100%;

  button {
    height: ${u(3.4)};
    border-radius: ${u(1.7)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${u(1.45)};
    background-color: ${({ theme }) => theme.bubble.background};
    ${({ theme }) => pressable(theme.bubble.hover, theme.bubble.pressed)}
  }

  button:disabled {
    opacity: 0.35;
  }
`;

/** Up, stop and down: the cover's own controls in its details. */
const CoverButtons: React.FC<{ entityId: string }> = ({ entityId }) => {
  const t = useT();
  const entity = useEntity(entityId);
  const callService = useCallService();
  const attributes = (entity?.attributes ?? {}) as Record<string, unknown>;
  const features = coverFeatures(attributes.supported_features as number | undefined);
  const view = coverView(entity?.state, attributes.current_position as number | undefined);
  const call = (service: string) => void callService('cover', service, undefined, { entity_id: entityId });
  return (
    <StyledButtons>
      <button
        type='button'
        aria-label={t('cover_up')}
        disabled={!entity || !features.open || !view.canOpen}
        onClick={() => call('open_cover')}
      >
        <Icon icon='mdi:arrow-up' />
      </button>
      <button type='button' aria-label={t('cover_stop')} disabled={!entity || !features.stop} onClick={() => call('stop_cover')}>
        <Icon icon='mdi:stop' />
      </button>
      <button
        type='button'
        aria-label={t('cover_down')}
        disabled={!entity || !features.close || !view.canClose}
        onClick={() => call('close_cover')}
      >
        <Icon icon='mdi:arrow-down' />
      </button>
    </StyledButtons>
  );
};

export default memo(CoverButtons);
