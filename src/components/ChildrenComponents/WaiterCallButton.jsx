import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Logo from "../../img/dingbell_white.png";
import { sockets, callStaff, getOrders } from "../../redux/actions";
import Swal from "sweetalert2";

const WaiterCallButton = () => {
  
    const dispatch = useDispatch();
    const { idResto, idTable } = useParams();
    const orders = useSelector((state) => state.orders);
    
    

    const handleCallStaff = async () => {
      sockets.joinResto(idResto);
      await dispatch(callStaff(idResto, idTable));
      if(!orders.calling){Swal.fire({
        icon: "success",
        title: 'The waiter has been called!',
        html: 'The waiter is on his way, wait a few moments...',
        showConfirmButton: false,
        timer: 3000
      });}
      dispatch(getOrders(idResto, idTable));
      sockets.tableSend();
    }

    useEffect(() => {
      sockets.joinResto(idResto);
      dispatch(getOrders(idResto, idTable));
      sockets.tableListen(() => {
        dispatch(getOrders(idResto, idTable));
      });
    }, [dispatch, idResto, idTable])
    
    return(
        <button onClick={handleCallStaff}>
          {orders.calling ? (
          <img className="float-right z-20 -mt-10 rounded-full bg-pink-500 w-16 mr-4 ring ring-yellow-400 p-1 content-center"  src={Logo} width="40" alt="" />
          ) : (
            <img className="float-right z-20 -mt-10 rounded-full bg-pink-800 w-16 mr-4 ring ring-pink-500 p-1 content-center"  src={Logo} width="40" alt="" />
          )}
          
        </button>
        )
}

export default WaiterCallButton
