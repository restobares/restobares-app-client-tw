import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Modal from './Modal';
import Payment from './Payment';



const PayBoard = () => {

  const { cart }= useSelector((state) => state);
  const { idResto, idTable } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [showModalPay, setShowModalPay] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  const openModalPay = () => {
    setShowModalPay(prev => !prev);
  }

  var totalPrice = 0
	// esto calcula el precio de las ordenes confirmadas
  for (var i = 0; i < cart.currentOrder.length; i++) {

    var order = cart.currentOrder[i];

    totalPrice = totalPrice + (order.quantity * order.price);
  }
  for (var i = 0; i < cart.ordered.length; i++) {

    var order = cart.ordered[i];

    totalPrice = totalPrice + (order.quantity * order.price);
  }

  return (
    <div className='py-12'>
      <div className='nav-bar pb-2'>
      <button className='float-left ml-2 button'>
			<Link to={`/resto/${idResto}/table/${idTable}/order`}>
				<img src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/aa0020/external-food-app-food-delivery-photo3ideastudio-lineal-photo3ideastudio.png" width="24" className='ml-1' alt=""/>
			</Link>
			</button>
      </div>

      <div className="p-4 inline-flex">
			 <div className=" bg-pink-700 w-48 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out inline-flex">
          <p className='inline-block text-left'> {'Total Price: '}</p>
          <p className='inline-block float-right ml-14'>$ {totalPrice}</p>
       </div>
      </div>
     
      <div className="p-4 inline-flex">
      <button onClick={openModal} className="bg-pink-700 text-md font-semibold text-white py-2 w-32 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pay at Table
      </button>

    {/* <Link to={`/resto/${idResto}/table/${idTable}/payment`}> */}
      <button onClick={openModalPay} className="bg-pink-700 text-md font-semibold text-white  py-2 w-32 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pay with Card
      </button>
    {/* </Link> */}
    </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />

      <Payment showModalPay={showModalPay} setShowModalPay={setShowModalPay} />

    </div>
  )
}

export default PayBoard
