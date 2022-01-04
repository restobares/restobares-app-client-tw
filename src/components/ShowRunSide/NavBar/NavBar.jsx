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
        <MobileIcon>
          {/* <FaBars /> */}
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenu>
        </MobileIcon>
      </Nav>
    </>
  );
};

export default NavBar;
