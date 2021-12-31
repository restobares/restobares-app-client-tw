import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { postOrderToMP } from '../../../redux/actions';
import Modal from './Modal'




const PayBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart }= useSelector((state) => state);
  const { idResto, idTable } = useParams();
  const [showModal, setShowModal] = useState(false);
  //const [showModalPay, setShowModalPay] = useState(false);
  const [percentage, setPercentage] = useState("0");
  const [tip, setTip] = useState("tip");
  const [result, setResult] = useState(0);
  

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  /* const openModalPay = () => {
    setShowModalPay(prev => !prev);
  } */

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
    let json = await dispatch(postOrderToMP(idResto, idTable, 10))
    window.location.href = `${json.payload.response.init_point}`
  }


  const handleBill = (selected) => {
    if (percentage === '') {
      alert("Invalid input");
    }

    const total = (totalPrice * percentage) / 100;

    setResult(total.toFixed(2));
  
    setPercentage("");
    setTip(tip);
  };


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
          <p className='inline-block float-right ml-14'>$ {parseInt(totalPrice) + parseInt(result)}</p>
       </div>
      </div>

      <div className='border-2 m-2 rounded-xl shadow-lg'>
      <p className='inline-block font-bold mt-2'>How was your service?</p>
        <div className='mt-2 mb-2'>
          
        <select
          value={percentage}
          onChange={(e) => {
            const selected = Number(e.target.value);
            setPercentage(selected);
          }}
          className="font-bold px-2 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
        >
          <option selected value="0">
            -- Tip percentage --
          </option>
          <option onClick={() => handleBill()} value="20"> 20% - Excellent!</option>
          <option onClick={() => handleBill()} value="15"> 15% - Good!</option>
          <option onClick={() => handleBill()} value="10"> 10% - Nice!</option>
          <option onClick={() => handleBill()} value="5"> 5% - OK!</option>
          <option onClick={() => handleBill()} value="0"> 0% - 🐀</option>
        </select>

        {/* <div>
          <button onClick={() => handleBill()}
          className="bg-pink-700 text-md font-semibold text-white  py-2 w-20 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2"
          >Add Tip</button>
        </div> */}

        </div>
        <p className='inline-block font-bold mb-2'>Tips: {result}</p>
      </div>
     
      <div className="p-4 inline-flex">
      <button onClick={openModal} className="bg-pink-700 text-md font-semibold text-white py-2 w-32 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pay at Table
      </button>
      <button onClick={handlePayWithCard} className="bg-pink-700 text-md font-semibold text-white  py-2 w-32 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pay with Card
      </button>
      

    {/* <Link to={`/resto/${idResto}/table/${idTable}/payment`}>
      <button className="bg-pink-700 text-md font-semibold text-white  py-2 w-32 rounded-full hover:bg-pink-900 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all m-2">
        Pay with Card
      </button>
    </Link> */}

    </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* <Payment showModalPay={showModalPay} setShowModalPay={setShowModalPay}/> */} 

    </div>
  )
}

export default PayBoard
