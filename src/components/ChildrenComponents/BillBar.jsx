import React from 'react';
import { Link } from 'react-router-dom';

//Traer del Store el ID de la mesa actual y el restaurante actual

const idTable = 1;
const idResto = 1;


const BillBar = ({pedido, currentOrder}) => {
	return (
		<div>
			<h3>BillBar</h3>
			<Link to={`/resto/${idResto}/table/${idTable}/menu`}>
				<button>
					{'<-- Volver'}
				</button>
			</Link>
			<div>
				{'Consumo actual: $'}
				{ pedido.reduce((a,e) => a + e.totalPrice, 0)}
			</div>
		</div>
	)
}

export default BillBar
