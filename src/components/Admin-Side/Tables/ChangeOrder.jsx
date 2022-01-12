import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch  } from "react-redux";
import { changeTableFilled, getTables, sockets } from "../../../redux/actions";
import Cookies from "js-cookie";

export default function ChangeOrder({ tableId, status }) {
    const {idResto} = useParams()
    const currentOrder = useSelector(state => state.tables[tableId - 1].currentOrder)
  	const dispatch = useDispatch();
    let tokenStaff = Cookies.get("token-staff");
    let tokenAdmin = Cookies.get("token-admin");

  	const goToClientSide = async () => {
      sockets.joinResto(idResto);
      if (status === "free") {        
			  await dispatch(changeTableFilled(idResto,tableId));
      }
      await dispatch(getTables(idResto, tokenAdmin || tokenStaff));
      sockets.tableSend();
      window.open(`/resto/${idResto}/table/${tableId}/menu`)
  	}
    return ( 
        <div className=" h-8 mx-2 bg-gray-700 bg-opacity-10 rounded-md mb-2 flex justify-between items-center">
            <p className="inline-block float-left ml-2 "> 
                {currentOrder.products.length   ? "Change Order"
                                                : "Make New Order"
                }
            </p>
          <button onClick={goToClientSide} className="w-12  ml-2 mr-2 h-6 bg-pink-600 rounded-md text-white">Go!</button>
        </div>
  );
}
