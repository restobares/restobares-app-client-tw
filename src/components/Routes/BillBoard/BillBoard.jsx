import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../../redux/actions';
import BillBar from '../../ChildrenComponents/BillBar.jsx';
import OrdersCarousel from '../../ChildrenComponents/OrdersCarousel.jsx';
import PayBar from '../../ChildrenComponents/PayBar.jsx';
import { sockets } from '../../../redux/actions';

const BillBoard = () => {

  const dispatch = useDispatch();
  const { idResto, idTable } = useParams();

  useEffect(() => {
    console.log("Entra al useEffect");
    sockets.joinResto(idResto);
    sockets.tableListen(()=>{
			dispatch(getOrders(idResto, idTable));
    });
  }, [dispatch, idTable, idResto]);

  return (
    <div className='py-12 flex flex-col h-screen justify-between'>
      <BillBar />
      <OrdersCarousel />
      <PayBar />
    </div>
  );
}


export default BillBoard
