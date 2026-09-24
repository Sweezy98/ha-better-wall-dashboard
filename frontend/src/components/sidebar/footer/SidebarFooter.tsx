import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { SidebarConfig } from '../../../config/types';
import IconButton from '../../base/iconButton/IconButton';
import WeatherIcon from '../../base/weatherIcon/WeatherIcon';
import WeatherPopup from '../../popups/WeatherPopup';
import NotificationsPopup from '../../popups/NotificationsPopup';
import SettingsPopup from '../../popups/SettingsPopup';
import { useEntity, useIsNight, useLanguage, usePrecision, useT } from '../../../hooks/useHa';
import { useNotifications } from '../../../hooks/useNotifications';
import { formatMeasurement } from '../../../lib/format';
import { conditionLabel } from '../../../lib/weather';

const StyledFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${u(0.5)};
  padding-top: ${u(0.4)};
  margin: 0 ${u(-0.4)} ${u(-0.3)};
`;

const StyledWeather = styled.button`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-rows: auto auto;
  column-gap: ${u(1)};
  align-items: center;
  min-width: 0;
  padding: ${u(0.4)} ${u(0.7)} ${u(0.4)} ${u(0.4)};
  border-radius: ${u(1)};

  &:active {
    background: ${({ theme }) => theme.bubble.background};
  }

  > :first-child {
    grid-row: 1 / 3;
  }

  .temperature {
    font-size: ${u(1.7)};
    font-weight: 700;
    align-self: end;
    white-space: nowrap;
  }

  .condition {
    font-size: ${u(1)};
    align-self: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  gap: ${u(0.2)};
  flex-shrink: 0;
`;

const Weather: React.FC<{ config: SidebarConfig['weather'] }> = ({ config }) => {
  const weather = useEntity(config.entity || undefined);
  const outdoor = useEntity(config.temperature || undefined);
  const precision = usePrecision(config.temperature || undefined);
  const night = useIsNight();
  const language = useLanguage();
  const t = useT();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  if (!config.entity && !config.temperature) return <span />;

  // The house's own thermometer when there is one; the forecast's guess for
  // the grid square otherwise.
  const temperature = outdoor
    ? formatMeasurement(outdoor.state, outdoor.attributes.unit_of_measurement as string | undefined, language, precision)
    : weather
      ? formatMeasurement(String(weather.attributes.temperature), weather.attributes.temperature_unit as string | undefined, language)
      : '–';
  return (
    <>
      <StyledWeather type='button' onClick={() => setOpen(true)} disabled={!config.entity} aria-label={t('weather')}>
        <WeatherIcon condition={weather?.state} night={night} size={u(4.4)} />
        <span className='temperature'>{temperature}</span>
        <span className='condition'>{conditionLabel(weather?.state, language)}</span>
      </StyledWeather>
      {config.entity && <WeatherPopup open={open} onClose={close} entityId={config.entity} temperature={temperature} />}
    </>
  );
};

const SidebarFooter: React.FC<{ config: SidebarConfig }> = ({ config }) => {
  const t = useT();
  const { notifications, dismiss, dismissAll } = useNotifications(config.notifications.enabled, config.notifications.prefix);
  const [panel, setPanel] = useState<'notifications' | 'settings' | null>(null);
  const close = useCallback(() => setPanel(null), []);
  return (
    <StyledFooter>
      <Weather config={config.weather} />
      <StyledButtons>
        {config.notifications.enabled && (
          <IconButton icon='mdi:bell' label={t('notifications')} badge={notifications.length} onClick={() => setPanel('notifications')} />
        )}
        <IconButton icon='mdi:cog' label={t('settings')} onClick={() => setPanel('settings')} />
      </StyledButtons>
      <NotificationsPopup
        open={panel === 'notifications'}
        onClose={close}
        notifications={notifications}
        onDismiss={dismiss}
        onDismissAll={dismissAll}
      />
      <SettingsPopup open={panel === 'settings'} onClose={close} config={config} />
    </StyledFooter>
  );
};

export default memo(SidebarFooter);
