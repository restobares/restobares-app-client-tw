import React from 'react'
import { Link, useParams } from "react-router-dom";
import Search from "../AuxiliarComponents/Search";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

const OrderBar = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.sideBar.sideBar)
  const { idResto, idTable } = useParams();


  function handleSideBar(event){
    event.preventDefault();
    dispatch({
      type: "HIDE_SIDEBAR",
      payload: !hidden
    });
}
  return (
    <div className='nav-bar'>
        <div className=''>
        <button className="inline-block float-left button ml-2 " onClick={event =>  handleSideBar(event)}>
        <img src="https://img.icons8.com/material-outlined/24/aa0020/menu--v1.png"  width="24" alt='' className='ml-1'/>
        </button>
        <Search/>
        <Link  to={`/resto/${idResto}/table/${idTable}/order`}> 
        <button className="inline-block float-right mr-2 button">
        
        <img src="https://img.icons8.com/material-outlined/24/aa0020/fast-cart.png" width="24" alt='' className='ml-1'/>
          </button> </Link>
       
        </div>
    </div>
  )
}

export default OrderBar

