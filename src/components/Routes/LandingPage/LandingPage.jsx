import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { getUser, changeTableFilled } from '../../../redux/actions'
import { sockets } from "../../../redux/actions";

// We add the socket property
export default function LandingPage () {
  const { idResto, idTable } = useParams();
  // these two variables are temporarily commented out  because the QR codes are going to provide that through params like above. Right now the userId id are on constants like below
  // const idResto = 'ANzbx5Pa3dPizabR';

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUser(idResto))
    dispatch(changeTableFilled(idResto, idTable))  
    // We tell the server we just arrived to the table
    sockets.joinResto(idResto);
		sockets.tableSend();
  },[dispatch, idResto, idTable]);  



  const bgimg = "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";
  const logo = user.logo;
    const navigate = useNavigate();
    return (<div>
      <div style={{ 
        backgroundImage: `url(${bgimg})` 
      }} className="relative  h-screen justify-center bg-cover">
      <div className="absolute w-screen h-screen justify-center bg-cover bg-pink-600 bg-opacity-30">
      </div>
            
      <div className="relative place-self-center">
            <h2 className=" pt-20 text-center text-white text-4xl ">¡Bienvenidos!</h2>
            <h2 className="titulo mb-10 pt-10 text-center text-white ">{user.title}</h2>

            <div className="flex items-center justify-center mb-10  mx-auto rounded-full ">
              <img className="mx-auto rounded-full w-40 h-40 object-cover" src={logo} alt="logo"/>
            </div>
          

            <button className="btn text-button text-white" onClick={
                () => navigate (`/resto/${idResto}/table/${idTable}/menu`)
            }>Entrar</button>

        </div>
      </div>
      </div>
    );
}
