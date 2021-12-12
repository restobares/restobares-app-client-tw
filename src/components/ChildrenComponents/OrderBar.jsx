import React from 'react'
import {Link} from "react-router-dom";
import Search from "../AuxiliarComponents/Search";

const OrderBar = () => {
  let idTable = 5;
  let idResto = 5;

  return (
    <div className='nav-bar'>
        <div className='flex '>
        <button className=" button ml-4">M</button>
        <Search/>
        <Link  to={`/resto/${idResto}/table/${idTable}/order`}> <button className="button ml-56">C</button> </Link>
       
        </div>
    </div>
  )
}

export default OrderBar