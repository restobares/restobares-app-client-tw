import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { getUser } from '../../../redux/actions'



export default function LandingPage () {
  const { idResto, idTable } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  useEffect(() => {
    // dispatch(getUser())
    dispatch(getUser())
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
            <h2 className="titulo mb-10 pt-10 text-center text-white text-3xl ">¡Bienvenidos!</h2>
            <h2 className="titulo mb-10 pt-10 text-center text-white ">{user.title}</h2>

            <div className="flex items-center justify-center mb-10  mx-auto rounded-full ">
              <img className="mx-auto rounded-full sm:w-40 h-40 " src={logo} alt="logo"/>
            </div>
          

            <button className="btn text-button text-white" onClick={
                () => navigate (`/resto/${idTable}/table/${idTable}/menu`)
            }>Entrar</button>

        </div>
      </div>
      </div>
    );
}
