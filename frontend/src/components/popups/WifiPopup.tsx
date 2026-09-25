import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import type { SidebarConfig } from '../../config/types';
import Popup from '../base/popup/Popup';
import WifiQr from './WifiQr';
import { useEntity, useHassUrl, useT } from '../../hooks/useHa';
import { wifiQrPayload } from '../../lib/wifi';

const StyledCode = styled.div`
  align-self: center;
  width: min(100%, ${u(22)});
  aspect-ratio: 1;
  /* The dark around the code is its quiet zone. */
  padding: ${u(1)};

  /* The UniFi integration's picture is dark on white: on a card of its own. */
  > img {
    width: 100%;
    height: 100%;
    display: block;
    padding: ${u(1.2)};
    border-radius: ${u(1.8)};
    background: #fff;
    box-sizing: border-box;
  }
`;

const StyledHint = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text.secondary};
  font-size: ${u(1.08)};
`;

/**
 * The guest network's QR code.
 *
 * From the UniFi integration's image entity when there is one -- it already
 * draws the code for each WLAN, and it follows a password rotated in UniFi --
 * otherwise drawn here from the name and password stored with the dashboard
 * in Home Assistant. The code only, never the password in plain text: a
 * tablet in the hall is read by more than the guests it is meant for.
 */
const WifiPopup: React.FC<{ open: boolean; onClose: () => void; config: SidebarConfig }> = ({ open, onClose, config }) => {
  const t = useT();
  const wifi = config.guest_wifi;
  return (
    <Popup open={open} onClose={onClose} title={t('guest_wifi')} icon='mdi:qrcode' width={42}>
      <WifiContent wifi={wifi} />
    </Popup>
  );
};

const WifiContent: React.FC<{ wifi: SidebarConfig['guest_wifi'] }> = ({ wifi }) => {
  const t = useT();
  const image = useEntity(wifi.qr_image || undefined);
  const joinHassUrl = useHassUrl();
  const picture = image?.attributes.entity_picture as string | undefined;

  if (picture) {
    return (
      <>
        <StyledCode>
          <img src={joinHassUrl(picture)} alt={t('guest_wifi')} />
        </StyledCode>
        <StyledHint>{t('guest_wifi_hint')}</StyledHint>
      </>
    );
  }
  if (!wifi.ssid) return <StyledHint>{t('guest_wifi_missing')}</StyledHint>;
  return (
    <>
      <StyledCode>
        <WifiQr payload={wifiQrPayload(wifi.ssid, wifi.password, wifi.security, wifi.hidden)} />
      </StyledCode>
      <StyledHint>{t('guest_wifi_hint')}</StyledHint>
    </>
  );
};

export default WifiPopup;
