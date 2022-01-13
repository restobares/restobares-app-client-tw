import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Moment from "moment";
import { getTables } from "../../../redux/actions";
import ChangeOrder from "./ChangeOrder";
import CallButtonStaff from "./CallButtonStaff";
import {
  deleteProductFromTable,
  putTableEating,
  putTableCashPayment,
  sockets,
} from "../../../redux/actions";
import Swal from "sweetalert2";

export default function Tables() {


  const WidthMedium = 768;

  const dispatch = useDispatch();
  const { idResto } = useParams();
  let tokenStaff = Cookies.get("token-staff");
  let tokenAdmin = Cookies.get("token-admin");
  const tables = useSelector((state) => state.tables);
  const [idStaffInput, setIdStaffInput] = useState(0);
  // const [hover, setHover] = useState("null");

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
  }, [dispatch, idResto, tokenStaff, tokenAdmin]);

  const [detailTable, setDetailTable] = useState(null);

  const handlePutEating = async (e, idStaff) => {
    e.preventDefault();
    if (!idStaff && !tokenAdmin) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Check your credentials",
      });
    }
    sockets.joinResto(idResto);
    if (tokenStaff) {
      await dispatch(putTableEating(idResto, detailTable, tokenStaff, idStaff));
      dispatch(getTables(idResto, tokenStaff));
      sockets.staffSend();
    }
    if (!tokenStaff && tokenAdmin) {
      await dispatch(putTableEating(idResto, detailTable, tokenAdmin, idStaff));
      dispatch(getTables(idResto, tokenAdmin));
      sockets.staffSend();
    }
  };

  const handleDelete = async (productId, quantity) => {
    sockets.joinResto(idResto);
    if (tokenStaff) {
      await dispatch(
        deleteProductFromTable(
          idResto,
          detailTable,
          productId,
          quantity,
          tokenStaff
        )
      );
      dispatch(getTables(idResto, tokenStaff));
      sockets.staffSend();
    }
    if (!tokenStaff && tokenAdmin) {
      await dispatch(
        deleteProductFromTable(
          idResto,
          detailTable,
          productId,
          quantity,
          tokenAdmin
        )
      );
      dispatch(getTables(idResto, tokenAdmin));
      sockets.staffSend();
    }
  };

  const handleCashPayment = async (idStaff) => {
    sockets.joinResto(idResto);
    if (tokenStaff) {
      await dispatch(
        putTableCashPayment(idResto, detailTable, tokenStaff, idStaff)
      );
      dispatch(getTables(idResto, tokenStaff));
      sockets.staffSend();
    }
    if (!tokenStaff && tokenAdmin) {
      await dispatch(
        putTableCashPayment(idResto, detailTable, tokenAdmin, idStaff)
      );
      dispatch(getTables(idResto, tokenAdmin));
      sockets.staffSend();
    }
  };

  const handleButton = (e) => {
    e.preventDefault();
    detailTable === Number(e.target.name)
      ? setDetailTable(null)
      : setDetailTable(Number(e.target.name));
  };

  const handleIdStaff = (e) => {
    let input = e.target.value * 1
    let inputString = input.toString();
    if ( inputString.length === 0 || inputString.length > 9 ) {
      e.target.value = idStaffInput;
    }
		setIdStaffInput(e.target.value);
  }

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch,width])


  return (

    <div className=" h-full w-full  flex flex-col">

      <div className="h-8 bg-gray-300  text-sm flex flex-row mt-2 rounded-xl ">
        <p className="w-2/12 ml-2 mt-1">Number</p>
        <p className="w-3/12 ml-4  mt-1">Time</p>
        <p className="w-5/12 ml-4  mt-1">StaffID</p>
        <p className="w-7/12  mt-1 mr-5">Status</p>
      </div>
      <div className=" overflow-y-auto">
        {tables.map((el) => (
          <div
            key={el.tableId}
            className={el.calling ? "w-full border-2 border-yellow-400 bg-yellow-200 rounded-xl flex flex-col mt-2  text-sm  font-semibold" : "w-full border-2 border-gray-400 rounded-xl flex flex-col mt-2  text-sm  font-semibold"}
          >
            <div className="h-8 w-full  flex flex-row  ">
              <p className="w-2/12 mt-1 font-semibold"> {Number(el.tableId)} </p>
              <p className="w-3/12 mt-1 ml-4 truncate">
                {" "}
                {el.currentOrder.time || "----"}{" "}
              </p>
              <p className="w-5/12 mt-1 ml-4 truncate">{el.idStaff}</p>
              <div className="w-7/12 ">
                {el.state !== "free" ? (
                  <p className="inline-block text-lg font-semibold text-pink-800">
                    {el.state}
                  </p>
                ) : (
                  <p className="inline-block text-lg font-semibold text-green-800">
                    {el.state}
                  </p>
                )}

                <input
                  type="image"
                  name={el.tableId}
                  onClick={(e) => handleButton(e)}
                  className="inline-block float-right mt-3 mr-2"
                  src={
                    detailTable === el.tableId
                      ? "https://img.icons8.com/ios/50/000000/collapse-arrow--v1.png"
                      : "https://img.icons8.com/ios/50/000000/expand-arrow--v1.png"
                  }
                  alt=""
                  width="12"
                />
                {el.calling ? <CallButtonStaff idTable={el.tableId} /> : null}
              </div>
            </div>
            {detailTable === Number(el.tableId) && (
              <div
                className={
                  detailTable === el.tableId
                    ? [" bg-gray-300 rounded-md  mx-1 mb-1 py-2"]
                    : ""
                }
              >
                {/* {detailTable === el.tableId && el.state !== "free" 
                        && <ChangeStatus/>
                      } */}
                <ChangeOrder tableId={el.tableId} status={el.state} />
                
                  <div className=" flex flex-col ">
                  {el.currentOrder.products.length > 0 && (
                      <div className="">
                        <div className="h-6 mx-2 bg-pink-700 bg-opacity-60 text-white rounded-md border-b-2 border-gray-300 mt-1">
                          Current Order
                        </div>
                        {el.currentOrder.products.map((el) => (
                          <div
                            key={el.productId}
                            className="h-6 mx-2 bg-gray-100 rounded-md border-b-2 border-gray-300 mt-1  "
                          >
                            <p className="inline-block float-left ml-2 w-3/12 truncate text-left">
                              {el.productName}
                            </p>
                            <p className="inline-block float-left ml-2 w-1/12 truncate">
                              {el.quantity}
                            </p>
                            <p className="inline-block float-left ml-2 w-1/12 truncate">
                              {el.quantity * el.price} $
                            </p>
                            <p className="inline-block float-left ml-2 w-2/12 truncate">
                              {Moment(el.time).format("HH:mm:ss")}
                            </p>
                          </div>
                        ))}
                        {!el.idStaff && (
                          <div className="mt-2">
                            <label>Enter your Staff ID (Numbers Only): </label>
                            <input className="rounded-md text-center ml-2 w-28"
                              type="number"
                              min="0"
                              maxLength="9"
                              name=""
                              id=""
                              oninput="validity.valid||(value=value.replace(/\D+/g, 0))"
                              pattern="^[0-9]+"
                              onChange={handleIdStaff}
                            />
                          </div>
                        )}
                        {idStaffInput || idStaffInput.toString().length > 9 || el.idStaff 
                          ? (<button className="inline-block float-right  mt-2 px-2 mr-2 mb-2 h-6 bg-pink-600 rounded-md text-white" 
                            disabled={!idStaffInput && !el.idStaff} onClick={(e) =>
                              handlePutEating(e, el.idStaff || idStaffInput)
                            }>
                            Food in table
                            </button>)
                          : (<button className="inline-block float-right  mt-2 px-2 mr-2 mb-2 h-6 bg-gray-400 rounded-md text-white cursor-not-allowed" 
                            disabled={!idStaffInput && !el.idStaff} onClick={(e) =>
                              handlePutEating(e, el.idStaff || idStaffInput)
                            }>
                            Food in table
                            </button>)}
                      </div>
                    )}
                    {el.ordered.length > 0 &&
                      el.currentOrder.products.length > 0 && (
                        <div className="h-6 mt-1 mx-2 bg-pink-800 bg-opacity-10 rounded-md">
                          <p className="inline-block float-left text-left ml-2 w-3/12 font-semibold">
                            Nombre
                          </p>
                          <p className="inline-block text-center float-left ml-2 w-1/12  font-semibold truncate">
                            Cant
                          </p>
                          <p className="inline-block float-left ml-2 w-1/12  font-semibold truncate">
                            Sub-Total
                          </p>
                          <p className="inline-block float-left ml-2 w-2/12 font-semibold truncate">
                            Hora
                          </p>
                        </div>
                      )}
                    {el.ordered.length > 0 && (
                      <div>
                        <div className="h-6 mx-2 bg-gray-500 bg-opacity-60 text-white rounded-md border-b-2 border-gray-300 mt-1">
                          Ordered
                        </div>

                        {el.ordered.map((el) => (
                          <button
                          className="w-full font-semibold"
                          // onMouseEnter={() => setHover(showOption)}
                          // onMouseLeave={() => setHover(null)}
                        >
                          <div
                            key={el.productId}
                            className="h-8 mx-2 bg-gray-100 rounded-md border-b-2 border-gray-300 mt-1  "
                          >
                            <p className="inline-block float-left ml-2 w-3/12 truncate text-left mt-1">
                              {el.productName}
                            </p>
                            <p className="inline-block float-left ml-2 w-1/12 truncate mt-1">
                              {el.quantity}
                            </p>
                            <p className="inline-block float-left ml-2 w-1/12 truncate mt-1">
                              {el.price * el.quantity}$
                            </p>

                            <p className="inline-block float-left ml-2 w-2/12 truncate mt-1">
                              {Moment(el.time).format("HH:mm:ss")}
                            </p>
                            <div className="">
                              <div className="float-right h-6  w-6 rounded-full mt-1 ">
                                <input
                                  type="image"
                                  src="https://img.icons8.com/pastel-glyph/64/be185d/trash.png"
                                  className="mt-1 inline-block text-left  pr-1 text-md h-4"
                                  onClick={() =>
                                    handleDelete(el.productId, el.quantity)
                                  }
                                  alt=""
                                />
                              </div>
                              <button
                                className="px-1 mt-1 inline-block float-right bg-pink-600 text-white rounded-md align-middle mr-4 ml-1 "
                                onClick={() => handleDelete(el.productId, 1)}
                              >
                                one
                              </button>


                              { width > WidthMedium &&
                                <p className="inline-block float-right w-1/12 truncate mt-1 text-pink-600">
                                  Delete:
                                </p>
                              }
                            </div>
                          </div>
                          </button>
                        ))}

                        <button
                          onClick={() => handleCashPayment(el.idStaff)}
                          className={"inline-block float-right  mt-2 px-2 mr-2 mb-2 h-6 bg-pink-700 rounded-md text-white"}
                          disabled={tables[detailTable - 1].state !== "pay_cash"}
                        >
                          Confirm Pay
                        </button>
                      </div>
                    )}
                    
                  </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
