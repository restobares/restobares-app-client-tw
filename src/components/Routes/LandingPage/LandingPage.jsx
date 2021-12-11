import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../../../redux/actions'



export default function LandingPage () {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())
  },[dispatch])

  const bgimg = "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";
  const logo = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3eb3045266535.562d05b41c50a.png";
    const navigate = useNavigate();
    return (<div>
      <div style={{ 
        backgroundImage: `url(${bgimg})` 
      }} className="relative container h-screen justify-center bg-cover">
      <div className="absolute container h-screen justify-center bg-cover bg-pink-600 bg-opacity-30">
      </div>
            
      <div className="relative place-self-center">
            <h2 className="titulo mb-10 pt-10 text-center text-white ">¡Bienvenidos!</h2>

            <div className="flex items-center justify-center mb-10  mx-auto rounded-full ">
              <img className="mx-auto rounded-full sm:w-80 h-80 md:w-96 h-96" src={logo} alt="logo"/>
            </div>
          

            <button className="btn text-button text-white" onClick={
                () => navigate ('/Menu')
            }>Entrar</button>

        </div>
      </div>
      </div>
    );
}
