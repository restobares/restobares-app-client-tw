import React from 'react'
import BillBar from '../../ChildrenComponents/BillBar.jsx';
import OrdersCarousel from '../../ChildrenComponents/OrdersCarousel.jsx';
import PayBar from '../../ChildrenComponents/PayBar.jsx';


// Simula lo almacenado en el store, cambienle el nombre como prefier
var pedido = [
	{
		name: 'Pollo',
		quantity: 2,
		totalPrice: 230,
		description: 'Lorem Impsum la puta que lo parioooooooooLorem Impsum la puta que lo parioooooooooLorem Impsum la puta que lo pariooooooooo',
	},
	{
		name: 'Papas',
		quantity: 2,
		totalPrice: 230,
		description: 'Lorem Impsum la puta que lo pariooooooooo',
	},
	{
		name: 'Vino',
		quantity: 2,
		totalPrice: 230,
		description: 'Lorem Impsum la puta que lo pariooooooooo',
	},
	{
		name: 'Hamburguesas',
		quantity: 2,
		totalPrice: 230,
		description: 'Lorem Impsum la puta que lo pariooooooooo',
	},
]
var currentOrder = {
	products:  [
		{
			name: 'Pollo',
			quantity: 2,
			totalPrice: 230,
			description: 'Lorem Impsum la puta que lo pariooooooooo',
		},
		{
			name: 'Papas',
			quantity: 2,
			totalPrice: 230,
			description: 'Lorem Impsum la puta que lo pariooooooooo',
		},
		{
			name: 'Vino',
			quantity: 2,
			totalPrice: 230,
			description: 'Lorem Impsum la puta que lo pariooooooooo',
		},
		{
			name: 'Hamburguesas',
			quantity: 2,
			totalPrice: 230,
			description: 'Lorem Impsum la puta que lo pariooooooooo',
		},
	],
	comments: 'Las papas sin sal porfa'
};

const BillBoard = () => {
 
 
  return (
    
    <div className='flex flex-col h-screen justify-between'>
      <BillBar pedido={pedido} currentOrder={currentOrder} />
      <OrdersCarousel pedido={pedido} currentOrder={currentOrder} />
      <PayBar pedido={pedido} currentOrder={currentOrder} />
    </div>
  );
}

export default BillBoard
