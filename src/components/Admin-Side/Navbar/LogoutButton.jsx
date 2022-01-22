import Cookies from "js-cookie";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/actions";
import { PulseLoader } from "react-spinners";

const LogoutButton = () => {

    
  	const logoutCode = Cookies.get("logout-code");
  	
    const navigate = useNavigate()
    const dispatch = useDispatch();

 		const [clicked,setClicked] = useState(false); 

    const handleLogOut = async () => {
      setClicked(true);
      await dispatch(logout(logoutCode));
      Cookies.remove('token-admin');
      Cookies.remove('token-staff');
      Cookies.remove('logout-code');
      navigate('/resto/login');
    }

  	if (clicked) return (
        <button disabled onClick={handleLogOut} 
        	className="shadow-lg w-20 md:w-32 bg-gray-400 hover:bg-gray-600 text-white font-bold my-2 mx-2  px-2 rounded">
					<PulseLoader
						margin={1}
						size={10}
						color={"#D0124A"}
						loading={clicked}
					/>
      </button>
  	);
    else return(
        <button onClick={handleLogOut} 
        	className="shadow-lg w-20 md:w-32 text-sm md:text-lg bg-red-400 hover:bg-red-600 text-white font-bold my-2 mx-2 px-2 rounded">
        	Sign Out
      </button>
    )
}

export default LogoutButton;
