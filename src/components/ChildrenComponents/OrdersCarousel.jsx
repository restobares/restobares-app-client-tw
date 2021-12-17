import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../redux/actions";

const OrdersCarousel = () => {
  
  const dispatch = useDispatch();

  const {cart}= useSelector((state)=>state);

  // let addOrder = []

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])
  // for (var i in cart) {
  //   if(i==="count" || i === "billed.cart") continue;
  //   var product_id = cart[i].product_id
  //   var product_quantity = cart[i].quantity
  
  //   var elementFound = menu.find((element) => 
    
  //   element.product_id === product_id);
  //   if(product_quantity>0){
  //   addOrder.push({
  //     name: elementFound.product_name,
  //     price: elementFound.price*product_quantity,
  //     img: elementFound.img,
  //     details: elementFound.details,
  //     product_id: product_id,
  //     quantity: product_quantity
  //   })}
  // }

  // let ordersConfirmed = [];
  // console.log(cart.billedCart)
  // for (var i in cart.billedCart) {
  //   if(i==="count" || i === "billed.cart") continue;
  //   var product_id = cart.billedCart[i].product_id
  //   var product_quantity = cart.billedCart[i].quantity
  
  //   var elementFound = menu.find((element) => 
    
  //   element.product_id === product_id);

  //   if(product_quantity>0){
  //   ordersConfirmed.push({
  //     name: elementFound.product_name,
  //     price: elementFound.price*product_quantity,
  //     img: elementFound.img,
  //     details: elementFound.details,
  //     product_id: product_id,
  //     quantity: product_quantity
  //   })}
  // }


  // let addOrder= cart.map(product=>{
  //   let order= menu.find(ele=>ele.product_id===product.product_id)
  //  return {
  //   ...product, 
  //   order.product_name,
  //   order.details,
  //   order.price,
  // }})
  // menu.find()
  // console.log(addOrder);
  return (
    <div className="mb-auto">
      {cart.preOrderCart.map((el) => {
        return (

          <div className="flex  h-40 float-right  bg-pink-400 text-white rounded-br-3xl w-full mt-2">   
      <div className="float-left w-80">
        <img className="object-cover min-w-full min-h-full"
          src={el.img}
          style={{ width: 100, height: 100, borderRadius: 5 }}
          alt=""
          />
      </div>
      <div className="bg-pink-500 h-40 w-80 float-right">
        <div className="bg-pink-600 h-8">
        <p className="float-left ml-1 mt-1 text-2xl "> {el.name} </p>
        </div>
        <div className="h-24 mt-1 mx-1 text-xl mb-1">
        <p className="float-left ml-4"> {el.details} </p>
        </div>
      <div className="">
        <div className="float-left w-full bg-pink-600 text-md h-6  ">
        <h1 className="inline-block text-left "> Cantidad:   </h1><h1 className=" inline-block ml-2 "> {el.quantity}</h1><h1 className=" inline-block ml-4 pr-2 "> $ {el.price} </h1>
        </div>
      </div>
      </div>

        </div>
        );
      })}
      {cart.ordersConfirmed.length > 0 && cart.ordersConfirmed.map((order) => {
        return (
          
          <div className="flex  h-40 float-right  bg-gray-400 text-white rounded-br-3xl w-full mt-2">   
          <div className="float-left w-80">
            <div className="absolute bg-gray-800 w-20 h-7 rounded-full ml-10 mt-1 bg-opacity-80"><p className="mt-1">Pedido</p></div>
            <img className="object-cover min-w-full min-h-full "
              src={order.img}
              style={{ width: 100, height: 100, borderRadius: 5 }}
              alt=""
              />
          </div>
          <div className="bg-gray-500 h-40 w-80 float-right">
            <div className="bg-gray-600 h-8">
            <p className="float-left ml-1 mt-1 text-2xl "> {order.name} </p>
            </div>
            <div className="h-24 mt-1 mx-1 text-xl mb-1">
            <p className="float-left ml-4"> {order.details} </p>
            </div>
          <div className="">
            <div className="float-left w-full bg-gray-800 text-md h-6   ">
            <h1 className="inline-block text-left "> Cantidad:   </h1><h1 className=" inline-block ml-2 "> {order.quantity}</h1><h1 className=" inline-block ml-4 pr-2 "> $ {order.price} </h1>
            </div>
          </div>
          </div>
    
            </div>
        )
      })}
    </div>
  );
};

export default OrdersCarousel;
