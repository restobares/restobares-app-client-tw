import React from "react";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const Settings = () => {
  const { idResto } = useParams();
  const tokenAdmin = Cookies.get("token-admin");

  return (
    <div className="grid-rows-5 grid-flow-col gap-5">
      <Link to={`/resto/${idResto}/resto-home/qrmanager`}>
        <div className="col-span-1 text-center px-3 py-3 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
          <div className="float-left">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/qr-code--v1.png"
              width="38"
              alt=""
            />
          </div>
          <div className="inline-flex items-center">
            <h1 className="text-lg font-bold float-left">QR Management</h1>
          </div>
        </div>
      </Link>

      <Link to={`/resto/${idResto}/resto-home/createmenu`}>
        <div className="col-span-2 text-center px-3 py-3 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
          <div className="float-left">
            <img
              src="https://img.icons8.com/color/48/000000/restaurant-menu.png"
              width="38"
              alt=""
            />
          </div>
          <div className="inline-flex items-center">
            <h1 className="text-lg font-bold float-left">Create Menus</h1>
          </div>
        </div>
      </Link>

      {!tokenAdmin ? (
        <div className="col-span-2 text-center px-3 py-3 mb-4 pb-5 border border-gray-300 bg-gray-400 rounded-xl text-gray-300 cursor-not-allowed">
          <div className="float-left">
            <img
              src="https://img.icons8.com/fluency/48/000000/restaurant-menu.png"
              width="38"
              alt=""
            />
          </div>
          <div className="inline-flex items-center">
            <h1 className="text-lg font-bold float-left">Edit Menus</h1>
          </div>
        </div>
      ) : (
        <Link to={`/resto/${idResto}/resto-home/editmenu`}>
          <div className="col-span-2 text-center px-3 py-3 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
            <div className="float-left">
              <img
                src="https://img.icons8.com/fluency/48/000000/restaurant-menu.png"
                width="38"
                alt=""
              />
            </div>
            <div className="inline-flex items-center">
              <h1 className="text-lg font-bold float-left">Edit Menus</h1>
            </div>
          </div>
        </Link>
      )}

      <div className="col-span-3 text-center px-3 py-3 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
        <div className="float-left">
          <img
            src="https://img.icons8.com/color/48/000000/image.png"
            width="38"
            alt=""
          />
        </div>
        <div className="inline-flex items-center">
          <h1 className="text-lg font-bold float-left">Logotypes</h1>
        </div>
      </div>

      <Link to={`/resto/${idResto}/resto-home/themes`}>
        <div className="col-span-4 text-center px-2 py-2 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
          <div className="float-left">
            <img
              src="https://img.icons8.com/fluency/48/000000/change-theme.png"
              width="38"
              alt=""
            />
          </div>
          <div className="inline-flex items-center">
            <h1 className="text-lg font-bold float-left">Themes</h1>
          </div>
        </div>
      </Link>

      <Link to={`/resto/${idResto}/resto-home/analytics`}>
        <div className="col-span-5 text-center px-2 py-2 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
          <div className="float-left">
            <img
              src="https://img.icons8.com/fluency/48/000000/stocks-growth.png"
              width="38"
              alt=""
            />
          </div>
          <div className="inline-flex items-center">
            <h1 className="text-lg font-bold float-left">Analytics</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Settings;
