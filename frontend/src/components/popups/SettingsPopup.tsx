import { useEffect, useState } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import { u } from '../../themes/default.theme';
import type { NamedEntity, SidebarConfig, SystemButton } from '../../config/types';
import Popup from '../base/popup/Popup';
import GraphCard from '../base/graphCard/GraphCard';
import Bubble from '../base/bubble/Bubble';
import HistoryPopup from './HistoryPopup';
import { domainIcon, useCallService, useEntity, useLanguage, usePrecision, useT } from '../../hooks/useHa';
import { runService } from '../../lib/actions';
import { kioskActive, toggleKioskPreview } from '../../panel/kiosk';
import { useVersion } from '../../hooks/useVersion';
import { useModeState } from '../../panel/mode';
import { useDashboardContext } from '../../config/DashboardProvider';
import { formatMeasurement, missingState } from '../../lib/format';
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

const breathe = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
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

/**
 * On the reload row while a newer build is installed than the one running:
 * where the eye already is, in the accent colour, with a dot that breathes.
 */
const StyledUpdate = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${u(0.4)};
  padding: ${u(0.2)} ${u(0.7)};
  border-radius: ${u(1)};
  background: color-mix(in srgb, ${({ theme }) => theme.colors.accent} 20%, transparent);
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${u(0.85)};
  font-weight: 600;

  &::before {
    content: '';
    width: ${u(0.5)};
    height: ${u(0.5)};
    border-radius: 50%;
    background: currentColor;
    animation: ${breathe} 1.6s ease-in-out infinite;
  }
`;

/** Set apart from the buttons above: what this is at the left, its version at the right. */
const StyledVersion = styled(StyledNote)`
  display: flex;
  justify-content: space-between;
  gap: ${u(1)};
  margin-top: ${u(0.8)};
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

/** The popup's buttons, two to a row, as the sidebar's quick actions. */
const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${u(15)}, 1fr));
  gap: ${u(0.6)};
`;

/** How long a button that asks for a second tap waits for it. */
const CONFIRM_MS = 4000;

/**
 * One of the popup's buttons: pressed at once, or -- for a restart, say --
 * only on a second tap within a few seconds, so a brush against the tablet
 * does not restart the house.
 */
const SystemButtonBubble: React.FC<{ button: SystemButton }> = ({ button }) => {
  const t = useT();
  const theme = useTheme();
  const entity = useEntity(button.entity);
  const callService = useCallService();
  const [asking, setAsking] = useState(false);
  useEffect(() => {
    if (!asking) return;
    const timer = window.setTimeout(() => setAsking(false), CONFIRM_MS);
    return () => window.clearTimeout(timer);
  }, [asking]);
  // A switch says whether it is on, and may name itself by it.
  const switched = Boolean(entity) && ['on', 'off'].includes(entity!.state);
  const on = entity?.state === 'on';
  const own = button.name || (entity?.attributes.friendly_name as string | undefined) || button.entity;
  const name = (switched && (on ? button.on_name : button.off_name)) || own;
  return (
    <Bubble
      name={name}
      state={
        asking
          ? t('system_button_confirm')
          : !entity
            ? t('not_found')
            : missingState(entity.state)
              ? t(missingState(entity.state)!)
              : switched
                ? on
                  ? t('on')
                  : t('off')
                : undefined
      }
      icon={button.icon || (entity?.attributes.icon as string | undefined) || domainIcon(button.entity)}
      iconColor={asking ? theme.colors.warm : on ? theme.colors.accent : undefined}
      active={!switched || on}
      lit={asking || on}
      onClick={() => {
        if (!entity) return;
        if (button.confirm && !asking) {
          setAsking(true);
          return;
        }
        setAsking(false);
        const [domain, service] = runService(button.entity);
        void callService(domain, service, undefined, { entity_id: button.entity });
      }}
    />
  );
};

/**
 * For an admin looking at the dashboard on a PC: Home Assistant's sidebar
 * hidden or shown in this tab only -- as kiosk mode would, no setting
 * stored -- and the browser's full screen.
 */
const PreviewToggles: React.FC<{ embedded: boolean }> = ({ embedded }) => {
  const t = useT();
  const [kiosk, setKiosk] = useState(kioskActive);
  const [full, setFull] = useState(() => Boolean(document.fullscreenElement));
  useEffect(() => {
    const update = () => setFull(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', update);
    return () => document.removeEventListener('fullscreenchange', update);
  }, []);
  return (
    <>
      {embedded && (
        <Bubble
          name={t('kiosk_preview')}
          state={kiosk ? t('kiosk_preview_hint_hidden') : t('kiosk_preview_hint_shown')}
          icon={kiosk ? 'mdi:dock-left' : 'mdi:page-layout-sidebar-left'}
          onClick={() => setKiosk(toggleKioskPreview())}
        />
      )}
      {document.fullscreenEnabled && (
        <Bubble
          name={t('fullscreen')}
          state={full ? t('fullscreen_on') : t('fullscreen_off')}
          icon={full ? 'mdi:fullscreen-exit' : 'mdi:fullscreen'}
          onClick={() => void (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen())}
        />
      )}
    </>
  );
};

const SettingsContent: React.FC<{ config: SidebarConfig }> = ({ config }) => {
  const t = useT();
  const theme = useTheme();
  const { view, preview, previewing } = useDashboardContext();
  const { embedded } = useModeState();
  const [missing, setMissing] = useState(false);
  const loaded = loadedFingerprint();

  const { version, outdated } = useVersion();
  const stats = config.system.filter(stat => stat.entity);
  const buttons = (config.system_buttons ?? []).filter(button => button.entity);

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

      {buttons.length > 0 && (
        <StyledSection>
          <h3>{t('system_buttons')}</h3>
          <StyledButtons>
            {buttons.map(button => (
              <SystemButtonBubble key={button.id} button={button} />
            ))}
          </StyledButtons>
        </StyledSection>
      )}

      <StyledSection>
        <h3>{t('settings')}</h3>
        <Bubble
          name={t('reload')}
          state={missing ? t('not_found') : outdated ? t('update_available_tap') : t('reload_hint')}
          icon='mdi:refresh'
          trailing={outdated ? <StyledUpdate>{t('update')}</StyledUpdate> : undefined}
          onClick={reload}
        />
        {view?.is_admin && (
          <>
            {/* Home Assistant's own: on the dev server there is no editor panel to open, nor a sidebar to hide. */}
            {embedded && (
              <Bubble name={t('edit_dashboard')} state={t('edit_elsewhere')} icon='mdi:view-dashboard-edit' onClick={openEditor} />
            )}
            <PreviewToggles embedded={embedded} />
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
          <StyledVersion>
            <span>Better Wall Dashboard</span>
            <span>
              {t('version')} {version.version}
              {loaded ? ` · ${loaded}` : ''}
            </span>
          </StyledVersion>
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
