import { useRef } from 'react';
import { useDashboard } from '../../config/DashboardProvider';
import { StyledArea, StyledBody, StyledColumn, StyledSidebarContainer } from './Sidebar.styled';
import SidebarHeader from './header/SidebarHeader';
import RoomClimate from './climate/RoomClimate';
import Persons from './persons/Persons';
import Openings from './openings/Openings';
import TravelTime from './travel/TravelTime';
import QuickActions from './quickActions/QuickActions';
import CalendarAgenda from './calendar/CalendarAgenda';
import SidebarFooter from './footer/SidebarFooter';
import { useDragScroll } from '../../hooks/useDragScroll';

/**
 * The left column. Each block draws nothing when it is not configured, so a
 * fresh install shows a clock and the footer, and fills in as the admin
 * chooses entities -- rather than a column of "entity not found".
 */
const Sidebar: React.FC = () => {
  const { sidebar } = useDashboard();
  const body = useRef<HTMLDivElement>(null);
  useDragScroll(body);
  return (
    <StyledSidebarContainer as='aside'>
      <StyledArea $area='header' data-area='header'>
        <SidebarHeader config={sidebar} />
      </StyledArea>
      <StyledBody ref={body}>
        <StyledColumn $side='left'>
          <StyledArea $area='climate' data-area='climate'>
            <RoomClimate config={sidebar.climate} />
          </StyledArea>
          <StyledArea $area='persons' data-area='persons'>
            <Persons entities={sidebar.persons} />
          </StyledArea>
          <StyledArea $area='openings' data-area='openings'>
            <Openings entities={sidebar.openings} />
          </StyledArea>
          <StyledArea $area='travel' data-area='travel'>
            <TravelTime config={sidebar.travel} />
          </StyledArea>
        </StyledColumn>
        <StyledColumn $side='right'>
          <StyledArea $area='quick' data-area='quick'>
            <QuickActions actions={sidebar.quick_actions} />
          </StyledArea>
          <StyledArea $area='calendar' data-area='calendar'>
            <CalendarAgenda config={sidebar.calendar} />
          </StyledArea>
        </StyledColumn>
      </StyledBody>
      <StyledArea $area='footer' data-area='footer'>
        <SidebarFooter config={sidebar} />
      </StyledArea>
    </StyledSidebarContainer>
  );
};

export default Sidebar;
