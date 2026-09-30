import { memo } from 'react';
import Icon from '../../base/icon/Icon';
import { useLanguage, useT } from '../../../hooks/useHa';
import { ACP_BADGES, type AcpEntities } from '../../../lib/adaptiveCover';
import { BADGE_LABELS } from './acpLabels';
import { useSteering } from './useSteering';

/**
 * What steers the cover, as small grey icons after where it stands -- the
 * way the Better Lighting card shows how a room came to be lit. Named in
 * their tooltips; the popup has them spelled out.
 */
const AcpSigns: React.FC<{ entities: AcpEntities }> = ({ entities }) => {
  const t = useT();
  const language = useLanguage();
  const steering = useSteering(entities);
  const until = steering.manualUntil?.toLocaleTimeString(language, { hour: '2-digit', minute: '2-digit' });
  const signs = [...(steering.auto ? (['auto'] as const) : []), ...(steering.badge ? [steering.badge] : [])];
  return (
    <>
      {signs.map(kind => {
        const label = kind === 'manual' && until ? `${t(BADGE_LABELS.manual)} · ${until}` : t(BADGE_LABELS[kind]);
        return (
          <span key={kind} className='sign' data-tip={label} aria-label={label}>
            <Icon icon={ACP_BADGES[kind].icon} />
          </span>
        );
      })}
      {steering.sunAway && (
        <span className='sign' data-tip={t('acp_sun_away')} aria-label={t('acp_sun_away')}>
          <Icon icon='mdi:weather-sunny-off' />
        </span>
      )}
    </>
  );
};

export default memo(AcpSigns);
