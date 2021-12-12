import React from 'react'

const OrdersCarousel = ({pedido, currentOrder}) => {
	return (
		<div className='flex flex-wrap'>
			{/*Componente Ordered Card*/}
			<div className='flex flex-row bg-pink-500 w-80 mx-auto mt-4 h-20 rounded-lg'>
				{/*Imagen*/}
				<div className='bg-gray-500 w-16 h-16 ml-2 mt-2 rounded-lg'>
				</div>
				{/*Titulo*/}
				<div className='ml-4 mt-1 text-left'>
					<p>{pedido[0].name}</p>
					<p>{pedido[0].description}</p>
				</div>
			</div>
		</div>
	)
}

export default OrdersCarousel
