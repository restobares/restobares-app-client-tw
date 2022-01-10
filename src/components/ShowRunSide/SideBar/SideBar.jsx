import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} key="container">
      <Icon onClick={toggle} key="1">
        <CloseIcon />
      </Icon>
      <SidebarWrapper key="2">
        <SidebarMenu>
          <SidebarLink
            key="signup"
            to="signup"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={40}
            activeClass="active"
          >
            signup
          </SidebarLink>
          <SidebarLink
            key="services"
            to="services"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={40}
            activeClass="active"
          >
            services
          </SidebarLink>
          <SidebarLink
            key="createdby"
            to="createdby"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={10}
            activeClass="active"
          >
            Created By
          </SidebarLink>
          <SidebarLink
            key="about"
            to="about"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={10}
            activeClass="active"
          >
            About
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/resto/login">Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
