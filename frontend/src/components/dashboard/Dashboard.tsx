import { useRef } from 'react';
import Main from '../main/Main';
import Sidebar from '../sidebar/Sidebar';
import Splash from '../base/splash/Splash';
import { StyledBackground, StyledDashboardContainer, StyledDashboardGrid } from './Dashboard.styled';
import { useDashboardContext } from '../../config/DashboardProvider';
import { useUnit } from '../../hooks/useUnit';
import { useT } from '../../hooks/useHa';
import { useBackgroundImage } from '../../hooks/useBackgroundImage';
import { trackGlow } from '../../panel/glow';

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

  return (
    <StyledDashboardContainer ref={ref} onPointerMove={trackGlow}>
      <StyledBackground $image={image} $dim={background.dim} $blur={background.blur} />
      <StyledDashboardGrid>
        <Sidebar />
        <Main />
      </StyledDashboardGrid>
    </StyledDashboardContainer>
  );
};

export default Dashboard;
