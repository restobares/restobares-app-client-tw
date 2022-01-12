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
              className="flex h-14 mx-2 mt-2  border-2 rounded-md border-gray-700 border-opacity-50"
            >
              <div className="w-10 mt-1 ml-1 h-10 flex-shrink-0  "> 
                <img className=" max-h-full max-w-full min-h-full min-w-full object-cover rounded-full " src={order.image} alt=""/>
              </div>
              <div className="  ml-1 w-full">
                  <div className="inline-block   h-4 w-full">
                    <p className="inline-block flex-shrink-1 float-left  text-gray-500 font-semibold  text-sm truncate text-left  w-7/12">{order.productName}</p>
                    <p className="inline-block flex-shrink-0  float-right mr-2  text-gray-500 font-semibold  text-sm">{" "}$ {order.price * order.quantity}{" "}</p>
                    <p className="inline-block flex-shrink-0 float-right mr-4 text-gray-500 font-semibold  text-sm"> {order.quantity}</p>
                    <p className="inline-block flex-shrink-0 float-right text-gray-500 font-semibold  text-sm "> x </p>
                  </div> 
                  <hr className=" border-gray-500 border-1  mx-2" />
                
                  <p className="text-gray-500 h-8 text-left text-xs overflow-hidden ">{order.detail}</p> 
            
                  
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
                    <p className="inline-block  float-left  text-gray-500 font-semibold  text-sm truncate text-left  w-7/12 ">{order.productName}</p>
                    <p className="inline-block  float-right mr-2  text-gray-500 font-semibold  text-sm">{" "}$ {order.price * order.quantity}{" "}</p>
                    <p className="inline-block  float-right mr-4 text-gray-500 font-semibold  text-sm"> {order.quantity}</p>
                    <p className="inline-block  float-right text-gray-500 font-semibold  text-sm "> x </p>
                  </div> 
                  <hr className=" border-gray-500 border-1  mx-2" />
                  <p className="text-gray-500 h-8 text-left text-xs overflow-hidden">{order.detail}</p> 
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
                    <p className="inline-block  float-left   text-black font-semibold text-left text-sm w-7/12 truncate">{order.productName}</p>
                    <p className="inline-block  float-right mr-2  text-black font-semibold  text-sm">{" "}$ {order.price * order.quantity}{" "}</p>
                    <p className="inline-block  float-right mr-4 text-blackfont-semibold  text-sm"> {order.quantity}</p>
                    <p className="inline-block  float-right text-black font-semibold  text-sm "> x </p>
                  </div> 
                  <hr className=" border-pink-700 border-1  mx-2 " />
                  <div className="flex mx-0  flex-row justify-between">
                    <p className="inline-block   text-black h-8 text-left text-xs overflow-hidden flex-grow-1">{order.detail}</p> 
                    <div className="w-12  float-right">
                      <div className="inline-block float-right h-6 mt-1 mr-1 w-12 shrink-0"> 
                        <button className="mt-1 inline-block text-left align-middle bg-pink-700 rounded-full h-5 w-5" onClick={() => dispatch(removeProduct(order.productId, order.productName, order.image, order.price, order.detail))} disabled={!cart[order.productId] || !cart[order.productId].quantity}>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/minus-math.png" width="16" alt=""/>
                        </button>

                        
                        <button className="mt-1 inline-block text-left ml-2 align-middle text-md bg-pink-700 rounded-full h-5 w-5" onClick={() => dispatch(addProduct(order.productId, order.productName, order.image, order.price, order.detail))}>
                          <img src="https://img.icons8.com/ios-glyphs/48/ffffff/plus-math.png" width="16" alt="" />
                        </button>  
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          );
        })
      }
      {!cart.preOrderCart.length && !cart.currentOrder.length && !cart.ordered.length &&
				(<div className=" mt-4 shadow-lg font-semibold text-xl mx-2 border-2 border-pink-700 rounded-lg py-2 px-4">
					You haven't ordered anything yet
					</div>)
      }
      <div className="h-28 w-full"></div>

    </div>
  );
};

export default OrdersCarousel;
