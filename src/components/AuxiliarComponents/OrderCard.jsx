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
        <div className="container mt-5 mb-3 float-left rounded-br-lg bg-pink-400 text-white space-x-0.5"> 
          <div className="float-left m-0 ">
            <img src={img} style={{width:100,height:100, borderRadius:5}} alt="" />
          </div>
          <div className="float-left ml-2 mr-3">
            <p className="text-paragraph"> {product_name} </p> 
            <p className="float-left mt-1"> {details} </p>
          </div>
          <div className="float-left">
            <p className="mt-1 mb-8"> ${price} </p>
            <button className="bg-pink-500 rounded-md mt-4 mb-2 px-2 mr-2" type="button" >Agregar</button>
          </div>
            <div className="rounded-br-lg float-left plus-minus">
              <button className="mt-4" onClick={add}>➕</button>
              <div className="pl-2 flex item-center">
                <h1>{valor}</h1> 
              </div>
              <button className="mt-0" onClick={minus}>➖</button>
          </div>
        </div>
    );
}

export default OrderCard;
