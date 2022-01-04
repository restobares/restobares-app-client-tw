import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const BillBar = () => {

	const { cart }= useSelector((state) => state);

  const { idTable, idResto } = useParams();

	var totalPrice = 0
	var prevPrice = 0
	// esto calcula el precio de las ordenes confirmadas
  for (var i = 0; i < cart.currentOrder.length; i++) {

    var order = cart.currentOrder[i];
	prevPrice = prevPrice + (order.quantity * order.price);

    totalPrice = totalPrice + (order.quantity * order.price);
  }
  for (var j = 0; j < cart.ordered.length; j++) {

    order = cart.ordered[j];

    totalPrice = totalPrice + (order.quantity * order.price);
  }

  for (var k = 0; k < cart.preOrderCart.length; k++) {

    order = cart.preOrderCart[k];

    totalPrice = totalPrice + (order.quantity * order.price);
  }
	return (
		<div className='nav-bar z-10'>
			<div className='h-12 ml-2'>

			<div className='float-left pill w-9/12'>
				<p className='text-left font-semibold text-sm mt-1 ml-4'> {'Ordered:$'}{prevPrice} {'Total:$'}{totalPrice}</p>
			</div>
			<Link to={`/resto/${idResto}/table/${idTable}/menu`}>
				<button className='float-right button mr-2'>
				<img src="https://img.icons8.com/ios/50/aa0020/restaurant-menu.png" alt='menu-icon' width="24" className='ml-1'/>
				</button>
			</Link>
			</div>
		</div>
	)
}

export default BillBar
