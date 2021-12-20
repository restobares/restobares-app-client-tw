import React, { useCallback } from "react";
import classNames from "classnames";


const TabbarAdmin = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "Tables":
        return <img src="https://img.icons8.com/ios-filled/50/000000/restaurant-table.png" width="40" alt="" className="mb-2 pb-1 pt-1"  />;
      case "Orders":
        return <img src="https://img.icons8.com/ios/50/000000/purchase-order.png" width="40" alt="" className="mb-2 pb-1 pt-1" />;
      case "Settings":
        return <img src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-setting-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png" width="40" alt="" className="mb-2 pb-1 pt-1"  />;
      
    }
  }, []);

  return (
    <nav className="flex md:hidden flex-row items-center justify-around px-8 h-18 bg-pink-700 visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl">
      {navigationData.map((item, index) => (
        <span
          key={index}
          className={classNames([
            "text-gray-400 hover:text-grey-700 cursor-pointer w-20 h-full flex items-center justify-center",
            currentRoute === item && "bg-gradient-to-t from-pink-800 to-pink-800 border-t-3 border-pink-700 text-pink-700",
          ])}
          onClick={() => setCurrentRoute(item)}
        >
          <span className="-mb-1">
              {getTabIcon(item)}
          </span>
        </span>
      ))}
    </nav>
  );
};

export default TabbarAdmin;