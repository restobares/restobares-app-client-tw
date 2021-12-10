import React from "react";
import { useNavigate } from 'react-router-dom';


export default function LandingPage () {
    const navigate = useNavigate();
    return (
        <div>
            <h2 className="titulo mb-10 mt-5 text-center">¡Bienvenidos!</h2>

            <div className="containerText">
              <h2 className="sub-titulo mb-20 text-center">Promociones y Recomendaciones</h2>
            </div>

            <div className="sub-titulo mb-20">
               <h2>Carousel</h2>
            </div>

            <button className="btn text-button" onClick={
                () => navigate ('/Menu')
            }>Menú</button>

        </div>
    );
}