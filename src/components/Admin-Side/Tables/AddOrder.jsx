import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../../redux/actions";
import Moment from "moment";
import  Search  from "../../AuxiliarComponents/Search";
import { Fragment } from "react";

export default function AddOrder(id,) {
    const dispatch = useDispatch()
    const [bar, setBar] = useState(false)
    const menu = useSelector((state) => state.menus.menu)
    const cart = useSelector((state) => state.cart.ordered);

    const handleButton = (e) => {
      e.preventDefault()
      setBar(!bar)
    }

    const HandleAddItem = (e) => {
      e.preventDefault()
      dispatch(addProduct(e.target.id, e.target.ProductName, e.target.image,  e.target.price , e.target.detail))
    }
    return ( 
      <div className="flex flex-col">
        <div className="mx-2 py-1 bg-gray-700 bg-opacity-10 rounded-md flex flex-row justify-between ">
          <p className="inline-block float-left ml-2 ">Agregar Pedido</p>
          <input  type="image"  
              name={id} 
              onClick={(e) => handleButton(e)}  className="inline-block float-right mt-1 mr-2 flex-shrink-0 h-3"
              src={bar
                ? "https://img.icons8.com/ios/50/000000/collapse-arrow--v1.png"
                : "https://img.icons8.com/ios/50/000000/expand-arrow--v1.png"
              }
              alt=""                      
              />  
        </div>
          {bar && <div className="flex flex-col bg-gray-200 mx-2 mt-2 rounded-md h-60 ">
                    <div className=" flex flex-row">
                      <div className="bg-gray-300 mt-1 rounded-md w-6/12 mx-1 h-40 overflow-y-scroll">
                      {menu && menu.map(el => ( 
                        <button 
                          className="h-6 max-w-full min-w-full  my-1"
                          id={el.id}
                          ProductName ={el.name}
                          image={el.image}
                          price={el.price}
                          detail={el.detail}
                          onClick={e => HandleAddItem(e)}
                          >
                          <div className=" bg-white rounded-md mx-1 h-full">
                            <p className="inline-block text-xs float-left w-8/12 text-left ml-1 truncate mt-1">{el.name}</p>
                            <p className="inline-block text-xs float-right w-2/12 text-right mr-3 mt-1 ">{el.price}$</p>
                          </div>
                        </button>  
                      ))}
                      </div>
                      <div className="bg-gray-300 mt-1 rounded-md w-6/12 mx-1 h-40">
                        {cart && cart.map(el => (
                          <p>{el.ProductName}</p>
                        ))}
                      </div>
                    </div> 
                    <div className="bg-gray-300 mt-2 rounded-md mx-1 h-16"></div>
                  </div>
          }
      </div>
  );
}
