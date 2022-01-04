import React from 'react';
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setActiveComponent, getLabels, getCategories } from "../../../redux/actions";


import BackButton from '../BackButton';



const AdminMenu = () => {

    const dispatch = useDispatch();
    const labels = useSelector((state) => state.labels);
    const categories = useSelector((state) => state.categories);
    const [input, setInput] = useState({
      name: "",
      price: "",
      detail: "",
      image: "",
      CategoryId: "",
      Labels: []
    });

    function handleInputChanges(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }

    const WidthMedium = 768;

    const navItems = [ 
        {name: "Settings", img: "https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-setting-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png"}
    ]
  
  // Getting labels and categories
  useEffect(() => {
    dispatch(getLabels())
    dispatch(getCategories())
  }, [dispatch]);

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
           name="name"
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
           placeholder="Enter Name"
           onChange={(e) => handleInputChanges(e)}
       />
    
       <input
           type="number"
           name="price"
           min="1"
          //  oninput="validity.valid||(value=value.replace(/\D+/g, 0))"
          // pattern='^[0-9]+'
          //  onKeyUp={Number(input.price) < 0 ? Number(input.price) * -1 : input.price}
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
           placeholder="Enter Price"
          //  value={Number(input.price)}
           onChange={(e) => handleInputChanges(e)}
       />
       
       <input
           type="text"
           name="detail"
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
           placeholder="Enter Details"
       />
       
       <input
           type="file"
           name='image'
           className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
       />
       
       <select
           type="text"
           name="CategoryId"
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
      >
      
        <option selected value="0">
            -- Choose your categories --
        </option>
        {categories && categories.map((category) => {
          return (
            <option key={category.id} value={category.name}>{category.name}</option>
          )
        })}

      </select>
      
      <select
          type="text"
          name="Labels"
          className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
      >

        <option selected value="0">
            -- Choose your labels --
        </option>
        {labels && labels.map((label) => {
          return (
            <option key={label.id} value={label.name}>{label.name}</option>
          )
        })}
       </select>
    
       <button type="submit" onClick={(e) => {e.preventDefault()}} className="mt-4 mb-36 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out">
       Send Menu
       </button>
    </form>
    
    </div>
    )
}

export default AdminMenu;