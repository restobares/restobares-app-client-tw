import React , { useState, useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import BackButton from '../../BackButton';
import LogoutButton from '../../Navbar/LogoutButton';
import Cookies from "js-cookie";
import { getRevenue } from "../../../../redux/actions";

const Revenues = () => {

  const {monthly, weekly, daily} = useSelector((state) => state.revenue)
	const { time, idResto } = useParams(); 
  const tokenAdmin = Cookies.get("token-admin");
  const [revenue, setRevenue] = useState([]);
  const dispatch = useDispatch();
  
  useEffect( async() => {
		await dispatch(getRevenue(idResto,time,tokenAdmin));
		switch (time) {
			case "Monthly": 
				setRevenue(monthly); break;
			case "Weekly": 
				setRevenue(weekly); break;
			case "Daily": 
				setRevenue(daily); break;
			default:
				console.log("Elegi bien pinchila")
		}
  } , [time]);

  return (
    <div>
      <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12 mb-5">
        <BackButton />
        <div className="flex flex-row justify-center text-white text-2xl mx-4 w-20 mt-2  md:w-32">
          <h1>{time}&nbsp;revenues</h1>
        </div>
        <LogoutButton/>
      </nav>
			{/*<div className="flex flex-wrap justify-center w-full shrink-0">*/}
			<div className="grid grid-cols-3 w-full shrink-0">
      {revenue.length > 0 && 
      revenue.map((order, index) => {
        return (
          <div key={"revenue"+index} className='mx-3 md:mx-auto '>
            <div className=" lg:px-6  bg-gray-100 border-pink-700 border-2 border-opacity-50 rounded-lg mb-5">
              <div className='h-full w-full flex flex-row'>
                <p className=" border-pink-700 border-r-2 mt-1 w-28 text-base font-semibold pt-2">
                  Date
                </p>
                <div className='float-right w-full'>
                  <div className=" bg-gray-200 mx-4 my-2 rounded-lg md:rounded-full grid grid-flow-col text-base font-normal">
                    <h1 className="text-right px-2 md:pl-5 tracking-wide py-1">{order.date}</h1>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-row'>
                <p className=" border-pink-700 border-r-2 w-28 text-base font-semibold pt-2">
                  Price
                </p>
                <div className='float-right w-full'>
                  <div className=" bg-gray-200 mx-4 my-2 rounded-lg md:rounded-full grid grid-flow-col text-base font-normal">
                    <h1 className="text-right px-2 md:pl-5 tracking-wide py-1">{`$ ${order.totalPrice}`}</h1>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-row'>
                <p className=" border-pink-700 border-r-2 w-28 text-base font-semibold pt-2">
                  Tip
                </p>
                <div className='float-right w-full'>
                  <div className=" bg-gray-200 mx-4 my-2 rounded-lg md:rounded-full grid grid-flow-col text-base font-normal">
                    <h1 className="text-right px-2 md:pl-5 tracking-wide py-1">{`$ ${order.tip}`}</h1>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-row'>
                <p className=" border-pink-700 border-r-2 w-28 text-base font-semibold pt-2">
                  Staff ID
                </p>
                <div className='float-right w-full'>
                  <div className=" bg-gray-200 mx-4 my-2 rounded-lg md:rounded-full grid grid-flow-col text-base font-normal">
                    <h1 className="text-right px-2 md:pl-5 tracking-wide py-1">{order.idStaff}</h1>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-row'>
                <p className=" border-pink-700 border-r-2 w-28 text-base font-semibold pt-2">
                  Table
                </p>
                <div className='float-right w-full'>
                  <div className=" bg-gray-200 mx-4 my-2 rounded-lg md:rounded-full grid grid-flow-col text-base font-normal">
                    <h1 className="text-right px-2 md:pl-5 tracking-wide py-1">{`N° ${order.idTable}`}</h1>
                  </div>
                </div>
              </div>
              <div className='h-full w-full flex flex-row'>
                <p className=" border-pink-700 border-r-2 mb-1 w-28 text-base font-semibold pt-2">
                  Payment Method
                </p>
                <div className='float-right w-full'>
                  <div className=" bg-gray-200 mx-4 my-2 rounded-lg md:rounded-full grid grid-flow-col text-base font-normal">
                    <h1 className="text-right px-2 md:pl-5 tracking-wide py-1">{order.paymentMethod}</h1>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )
      })}
    	</div>
    </div>
  )
}

export default Revenues
