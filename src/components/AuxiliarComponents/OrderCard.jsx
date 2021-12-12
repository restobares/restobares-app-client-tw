<<<<<<< HEAD
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../../redux/actions/addOrder";

const OrderCard = ({ platillo }) => {
  const { product_name, details, price, img } = platillo;

  // const { valor } = useSelector((state) => state.productCounter);

  const dispatch = useDispatch();

  // const add = () => {
  //   dispatch(increment());
  // };

  // const minus = () => {
  //   dispatch(decrement());
  // };
  const addPlatillo = () => {
    dispatch(addOrder(platillo));
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
        <button className="mt-4">
          ➕
        </button>
        <div className="pl-2 flex item-center">
          <h1>123</h1>
=======
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { addOrder, removeOrder } from "../../redux/actions";

const OrderCard = ({platillo}) => {

  const {product_name, details, price, img, product_id} = platillo
  
  const { idTable } = useParams();
  
  const dispatch = useDispatch();  
  
  const add = () => {
    
    dispatch(addOrder(product_id, idTable))
  }

  const minus = () => {
    dispatch(removeOrder(product_id, idTable))
  }
    
  const cart = useSelector((state) => state.cart);
  
      return (
      <div className="container mt-5 mb-3 float-left"> 
          <div className="float-left">
            <img src={img} style={{width:100,height:100, borderRadius:5}} alt="" />
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
            <h1>{cart[product_id] ? cart[product_id].quantity : 0}</h1>
            {/* <h1>{contador}</h1> */}
            <button className="mt-8" disabled={!cart[product_id] || cart[product_id]. quantity === 0} onClick={minus}>➖</button>
          </div>
>>>>>>> 63462ebc7ab8ebdbe438c982b0772792ecbabdb7
        </div>
        <button className="mt-0" >
          ➖
        </button>
      </div>
    </div>
  );
};


export default OrderCard;