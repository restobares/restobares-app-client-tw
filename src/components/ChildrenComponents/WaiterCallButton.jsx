import React from "react";
import Logo from "../../img/dingbell_white.png";



const WaiterCallButton = () => {

    //action
    
    return(
        <button>
          <img className="float-right z-20 -mt-10 rounded-full bg-pink-800 w-3/12 mr-4 ring ring-pink-500 p-1 content-center"  src={Logo} width="40" alt="" />
        </button>
        )
}

export default WaiterCallButton