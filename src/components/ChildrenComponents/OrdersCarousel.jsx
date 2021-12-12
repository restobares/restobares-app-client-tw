import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
  }
];
const OrdersCarousel = ({ pedido, currentOrder }) => {
  // const img = "https://i.blogs.es/579bad/pollo-de-jordi-cruz/1366_2000.jpg";
  const dispatch = useDispatch();
  // const { addOrder } = useSelector((state) => state);

  const {cart}= useSelector((state)=>state);

  let addOrder = []

  for (var i in cart) {
    if(i==="count") continue;
    var product_id = cart[i].product_id
    var product_quantity = cart[i].quantity
  
    var elementFound = menu.find((element) => 
    
    element.product_id === product_id);
  
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
                <p>Total Price: ${el.price}</p>
                <p>Quantity: {el.quantity}</p>
                
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
