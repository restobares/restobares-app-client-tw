import React from 'react'
import {Link} from "react-router-dom";
import Search from "../AuxiliarComponents/Search";
import { useState } from 'react';


const OrderBar = () => {
  const [sidebar,SetSidebar] = useState ("");
  let idTable = 5;
  let idResto = 5;

  // const handlerMenu = (e) => {
  //   e.targt.value
  // }
  return (
    <div className='nav-bar'>
        <div className=''>
        <button className="float-left button ml-1" >
        <img src="https://img.icons8.com/material-outlined/24/aa0020/menu--v1.png"  width="24" className='ml-1'/>
        </button>
        <Search/>
        <Link  to={`/resto/${idResto}/table/${idTable}/order`}> 
        <button className="float-right mr-2 button">
        
        <img src="https://img.icons8.com/material-outlined/24/aa0020/fast-cart.png" width="24" className='ml-1'/>
          </button>
        </Link>
       
        </div>
    </div>
  )
}

export default OrderBar