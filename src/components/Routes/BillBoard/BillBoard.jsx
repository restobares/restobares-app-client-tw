import React from 'react'
import BillBar from '../../ChildrenComponents/BillBar.jsx';
import OrdersCarousel from '../../ChildrenComponents/OrdersCarousel.jsx';
import PayBar from '../../ChildrenComponents/PayBar.jsx';

const BillBoard = () => {
	return (
		<div>
			<BillBar />
			<OrdersCarousel />
			<PayBar />
		</div>
	)
}

export default BillBoard
