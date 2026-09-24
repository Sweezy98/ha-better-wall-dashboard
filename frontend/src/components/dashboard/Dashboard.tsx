import { useRef } from 'react';
import Main from '../main/Main';
import Sidebar from '../sidebar/Sidebar';
import Splash from '../base/splash/Splash';
import { StyledBackground, StyledDashboardContainer, StyledDashboardGrid } from './Dashboard.styled';
import { useDashboardContext } from '../../config/DashboardProvider';
import { useUnit } from '../../hooks/useUnit';
import { useHassUrl, useT } from '../../hooks/useHa';
import defaultBackground from '../../assets/background.jpg';

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
  const joinHassUrl = useHassUrl();
  const background = view!.dashboard.background;
  // "/local/wall.jpg" is a path on Home Assistant. Inside Home Assistant that
  // is this page's origin anyway; on the dev server it is not.
  const image = background.image
    ? background.image.startsWith('/')
      ? joinHassUrl(background.image)
      : background.image
    : defaultBackground;

  return (
    <StyledDashboardContainer ref={ref}>
      <StyledBackground $image={image} $dim={background.dim} $blur={background.blur} />
      <StyledDashboardGrid>
        <Sidebar />
        <Main />
      </StyledDashboardGrid>
    </StyledDashboardContainer>
  );
};

export default Dashboard;
