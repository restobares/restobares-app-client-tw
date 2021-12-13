import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addOrder, removeProduct, addProduct } from "../../redux/actions";


const OrderCard = ({ platillo }) => {
  const {product_name, details, price, img, product_id} = platillo
  
  const { idTable } = useParams();
  
  const dispatch = useDispatch();  
  
  const {cart} = useSelector((state)=>state);

  const add = () => {
    
    dispatch(addProduct(product_id, idTable))
  }
  
  const minus = () => {
    dispatch(removeProduct(product_id, idTable))
  }
    
  
  const addPlatillo = () => {
    dispatch(addOrder(cart));
  };

  return (
    <div className="container mt-5 mb-3 float-left rounded-br-lg bg-pink-400 text-white space-x-0.5">
      <div className="float-left m-0 object-cover">
        <img
          src={img}
          style={{ width: 100, height: 100, borderRadius: 5 }}
          alt=""
        />
      </div>
      <div className="float-left ml-2 mr-3">
        <p className="text-paragraph"> {product_name} </p>
        <p className="float-left mt-1"> {details} </p>
      </div>
      <div className="float-left">
        <p className="mt-1 mb-8"> ${price} </p>
        <button
          className="bg-pink-500 rounded-md mt-4 mb-2 px-2 mr-2"
          type="button"
          onClick={addPlatillo}
        >
          Agregar
        </button>
      </div>
      <div className="rounded-br-lg float-left plus-minus">
        <button className="mt-4" onClick={add}>
          ➕
        </button>
        <h1>{cart[product_id] ? (cart[product_id].quantity || 0)  : 0}</h1>
        <div className="pl-2 flex item-center">
        <button className="mt-0" disabled={!cart[product_id] || cart[product_id]. quantity === 0} onClick={minus}>➖</button>
        </div>
      </div>
    </div>
    
  )
};

export default OrderCard;