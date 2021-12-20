import React from "react";

import useNavigation from "./Hook";
import navigationData from "./Navigation";

import Navbar from "./Navbar";
import TabbarAdmin from "./TabbarAdmin";

const NavbarAdmin = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <div className="bg-gray-200 h-screen">
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <TabbarAdmin
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div className="flex items-center justify-center text-5xl text-gray-300 h-5/6">
      
      </div>
    </div>
  );
};

export default NavbarAdmin;