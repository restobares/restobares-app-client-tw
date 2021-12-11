import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/reducers/productCounter';



const OrderCard = ({platillo}) => {


    const {valor} = useSelector(state => state.productCounter)

    const dispatch = useDispatch();

    const add = () => {
      dispatch(increment())
    }

    const minus = () => {
      dispatch(decrement())
    }

    const {product_name, details, price, img} = platillo

    return (
        <div className="container mt-5 mb-3 float-left"> 
          <div className="float-left">
            <img src={img} style={{width:100,height:100, borderRadius:5}} alt="" />
          </div>
          <div className="float-left">
            <h1>{valor}</h1> {/* posicionarlo debajo de la descripción*/}
          </div>
          <div className="float-left ml-2 mr-3">
            <p className="text-paragraph"> {product_name} </p> 
            <p className="float-left mt-1"> {details} </p>
          </div>
          <div className="float-left">
            <p className="justifi-center mt-1 mb-8"> ${price} </p>
            <button className="bg-red-200 rounded-md mt-4" type="button" >Agregar</button>
          </div>
          <div className="float-left ml-2">
            <button className="mt-4" onClick={add}>➕</button>
            <h1></h1>
            <button className="mt-8" onClick={minus}>➖</button>
          </div>
        </div>
    );
}

export default OrderCard;
