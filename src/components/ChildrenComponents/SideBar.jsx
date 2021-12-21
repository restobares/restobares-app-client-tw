import { Event } from '@material-ui/icons';
import React,{ Fragment, useState } from 'react'
import { filterMenuByLabels } from '../../redux/actions';
import { filterMenuByCategory } from '../../redux/actions';
import { setOrder } from '../../redux/actions';
import { useSelector,useDispatch } from 'react-redux'
function SideBar() {
    //////////////// IMPORTS ////////////////    

    const dispatch = useDispatch();

    //////////////// ESTADOS GLOBALES ////////////////    

    const sidebar = useSelector((state) => state.sideBar);
    const categories = useSelector((state)=> state.categories)
    const labels = useSelector((state)=> state.labels)


    //////////////// ESTADOS LOCALES ////////////////    

    const [activeCategory, setActiveCategory] = useState("default");
    const [activeButton, setActiveButton] = useState({
      
    });

    //////////////// VARIABLES LOCALES ////////////////    

    let hidden;
    sidebar.sideBar ? hidden = "" : hidden = "hidden"

    let style = `flex-shrink-0 mx-1 border-2 rounded-xl border-pink-500 mb-2 mt-2`
    let active = `bg-white opacity-50`

    //////////////// HANDLERS ////////////////    

    const handleOnChange = (event) => {
      event.preventDefault();
      console.log("event.target.value => ", event.target.value)
      dispatch( filterMenuByLabels(event.target.value))
    }

    const handleOrder = (event) => {
      event.preventDefault();
      console.log("event.target.value => ", event.target.value)
      dispatch( setOrder(event.target.value))
    }
    const handleOnClick = e => {
      e.preventDefault();
      console.log("target id",e.target.name)
      setActiveCategory(e.target.name)
      
      setActiveButton(active)
      dispatch( filterMenuByCategory(e.target.name))
    }

    return <Fragment>
         <div className={`w-40 h-screen bg-pink-900 flex-col overflow-auto ${hidden}`}>
          <div className='flex-shrink-0 bg-pink-700 h-12 flex-grow-1 mx-1  mt-2 rounded-md text-white'>Sort by:
          <div className=' min-h-min mx-1'>
            <select name="" id="" className='text-xs truncate bg-pink-400 rounded-xl  w-20'  onChange={event => handleOrder(event)}>
              <option value="default">Default</option>
              <option value="mayor">Price Ascendant</option>
              <option value="menor">Price Descendant</option>
            </select>
            </div>
          </div>
          <div className='flex-shrink-0 bg-pink-700 h-12 flex-grow-1 mx-1  mt-2 rounded-md text-white mb-2'>
            <p>By Tags:</p> 
            <div className=' min-h-min mx-1'>
              <select name="" id="" onChange={event => handleOnChange(event)} className=' text-xs bg-pink-400 rounded-xl  text-center w-20 '>
                <option value="All">Todas</option>
                {labels.map(label =>( <option value={label.id}>{label.name}</option>))}
              </select>
            </div>
          </div>
        {categories.map((cat,i) => (
          <div className={style }> 
                      <button className='bg-white bg-opacity-20 h-8 w-20 rounded-3xl  mx-1  mt-2' name={i+1} onClick={e => handleOnClick(e)}>
                    <div className=''></div>
                    </button>
                    <p className=' text-white'>{cat.name}</p>
                  </div>
        ))}
        </div>   
    </Fragment>
        

  
}

export default SideBar
