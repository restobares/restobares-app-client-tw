import React, { useState } from 'react'
import './SideBar.css'

function SideBar() {
    const [inactive, setInactive] = useState(false);


    return (
        <div className={`si deMenu ${inactive? 'inactive' : "" }`} >
         <div className="inactive">
          <button onClick={() => setInactive(!inactive)} className="float-left button ml-1">
            <img src="https://img.icons8.com/material-outlined/24/aa0020/menu--v1.png"  width="24" className='ml-1' alt="" />
          </button>
         </div>

        <div className='mt-14'>
            <select className='selector'>
              <option value="" selected disabled>Ordenar por:</option>
              <option value="Precio">Precio</option>
              <option value="Promociones">Promociones</option>
              <option value="Recomendados">Recomendados</option>
            </select>
        </div>

        <div className="mt-10">
            <ul>
                <li>
                    <a>
                        <div className='mt-5 ml-16'>
                        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-food-fitness-kiranshastry-solid-kiranshastry.png" width="35" alt="" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div className="mt-10">
            <ul>
                <li>
                    <a>
                        <div className='mt-5 ml-16'>
                        <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-food-kitchen-flatart-icons-solid-flatarticons.png" width="35" alt="" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div className="mt-10">
            <ul>
                <li>
                    <a>
                        <div className='mt-5 ml-16'>
                        <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-food-healthy-kiranshastry-solid-kiranshastry.png" width="35" alt="" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div className="mt-10">
            <ul>
                <li>
                    <a>
                        <div className='mt-5 ml-16'>
                        <img src="https://img.icons8.com/ios-filled/50/000000/organic-food.png" width="35" alt="" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div className="mt-10">
            <ul>
                <li>
                    <a>
                        <div className='mt-5 ml-16'>
                        <img src="https://img.icons8.com/external-outline-satawat-anukul/64/000000/external-food-food-outline-outline-satawat-anukul-9.png" width="35" alt="" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div className="mt-10">
            <ul>
                <li>
                    <a>
                        <div className='mt-5 ml-16'>
                        <img src="https://img.icons8.com/ios-filled/64/000000/cake.png" width="35" alt="" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div className="mt-10">
            <ul>
                <li>
                    <a>
                        <div className='mt-5 ml-16'>
                        <img src="https://img.icons8.com/ios-filled/50/000000/soda-cup.png" width="35" alt="" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div className="mt-10">
            <ul>
                <li>
                    <a>
                        <div className='mt-5 ml-16'>
                        <img src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/64/000000/external-alcoholic-drinks-restaurant-photo3ideastudio-solid-photo3ideastudio-1.png" width="35" alt="" />
                        </div>
                    </a>
                </li>
            </ul>
        </div>


        </div>
    )
}

export default SideBar
