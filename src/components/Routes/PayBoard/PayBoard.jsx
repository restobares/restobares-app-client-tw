import React from 'react'
import { Link } from 'react-router-dom';

const idTable = 5;
const idResto = 5;

const PayBoard = () => {
  return (
    <div>
      <div className='nav-bar pb-2'>
      <button className='float-right mr-2 button'>
			<Link to={`/resto/${idResto}/table/${idTable}/order`}>
				<img src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/aa0020/external-food-app-food-delivery-photo3ideastudio-lineal-photo3ideastudio.png" width="24" className='ml-1'/>
			</Link>
			</button>
      </div>

      <div className="p-4 inline-flex">
			 <div className="w-full bg-pink-700 px-4 py-2 rounded-3xl text-2xl text-white font-semibold each-in-out inline-flex">
          Total a Pagar:
        <h1 className="items-end md:p-4 ml-20">
          152.60 $
        </h1>
       </div>
      </div>

      {/*en pagina*/}



      <button className="bg-pink-700 text-xl font-semibold text-white p-2 w-40 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pagar en Mesa
      </button>
      <button className="bg-pink-700 text-xl font-semibold text-white p-2 w-40 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pagar con Tarjeta
      </button>


      <div className="p-2 mt-10 inline-block">
        <div className="w-60 h-60 bg-pink-700 rounded-full border-2 border-pink-900 sm:w-auto">
          <h1 className='pt-5'></h1>
          <img className="ml-16" src="https://media2.giphy.com/media/1gQwNktlzyKsje8hYT/giphy.gif?cid=790b7611eecec2c3c468a85a3d4879aebd1842028814a3b2&rid=giphy.gif&ct=s"  width="120" alt="" />
          <h1 className=' text-2xl text-red-50 font-bold'>Espere en la Mesa, por favor</h1>
        </div>
      </div>



    </div>
  )
}

export default PayBoard
