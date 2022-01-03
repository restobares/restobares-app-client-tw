import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveComponent } from "../../../redux/actions";


const Navbar = () => {

  const dispatch = useDispatch()

  // Vars

  const WidthMedium = 768;
  const navItems = [
    {name: "Tables", img: "https://img.icons8.com/ios-filled/50/000000/restaurant-table.png" }, 
    {name: "Orders", img: "https://img.icons8.com/ios/50/000000/purchase-order.png" }, 
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
    <nav className="flex flex:row items-center justify-between px-8 h18  bg-pink-700 h-12 mb-3">
      <span className="text-5xl text-gray-800 mb-1 mt-1">
      <img className="invisible md:visible"  src="https://img.icons8.com/ios/50/000000/restaurant-building.png" width="40" alt="" />
      </span>
      <ul className="flex flex-row  mx-auto h-12"> { 
            navItems.map((el,i) => (             
               <button id={i} name={el.name} onClick={(e) => handlerActive(e)} className= {
                 i === active 
                 ? " text-white text-2xl mx-4 w-24 bg-pink-100 bg-opacity-20 h-12   rounded-md"
                 : " text-black text-2xl mx-4 w-24 h-8  mt-2" 
                } >
               {width > WidthMedium  
                ? el.name 
                : <img  className="mx-8 " src={el.img} id={i} width="32" alt=""/>}
                </button>      
            ))}
      </ul>
      <button className="bg-pink-800 hover:bg-pink-900 border-2 border-gray-800 text-xl text-white py-1 px-2 rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
  