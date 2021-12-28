import React from "react";

import useNavigation from "./Hook";
import navigationData from "./Navigation";

import Navbar from "./Navbar";
import TabbarAdmin from "./TabbarAdmin";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getTables } from "../../../redux/actions";
import Cookies from "js-cookie";

const NavbarAdmin = () => {
  const dispatch = useDispatch();
  const { idResto } = useParams();
  const { currentRoute, setCurrentRoute } = useNavigation();
  const token = useSelector((state) => state.token);
  let tokenAdmin;
  let tokenStaff;

  if (token.admin.lenght > 0 && token.admin !== "") {
    tokenAdmin = Cookies.set('token-admin', `${token.admin}`, { expires: 0.35, secure: true });
  }
  if (token.staff.length > 0 && token.staff !== "") {
    tokenStaff = Cookies.set('token-staff', `${token.staff}`, { expires: 0.35, secure: true });
  }

  console.log(Cookies.get('token-staff'));
  useEffect(() => {
    dispatch(getTables(idResto, Cookies.get('token-staff')));
  }, []);


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