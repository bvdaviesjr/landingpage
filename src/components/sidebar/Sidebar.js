import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
  } from './SideBarElements';
  
  const Sidebar = ({ isOpen, toggle }) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to='/'>Men</SidebarLink>
          <SidebarLink to='/'>Women</SidebarLink>
          <SidebarLink to='/'>Children</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/'>Shop</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    );
  };
export default Sidebar
