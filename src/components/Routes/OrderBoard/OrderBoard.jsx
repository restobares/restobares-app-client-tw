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
      <Fragment>
	 		{/* <h1>Menu Principal</h1>
			
	 		<Link to={`/resto/${idResto}/table/${idTable}/order`}>
	 			<h1>{'Ver Cuenta -->'}</h1>
	 		</Link> */}
       <OrderBar/>

        {menu.map((platillo) =>(
        <OrderCard
          product_id={platillo.product_id}
          key={platillo.product_id}
          platillo={platillo}
          platillos={menu}
          
        />
        ))}
      </Fragment>
	)

}

