import React from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTables } from "../../../redux/actions";
import Cookies from "js-cookie";
import Tables from "../Tables/Tables";
import ActiveOrders from "../../ActiveOrders/ActiveOrders";
import Settings from "../../Settings/Settings";

const HomeAdmin = () => {
  const dispatch = useDispatch();
  const { idResto } = useParams();
  const token = useSelector((state) => state.token);
  const tables = useSelector((state) => state.tables);
  const active = useSelector((state) => state.activeComponent.activeComponent);
  let tokenAdmin;
  let tokenStaff;

  if (token.admin.length > 0 && token.admin !== "") {
    tokenAdmin = Cookies.set("token-admin", `${token.admin}`, {
      expires: 0.35,
      secure: true,
    });
  }
  if (token.staff.length > 0 && token.staff !== "") {
    tokenStaff = Cookies.set("token-staff", `${token.staff}`, {
      expires: 0.35,
      secure: true,
    });
  }

  useEffect(() => {
    dispatch(getTables(idResto, Cookies.get("token-staff")));
  }, []);

  console.log("token staff", Cookies.get("token-staff"));
  console.log("tables", tables);

  return (
    <div className="bg-gray-200 h-full">
          <div className="bg-gray-200 h-screen">
            <Navbar />
            <div className="flex items-center justify-center text-5xl text-gray-300">
              {active === "Tables" ? (
                <div className="bg-gray-200 w-full">
                  <Tables tables={tables} />
                </div>
              ) : //Puse estos div para que al scrollear el bg siga siendo gris y no blanco
              active === "Orders" ? (
                <div className="bg-gray-200 w-full">
                  <ActiveOrders />
                </div>
              ) : (
                <div className="w-5/6 h-full text-black text-lg font-bold mt-4">
                <Settings />
                </div>
              )}
            </div>
    </div>
    </div>
  );
};

export default HomeAdmin;
