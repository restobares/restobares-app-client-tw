import React, { useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/resto">canelon</NavLogo>
        </NavbarContainer>
        <MobileIcon>{/* <FaBars /> */}</MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
