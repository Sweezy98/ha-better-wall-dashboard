import { useRef } from 'react';
import Main from '../main/Main';
import Sidebar from '../sidebar/Sidebar';
import Splash from '../base/splash/Splash';
import { StyledBackground, StyledDashboardContainer, StyledDashboardGrid } from './Dashboard.styled';
import { useDashboardContext } from '../../config/DashboardProvider';
import { useUnit } from '../../hooks/useUnit';
import { useT } from '../../hooks/useHa';
import { useBackgroundImage } from '../../hooks/useBackgroundImage';
import { trackGlow, waveFrom } from '../../panel/glow';
import { bouncePress } from '../../panel/bounce';
import ConnectionLost from '../base/connectionLost/ConnectionLost';
import { PopupTimeout } from '../base/popup/popupTimeout';
import { useConnectionLost } from '../../hooks/useConnectionLost';

const Dashboard: React.FC = () => {
  const { view, error } = useDashboardContext();
  const t = useT();
  if (error) return <Splash message={error === 'not_loaded' || error === 'unknown_command' ? t('not_loaded') : error} />;
  if (!view) return <Splash message={t('loading')} />;
  return <DashboardLayout />;
};

export const DashboardLayout: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { view } = useDashboardContext();
  useUnit(ref);
  const background = view!.dashboard.background;
  const image = useBackgroundImage(background.image);
  const plain = background.mode === 'color';
  const lostSince = useConnectionLost();
  const minutes = view!.dashboard.popup_close_minutes ?? 2;

  return (
    <PopupTimeout.Provider value={minutes * 60_000}>
      <StyledDashboardContainer ref={ref} onPointerMove={trackGlow} onPointerDown={waveFrom} onClick={bouncePress}>
        {plain ? (
          <StyledBackground $color={background.color} />
        ) : (
          <StyledBackground $image={image} $dim={background.dim} $blur={background.blur} />
        )}
        <StyledDashboardGrid>
          <Sidebar />
          <Main />
        </StyledDashboardGrid>
        {lostSince !== null && <ConnectionLost since={lostSince} />}
      </StyledDashboardContainer>
    </PopupTimeout.Provider>
  );
};

export default Dashboard;
