import React from "react";
import { useSelector } from "react-redux";

const MenuPayBar = () => {
  const { cart } = useSelector((state) => state);

  var totalPrice = 0;
  // esto calcula el precio de la pre-orden
  for (var i = 0; i < cart.preOrderCart.length; i++) {

    var order = cart.preOrderCart[i];

    totalPrice = totalPrice + (order.quantity * order.price);
  }

  return (
    <div className="h-12 w-full bg-pink-800  text-xl fixed bottom-0  ">
      <h1 className="float-left text-white text-left  ml-2 text-sm mt-4">
        New Consumption ${totalPrice}{" "}
      </h1>
    </div>
  );
};

export default MenuPayBar;