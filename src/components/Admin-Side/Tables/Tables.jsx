import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Moment from 'moment';
import { getMenu, getTables } from "../../../redux/actions";
import AddOrder from "./AddOrder";
import ChangeStatus from "./ChangeStatus";
export default function Tables() {
  const { idResto } = useParams();
  const dispatch = useDispatch();
  const [time, setTime] = useState(Date.now());
  let tokenStaff = Cookies.get("token-staff");
  let tokenAdmin = Cookies.get("token-admin");
  const tables = useSelector((state) => state.tables);
  const ordered = useSelector((state) => state.cart.ordered);
  
  useEffect(() => {
    dispatch(getMenu(idResto, detailTable))
    const interval = setInterval(() => setTime(Date.now()), 20000);
    if (tokenStaff) {
      dispatch(getTables(idResto, tokenStaff));
    }
    if (!tokenStaff && tokenAdmin) {
      dispatch(getTables(idResto, tokenAdmin));
    }
    return () => {
      clearInterval(interval);
    };
  },[dispatch]);


  const [detailTable,setDetailTable] = useState (null);

  const handleButton = (e) => {
    e.preventDefault()
    console.log("event ",e.target.name)
    console.log("detail table ",detailTable)
    detailTable === Number(e.target.name) 
    ? setDetailTable(null)
    : setDetailTable(Number(e.target.name))
    detailTable === Number(e.target.name) && dispatch(getMenu(idResto ,detailTable))
  }
  return  <div className=" h-full w-full  flex flex-col  overflow-scroll">
            <div className="h-8 bg-gray-300  text-sm flex flex-row mt-2 rounded-xl ">
              <p className="inline-block w-2/12 ml-2 mt-1" >Numero</p>
              <p className="inline-block w-3/12 ml-6  mt-1">Hora</p>
              <p className="inline-block w-7/12  mt-1 ml-8 text-left">Estado</p>
            </div>
              {tables.map( el => (
                <div
                  key={el.tableId}
                  className="w-full border-2 border-gray-400 rounded-xl flex flex-col mt-2  text-sm  font-semibold  ">          
                  <div className="h-8 w-full  flex flex-row  ">
                    <p className="w-2/12 mt-1 font-semibold" > {Number(el.tableId)} </p>
                    <p className="w-3/12 mt-1 ml-8 truncate"> {el.currentOrder.time || "----"}  </p>
                    <div className="w-7/12 text-left ml-8 ">
                      {el.state === "free" 
                      ? <p className="inline-block text-lg font-semibold text-green-800 "> {el.state}</p>
                      : <p className="inline-block text-lg font-semibold text-pink-800 "> {el.state}</p>
                      }
                       <input  type="image" name={el.tableId} 
                                onClick={(e) => handleButton(e)}  className="inline-block float-right mt-3 mr-2"
                                src={detailTable === el.tableId 
                                    ? "https://img.icons8.com/ios/50/000000/collapse-arrow--v1.png"
                                    : "https://img.icons8.com/ios/50/000000/expand-arrow--v1.png"
                                    }
                                alt=""
                                width="12"
                        />                                
                    </div>

                  </div>
                  <div className={detailTable === el.tableId  && el.state !== "free"
                    ? [" bg-gray-300 rounded-md  mx-1 mb-1 py-2"]: ""}>
                    {detailTable === el.tableId 
                          &&  [ <ChangeStatus/>,
                                el.state !== "free" && <AddOrder/>  
                              ]
                    }
                    {detailTable === el.tableId && el.state !== "free"
                          &&  <div className="h-6 mt-1 mx-2 bg-pink-800 bg-opacity-10 rounded-md">
                                  <p className="inline-block float-left text-left ml-2 w-3/12  font-semibold">Nombre</p>
                                  <p className="inline-block text-center float-left ml-2 w-1/12  font-semibold truncate">Cant</p>
                                  <p className="inline-block float-left ml-2 w-1/12  font-semibold truncate">Sub-Total</p>
                                  <p className="inline-block float-left ml-2 w-2/12 font-semibold truncate">Hora</p>
                              </div> }
                    {detailTable === el.tableId 
                    && <div className="flex flex-col border-2 border-pink-700 border-opacity-20 mx-1 mt-1 rounded-lg">
                          <div className="h-6 mx-1 bg-gray-200 rounded-md font-semibold mt-1">
                          Nueva Orden
                          </div>                    
                          {el.currentOrder.products.map(el => (
                              <div className="h-6 mx-1 bg-gray-100 rounded-md border-b-2 border-gray-300 mt-1  ">    
                                <p className="inline-block float-left ml-2 w-3/12 truncate text-left">{el.productName}</p>
                                <p className="inline-block float-left ml-2 w-1/12 truncate">{el.quantity}</p>
                                <p className="inline-block float-left ml-2 w-1/12 truncate">{el.quantity * el.price} $</p>
                                <p className="inline-block float-left ml-2 w-2/12 truncate">{Moment(el.time).format("HH:mm:ss")}</p>
                              </div>
                          ))}  
                        </div> 
                    }
                    {detailTable === el.tableId 
                    && <div className="flex flex-col border-2 border-pink-700 border-opacity-20 mx-1 mt-1 rounded-lg">
                          <div className="h-6 mx-1 bg-gray-200 rounded-md font-semibold mt-1 mb-1">
                          Ordenes Despachadas
                          </div>                    
                          {ordered.map(el => (
                              <div className="h-6 mx-1 bg-gray-100 rounded-md border-b-2 border-gray-300 mt-1  ">    
                                <p className="inline-block float-left ml-2 w-3/12 truncate text-left">{el.productName}</p>
                              </div>
                          ))}  
                        </div> 
                    }


                  </div>
              </div>
              ))}
          </div>
}