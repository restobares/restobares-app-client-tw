import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Traer del Store el ID de la mesa actual y el restaurante actual

const idTable = 1;
const idResto = 1;


const BillBar = ({pedido, currentOrder,menu}) => {
	const {cart}= useSelector((state)=>state);



	var totalPrice = 0
	for (var i in cart) {
	 if(i==="count" || i === "billedCart")continue;
	  var product_id = cart[i].product_id;
	  var product_quantity = cart[i].quantity;
	
	  var elementFound = menu.find((element) => element.product_id === product_id);
	
	  if(product_quantity>0){
		totalPrice = totalPrice + (product_quantity * elementFound.price );}
	}



	return (
		<div className='nav-bar flex'>
			<div className='pill ml-8 text-2xl mr-8 '>
				{'Consumo actual: $'}
				{ totalPrice}
			</div>
			<Link to={`/resto/${idResto}/table/${idTable}/menu`}>
				<button className='button ml-80'>
				<img src="https://img.icons8.com/ios/50/aa0020/restaurant-menu.png" width="40" className='ml-1'/>
				</button>
			</Link>
		</div>
	)
}

export default BillBar
