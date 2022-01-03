import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveComponent } from "../../../redux/actions";


const AdminMenu = () => {

    const dispatch = useDispatch()
    
    const WidthMedium = 768;

    const navItems = [ 
        {name: "Settings", img: "https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-setting-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png"}
    ]

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
      <span className="text-5xl text-gray-800 mb-1 mt-1 ml-2">
      <img className="invisible md:visible"  src="https://img.icons8.com/ios/50/000000/restaurant-building.png" width="36" alt="" />
      </span>
      <div className="flex flex-row h-12 justify-center"> { 
            navItems.map((el,i) => (             
               <button id={i} name={el.name} onClick={(e) => handlerActive(e)} className= {
                 i === active 
                 ? " text-white text-2xl mx-4 w-20 bg-pink-100 bg-opacity-20 h-12  rounded-md md:w-32"
                 : " text-black text-2xl mx-4 w-20 h-8  mt-2  md:w-32" 
                } >
               {width > WidthMedium  
                ? el.name 
                : <img  className="mx-auto " src={el.img} id={i} width="32" alt="" />}
                </button>      
            ))}
      </div>
      <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
        Logout
      </button>
    </nav>

    <h1 className='m-5 text-lg font-bold'>Add your Menu</h1>

    <form className='w-96 inline-block'>
       <input
           type="text"
           name="titulo"
           className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
           placeholder="Enter Name"
       />
    
       <input
           type="number"
           name="descripcion"
           className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
           placeholder="Enter Price"
       />
       
       <input
           type="text"
           name="descripcion"
           className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
           placeholder="Enter Details"
       />
       
       <input
           type="file"
           className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
       />
       
       <select
           type="text"
           name="descripcion"
           className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
       >
       
        <option selected value="0">
            -- Choose your categories --
        </option>

       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>

       </select>
       
       <select
           type="text"
           name="descripcion"
           className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
       >

        <option selected value="0">
            -- Choose your labels --
        </option>

       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>

       </select>
    
       <button type="submit" className="mt-4 mb-36 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out">
       Send Menu
       </button>
    </form>
    
    </div>
    )
}

export default AdminMenu;