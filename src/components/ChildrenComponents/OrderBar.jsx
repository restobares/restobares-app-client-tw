import React from 'react'
import {Link} from "react-router-dom";
import Search from "../AuxiliarComponents/Search";
import SideBar from '../ChildrenComponents/SideBar';

const OrderBar = () => {
  let idTable = 5;
  let idResto = 5;

  return (
    <div className='nav-bar'>
        <div className=''>
        <SideBar/>
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