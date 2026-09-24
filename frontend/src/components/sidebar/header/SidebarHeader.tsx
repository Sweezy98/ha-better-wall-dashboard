import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { SidebarConfig } from '../../../config/types';
import Clock from '../../base/clock/Clock';
import Icon from '../../base/icon/Icon';
import IconButton from '../../base/iconButton/IconButton';
import WifiPopup from '../../popups/WifiPopup';
import { useEntity, useT } from '../../../hooks/useHa';
import { useLongPress } from '../../../hooks/useLongPress';
import { openHomeAssistantSidebar } from '../../../panel/kiosk';
import { signalIcon, signalLevel } from '../../../lib/wifi';
import { toNumber } from '../../../lib/format';

const StyledHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${u(0.5)};
  padding: ${u(0.3)} 0 ${u(0.5)} ${u(0.3)};
`;

const StyledStatus = styled.div`
  display: flex;
  align-items: center;
  gap: ${u(0.1)};
  margin-top: ${u(0.6)};
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const StyledStatusIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${u(2.6)};
  height: ${u(3)};
  font-size: ${u(1.5)};
`;

/** Whether a mode helper counts as "on" -- an input_boolean, a switch, a template binary sensor. */
const isOn = (state: string | undefined) => state === 'on' || state === 'true';

const ModeIcon: React.FC<{ entityId: string; icon: string; label: string }> = ({ entityId, icon, label }) => {
  const entity = useEntity(entityId);
  // Shown only while the mode is on: a row of icons that are always there
  // stops being read at all.
  if (!isOn(entity?.state)) return null;
  return (
    <StyledStatusIcon title={label} aria-label={label}>
      <Icon icon={icon} />
    </StyledStatusIcon>
  );
};

const WifiButton: React.FC<{ config: SidebarConfig }> = ({ config }) => {
  const t = useT();
  const [open, setOpen] = useState(false);
  const signal = useEntity(config.status.wifi_signal || undefined);
  const configured = Boolean(config.status.wifi_signal);
  const icon = signalIcon(signalLevel(toNumber(signal?.state)), configured);
  const close = useCallback(() => setOpen(false), []);
  return (
    <>
      <IconButton icon={icon} label={t('guest_wifi')} onClick={() => setOpen(true)} />
      <WifiPopup open={open} onClose={close} config={config} />
    </>
  );
};

const SidebarHeader: React.FC<{ config: SidebarConfig }> = ({ config }) => {
  const t = useT();
  const longPress = useLongPress(openHomeAssistantSidebar);
  return (
    <StyledHeader>
      <div {...longPress}>
        <Clock />
      </div>
      <StyledStatus>
        {config.status.absence && <ModeIcon entityId={config.status.absence} icon='mdi:account-off' label={t('absence_mode')} />}
        {config.status.guest && <ModeIcon entityId={config.status.guest} icon='mdi:account-multiple' label={t('guest_mode')} />}
        {config.status.night && <ModeIcon entityId={config.status.night} icon='mdi:weather-night' label={t('night_mode')} />}
        <WifiButton config={config} />
      </StyledStatus>
    </StyledHeader>
  );
};

export default memo(SidebarHeader);
