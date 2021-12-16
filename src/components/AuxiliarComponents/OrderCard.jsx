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
    
  
  /* Order Card -----> Ruta menu */

  return ( 
  <div className=" mx-2 mr-2 mt-2 h-screen flex flex-col overflow-auto"> 
    <div className="flex w-full h-40  rounded-br-xl ">
      <div className="h-40 flex-grow bg-yellow-100 float-right">
        <img className="object-cover min-w-full min-h-full max-h-full max-w-full"
          src={img}
          alt="asd"
        />
      </div>
      <div className="h-40 min-w-min bg-pink-900 float-right ">
        <div className="h-40 bg-pink-400 w-40 flex bg-opacity-50">
          <div className="h-8 w-full bg-pink-600 bg-opacity-80">
          <p className="mt-1 text-xl text-white">{product_name}</p>
          <div className=" bg-black h-16 mr-2 mx-2 mt-4 rounded-md bg-opacity-20 text-white">{details}</div>
          <div className="flex h-10 w-full mt-2   text-white">
            <div className="flex-grow-1 h-10 w-full mx-2 ">
              <div className=" mt-1 bg-pink-800 h-8 rounded-xl bg-opacity-80 w-full flex-grow-1">
                <p className="fixed mt-1 ml-2"> Cant</p> <p className="fixed mt-1 ml-10"> {cart[product_id] ? cart[product_id].quantity : 0}</p>  <p className="float-right mt-1 mr-2">{!cart[product_id] ? '---' : !cart[product_id].quantity ? '---' : cart[product_id].quantity*price}$</p>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div> 
      <div className="h-40 w-10 bg-pink-800 float-right rounded-br-xl">
      <button className="mt-12 text-center text-xl" onClick={add}>
          ➕
        </button>
        <div className=" flex item-center">
        <button className="mt-6 mx-auto" disabled={!cart[product_id] || !cart[product_id].quantity} onClick={minus}>
          ➖</button>
        </div>
      </div>
    </div>
  </div>
  )
};

export default OrderCard;

