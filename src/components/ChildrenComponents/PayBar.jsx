import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CommentModal from "../Routes/BillBoard/CommentModal";

const idTable = 1;
const idResto = 1;

const PayBar = () => {
  const { cart } = useSelector((state) => state);
  
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  var totalPrice = 0;
  // esto calcula el precio de la pre-orden
  for (var i = 0; i < cart.preOrderCart.length; i++) {

    var order = cart.preOrderCart[i];

    totalPrice = totalPrice + (order.quantity * order.price);
  }

  return (
    <div className="h-12 w-full bg-pink-800  text-2xl fixed bottom-0 ">
      <h1 className="float-left text-white text-left mt-2 ml-2 ">
        Nuevo consumo ${totalPrice}{" "}
      </h1>
      <Link to={`/resto/${idResto}/table/${idTable}/bill`}>
        <button className="float-right bg-pink-300 mt-2 w-12 rounded-xl mr-4">
          {" "}
          Pagar
        </button>
      </Link>
      <button
        className="float-right bg-pink-100 mt-2 w-12 rounded-xl mr-4"
        onClick={openModal}
      >
        {" "}
        Pedir
      </button>

      <CommentModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default PayBar;
