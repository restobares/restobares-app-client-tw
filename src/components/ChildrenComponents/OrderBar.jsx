import React from 'react'
import { Link, useParams } from "react-router-dom";
import Search from "../AuxiliarComponents/Search";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";

const OrderBar = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.sideBar.sideBar)
  const { idResto, idTable } = useParams();
  const Cart = useSelector((state) => state.cart.preOrderCart)

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
        <button className={[`inline-block float-left button ml-2 `,hidden && " bg-pink-200 bg-opacity-20 "]} onClick={event =>  handleSideBar(event)}>
        <img src="https://img.icons8.com/material-outlined/48/ffffff/menu--v1.png"  width="24" alt='' 
              className={`ml-2  h-8 `}/>
        </button>
        <Search/>
        <Link  to={`/resto/${idResto}/table/${idTable}/order`}> 
          <button className="inline-block float-right mr-2  button  ">
            { Cart.length > 0 &&
            <div className='fixed h-6 w-6 rounded-full bg-red-600 text-white top-7 right-1'>
              <p className= {['mt-1 ', Cart.length < 10  ? "" 
                                                          : "mr-1"
                            ]}>
                {Cart.length}
              </p>
            </div>

            }
            <img src="https://img.icons8.com/material-outlined/48/ffffff/fast-cart.png" alt='' className='ml-1 p-1 h-8'/>
          </button> 
        </Link>
       
        </div>
    </div>
  )
}

export default OrderBar

