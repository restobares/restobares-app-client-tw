import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import HeroSection from "./HeroSection/HeroSection";
import InfoSection from "./InfoSection/InfoSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./InfoSection/Data";
import Services from "./Services/Services";
export default function ShowRun() {
    const [isOpen, setisOpen]=  useState(false)
    const toggle= ()=>{
        setisOpen(!isOpen);
    }

  return (
    <div>
      {isOpen?<SideBar isOpen={isOpen} toggle={toggle}/>:
      <>
      <NavBar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <Services />
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>
      </>
      }
    </div>
  );
}
