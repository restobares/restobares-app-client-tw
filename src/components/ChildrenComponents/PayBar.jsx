import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CommentModal from "../Routes/BillBoard/CommentModal";

const PayBar = () => {
  const { cart } = useSelector((state) => state);
  const { idResto, idTable } = useParams();
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
    <div className="h-12 w-full bg-pink-800  text-xl fixed bottom-0  ">
      <h1 className="float-left text-white text-left mt-2 ml-2 ">
        Nuevo consumo ${totalPrice}{" "}
      </h1>
      <Link to={`/resto/${idResto}/table/${idTable}/bill`}>
        <button className="float-right text-pink-900 border-2 border-pink-900 bg-pink-300 mt-2 w-16 rounded-xl mr-4">
          {" "}
          Pagar
        </button>
      </Link>
      <button
        className="float-right bg-pink-900 border-2 border-pink-500 text-white mt-2 w-16 rounded-xl mr-4"
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
