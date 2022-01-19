import Cookies from "js-cookie";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions";

const LogoutButton = () => {

    
  const logoutCode = Cookies.get("logout-code");

    const navigate = useNavigate()
    const dispatch = useDispatch();

  

    const handleLogOut = async () => {
      await dispatch(logout(logoutCode));
      Cookies.remove('token-admin');
      Cookies.remove('token-staff');
      Cookies.remove('logout-code');
      navigate('/resto/login');
    }
  
    return(
        <button disabled={!logoutCode} onClick={handleLogOut} 
        	className="shadow-lg bg-red-400 hover:bg-red-600 text-white font-bold text-lg my-2 mx-2  px-2 rounded">
        Sign Out
      </button>
    )
}

export default LogoutButton;
