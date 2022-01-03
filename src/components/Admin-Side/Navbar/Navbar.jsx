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
    <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
      <span className="text-5xl text-gray-800 mb-1 mt-1 ml-2">
      <img className="invisible md:visible"  src="https://img.icons8.com/ios/50/000000/restaurant-building.png" width="36" alt="" />
      </span>
      <div className="flex flex-row h-12 justify-center"> { 
            navItems.map((el,i) => (  
              width > WidthMedium 
                ? <button  id={i} name={el.name} onClick={(e) => handlerActive(e)}
                className= {
                  i === active 
                  ? " text-white text-2xl mx-4 w-20 bg-pink-100 bg-opacity-20 h-12  rounded-md md:w-32"
                  : " text-black text-2xl mx-4 w-20 h-8  mt-2  md:w-32" 
                 }>
                   {el.name}
                 </button>
                : <div  className= {
                  i === active 
                  ? " text-white text-2xl mx-4 px-4  bg-pink-100 bg-opacity-20  rounded-md "
                  : " text-black text-2xl mx-4 px-4 " 
                  }>
                    <input 
                    type="image" id={i} name={el.name}  src={el.img} width="42" alt="el.name" onClick={(e) => handlerActive(e)} 
                    /> 
                  </div>
        
               
            ))}
      </div>
      <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;