import React from 'react';
import { Link } from 'react-router-dom';

//Traer del Store el ID de la mesa actual y el restaurante actual

const idTable = 1;
const idResto = 1;


const BillBar = ({pedido, currentOrder}) => {
	return (
		<div className='nav-bar flex'>
			<div className='pill ml-8 text-2xl mr-8 '>
				{'Consumo actual: $'}
				{ pedido.reduce((a,e) => a + e.totalPrice, 0)}
			</div>
			<Link to={`/resto/${idResto}/table/${idTable}/menu`}>
				<button className='button ml-80'> {"<-"}</button>
			</Link>
		</div>
	)
}

export default BillBar
