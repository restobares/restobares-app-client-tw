import React from 'react'

const PayBar = () => {
	return (
		<div className='h-16 bg-pink-700 w-screen flex '>
			<div className='inline-block text-4xl  h-12 mt-4 '>
			<h1 className='inline-block ml-4 text-white '>Nuevo consumo xxx $</h1>
			</div>
			<button className='button ml-80 overflow-auto'> Pedir</button>
			<button className='button ml-12'> Pagar</button>

		</div>
	)
}

export default PayBar
