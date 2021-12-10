import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/reducers/productCounter';



const Platillo = ({platillo, cart, setCart, platillos}) => {


    const {valor} = useSelector(state => state.counter)

    const dispatch = useDispatch();

    const add = () => {
      dispatch(increment())
    }

    const minus = () => {
      dispatch(decrement())
    }

    const {name, description, price, img, id} = platillo

   //agregar al carrito
    const addPlatillo = (id) => {
        const platillo = platillos.filter((platillo) => platillo.id === id)
        setCart([...cart, ...platillo])
    }

    //eliminar
    const delPlatillo = (id) => {
        const platillos = cart.filter((platillo) => platillo.id !== id)
        setCart(platillos)
    }



    return (
        <div className="container mt-5 mb-3 float-left"> 
          <div className="float-left">
            <img src={img} style={{width:100,height:100, borderRadius:5}} alt="" />
          </div>
          <div className="float-left ml-2 mr-3">
            <p className="text-paragraph"> {name} </p> 
            <p className="float-left"> {description} </p>
          </div>
          <div className="float-left">
            <button className="mt-4" onClick={add}>➕</button>
            <h1 className="">{valor}</h1>
            <button className="" onClick={minus}>➖</button>
          </div>
          <div>
            <p className="justifi-center mt-3 mb-5"> {price} </p>
          </div>

          {platillos ? (
            (
            <div>
              <button className="bg-red-200 rounded-md" type="button" onClick={() => addPlatillo(id)} >Agregar</button>
            </div>
            )
          ) : (
              <div>
                <button className="bg-green-400 rounded-md pr-1 pl-1" type="button" onClick={() => delPlatillo(id)} >✔</button>
                <button className="bg-red-400 rounded-md pr-1 pl-1" type="button" onClick={() => delPlatillo(id)} >✖</button>
              </div>
          )}

        </div>
    );
}

export default Platillo;