import React from 'react'
import { useSelector } from 'react-redux';
const PayBar = ({menu}) => {
	const {cart}= useSelector((state)=>state);



	var totalPrice = 0
	for (var i in cart) {
	 if(i==="count")continue;
	  var product_id = cart[i].product_id;
	  var product_quantity = cart[i].quantity;
	
	  var elementFound = menu.find((element) => element.product_id === product_id);
		if(product_quantity>0){
	  totalPrice = totalPrice + (product_quantity * elementFound.price );}
	}
	return (
		<div className='h-16 bg-pink-700 w-screen flex '>
			<div className='inline-block text-4xl  h-12 mt-4 '>
			<h1 className='inline-block ml-4 text-white '>Nuevo consumo ${totalPrice} </h1>
			</div>
			<button className='button ml-80 overflow-auto'> Pedir</button>
			<button className='button ml-12'> Pagar</button>

		</div>
	)
}

export default PayBar
