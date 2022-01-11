import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../redux/actions";


const OrdersCarousel = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="mb-auto">
      { cart.ordered.length > 0 
      &&  <div className="mx-2 mt-2 h-8 bg-gray-400 text-white rounded-md ">
            <p className="text-lg ">Consumed</p>
          </div> 
      }
      { cart.ordered.map((order) => {
          return (
            <div
              key={order.productId}
              className="flex  h-14 mx-2 mt-2  border-2 rounded-md border-gray-700 border-opacity-50"
            >
              <div className="w-10 mt-1 ml-1 h-10 flex-shrink-0  "> 
                <img className=" max-h-full max-w-full min-h-full min-w-full object-cover rounded-full " src={order.image} alt=""/>
              </div>
              <div className="  ml-1 w-full">
                  <div className="inline-block   h-4 w-full">
                    <p className="inline-block  float-left  text-gray-500 font-semibold  text-sm">{order.productName}</p>
                    <p className="inline-block  float-right mr-2  text-gray-500 font-semibold  text-sm">{" "}$ {order.price * order.quantity}{" "}</p>
                    <p className="inline-block  float-right mr-4 text-gray-500 font-semibold  text-sm"> {order.quantity}</p>
                    <p className="inline-block  float-right text-gray-500 font-semibold  text-sm "> x </p>
                  </div> 
                  <hr className=" border-gray-500 border-1  mx-2" />
                  <p className="text-gray-500 text-left text-xs overflow-hidden">{order.detail}</p> 
              </div>
            </div>
          );
        })}
      { cart.currentOrder.length > 0 
        &&  <div className="mx-2 mt-2 h-8 bg-gray-500 text-white rounded-md ">
              <p className="text-lg ">Ordered</p>
            </div> 
      }
      {cart.currentOrder.length > 0 &&
        cart.currentOrder.map((order) => {
          return (
            <div
              key={order.productId}
              className="flex  h-14 mx-2 mt-2  border-2 rounded-md border-gray-700 border-opacity-80"
            >
              <div className="w-10 mt-1 ml-1 h-10 flex-shrink-0  "> 
                <img className=" max-h-full max-w-full min-h-full min-w-full object-cover rounded-full " src={order.image} alt=""/>
              </div>
              <div className="  ml-1 w-full">
                  <div className="inline-block   h-4 w-full">
                    <p className="inline-block  float-left  text-gray-500 font-semibold  text-sm">{order.productName}</p>
                    <p className="inline-block  float-right mr-2  text-gray-500 font-semibold  text-sm">{" "}$ {order.price * order.quantity}{" "}</p>
                    <p className="inline-block  float-right mr-4 text-gray-500 font-semibold  text-sm"> {order.quantity}</p>
                    <p className="inline-block  float-right text-gray-500 font-semibold  text-sm "> x </p>
                  </div> 
                  <hr className=" border-gray-500 border-1  mx-2" />
                  <p className="text-gray-500 text-left text-xs overflow-hidden">{order.detail}</p> 
              </div>
            </div>
          );
        })}
      { cart.preOrderCart.length > 0 
        &&  <div className="mx-2 mt-2 h-8 bg-pink-700 text-white rounded-md ">
              <p className="text-lg ">Pre Order</p>
            </div> 
      }
      { cart.preOrderCart.length > 0 
        &&  cart.preOrderCart.map((order) => {
          return (
            <div
              key={order.productId}
              className="flex  h-14 mx-2 mt-2  border-2 rounded-md border-pink-700 border-opacity-80"
            >
              <div className="w-10 mt-1 ml-1 h-10 flex-shrink-0  "> 
                <img className=" max-h-full max-w-full min-h-full min-w-full object-cover rounded-full " src={order.image} alt=""/>
              </div>
              <div className="  ml-1 w-full">
                  <div className="inline-block   h-4 w-full">
                    <p className="inline-block  float-left  text-black font-semibold  text-sm">{order.productName}</p>
                    <p className="inline-block  float-right mr-2  text-black font-semibold  text-sm">{" "}$ {order.price * order.quantity}{" "}</p>
                    <p className="inline-block  float-right mr-4 text-blackfont-semibold  text-sm"> {order.quantity}</p>
                    <p className="inline-block  float-right text-black font-semibold  text-sm "> x </p>
                  </div> 
                  <hr className=" border-pink-700 border-1  mx-2" />
                  <div className="flex ">
                    <p className="text-black  text-left text-xs overflow-hidden w-11/12">{order.detail}</p> 
                    <div className="float-right h-6  bg-pink-700 rounded-full mr-2 mt-1  w-1/12"> 
                      <button className="mt-1 inline-block text-left  align-middle mx-auto" onClick={() => dispatch(removeProduct(order.productId, order.productName, order.image, order.price, order.detail))} disabled={!cart[order.productId] || !cart[order.productId].quantity}>
                        ➖
                      </button>
                      <button className="mt-1 inline-block text-left ml-2 align-middle text-md" onClick={() => dispatch(addProduct(order.productId, order.productName, order.image, order.price, order.detail))}>
                        ➕
                      </button>  
                    </div>
                  </div>

              </div>
            </div>
          );
        })
      }

    </div>
  );
};

export default OrdersCarousel;