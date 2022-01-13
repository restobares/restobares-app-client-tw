import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
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
import logo from '../../../img/dingbell_red.png'
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
               <ImgLogo src={logo} type="img"></ImgLogo>
               DingBell
            </NavLogo> 
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                  activeClass="active"
                >
                  Sign Up
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={40}
                  activeClass="active"
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="createdby"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={40}
                  activeClass="active"
                >
                  Created By
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={40}
                  activeClass="active"
                >
                  About
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/resto/login">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
          <MobileIcon>{/* <FaBars /> */}</MobileIcon>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
