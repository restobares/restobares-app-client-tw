import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { postOrderToMP, postPayCash, getOrders, sockets } from '../../../redux/actions';
import Modal from './Modal';
import Swal from 'sweetalert2';




const PayBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart }= useSelector((state) => state);
  const { idResto, idTable } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tip, setTip] = useState(0);

  const openModal = () => {
  	sockets.joinResto(idResto);
    dispatch(postPayCash(idResto, idTable, tip))
    sockets.tableSend();
    setShowModal(prev => !prev);
  }

  var totalPrice = 0
	// esto calcula el precio de las ordenes confirmadas
  for (let i = 0; i < cart.currentOrder.length; i++) {

    let order = cart.currentOrder[i];

    totalPrice = totalPrice + (order.quantity * order.price);
  }
  for (let i = 0; i < cart.ordered.length; i++) {

    let order = cart.ordered[i];

    totalPrice = totalPrice + (order.quantity * order.price);
  }


  const handlePayWithCard = async () => {
    let json = await dispatch(postOrderToMP(idResto, idTable, tip));
    window.location.href = `${json.payload.response.init_point}`
  }
  
  useEffect(() => {
    if (totalPrice > 0) {
      sockets.joinResto(idResto);
      sockets.tableListen( ()=> {
      	dispatch(getOrders(idResto, idTable));
      });
    } 
    if (totalPrice === 0) {
      async function paymentAlert() {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Payment Successful',
          showConfirmButton: false,
          timer: 3000
        })
        // aca usar navigate a ruta feedback
        // navigate(`/resto/${idResto}/table/${idTable}`);
      navigate(`/resto/${idResto}/table/${idTable}/feedback`)
      }
      paymentAlert();  
      
    }
    
  }, [dispatch, idTable, idResto, totalPrice, cart]);


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
			 <div className=" bg-pink-700 w-52 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out inline-flex">
          <p className='inline-block text-left'> {'Total Price: '}</p>
          <p className='inline-block float-right ml-14'>$ {parseInt(totalPrice)}</p>
       </div>
      </div>

      <div className='border-2 m-2 rounded-xl shadow-lg'>
      <p className='inline-block font-bold mt-2'>How was your service?</p>
        <div className='mt-2 mb-2'>
          
        <select
          value={tipPercentage}
          onChange={(e) => {
            const selected = Number(e.target.value);
            setTipPercentage(selected);
            setTip(Number((totalPrice * (selected / 100)).toFixed(2)));
          }}
          className="font-bold px-2 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
        >
          <option selected value="0">
            -- Tip percentage --
          </option>
          <option value="20"> 20% - Excellent!</option>
          <option value="15"> 15% - Good!</option>
          <option value="10"> 10% - Nice!</option>
          <option value="5"> 5% - OK!</option>
          <option value="0"> 0% </option>
        </select>

        </div>
        <p className='inline-block font-bold mb-2'>Tips: {tip}</p>
      </div>

      <div className="p-4 inline-flex">
			 <div className=" bg-pink-700 w-52 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out inline-flex">
          <p className='inline-block text-left'> {'Total Price: '}</p>
          <p className='inline-block float-right ml-14'>$ {parseInt(totalPrice) + tip}</p>
       </div>
      </div>
     
      <div className="p-4 inline-flex">
      <button onClick={openModal} className="bg-pink-700 text-md font-semibold text-white py-2 w-32 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pay at Table
      </button>
      <button onClick={handlePayWithCard} className="bg-pink-700 text-md font-semibold text-white  py-2 w-32 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pay with Card
      </button>
    </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default PayBoard
