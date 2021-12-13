import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addOrderToCart } from '../../redux/actions';

const PayBar = ({menu}) => {
	const {cart}= useSelector((state)=>state);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addOrderToCart())
  // }, [dispatch])

  const pedir = () => {
    dispatch(addOrderToCart());
  }

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
		<div className='h-16 bg-pink-700 w-screen flex '>
			<div className='inline-block text-4xl  h-12 mt-4 '>
			<h1 className='inline-block ml-4 text-white '>Nuevo consumo ${totalPrice} </h1>
			</div>
			<button className='button ml-80 overflow-auto' onClick={pedir}> Pedir</button>
			<button className='button ml-12'> Pagar</button>

		</div>
	)
}

export default PayBar
