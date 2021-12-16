import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { getLabels, getCategories, getMenu } from '../../../redux/actions';
import FilterBar from "../../ChildrenComponents/FilterBar"

//componente platillo
import OrderCard from '../../AuxiliarComponents/OrderCard';
import OrderBar from '../../ChildrenComponents/OrderBar';
import SideBar from '../../ChildrenComponents/SideBar';

const idTable = 1;
const idResto = 1;


export default function OrderBoard (/* props: {name, description, price, img} */) {

  const { idTable } = useParams();

  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menus.menu)

  useEffect(() => {
    dispatch(getLabels())
    dispatch(getCategories())
    dispatch(getMenu())
  }, [dispatch])

    return (
      <div className='pt-12'>
        <OrderBar/>
        <div className='fixed min-h-screen right-0 left-0 flex  '>
            <SideBar/>
            <div className='w-full '>
            {menu.map((platillo) =>(
            <OrderCard
              product_id={platillo.product_id}
              key={platillo.product_id}
              platillo={platillo}
              platillos={menu}  
            />
            ))}
            </div>
        </div>
      </div>
	)

}

