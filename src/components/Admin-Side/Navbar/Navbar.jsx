import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveComponent } from "../../../redux/actions";

import Logo from "../../../img/dingbell_white.png";
import LogoutButton from "./LogoutButton";



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
  const activeComponent = useSelector(state => state.activeComponent.activeComponent);
  // const [active, setActive] = useState(activeComponent)
  const handlerActive = (e) => {
    e.preventDefault()
    // setActive(Number(e.target.id))
    dispatch(setActiveComponent(e.target.name))
  }

  // RESIZE WINDOW LOGIC
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize);
    
    // dispatch(setActiveComponent("Tables"))
    // setActive(0)
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch,width])

  
  return (
    <nav className="flex flex:row items-center justify-between pl-8 h18  bg-pink-700 h-12 mb-3">
      <span className="text-sm text-gray-800 mb-1 mt-1">
      <img className="invisible md:visible"  src={Logo} width="40" alt="" />
      </span>
      <div className="flex flex-row h-12 justify-center"> { 
            navItems.map((el,i) => (  
              width > WidthMedium 
                ? <button key={"navbar"+i} id={i} name={el.name} onClick={(e) => handlerActive(e)}
                className= {
                  el.name === activeComponent 
                  ? " text-white text-2xl mx-4 my-auto w-20 bg-pink-100 bg-opacity-30 h-10 rounded-md md:w-32"
                  : " text-white text-2xl mx-4 my-auto w-20 hover:bg-pink-100 hover:bg-opacity-40 h-10 rounded-md md:w-32 transition-all " 
                 }>
                   {el.name}
                 </button>
                : <div key={"navbar"+i} className= {
                  el.name === activeComponent 
                  ? " text-white text-2xl mx-4 px-4  bg-pink-100 bg-opacity-20  rounded-md "
                  : " text-black text-2xl mx-4 px-4 " 
                  }>
                    <input 
                    type="image" id={i} name={el.name}  src={el.img} width="42" alt="el.name" onClick={(e) => handlerActive(e)} 
                    /> 
                  </div>
        
            ))}
            </div>
      <LogoutButton/>
    </nav>
  );
};

export default Navbar;
  
