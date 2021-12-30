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
      {/* <div className="w-54 h-6 bg-gray-600"></div>
      <div className=" h-36 w-44 flex-shrink-0 bg-white float-right">
        <div className="  border-t-2 border-pink-800 w-40 float-right ml-2"></div>
        <div className="float-left inline-block ml-4 text-md w-12 h-6 bg-gradient-to-l from-pink-600"></div>
        

        <p className="inline-block mt-1 ml-2 float-left"> Cant</p> <p className="inline-block float-left mt-1 ml-10"> {cart[id] ? cart[id].quantity : 0}</p>  <p className="float-right mt-1 mr-2">{!cart[id] ? '---' : !cart[id].quantity ? '---' : cart[id].quantity*price}$</p>

      </div>
      <div className="h-40 w-10 flex-shrink-0 bg-pink-800 float-right rounded-br-xl">
      <div className="bg-white w-10 h-6"></div>
      <button className="mt-12 text-center text-xl" onClick={add}>
          ➕
        </button>
        <div className=" flex item-center">
        <button className="mt-6 mx-auto" disabled={!cart[id] || !cart[id].quantity} onClick={minus}>
          ➖</button>
        </div>
      </div> */}
    </div>
    {/* <div className=" flex-shrink-0 mt-4"> 
        <div className="flex w-full h-40  rounded-br-xl ">
          <div className="h-40 flex-grow bg-yellow-100 float-right">
            <img className="object-cover min-w-full min-h-full max-h-full max-w-full"
              src={image}
              alt="asd"
            />
          </div>
          <div className="h-40 min-w-min bg-pink-900 float-right ">
            <div className="h-40 bg-pink-400 w-40 flex bg-opacity-50">
              <div className="h-8 w-full bg-pink-600 bg-opacity-80">
              <p className="mt-2 text-md text-left ml-1 text-white">{name}</p>
              <div className="w-ful h-8 text-white  border-b-2 border-pink-900  ">
                <div className="inline-block mt-2 w-full">
              <p className="float-left inline-block ml-4 text-md">Precio</p> <p className="float-right text-md  inline-block mr-4"> {price}$ </p>
                </div>
              </div>
              <div className=" bg-black h-14 mr-2 mx-2  mt-2 rounded-md bg-opacity-20 text-white"><p className="mx-2 ">{detail}</p></div>
              <div className="flex h-10 w-full mt-1  text-white">
                <div className="flex-grow-1 h-10 w-full mx-2 ">
                  <div className=" bg-pink-800 h-8 rounded-xl bg-opacity-80 w-full flex-grow-1">
                    <p className="inline-block mt-1 ml-2 float-left"> Cant</p> <p className="inline-block float-left mt-1 ml-10"> {cart[id] ? cart[id].quantity : 0}</p>  <p className="float-right mt-1 mr-2">{!cart[id] ? '---' : !cart[id].quantity ? '---' : cart[id].quantity*price}$</p>
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
            <button className="mt-6 mx-auto" disabled={!cart[id] || !cart[id].quantity} onClick={minus}>
              ➖</button>
            </div>
          </div>
        </div>
        
      </div> */}
  </div>
    )
  };
  
export default OrderCard;

