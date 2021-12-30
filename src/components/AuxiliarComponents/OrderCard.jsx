import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { removeProduct, addProduct } from "../../redux/actions";


const OrderCard = ({ product }) => {
  const {name, detail, price, image, id} = product
  
  // const { idTable } = useParams();
  
  const dispatch = useDispatch();  
  
  const {cart} = useSelector((state)=>state);

  const add = () => {
    
    dispatch(addProduct(id, name, image, price, detail))
  }
  
  const minus = () => {
    dispatch(removeProduct(id))
  }
    
  
  /* Order Card -----> Ruta menu */

  return ( 
    
    <div className=" flex-shrink-0 mt-4"> 
    <div className="flex w-full h-40  rounded-br-xl border-t-2  border-pink-800 ">
      <div className="h-40 flex-grow text-xs text-gray-400 float-right">
        <img className="object-cover  min-w-full min-h-full max-h-full max-w-full "
          src={image}
          alt="Food Img"
        />
      </div>
      <div className="flex flex-col h-40 w-48  float-right flex-shrink-0 ">
        <div className="inline-block w-full min-w-full  bg-white h-6 border-b-2 border-pink-700 ">
          <p className="inline-block float-left ml-2 text-sm ">{name}</p>
          <p className="inline-block float-right text-sm font-semibold mr-1" >{price}$</p>
        </div>
        <div className=" flex flex-row-reverse  w-full h-full">
          <div className="float-right bg-pink-700 h-full w-8 item-center rounded-br-xl">
            <button className="mt-8 text-center text-xl" onClick={add}>➕</button>
            <button className="mt-6 mx-auto" disabled={!cart[id] || !cart[id].quantity} onClick={minus}>➖</button>
          </div>
          <div className="flex flex-col">
            <p className="text-left ml-2 mt-2 text-xs h-full">{detail}</p>
            <hr className="mx-2 mb-1 border-pink-700 "/>
            <div className="inline-block float-left pb-1 bottom-0 border-b-2 border-pink-700"> 
              <p className="inline-blcok float-left ml-1 ">Cant</p>
              <p className="inline-block float-left ml-10"> {cart[id] ? cart[id].quantity : 0}</p>  
              <p  className="inline-block float-right font-semibold mr-2">$</p>
              <p className="inline-block float-right font-semibold mr-2">{!cart[id] ? '---' : !cart[id].quantity ? '---' : cart[id].quantity*price}</p>
            </div> 
          </div>
        </div>
      </div> 
    </div>
  </div>
    )
  };
  
export default OrderCard;

