import { memo, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { u } from '../../../themes/default.theme';
import type { NamedEntity, SidebarConfig } from '../../../config/types';
import Clock from '../../base/clock/Clock';
import Icon from '../../base/icon/Icon';
import IconButton from '../../base/iconButton/IconButton';
import WifiPopup from '../../popups/WifiPopup';
import PinPopup from '../../popups/PinPopup';
import { useDashboardContext } from '../../../config/DashboardProvider';
import { domainIcon, useEntity, useT } from '../../../hooks/useHa';
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

const ModeIcon: React.FC<{ item: NamedEntity }> = ({ item }) => {
  const entity = useEntity(item.entity || undefined);
  // Shown only while the mode is on: a row of icons that are always there
  // stops being read at all.
  if (!isOn(entity?.state)) return null;
  const label = item.name || (entity?.attributes.friendly_name as string | undefined) || item.entity;
  return (
    <StyledStatusIcon title={label} aria-label={label}>
      <Icon icon={item.icon || (entity?.attributes.icon as string | undefined) || domainIcon(item.entity)} />
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

/**
 * A long press on the clock opens Home Assistant's own sidebar -- behind the
 * dashboard's PIN when it has one, since every setting is behind that.
 */
function useSidebarUnlock() {
  const { view } = useDashboardContext();
  const [asking, setAsking] = useState(false);
  const required = Boolean(view?.pin_required);
  // The clock that was held: the event opening the sidebar starts from it.
  const pressed = useRef<HTMLElement | null>(null);
  const longPress = useLongPress(target => {
    pressed.current = target;
    if (required || import.meta.env.DEV) setAsking(true);
    else openHomeAssistantSidebar(target);
  });
  const popup = (
    <PinPopup
      open={asking}
      onClose={() => setAsking(false)}
      dashboardId={view?.dashboard.id ?? ''}
      required={required}
      onUnlocked={() => pressed.current && openHomeAssistantSidebar(pressed.current)}
    />
  );
  return { longPress, popup };
}

const SidebarHeader: React.FC<{ config: SidebarConfig }> = ({ config }) => {
  const { longPress, popup } = useSidebarUnlock();
  return (
    <StyledHeader>
      {popup}
      <Clock timeProps={longPress} />
      <StyledStatus>
        {/* Right to left: Wi-Fi first, so it always holds the corner. */}
        <WifiButton config={config} />
        {/* The list reads left to right; the row fills from the right. */}
        {/* Missing from a backend older than this page -- installed, not
            yet restarted into -- rather than a crash. */}
        {[...(config.status.icons ?? [])].reverse().map(item => (
          <ModeIcon key={item.id} item={item} />
        ))}
      </StyledStatus>
    </StyledHeader>
  );
};

export default memo(SidebarHeader);
