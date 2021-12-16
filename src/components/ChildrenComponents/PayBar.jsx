import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addOrderToCart } from "../../redux/actions";
import CommentModal from "../Routes/BillBoard/CommentModal";

const idTable = 1;
const idResto = 1;

const PayBar = ({ menu }) => {
  const { cart } = useSelector((state) => state);

  //const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addOrderToCart())
  // }, [dispatch])

  //   const pedir = () => {
  //     dispatch(addOrderToCart());
  //   }

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  var totalPrice = 0;
  for (var i in cart) {
    if (i === "count" || i === "billedCart") continue;
    var product_id = cart[i].product_id;
    var product_quantity = cart[i].quantity;

    var elementFound = menu.find(
      (element) => element.product_id === product_id
    );
    if (product_quantity > 0) {
      totalPrice = totalPrice + product_quantity * elementFound.price;
    }
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
