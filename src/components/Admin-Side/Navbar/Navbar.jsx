import React from "react";
import classNames from "classnames";


const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  return (
    <nav className="hidden md:flex flex:row items-center justify-between px-8 h18 rounded-b-3xl bg-pink-700 ">
      <span className="text-5xl text-gray-800 mb-1 mt-1">
      <img src="https://img.icons8.com/ios/50/000000/restaurant-building.png" width="45" alt="" />
      </span>
      <ul className="flex flex-row self-end h-12">
        {navigationData.map((item, index) => (
          <li
            className={classNames([
              "w-24 text-white hover:text-white cursor-pointer font-medium tracking-wide text-2xl flex items-start justify-center mx-3",
              currentRoute === item && "border-pink-700 text-white border-b-3 bg-gradient-to-b from-pink-800 to-pink-800 rounded-full pt-1 mb-1",
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="bg-pink-800 hover:bg-pink-900 border-2 border-gray-800 text-xl text-white py-1 px-2 rounded-lg font-medium tracking-wide leading-none pb-2">
          Logout
      </button>
    </nav>
  );
};

export default Navbar;