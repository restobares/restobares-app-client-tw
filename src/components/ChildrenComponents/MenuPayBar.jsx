import React from "react";
import { useSelector } from "react-redux";
//import Logo from "../../img/dingbell_white.png";
import WaiterCallButton from "./WaiterCallButton";


const MenuPayBar = () => {
  const { cart } = useSelector((state) => state);

  var totalPrice = 0;
  // esto calcula el precio de la pre-orden
  for (var i = 0; i < cart.preOrderCart.length; i++) {

    var order = cart.preOrderCart[i];

    totalPrice = totalPrice + (order.quantity * order.price);
  }

  return (
    <div className="h-12 w-full bg-pink-800 flex text-xl fixed bottom-0  ">
      <h1 className="float-left text-white text-left  ml-2 text-sm mt-1 w-5/6">
        New Consumption ${totalPrice}{" "}
      </h1>
      <WaiterCallButton/>
    </div>
  );
};

export default MenuPayBar;
