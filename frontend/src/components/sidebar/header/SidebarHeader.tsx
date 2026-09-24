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
  /* No gap: the icons' own boxes already keep them clear of the clock. */
  padding: 0 0 ${u(0.5)} ${u(0.3)};
`;

/**
 * Top right, in as few rows as fit: one line when there is room beside the
 * clock, wrapping only when there is not (four icons on a 10-inch tablet
 * make two rows of two). Filled from the right, so the Wi-Fi button holds the
 * corner; every cell is one button's size, so each row shares a centre line.
 */
const StyledStatus = styled.div`
  flex: 1 1 0;
  /* At least two to a row before it wraps. */
  min-width: ${u(6)};
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: ${u(-0.3)} ${u(-0.6)} 0 0;

  > :not(dialog) {
    width: ${u(3)};
    height: ${u(3)};
    flex: none;
  }
`;

/** The same box as the Wi-Fi button beside it, so their glyphs line up. */
const StyledStatusIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
      <Clock timeProps={longPress} />
      <StyledStatus>
        {/* Right to left: Wi-Fi first, so it always holds the corner. */}
        <WifiButton config={config} />
        {config.status.night && <ModeIcon entityId={config.status.night} icon='mdi:weather-night' label={t('night_mode')} />}
        {config.status.guest && <ModeIcon entityId={config.status.guest} icon='mdi:account-multiple' label={t('guest_mode')} />}
        {config.status.absence && <ModeIcon entityId={config.status.absence} icon='mdi:account-off' label={t('absence_mode')} />}
      </StyledStatus>
    </StyledHeader>
  );
};

export default memo(SidebarHeader);
