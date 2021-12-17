import React,{ Fragment } from 'react'
import { useSelector } from 'react-redux'

function SideBar() {
    const sidebar = useSelector((state) => state.sideBar);
    let hidden;
    sidebar.sideBar ? hidden = "" : hidden = "hidden"
    return <Fragment>
         <div className={`w-40 h-screen bg-pink-900 flex-col overflow-auto ${hidden}`}>
          <div className='flex-shrink-0 bg-pink-700 h-12 flex-grow-1 mx-1  mt-2 rounded-md text-white'>Ordernar por:
          <div className=' min-h-min mx-1'>
            <select name="" id="" className='text-xs truncate bg-pink-400 rounded-sm '>
              <option value="Mayor Precio">Mayor Precio</option>
              <option value="Mayor Precio">Menor Precio</option>
              <option value="Recomendados">Recomendados</option>
            </select>
            </div>
          </div>
          <div className='flex-shrink-0 bg-pink-700 h-12 flex-grow-1 mx-1  mt-2 rounded-md text-white'>Filtrar por:
          <div className=' min-h-min mx-1'>
            <select name="" id="" className=' text-xs bg-pink-400 rounded-sm  '>
              <option value="Mayor Precio">etiqueta1</option>
              <option value="Mayor Precio">etiqueta1</option>
              <option value="Recomendados">etiqueta1</option>
            </select>
          </div>
          </div>
          <div><div className='flex-shrink-0 bg-white bg-opacity-20 h-8 rounded-full flex-grow-1 mx-3  mt-2 '></div>
          <p className=' text-white'>Bebida</p>
          </div>
          <div className='flex-shrink-0 mx-1 border-2 rounded-xl border-pink-500'>
            <div className=' bg-white bg-opacity-20 h-8 rounded-full flex-grow-1 mx-1  mt-2 '>
          </div>
            <p className=' text-white'>Bebida</p>
            <select name="" id="" className=' text-xs bg-pink-400 rounded-sm w-16'>
              <option value="Mayor Precio">Mayor Precio</option>
              <option value="Mayor Precio">Menor Precio</option>
              <option value="Recomendados">Recomendados</option>
            </select>
          </div>
          <div><div className='flex-shrink-0 bg-white bg-opacity-20 h-8 rounded-full flex-grow-1 mx-3  mt-2 '></div>
          <p className=' text-white'>Bebida</p>
          </div>
          <div><div className='flex-shrink-0 bg-white bg-opacity-20 h-8 rounded-full flex-grow-1 mx-3  mt-2 '></div>
          <p className=' text-white'>Bebida</p>
          </div>                    
        </div>   
    </Fragment>
        

    
}

export default SideBar
