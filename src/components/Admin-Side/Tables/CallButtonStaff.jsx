import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sockets, callStaff, getTables } from '../../../redux/actions';
import Cookies from 'js-cookie';

function CallButtonStaff({ idTable }) {

  const dispatch = useDispatch();
  const { idResto } = useParams();
  let tokenStaff = Cookies.get("token-staff");
  let tokenAdmin = Cookies.get("token-admin");

  const handleCallStaff = async () => {
    sockets.joinResto(idResto);
    await dispatch(callStaff(idResto, idTable));
    dispatch(getTables(idResto, tokenStaff || tokenAdmin));
    sockets.staffSend();
  }

  return (
    <button onClick={handleCallStaff} className="w-12  ml-2 mr-2 h-6 bg-pink-600 rounded-md text-white">Called</button>
  )
}

export default CallButtonStaff;
