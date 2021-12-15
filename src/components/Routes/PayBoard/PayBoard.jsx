import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Modal from './Modal'

const idTable = 5;
const idResto = 5;


const PayBoard = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <div>
      <div className='nav-bar flex'>
      <div className='ml-4'>
      <Link to={`/resto/${idResto}/table/${idTable}/order`}>
				<button className='button mr-60'>
        <img src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/aa0020/external-food-app-food-delivery-photo3ideastudio-lineal-photo3ideastudio.png" width="40" className='ml-1' alt=""/>
				</button>
			</Link>
      </div>
      </div>

      {/*en pagina*/}

      <div className="p-4 inline-flex">
			 <div className="w-full bg-pink-700 px-4 py-2 rounded-3xl text-2xl text-white font-semibold each-in-out inline-flex">
          Total a Pagar:
        <h1 className="items-end md:p-4 ml-20">
          152.60 $
        </h1>
       </div>
      </div>

      <button onClick={openModal} className="bg-pink-700 text-xl font-semibold text-white p-2 w-40 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pagar en Mesa
      </button>

    <Link to={`/resto/${idResto}/table/${idTable}/payment`}>
      <button className="bg-pink-700 text-xl font-semibold text-white p-2 w-40 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pagar con Tarjeta
      </button>
    </Link>

      <Modal showModal={showModal} setShowModal={setShowModal} />

    </div>
  )
}

export default PayBoard
