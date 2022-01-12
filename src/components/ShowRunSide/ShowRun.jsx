import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import HeroSection from "./HeroSection/HeroSection";
import InfoSection from "./InfoSection/InfoSection";
import { homeObjOne } from "./InfoSection/Data";
import Services from "./Services/Services";
import CreatedBy from "./CreatedBy/CreatedBy";
import Footer from "./Footer/Footer";
export default function ShowRun() {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div claseName="w-screen">
      {/* {isOpen ? ( */}
      <SideBar isOpen={isOpen} toggle={toggle} />
      {/* ) : ( */}
      <>
        <NavBar toggle={toggle} />
        {/* video */}
        <HeroSection />
        {/* get started */}
        <InfoSection {...homeObjOne} />
        {/* services */}
        <Services />
        {/* created by */}
        <CreatedBy />
        {/* about */}
        <Footer />
      </>
      {/* )} */}
    </div>
  );
}
