import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMenu } from '../../../redux/actions';

//componente platillo
import OrderCard from '../../AuxiliarComponents/OrderCard';
import OrderBar from '../../ChildrenComponents/OrderBar';
import SideBar from '../../ChildrenComponents/SideBar';


export default function OrderBoard () {

  const { idResto, idTable } = useParams();

  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menus.menu)

  useEffect(() => {
      dispatch(getLabels())
    dispatch(getCategories())
    dispatch(getMenu(idResto, idTable))
  }, [dispatch])

    return (
      <div className='pt-12'>
        <OrderBar/>
        <div className='fixed min-h-screen right-0 left-0 flex  '>
            <SideBar/>
            <div className='w-full pb-16 mx-2 mr-2 mt-2 h-screen flex flex-col overflow-auto '>
            {menu && menu.map((product) =>(
            <OrderCard
              product_id={product.id}
              key={product.id}
              product={product}
            />
            ))}
            </div>
        </div>
      </div>
	)

}

