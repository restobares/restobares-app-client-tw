import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../redux/actions";

const menu = [
  {
    product_id: 1,
    product_name: "Hamburguesa",
    details: "Hola soy la descripción de tu platillo.",
    price: 10.00,
    img: "https://milrecetas.net/wp-content/uploads/2018/01/Hamburguesa-casera-con-tocineta-2.jpg",
    discount_id: 1,
    category_id: 1,
    labels: [1, 2, 3],
  },
  {
    product_id: 2,
    product_name: "Milanesa de pollo",
    details: "Hola soy la descripción de tu platillo.",
    price: 15.00,
    img: "https://saboryestilo.com.mx/wp-content/uploads/2019/09/recetas-superama-milanesa-de-pollo-600x300.jpg",
    discount_id: 2,
    category_id: 2,
    labels: [1, 2, 3],
  },
  {
    product_id: 3,
    product_name: "Tacos",
    details: "Hola soy la descripción de tu platillo.",
    price: 9.00,
    img: "https://i0.wp.com/www.cuboinformativo.top/wp-content/uploads/2020/10/comida-tipica-de-cancun.jpg?resize=600%2C300&ssl=1",
    discount_id: 3,
    category_id: 3,
    labels: [1, 2, 3],
  },
  {
    product_id: 4,
    product_name: "Pizza",
    details: "Hola soy la descripción de tu platillo.",
    price: 14.00,
    img: "https://s3.amazonaws.com/cdn.conectate-new.com/wp-content/uploads/2021/03/02201833/Pizza-Hut-Republica-Dominicana.jpg",
    discount_id: 4,
    category_id: 4,
    labels: [1, 2, 3],
  },

{
    product_id: 5,
    product_name: "Empanadas",
    details: "Hola soy la descripción de tu platillo.",
    price: 20.00,
    img: "https://informaciongastronomica.com/wp-content/uploads/2019/01/empanada2.jpg",
    discount_id: 5,
    category_id: 5,
    labels: [1, 2, 3],
  },
  {
    product_id: 6,
    product_name: "Bandeja paisa",
    details: "Hola soy la descripción de tu platillo.",
    price: 18.00,
    img: "https://img1.wsimg.com/isteam/ip/9d354e1d-14a1-4160-9592-069c2b7e3474/Bandeja-Paisa.jpg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:600,h:300,cg:true",
    discount_id: 6,
    category_id: 6,
    labels: [1, 2, 3],
  },
  {
    product_id: 7,
    product_name: "Fernet papá",
    details: "Hola soy la descripción de tu platillo.",
    price: 10.00,
    img: "https://pbs.twimg.com/media/B4iFFySIEAA8sf5.jpg",
    discount_id: 7,
    category_id: 7,
    labels: [1, 2, 3],
  }
];


const OrdersCarousel = ({ pedido, currentOrder }) => {
  // const img = "https://i.blogs.es/579bad/pollo-de-jordi-cruz/1366_2000.jpg";
  const dispatch = useDispatch();
  // const { addOrder } = useSelector((state) => state);

  const {cart}= useSelector((state)=>state);

  let addOrder = []

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch])
  for (var i in cart) {
    if(i==="count" || i === "billed.cart") continue;
    var product_id = cart[i].product_id
    var product_quantity = cart[i].quantity
  
    var elementFound = menu.find((element) => 
    
    element.product_id === product_id);
    if(product_quantity>0){
    addOrder.push({
      name: elementFound.product_name,
      price: elementFound.price*product_quantity,
      img: elementFound.img,
      details: elementFound.details,
      product_id: product_id,
      quantity: product_quantity
    })}
  }

  let ordersConfirmed = [];
  console.log(cart.billedCart)
  for (var i in cart.billedCart) {
    if(i==="count" || i === "billed.cart") continue;
    var product_id = cart.billedCart[i].product_id
    var product_quantity = cart.billedCart[i].quantity
  
    var elementFound = menu.find((element) => 
    
    element.product_id === product_id);

    if(product_quantity>0){
    ordersConfirmed.push({
      name: elementFound.product_name,
      price: elementFound.price*product_quantity,
      img: elementFound.img,
      details: elementFound.details,
      product_id: product_id,
      quantity: product_quantity
    })}
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
  // console.log(addOrder);
  return (
    <div className="mb-auto">
      {addOrder.map((el) => {
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
      {ordersConfirmed.length > 0 && ordersConfirmed.map((order) => {
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
