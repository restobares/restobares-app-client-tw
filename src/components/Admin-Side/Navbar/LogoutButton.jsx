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
        <button disabled={!logoutCode} onClick={handleLogOut} className="bg-pink-800 hover:bg-pink-900 border-2 border-gray-800 text-xl text-white py-1 px-2 rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible my-1.5 mr-8">
        Logout
      </button>
    )
}

export default LogoutButton;