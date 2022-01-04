import React, { useEffect } from "react";
import {FaBars} from "react-icons/fa"
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to ='/resto'>DingBell</NavLogo>
          <MobileIcon>
              <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='singup'>Sing Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/singn'>Sing In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
