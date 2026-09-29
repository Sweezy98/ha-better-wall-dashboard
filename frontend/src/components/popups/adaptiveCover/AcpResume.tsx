import { memo } from 'react';
import Icon from '../../base/icon/Icon';
import { useCallService, useT } from '../../../hooks/useHa';
import type { AcpEntities } from '../../../lib/adaptiveCover';
import { useSteering } from './useSteering';

/**
 * Back to automatic control, while a hand holds the cover: a press on
 * Adaptive Cover Pro's own reset button, as its card's badge does.
 */
const AcpResume: React.FC<{ entities: AcpEntities }> = ({ entities }) => {
  const t = useT();
  const callService = useCallService();
  const { manual } = useSteering(entities);
  if (!manual || !entities.resetManual) return null;
  return (
    <button
      type='button'
      className='round'
      data-tip={t('acp_reset_manual')}
      aria-label={t('acp_reset_manual')}
      onClick={() => void callService('button', 'press', undefined, { entity_id: entities.resetManual! })}
    >
      <Icon icon='mdi:window-shutter-auto' />
    </button>
  );
};

export default memo(AcpResume);
