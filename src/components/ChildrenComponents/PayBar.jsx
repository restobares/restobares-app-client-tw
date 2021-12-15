import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addOrderToCart } from '../../redux/actions';

const idTable = 1;
const idResto = 1;

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
		<div className='nav-bar text-2xl'>
			<h1 className='float-left text-white text-left mt-2 ml-2 '>Nuevo consumo ${totalPrice} </h1>
			<button className='float-right bg-pink-300 mt-2 w-12 rounded-xl mr-4'> Pagar</button>
			<Link to={`/resto/${idResto}/table/${idTable}/bill`}>
			<button className='float-right bg-pink-100 mt-2 w-12 rounded-xl mr-4' onClick={pedir}> Pedir</button>
			</Link>

		</div>
	)
}

export default PayBar
