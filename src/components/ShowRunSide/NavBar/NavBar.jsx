import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {
  Nav,
  NavbarContainer,
  ImgLogo,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../../videosAndImages/logo.jpg";
const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toogleHome = () => {
    scroll.scrollToTop();
     console.log(scroll.scrollToTop());
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/resto" onClick={toogleHome}>
              DingBell
              <ImgLogo src={logo} type="img"></ImgLogo>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="signup">Sign Up</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="aboutapp">About App</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="createdby">Created By</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/resto/login">Sing In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
          <MobileIcon>{/* <FaBars /> */}</MobileIcon>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
