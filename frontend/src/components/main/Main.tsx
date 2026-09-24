import styled from 'styled-components';
import { u } from '../../themes/default.theme';
import { useDashboard } from '../../config/DashboardProvider';
import PageSwiper from './pages/PageSwiper';
import ButtonBar from '../buttonBar/ButtonBar';

const StyledMainContainer = styled.main`
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  row-gap: ${u(0.6)};
`;

const Main: React.FC = () => {
  const dashboard = useDashboard();
  return (
    <StyledMainContainer>
      <PageSwiper pages={dashboard.pages} />
      <ButtonBar buttons={dashboard.buttons} />
    </StyledMainContainer>
  );
};

export default Main;
