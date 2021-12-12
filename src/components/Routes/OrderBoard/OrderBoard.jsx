import React from 'react'
import { Link } from 'react-router-dom'

const idTable = 1;
const idResto = 1;

const OrderBoard = () => {
	return (
		<div>
			<h1>Menu Principal</h1>
			<Link to={`/resto/${idResto}/table/${idTable}/order`}>
				<h1>{'Ver Cuenta -->'}</h1>
			</Link>
		</div>
	)
}

export default OrderBoard
