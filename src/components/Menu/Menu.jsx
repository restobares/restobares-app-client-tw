import React, { Fragment, useState } from 'react';
/* import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/reducers/counter'; */

//componente platillo
import Platillo from './Platillo';
import Cart from '../Routes/OrderBoard/Cart';



export default function Menu (/* props: {name, description, price, img} */ onClose) {

  /* const {valor} = useSelector(state => state.counter)

  const dispatch = useDispatch();

  const add = () => {
    dispatch(increment())
  }

  const minus = () => {
    dispatch(decrement())
  } */
  
  // Estado de platillos con su listado
  const [platillos, setPlatillos] = useState ([
    {
      id: 1,
      name: "Platillo 1",
      description: "Hola soy la descripción de tu platillo.",
      price: "$10.00",
      img: "https://i1.wp.com/www.cuboinformativo.top/wp-content/uploads/2021/01/Corundas-tamales-de-la-gastronomia-de-michoacan.jpg?resize=600%2C300&ssl=1",
    },
    {
      id: 2,
      name: "Platillo 2",
      description: "Hola soy la descripción de tu platillo.",
      price: "$15.00",
      img: "https://i.pinimg.com/originals/08/be/44/08be448d575659684e0dbc08445e9cff.png",
    },
    {
      id: 3,
      name: "Platillo 3",
      description: "Hola soy la descripción de tu platillo.",
      price: "$9.00",
      img: "https://i0.wp.com/www.cuboinformativo.top/wp-content/uploads/2020/10/comida-tipica-de-cancun.jpg?resize=600%2C300&ssl=1",
    },
    {
      id: 4,
      name: "Platillo 4",
      description: "Hola soy la descripción de tu platillo.",
      price: "$14.00",
      img: "https://magazine.velasresorts.com/wp-content/uploads/2021/04/tacos-estilo-la-paz.jpeg",
    },
    {
      id: 5,
      name: "Platillo 5",
      description: "Hola soy la descripción de tu platillo.",
      price: "$20.00",
      img: "https://www.turismopuebla.es/wp-content/uploads/2018/06/tacos_arabes.jpg",
    },
    {
      id: 6,
      name: "Platillo 6",
      description: "Hola soy la descripción de tu platillo.",
      price: "$18.00",
      img: "https://i.pinimg.com/736x/fe/ae/28/feae28436ed812c2fbc5024cc63fe020--carne-asada-mexico.jpg",
    }
  ]);

  // Estado del carrito

  const [cart, setCart] = useState([]);


    return (
      <Fragment>
        <Cart 
         cart={cart}
        />
        {platillos.map((platillo) =>(
         <Platillo 
          key={platillos.id}
          platillo={platillo}
          cart={cart}
          setCart={setCart}
          platillos={platillos}
         />
        ))}

      </Fragment>
     )
}



/*

{
        platillos.map((platillo) => {
          return (
            
            <div className="container mt-5 mb-3 float-left"> 
              <div className="float-left">
                <img src={platillo.img} style={{width:100,height:100, borderRadius:5}} alt="" />
              </div>
              <div className="float-left ml-2 mr-3">
                <p className="text-paragraph"> {platillo.name} </p> 
                <p className="float-left"> {platillo.description} </p>
              </div>
              <div className="float-left">
                <button className="mt-4" onClick={add}>➕</button>
                <h1 className="">{valor} </h1>
                <button className="" onClick={minus} >➖</button>
              </div>
              <div>
                <p className="justifi-center mt-10"> {platillo.price} </p>
              </div>
            </div>

          )
        })
       }

*/