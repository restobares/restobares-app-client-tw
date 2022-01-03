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
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
           placeholder="Enter Name"
       />
    
       <input
           type="number"
           name="descripcion"
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
           placeholder="Enter Price"
       />
       
       <input
           type="text"
           name="descripcion"
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
           placeholder="Enter Details"
       />
       
       <input
           type="file"
           className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
       />
       
       <select
           type="text"
           name="descripcion"
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
       >
       
        <option selected value="0">
            -- Choose your categories --
        </option>

       <option value="Breakfast & Snacks">Breakfast & Snacks</option>
       <option value="Starter">Starter</option>
       <option value="Saladas">Saladas</option>
       <option value="Pastas">Pastas</option>
       <option value="Pizzas">Pizzas</option>
       <option value="Meats">Meats</option>
       <option value="Sandwiches">Sandwiches</option>
       <option value="Traditional">Traditional</option>
       <option value="For Kids">For Kids</option>

       </select>
       
       <select
           type="text"
           name="descripcion"
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
       >

        <option selected value="0">
            -- Choose your labels --
        </option>

       <option value="Bakery">Bakery</option>
       <option value="Beers">Beers</option>
       <option value="Bovine">Bovine</option>
       <option value="Cafeteria">Cafeteria</option>
       <option value="Champagnes">Champagnes</option>
       <option value="Chicken">Chicken</option>
       <option value="Cocktails">Cocktails</option>
       <option value="Crafted">Crafted</option>
       <option value="Fish">Fish</option>
       <option value="Gluten Free">Gluten Free</option>
       <option value="Hamburger">Hamburger</option>
       <option value="Ice Creams">Ice Creams</option>
       <option value="Light">Light</option>
       <option value="Lomo">Lomo</option>
       <option value="No Alcohol">No Alcohol</option>
       <option value="Pork">Pork</option>
       <option value="Seafood">Seafood</option>
       <option value="Smoothies">Smoothies</option>
       <option value="Sodas">Sodas</option>
       <option value="Sodium Low">Sodium Low</option>
       <option value="Spicy">Spicy</option>
       <option value="Vegan">Vegan</option>
       <option value="Vegetarian">Vegetarian</option>
       <option value="Wines & Sparkling wines">Wines & Sparkling wines</option>

       </select>
    
       <button type="submit" className="mt-4 mb-36 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out">
       Send Menu
       </button>
    </form>
    
    </div>
    )
}

export default AdminMenu;