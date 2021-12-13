import React from 'react'
import {Link} from "react-router-dom";
import Search from "../AuxiliarComponents/Search";

const OrderBar = () => {
  let idTable = 5;
  let idResto = 5;

  return (
    <div className='nav-bar'>
        <div className='flex '>
        <button className=" button ml-4">
        <img src="https://img.icons8.com/material-outlined/24/aa0020/menu--v1.png"  width="40" className='ml-1'/>
        </button>
        <Search/>
        <Link  to={`/resto/${idResto}/table/${idTable}/order`}> 
        <button className="button ml-56">
        
        <img src="https://img.icons8.com/material-outlined/24/aa0020/fast-cart.png" width="40" className='ml-1'/>
          </button> </Link>
       
        </div>
    </div>
  )
}

export default OrderBar