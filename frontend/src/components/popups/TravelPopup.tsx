import styled, { useTheme } from 'styled-components';
import { u } from '../../themes/default.theme';
import type { SidebarConfig } from '../../config/types';
import Popup from '../base/popup/Popup';
import MiniGraph from '../base/miniGraph/MiniGraph';
import { useEntity, useLanguage, useT } from '../../hooks/useHa';
import { useHistory } from '../../hooks/useHistory';
import { durationToMinutes, formatMinutes, formatTime } from '../../lib/format';
import { mapEmbedUrl } from '../../lib/travel';
import TravelMap from './TravelMap';

const StyledMap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${u(1.2)};
  overflow: hidden;
  background: ${({ theme }) => theme.bubble.inset};

  /* The one part that gives way on a short screen, so the routes and the
     graph below always fit without the popup scrolling. */
  && {
    flex: 0 1 auto;
    min-height: ${u(10)};
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

/** On the popup's own glass: no card of its own around it, but its corners. */
const StyledGraph = styled.div`
  height: ${u(6)};
  border-radius: ${u(1.2)};
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
      fixedBody
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
  // Only for drawing the route. Not shown: everybody at home knows where
  // home and work are.
  const origin = attributes.origin as string | undefined;
  const destination = attributes.destination as string | undefined;
  // With a key the dashboard draws the map itself, free of Google's route
  // card; a pasted embed URL is the fallback, card and all.
  const ownMap = Boolean(config.maps_api_key && origin && destination);
  const src = ownMap ? null : mapEmbedUrl(config);

  return (
    <>
      {ownMap ? (
        <TravelMap apiKey={config.maps_api_key} origin={origin!} destination={destination!} />
      ) : (
        <StyledMap>
          {src ? (
            <iframe src={src} title={t('route')} loading='lazy' referrerPolicy='no-referrer-when-downgrade' allowFullScreen />
          ) : (
            <StyledHint>{t('no_map')}</StyledHint>
          )}
        </StyledMap>
      )}
      <StyledGraph>
        <MiniGraph
          samples={samples}
          hours={24}
          pointsPerHour={2}
          lineWidth={3}
          color={theme.colors.accent}
          labels={v => formatMinutes(v, language)}
          tooltip={point => `${formatMinutes(point.v, language)} · ${formatTime(new Date(point.t), language)}`}
        />
      </StyledGraph>
    </>
  );
};

export default TravelPopup;
