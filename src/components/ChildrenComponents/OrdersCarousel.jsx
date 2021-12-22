import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, connect, useDispatch } from "react-redux";
import { getOrders, addProduct, removeProduct } from "../../redux/actions";


const OrdersCarousel = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { idResto, idTable } = useParams();
  // useEffect(() => {
  //   dispatch(getOrders(idResto, idTable));
  // }, [dispatch]);

  // const add = () => {
    
  //   dispatch(addProduct(order.productId, order.productName, order.image, order.price, order.detail))
  // }
  

  return (
    <div className="mb-auto">
      {cart.ordered.length > 0 &&
        cart.ordered.map((order) => {
          return (
            <div
              key={order.productId}
              className="flex  h-40 float-right  bg-gray-400 text-white rounded-br-3xl w-full mt-2"
            >
              <div className="float-left w-80">
                <div className="absolute bg-gray-800 w-20 h-7 rounded-full ml-10 mt-1 bg-opacity-80">
                  <p className="mt-1">Pedido</p>
                </div>
                <img
                  className="object-cover min-w-full min-h-full "
                  src={order.image}
                  style={{ width: 100, height: 100, borderRadius: 5 }}
                  alt=""
                />
              </div>
              <div className="bg-gray-500 h-40 w-80 float-right">
                <div className="bg-gray-600 h-8">
                  <p className="float-left ml-1 mt-1 text-2xl ">
                    {" "}
                    {order.productName}{" "}
                  </p>
                </div>
                <div className="h-24 mt-1 mx-1 text-xl mb-1">
                  <p className="float-left ml-4"> {order.detail} </p>
                </div>
                <div className="">
                  <div className="float-left w-full bg-gray-800 text-md h-6   ">
                    <h1 className="inline-block text-left "> Cantidad: </h1>
                    <h1 className=" inline-block ml-2 "> {order.quantity}</h1>
                    <h1 className=" inline-block ml-4 pr-2 ">
                      {" "}
                      $ {order.price}{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {cart.currentOrder.length > 0 &&
        cart.currentOrder.map((order) => {
          return (
            <div
              key={order.productId}
              className="flex  h-40 float-right  bg-gray-400 text-white rounded-br-3xl w-full mt-2"
            >
              <div className="float-left w-80">
                <div className="absolute bg-gray-800 w-20 h-7 rounded-full ml-10 mt-1 bg-opacity-80">
                  <p className="mt-1">En Camino</p>
                </div>
                <img
                  className="object-cover min-w-full min-h-full "
                  src={order.image}
                  style={{ width: 100, height: 100, borderRadius: 5 }}
                  alt=""
                />
              </div>
              <div className="bg-gray-500 h-40 w-80 float-right">
                <div className="bg-gray-600 h-8">
                  <p className="float-left ml-1 mt-1 text-2xl ">
                    {" "}
                    {order.productName}{" "}
                  </p>
                </div>
                <div className="h-24 mt-1 mx-1 text-xl mb-1">
                  <p className="float-left ml-4"> {order.detail} </p>
                </div>
                <div className="">
                  <div className="float-left w-full bg-gray-800 text-md h-6   ">
                    <h1 className="inline-block text-left "> Cantidad: </h1>
                    <h1 className=" inline-block ml-2 "> {order.quantity}</h1>
                    <h1 className=" inline-block ml-4 pr-2 ">
                      {" "}
                      $ {order.price}{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {cart.preOrderCart.map((order) => {
        return (
          <div
            key={order.productId}
            className="flex  h-40 float-right  bg-pink-400 text-white rounded-br-3xl w-full mt-2"
          >
            <div className="float-left w-80">
              <img
                className="object-cover min-w-full min-h-full"
                src={order.image}
                style={{ width: 100, height: 100, borderRadius: 5 }}
                alt=""
              />
            </div>
            <div className="bg-pink-500 h-40 w-80 float-right">
              <div className="bg-pink-600 h-8">
                <p className="float-left ml-1 mt-1 text-2xl ">
                  {" "}
                  {order.productName}{" "}
                </p>
              </div>
              <div className="h-24 mt-1 mx-1 text-xl mb-1">
                <p className="float-left ml-4"> {order.detail} </p>
              </div>
              <div className="">
                <div className="float-left w-full bg-pink-600 text-md h-6  ">
                  <h1 className="inline-block text-left "> Cantidad: </h1>
                  <h1 className=" inline-block ml-2 "> {order.quantity}</h1>
                  <h1 className=" inline-block ml-4 pr-2 ">
                    {" "}
                    $ {order.price}{" "}
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-40 w-10 bg-pink-800 float-right rounded-br-xl">
      <button className="mt-12 text-center text-xl" onClick={() => dispatch(addProduct(order.productId, order.productName, order.image, order.price, order.detail))}>
          ➕
        </button>
        <div className=" flex item-center">
        <button className="mt-6 mx-auto" onClick={() => dispatch(removeProduct(order.productId, order.productName, order.image, order.price, order.detail))} disabled={!cart[order.productId] || !cart[order.productId].quantity}>
          ➖</button>
        </div>
      </div>


      </div>

        );
      })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentOrder: state.cart.currentOrder,
    ordered: state.cart.ordered
  };
}

export default connect(mapStateToProps)(OrdersCarousel);
