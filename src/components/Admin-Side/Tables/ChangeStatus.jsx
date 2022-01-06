import React from "react";

export default function ChangeStatus() {
    
    const handleState = e => {
        e.preventDefault()
        
    }
    return ( 
        <div className=" h-8 mx-2 bg-gray-700 bg-opacity-10 rounded-md mb-2 flex justify-between items-center">
            <p className="inline-block float-left ml-2 leading-">Change Status</p>
            <select className="inline-block float-left  mx-2 h-6 w-6/12 rounded-md text-center truncate align-middle">
                <option value="Cash" >cash</option>
                <option value="Put-Cash">put cash?</option>
                <option value="2">??</option>
            </select>
            <button className="w-12  ml-2 mr-2 h-6 bg-pink-700 rounded-md text-white">Enviar</button>
        </div>
  );
}
