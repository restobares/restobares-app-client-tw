import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../../redux/actions';
import BillBar from '../../ChildrenComponents/BillBar.jsx';
import OrdersCarousel from '../../ChildrenComponents/OrdersCarousel.jsx';
import PayBar from '../../ChildrenComponents/PayBar.jsx';

const BillBoard = () => {

  const dispatch = useDispatch();
  const { idResto, idTable } = useParams();
  useEffect(() => {
    dispatch(getOrders(idResto, idTable));
  }, [dispatch, idResto, idTable]);
  
  return (
    <div className='py-12 flex flex-col h-screen justify-between'>
      <BillBar />
      <OrdersCarousel />
      <PayBar />
    </div>
  );
}

export default BillBoard
