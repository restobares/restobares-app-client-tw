import React, { useEffect } from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to ='/resto'>canelon</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
