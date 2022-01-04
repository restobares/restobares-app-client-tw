import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveComponent } from '../../../../redux/actions';
import BackButton from '../../BackButton';


const QrManager = () => {

    const dispatch = useDispatch()


    // ACTIVE COMPONENT LOGIC
  const [active, setActive] = useState(null)
  const handlerActive = (e) => {
    e.preventDefault()
    setActive(Number(e.target.id))
    console.log(active)
    dispatch(setActiveComponent(e.target.name))
  }

  // RESIZE WINDOW LOGIC
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResize);
    };
  }, [])


    return (
    <div>

    <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
      <BackButton/>
      <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32"> 
        <h1>Qr&nbsp;Management</h1>
      </div>
      <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
        Logout
      </button>
    </nav>

    <h1 className='m-5 text-lg font-bold'>Select your Table</h1>

    <form className='w-96 inline-block'>
       <input
           type="number"
           name="onetable"
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
           placeholder="Enter Number, print 1 Qr Table"
       />


        <button type="submit" onClick={(e) => {e.preventDefault()}} className="my-2 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out">
            Print Qr
       </button>
              
              
    <h1 className='m-5 text-lg font-bold'>Select your Tables</h1>

       <input
           type="number"
           name="onetable"
           className="text-center my-4 w-1/3 px-5 py-3 mx-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
           placeholder="Enter fist Table"
       />
       <input
           type="number"
           name="onetable"
           className="text-center my-4 w-1/3 px-5 mx-2 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
           placeholder="Enter last Table"
       />
    
       <button type="submit" onClick={(e) => {e.preventDefault()}} className="mt-4 mb-36 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out">
        Print Qr's
       </button>
    </form>
    
    </div>
    )
}

export default QrManager;