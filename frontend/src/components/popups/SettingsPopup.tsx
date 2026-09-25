import { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { u } from '../../themes/default.theme';
import type { NamedEntity, SidebarConfig } from '../../config/types';
import Popup from '../base/popup/Popup';
import GraphCard from '../base/graphCard/GraphCard';
import Bubble from '../base/bubble/Bubble';
import HistoryPopup from './HistoryPopup';
import { useConnection, useEntity, useLanguage, usePrecision, useT } from '../../hooks/useHa';
import { useDashboardContext } from '../../config/DashboardProvider';
import { formatMeasurement } from '../../lib/format';
import { loadedFingerprint, reloadDashboard } from '../../lib/reload';
import { getEntryUrl } from '../../panel/entry';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${u(0.6)};

  h3 {
    margin: ${u(0.4)} 0 0;
    font-size: ${u(1.14)};
    font-weight: 600;
  }
`;

const StyledStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${u(0.6)};
`;

const StyledNote = styled.p`
  font-size: ${u(0.96)};
  color: ${({ theme }) => theme.text.secondary};
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: ${u(0.6)};
  border-radius: ${u(1)};
  border: ${({ theme }) => theme.card.border};
  background: ${({ theme }) => theme.bubble.background};
`;

/**
 * Go to the editor's own panel, the way Home Assistant navigates: push the
 * path and announce it, and its router swaps the panel.
 */
function openEditor(): void {
  window.history.pushState(null, '', '/better-wall-dashboard-editor');
  window.dispatchEvent(new CustomEvent('location-changed', { detail: { replace: false } }));
}

const COLORS = ['temperature', 'humidity', 'warm', 'accent'] as const;

const Stat: React.FC<{ stat: NamedEntity; color: string }> = ({ stat, color }) => {
  const entity = useEntity(stat.entity);
  const precision = usePrecision(stat.entity);
  const language = useLanguage();
  const [open, setOpen] = useState(false);
  const name = stat.name || (entity?.attributes.friendly_name as string) || stat.entity;
  const icon = stat.icon || (entity?.attributes.icon as string) || 'mdi:chart-line';
  const state = formatMeasurement(entity?.state, entity?.attributes.unit_of_measurement as string | undefined, language, precision);
  return (
    <>
      <GraphCard entityId={stat.entity} name={name} state={state} icon={icon} color={color} hours={24} onClick={() => setOpen(true)} />
      <HistoryPopup open={open} onClose={() => setOpen(false)} entityId={stat.entity} name={name} icon={icon} color={color} />
    </>
  );
};

interface Version {
  app: string;
  version: string;
}

const SettingsContent: React.FC<{ config: SidebarConfig }> = ({ config }) => {
  const t = useT();
  const theme = useTheme();
  const connection = useConnection();
  const { view, preview, previewing } = useDashboardContext();
  const [version, setVersion] = useState<Version | null>(null);
  const [missing, setMissing] = useState(false);
  const loaded = loadedFingerprint();

  useEffect(() => {
    connection
      ?.sendMessagePromise<Version>({ type: 'better_wall_dashboard/version' })
      .then(setVersion)
      .catch(() => undefined);
  }, [connection]);

  const outdated = Boolean(loaded && version && version.app !== loaded);
  const stats = config.system.filter(stat => stat.entity);

  const reload = async () => {
    // The newest entry, by the fingerprint the integration reports -- the
    // URL the panel will be registered under after the reload.
    const entry = getEntryUrl();
    let target: string | null = null;
    if (entry && loaded) {
      const url = new URL(entry);
      if (version) url.searchParams.set('v', version.app);
      target = url.toString();
    }
    const result = await reloadDashboard(target);
    setMissing(result === 'missing');
  };

  return (
    <>
      {stats.length > 0 && (
        <StyledSection>
          <h3>{t('system')}</h3>
          <StyledStats>
            {stats.map((stat, index) => (
              <Stat key={stat.id} stat={stat} color={theme.colors[COLORS[index % COLORS.length]]} />
            ))}
          </StyledStats>
        </StyledSection>
      )}

      <StyledSection>
        <h3>{t('settings')}</h3>
        {outdated && <StyledNote>{t('update_available')}</StyledNote>}
        <Bubble
          name={t('reload')}
          state={missing ? t('not_found') : t('reload_hint')}
          icon='mdi:refresh'
          iconColor={outdated ? theme.colors.warm : undefined}
          onClick={reload}
        />
        {view?.is_admin && (
          <>
            <Bubble name={t('edit_dashboard')} state={t('edit_elsewhere')} icon='mdi:view-dashboard-edit' onClick={openEditor} />
            {view.dashboards.length > 1 && (
              <label>
                <StyledNote>{t('dashboard')}</StyledNote>
                <StyledSelect value={previewing ?? ''} onChange={event => preview(event.target.value || null)}>
                  <option value=''>—</option>
                  {view.dashboards.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </StyledSelect>
              </label>
            )}
          </>
        )}
        {version && (
          <StyledNote>
            {t('version')} {version.version}
            {loaded ? ` · ${loaded}` : ''}
          </StyledNote>
        )}
      </StyledSection>
    </>
  );
};

const SettingsPopup: React.FC<{ open: boolean; onClose: () => void; config: SidebarConfig }> = ({ open, onClose, config }) => {
  const t = useT();
  return (
    <Popup open={open} onClose={onClose} title={t('settings')} icon='mdi:cog' width={56}>
      <SettingsContent config={config} />
    </Popup>
  );
};

export default SettingsPopup;
