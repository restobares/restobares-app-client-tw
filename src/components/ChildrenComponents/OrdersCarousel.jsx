import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../redux/actions";


const OrdersCarousel = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="mb-auto">
      {cart.ordered.length > 0 &&
        cart.ordered.map((order) => {
          return (
            <div
              key={order.productId}
              className="flex  h-14 w-full mt-2  border-b-2 border-pink-700"
            >
              <div className="w-10 mt-1 ml-1 h-10 flex-shrink-0 "> 
                <img className=" max-h-full max-w-full min-h-full min-w-full object-cover rounded-full " src={order.image} alt=""/>
              </div>
              <div className="float-left  align-baseline text-left inline-block h-4 w-full ">
                <div className=" inline-block w-full align-bottom">
                  <p className="inline-block ml-2 text-gray-500 font-semibold text-sm">{order.productName}</p>
                  <p className=" align-bottom inline-block text-gray-500 font-semibold float-right mr-2 text-sm">{" "}$ {order.price * order.quantity}{" "}</p>
                  <p className="text-gray-500 font-semibold inline-block float-right mr-6 text-sm"> {order.quantity}</p>
                  <p className=" font-semiboldinline-block float-right text-left mr-1 text-sm "> x </p>
                </div> 
                <hr className=" border-pink-500 border-1  mx-2" />

                <p className=" w-9/12  ml-2 text-truncate text-gray-500 text- text-xs">{order.detail}</p>
              </div>
            </div>
          );
        })}
      {cart.currentOrder.length > 0 &&
        cart.currentOrder.map((order) => {
          return (
            <div
              key={order.productId}
              className="flex  h-14 w-full mt-2  border-b-2 border-pink-700"
            >
              <div className="w-10 mt-1 ml-1 h-10 flex-shrink-0 "> 
                <img className=" max-h-full max-w-full min-h-full min-w-full object-cover rounded-full " src={order.image} alt=""/>
              </div>
              <div className="float-left  align-baseline text-left inline-block h-4 w-full ">
                <div className=" inline-block w-full align-bottom">
                  <p className="inline-block ml-2 text-black font-semibold text-sm">{order.productName}</p>
                  <p className=" align-bottom inline-block  font-semibold float-right mr-2 text-sm">{" "}$ {order.price * order.quantity}{" "}</p>
                  <p className=" font-semibold inline-block float-right mr-6 text-sm"> {order.quantity}</p>
                  <p className=" font-semiboldinline-block float-right text-left mr-1 text-sm "> x </p>
                </div> 
                <hr className=" border-pink-500 border-1  mx-2" />

                <p className=" w-9/12  ml-2 text-truncate text-black text- text-xs">{order.detail}</p>
              </div>
            </div>
          );
        })}
      {cart.preOrderCart.map((order) => {
        return (
          <div
          key={order.productId}
          className="flex  bg-pink-200 h-14 w-full mt-1  border-b-2 border-t-2 border-pink-300"
        >
          <div className="w-10 mt-1 ml-1 h-10 flex-shrink-0 "> 
            <img className=" min-h-full max-h-full max-w-full min-w-full object-cover rounded-full " src={order.image} alt=""/>
          </div>
          <div className="float-left  align-baseline text-left inline-block h-4 w-full ">
            <div className=" inline-block w-full align-bottom">
              <p className="inline-block ml-2 text-black font-semibold text-sm">{order.productName}</p>
              <p className=" align-bottom inline-block  font-semibold float-right mr-2 text-sm">{" "}$ {order.price * order.quantity}{" "}</p>
              <p className=" font-semibold inline-block float-right mr-6 text-sm"> {order.quantity}</p>
              <p className=" font-semiboldinline-block float-right text-left mr-1 text-sm "> x </p>
            </div> 
            <hr className=" border-pink-500 border-1  mx-2" />
            <div className="float-right h-6  mr-1 w-16 bg-pink-500 rounded-full mt-1"> 
                <button className="mt-1 inline-block text-left ml-2 align-middle text-md" onClick={() => dispatch(addProduct(order.productId, order.productName, order.image, order.price, order.detail))}>
              ➕
                </button>
      
                <button className="mt-1 inline-block text-left ml-4 align-middle mx-auto" onClick={() => dispatch(removeProduct(order.productId, order.productName, order.image, order.price, order.detail))} disabled={!cart[order.productId] || !cart[order.productId].quantity}>
              ➖</button>
            </div>
            <p className=" w-9/12  ml-2 text-truncate text-black text- text-xs">{order.detail}</p>
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default OrdersCarousel;