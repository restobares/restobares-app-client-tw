import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addOrder, removeProduct, addProduct } from "../../redux/actions";


const OrderCard = ({ platillo }) => {
  const {product_name, details, price, img, product_id} = platillo
  
  const { idTable } = useParams();
  
  const dispatch = useDispatch();  
  
  const add = () => {
    
    dispatch(addProduct(product_id, idTable))
  }
  
  const minus = () => {
    dispatch(removeProduct(product_id, idTable))
  }
    
  const cart = useSelector((state) => state.cart);
  
  const addPlatillo = () => {
    dispatch(addOrder(platillo));
  };

  return (
    <div className="flex  mr-8 mt-5  h-60 float-right  bg-pink-400 text-white rounded-br-3xl w-11/12 ">
      <div className="float-left w-80">
        <img className="object-cover min-w-full min-h-full"
          src={img}
          style={{ width: 100, height: 100, borderRadius: 5 }}
          alt=""
        />
      </div>
      <div className="bg-pink-500 h-60 w-80 float-rightt ">
        <p className=" float-left ml-2 mt-2 text-3xl "> {product_name} </p>
        <div className="float-right bg-pink-600 w-24 h-10 rounded-bl-xl ">
        <p className="text-right text-2xl mt-1 mr-2"> ${price} C/U </p>
        </div>
        <div className="h-36 bg-pink-400 mt-12 mr-2 text-xl rounded-xl">
        <p className="float-left mt-1 ml-2"> {details} </p>
        </div>
      <div className="float-ri">
        <div className="float-left  w-48 bg-pink-700 text-xl h-8 mt-2 rounded-md px-2 mx-2">
        <h1 className="inline-block mt-1"> Cantidad:   </h1><h1 className=" inline-block ml-4 "> {cart[product_id] ? cart[product_id].quantity : 0}</h1><h1 className=" inline-block ml-4 pr-2 "> XXXX $</h1>
        </div>
        <button
          className=" bg-pink-700 h-8 text-2xl rounded-md mt-2 mb-2 px-2 mr-2 ml-4"
          type="button"
          onClick={addPlatillo}> Agregar </button>
      </div>
      </div>
      <div className="bg-pink-700 w-16 float-right rounded-br-3xl ">
        <button className="mt-12 text-center text-2xl" onClick={add}>
          ➕
        </button>
        <div className="pl-2 flex item-center">
        <button className="mt-12 mx-auto" disabled={!cart[product_id] || cart[product_id]. quantity === 0} onClick={minus}>➖</button>
        </div>
      </div>
    </div>
    
  )
};

export default OrderCard;