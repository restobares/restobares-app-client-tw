import React from "react";
import {FaBars} from "react-icons/fa"
import { Nav, NavbarContainer, ImgLogo, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";
import logo from '../../../videosAndImages/logo.jpg';
const NavBar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to ='/resto'>
            DingBell
            <ImgLogo src={logo} type='img'></ImgLogo>
            </NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='signup'>Sign Up</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to='aboutapp'>About App</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks to='createdby'>Created By</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to='/resto/login' >Sing In</NavBtnLink>
          </NavBtn>
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
