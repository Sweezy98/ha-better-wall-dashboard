import { memo } from 'react';
import Chip from '../../base/chip/Chip';
import { useCallService, useLanguage, useT } from '../../../hooks/useHa';
import { ACP_BADGES, type AcpEntities } from '../../../lib/adaptiveCover';
import { BADGE_LABELS } from './acpLabels';
import { useSteering } from './useSteering';

/** The badges: the plain Auto, what steers the cover, and a hand's hold with the way back. */
const AcpBadges: React.FC<{ entities: AcpEntities }> = ({ entities }) => {
  const t = useT();
  const language = useLanguage();
  const callService = useCallService();
  const steering = useSteering(entities);
  const { badge } = steering;
  const until = steering.manualUntil?.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' });
  return (
    <>
      {steering.auto && <Chip icon={ACP_BADGES.auto.icon} color={ACP_BADGES.auto.color} label={t('acp_badge_auto')} />}
      {badge && (
        <Chip
          icon={ACP_BADGES[badge].icon}
          color={ACP_BADGES[badge].color}
          label={badge === 'manual' && until ? until : t(BADGE_LABELS[badge])}
          title={badge === 'manual' && entities.resetManual ? t('acp_reset_manual') : t(BADGE_LABELS[badge])}
          // Held by hand: a press gives the cover back, as the ACP card's badge does.
          action={badge === 'manual' && entities.resetManual ? 'mdi:restore' : undefined}
          onClick={
            badge === 'manual' && entities.resetManual
              ? () => void callService('button', 'press', undefined, { entity_id: entities.resetManual! })
              : undefined
          }
        />
      )}
    </>
  );
};

export default memo(AcpBadges);
