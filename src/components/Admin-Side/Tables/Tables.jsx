import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Moment from 'moment';
import { getTables } from "../../../redux/actions";
import ChangeStatus from "./ChangeStatus";
import ChangeOrder from "./ChangeOrder";
import { deleteProductFromTable, putTableEating, putTableCashPayment, sockets } from '../../../redux/actions';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export default function Tables() {

  const dispatch = useDispatch();
  const { idResto } = useParams();
  let tokenStaff = Cookies.get("token-staff");
  let tokenAdmin = Cookies.get("token-admin");
  const tables = useSelector((state) => state.tables);
  
  useEffect(() => {
		sockets.joinResto(idResto);
    if (tokenStaff) {
      dispatch(getTables(idResto, tokenStaff));
    }
    if (!tokenStaff && tokenAdmin) {
      dispatch(getTables(idResto, tokenAdmin));
    }
		// Get tables when some diner does something
		sockets.staffListen(() => {
    	if (tokenStaff) {
    	  dispatch(getTables(idResto, tokenStaff));
    	}
    	if (!tokenStaff && tokenAdmin) {
    	  dispatch(getTables(idResto, tokenAdmin));
    	}
    });
  }, [dispatch, idResto]);


  const [detailTable,setDetailTable] = useState (null);


  const handlePutEating = async (e) => {
    e.preventDefault()
    sockets.joinResto(idResto); 
    if (tokenStaff) {
      
      await dispatch(putTableEating(idResto, detailTable, tokenStaff))
      dispatch(getTables(idResto, tokenStaff));
			sockets.staffSend();
    }
    if (!tokenStaff && tokenAdmin) {
      
      await dispatch(putTableEating(idResto, detailTable, tokenAdmin))
      dispatch(getTables(idResto, tokenAdmin));
			sockets.staffSend();
    }    
  }

  const handleDelete = async (productId, quantity) => {
    sockets.joinResto(idResto); 
    if (tokenStaff) {
      
      await dispatch(deleteProductFromTable(idResto, detailTable, productId, quantity, tokenStaff));
      dispatch(getTables(idResto, tokenStaff));
			sockets.staffSend();
    }
    if (!tokenStaff && tokenAdmin) {
      
      await dispatch(deleteProductFromTable(idResto, detailTable, productId, quantity, tokenAdmin));
      dispatch(getTables(idResto, tokenAdmin));
			sockets.staffSend();
    }
  }
  
  const handleCashPayment = async () => {
    sockets.joinResto(idResto); 
    if (tokenStaff) {
      await dispatch(putTableCashPayment(idResto, detailTable, tokenStaff));
      dispatch(getTables(idResto, tokenStaff));
			sockets.staffSend();
    }
    if (!tokenStaff && tokenAdmin) {
      await dispatch(putTableCashPayment(idResto, detailTable, tokenAdmin));
      dispatch(getTables(idResto, tokenAdmin));
			sockets.staffSend();
    }
  }

  const handleButton = (e) => {
    e.preventDefault()
    detailTable === Number(e.target.name) 
    ? setDetailTable(null)
    : setDetailTable(Number(e.target.name))
  }
  return  <div className=" h-full w-full  flex flex-col  overflow-scroll">
            <div className="h-8 bg-gray-300  text-sm flex flex-row mt-2 rounded-xl ">
              <p className="w-2/12 ml-2 mt-1" >Numero</p>
              <p className="w-3/12 ml-4  mt-1">Hora</p>
              <p className="w-7/12  mt-1 mr-5">Estado</p>
            </div>
              {tables.map( el => (
                <div
                  key={el.tableId}
                  className="w-full border-2 border-gray-400 rounded-xl flex flex-col mt-2  text-sm  font-semibold  ">
                  <div className="h-8 w-full  flex flex-row  ">
                    <p className="w-2/12 mt-1 font-semibold" > {Number(el.tableId)} </p>
                    <p className="w-3/12 mt-1 ml-4 truncate"> {el.currentOrder.time || "----"}  </p>
                    <div className="w-7/12 ">
                      {el.state !== "free" 
                      ? <p className="inline-block text-lg font-semibold text-pink-800">
                      {el.state}
                      </p>
                      : <p className="inline-block text-lg font-semibold text-green-800">
                      {el.state}
                      </p>                    
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
                { detailTable === Number(el.tableId) &&
                  <div className={detailTable === el.tableId 
                    ? [" bg-gray-300 rounded-md  mx-1 mb-1 py-2"]: ""}>
                    {detailTable === el.tableId && el.state !== "free" 
                      && <ChangeStatus/>
                    }
                    <ChangeOrder detailTable={el.tableId} />
                    <div className="flex flex-col ">
                    {el.ordered.length > 0 && el.currentOrder.products.length > 0 &&
                          <div className="h-6 mt-1 mx-2 bg-pink-800 bg-opacity-10 rounded-md">
                            <p className="inline-block float-left text-left ml-2 w-3/12  font-semibold">Nombre</p>
                            <p className="inline-block text-center float-left ml-2 w-1/12  font-semibold truncate">Cant</p>
                            <p className="inline-block float-left ml-2 w-1/12  font-semibold truncate">Sub-Total</p>
                            <p className="inline-block float-left ml-2 w-2/12 font-semibold truncate">Hora</p>
                          </div>                  
                    }
                      {el.ordered.length > 0 && 
                        <div>

                          <div className="h-6 mx-2 bg-gray-500 bg-opacity-60 text-white rounded-md border-b-2 border-gray-300 mt-1">
                                  Ordered
                          </div>
                          
                      {el.ordered.map(el => (
                        <div className="h-6 mx-2 bg-gray-100 rounded-md border-b-2 border-gray-300 mt-1  ">    
                          <p className="inline-block float-left ml-2 w-3/12 truncate text-left">{el.productName}</p>
                          <p className="inline-block float-left ml-2 w-1/12 truncate">{el.quantity}</p>
                          <p className="inline-block float-left ml-2 w-1/12 truncate">{el.price * el.quantity}$</p>
                          <p className="inline-block float-left ml-2 w-2/12 truncate">{Moment(el.time).format("HH:mm:ss")}</p>
                          <div className="float-right h-6  mr-1 w-16 bg-pink-500 rounded-full mt-1"> 
                            <button 
                              className="mt-1 inline-block text-left ml-4 align-middle mx-auto" 
                              onClick={() => handleDelete(el.productId, 1)}
                            >
                              -1
                            </button>
                            <input
                              type="image"
                              src="https://img.icons8.com/pastel-glyph/64/000000/trash.png"
                              className="mt-1 inline-block text-left ml-2 align-middle text-md h-4" 
                              onClick={() => handleDelete(el.productId, el.quantity)}
                              alt=""
                            />
                              
                        </div>
                        </div>
                      ))}

                        <button 
                          onClick={handleCashPayment}
                          className="inline-block float-right  mt-2  mb-2 h-6 bg-pink-700 rounded-md text-white"
                          disabled={tables[detailTable - 1].state !== "pay_cash"}
                        >
                          Confirm Pay
                        </button>
                      </div>
                      
                      }
                      {el.currentOrder.products.length > 0 &&
                        <div className="">  


                          <div className="h-6 mx-2 bg-pink-700 bg-opacity-60 text-white rounded-md border-b-2 border-gray-300 mt-1">
                                  Current Order
                          </div>
                          {el.currentOrder.products.map(el => (
                            <div className="h-6 mx-2 bg-gray-100 rounded-md border-b-2 border-gray-300 mt-1  ">    
                                  <p className="inline-block float-left ml-2 w-3/12 truncate text-left">{el.productName}</p>
                                  <p className="inline-block float-left ml-2 w-1/12 truncate">{el.quantity}</p>
                                  <p className="inline-block float-left ml-2 w-1/12 truncate">{el.quantity * el.price} $</p>
                                  <p className="inline-block float-left ml-2 w-2/12 truncate">{Moment(el.time).format("HH:mm:ss")}</p>
                            </div>
                          ))}
                          <div className="inline-block float-right mix-blend-multiply bg-pink-400 rounded-full px-1 ">
                            <p className="inline-block  mt-2 mr-1  h-6">Food in table</p> 
                            <input
                              type="image"
                              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-serving-dish-hotel-services-flatart-icons-outline-flatarticons.png"
                              className="inline-block float-right  mt-2  mb-2 w-4 h-4  rounded-full " 
                              onClick={e => handlePutEating(e)}
                              alt=""
                            />
                          </div>
                        </div>
                      }

                    </div>
                  </div>
                  }
              </div>
              ))}
          </div>
}
