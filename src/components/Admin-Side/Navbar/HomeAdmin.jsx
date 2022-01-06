import React from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import Tables from "../Tables/Tables";
import ActiveOrders from "../../ActiveOrders/ActiveOrders";
import Settings from "../Settings/Settings";

const HomeAdmin = ({ joinResto, staffListen }) => {
  const token = useSelector((state) => state.token);
  const active = useSelector((state) => state.activeComponent.activeComponent);
  // let tokenAdmin;
  // let tokenStaff;

  if (token.admin.length > 0 && token.admin !== "") {
    Cookies.set("token-admin", `${token.admin}`, {
      expires: 0.35,
      secure: true,
    });
  }
  if (token.staff.length > 0 && token.staff !== "") {
    Cookies.set("token-staff", `${token.staff}`, {
      expires: 0.35,
      secure: true,
    });
  }


  // console.log("token staff", Cookies.get("token-staff"));
  // console.log("tables", tables);

  return (
    <div className="bg-gray-200 h-screen w-screen flex flex-col ">
      <Navbar />
      <div className=" w-full h-full  overflow-scroll">
        <div className=" mx-2">
          {active === "Tables" ? (
            <Tables joinResto={joinResto} staffListen={staffListen}/>
          ) : active === "Orders" ? (
            <ActiveOrders joinResto={joinResto} staffListen={staffListen}/>
          ) : (
            <Settings />
          )}

        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
