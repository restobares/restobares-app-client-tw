import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";
import HeroSection from "./HeroSection/HeroSection";

export default function ShowRun() {
    const [isOpen, setisOpen]=  useState(false)
    const toggle= ()=>{
        setisOpen(!isOpen);
    }

  return (
    <div>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <HeroSection/>
    </div>
  );
}
