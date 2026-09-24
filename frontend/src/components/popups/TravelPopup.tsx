import styled, { useTheme } from 'styled-components';
import { u } from '../../themes/default.theme';
import type { SidebarConfig } from '../../config/types';
import Popup from '../base/popup/Popup';
import MiniGraph from '../base/miniGraph/MiniGraph';
import { useEntity, useLanguage, useT } from '../../hooks/useHa';
import { useHistory } from '../../hooks/useHistory';
import { durationToMinutes, formatMinutes } from '../../lib/format';
import { mapEmbedUrl } from '../../lib/travel';

const StyledMap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${u(1.2)};
  overflow: hidden;
  background: ${({ theme }) => theme.bubble.inset};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

const StyledFacts = styled.dl`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${u(0.35)} ${u(1)};
  margin: 0;
  font-size: ${u(1.08)};

  dt {
    color: ${({ theme }) => theme.text.secondary};
  }

  dd {
    margin: 0;
  }
`;

const StyledGraph = styled.div`
  height: ${u(6)};
  border-radius: ${u(1.2)};
  background: ${({ theme }) => theme.bubble.inset};
  overflow: hidden;
`;

const StyledHint = styled.p`
  color: ${({ theme }) => theme.text.secondary};
  font-size: ${u(1.08)};
  padding: ${u(2)};
  text-align: center;
`;

const TravelPopup: React.FC<{ open: boolean; onClose: () => void; config: SidebarConfig['travel'] }> = ({ open, onClose, config }) => {
  const t = useT();
  const language = useLanguage();
  const entity = useEntity(config.entity || undefined);
  const minutes = durationToMinutes(entity?.state, entity?.attributes.unit_of_measurement as string | undefined);
  return (
    <Popup
      open={open}
      onClose={onClose}
      title={config.name || t('travel_time')}
      subtitle={minutes === null ? undefined : formatMinutes(minutes, language)}
      icon='mdi:car-clock'
      width={72}
    >
      <TravelContent config={config} />
    </Popup>
  );
};

const TravelContent: React.FC<{ config: SidebarConfig['travel'] }> = ({ config }) => {
  const t = useT();
  const language = useLanguage();
  const theme = useTheme();
  const entity = useEntity(config.entity || undefined);
  const samples = useHistory(config.entity || undefined, 24);
  const attributes = entity?.attributes ?? {};
  const origin = attributes.origin as string | undefined;
  const destination = attributes.destination as string | undefined;
  const src = mapEmbedUrl(config, origin, destination, language);
  const distance = attributes.distance as string | number | undefined;

  return (
    <>
      <StyledMap>
        {src ? (
          <iframe src={src} title={t('route')} loading='lazy' referrerPolicy='no-referrer-when-downgrade' allowFullScreen />
        ) : (
          <StyledHint>{t('no_map')}</StyledHint>
        )}
      </StyledMap>
      <StyledFacts>
        {origin && (
          <>
            <dt>{t('from')}</dt>
            <dd>{origin}</dd>
          </>
        )}
        {destination && (
          <>
            <dt>{t('to')}</dt>
            <dd>{destination}</dd>
          </>
        )}
        {distance !== undefined && (
          <>
            <dt>{t('distance')}</dt>
            <dd>{String(distance)}</dd>
          </>
        )}
      </StyledFacts>
      <StyledGraph>
        <MiniGraph
          samples={samples}
          hours={24}
          pointsPerHour={2}
          lineWidth={3}
          color={theme.colors.accent}
          labels={v => formatMinutes(v, language)}
        />
      </StyledGraph>
    </>
  );
};

export default TravelPopup;
