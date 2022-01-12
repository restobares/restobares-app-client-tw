import React from 'react'
import { useSelector } from 'react-redux';
import BackButton from '../../BackButton';
import LogoutButton from '../../Navbar/LogoutButton';
import { FaStar } from "react-icons/fa";

const Feedbacks = () => {

  const feedback = useSelector((state) => state.feedback)
  return (
    <div>
      <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12 mb-5">
        <BackButton />
        <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32">
          <h1>Analytics</h1>
        </div>
        <LogoutButton/>
      </nav>

      {feedback.length > 0 && 
      feedback.map((feedback, index) => {
        return (
          <div key={index} className='mx-3'>
            <div className=" lg:px-6  bg-gray-100 border-pink-700 border-2 border-opacity-50 rounded-lg mb-5">
              <div className='h-full w-full flex flex-row'>
                <p className=" border-pink-700 border-r-2 mt-1 w-28 text-base font-semibold pt-2">
                  Comment
                </p>
                <div className='float-right w-full'>
                  <div className=" bg-gray-200 mx-4 my-2 rounded-lg md:rounded-full grid grid-flow-col text-base lg:text-2xl font-normal">
                    <h1 className="text-left px-2 md:pl-5 tracking-wide py-1">{feedback.comment}</h1>
                  </div>
                </div>
              </div>
                <div className='h-full w-full flex flex-row'>
                <p className=" border-pink-700 border-r-2 mb-1 w-28 text-base font-semibold ">
                  Rating
                </p>
                <div className='float-right w-full'>
                    <div className="mx-4 my-2 py-1 rounded-lg md:rounded-full text-base lg:text-2xl">
                      {[...Array(feedback.rating)].map((star, index) => {
                        return (
                        <div key={index} className='inline-block px-1'>
                          <FaStar
                            className="star float-left"
                            size={25}
                            color='#ffc107'
                          />
                        </div>
                        
                      )})}
                    </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Feedbacks
