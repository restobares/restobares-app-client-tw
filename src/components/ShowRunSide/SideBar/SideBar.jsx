import React from "react";
import {Icon, SidebarContainer, CloseIcon, SidebarLink, SidebarMenu, SidebarWrapper, SideBtnWrap, SidebarRoute} from './SideBarElement';
const Sidebar = ({isOpen,toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='signup' onClick={toggle} activeClass="active">Sign Up</SidebarLink>
            <SidebarLink to='services' onClick={toggle} activeClass="active">Services</SidebarLink>
            <SidebarLink to='createdby' onClick={toggle} activeClass="active">Created By</SidebarLink>
            <SidebarLink to='about' onClick={toggle} activeClass="active">About</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign in</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    )
  }

export default Sidebar;