import React from "react";
import { useSelector, useDispatch } from "react-redux";

const OrdersCarousel = ({ pedido, currentOrder }) => {
  // const img = "https://i.blogs.es/579bad/pollo-de-jordi-cruz/1366_2000.jpg";
  const dispatch = useDispatch();
  // const { addOrder } = useSelector((state) => state);

  const {menu, cart}= useSelector((state)=>state);

  let addOrder = []

  for (var i in cart) {
    if(i==="count") continue;
    var product_id = cart[i].product_id
    var product_quantity = cart[i].quantity
  
    var elementFound = menu.find((element) => element.product_id === product_id);
  
    addOrder.push({
      name: elementFound.product_name,
      price: elementFound.price*product_quantity,
      img: elementFound.img,
      details: elementFound.details,
      product_id: product_id,
      quantity: product_quantity
    })
  }


  // let addOrder= cart.map(product=>{
  //   let order= menu.find(ele=>ele.product_id===product.product_id)
  //  return {
  //   ...product, 
  //   order.product_name,
  //   order.details,
  //   order.price,
  // }})
  // menu.find()
  console.log(addOrder);
  return (
    <div className="mb-auto">
      {addOrder.map((el) => {
        return (
          <div className="container mt-5 mb-3 float-left rounded-br-lg bg-pink-400 text-white space-x-0.5">
            <div className="float-left m-0 ">
              <img
                src={el.img}
                style={{ width: 100, height: 100, borderRadius: 5 }}
                alt=""
              />
            </div>
            {/*Titulo*/}

            <div className="flex flex-row ml-4 mt-1 text-left align-items-start">
              <div>
                <p>{el.product_name}</p>
                <p>{el.details}</p>
                <p>${el.price}</p>
                <p>{el.quantity}</p>
                
              </div>
              <div className="bg-pink-500 w-10 h-6 mx-1">Pedido</div>
              {/* {
			  pedido
			  ? <div className="bg-pink-500 w-10 h-6 mx-1">Pedido</div>
			  : <button className="bg-pink-500 w-10 h-6 mx-1">X</button>
		  } */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersCarousel;
