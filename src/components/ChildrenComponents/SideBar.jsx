
import React,{ Fragment, useState } from 'react'
import { filterMenuByLabels } from '../../redux/actions';
import { filterMenuByCategory } from '../../redux/actions';
import { sortMenuByPrice } from '../../redux/actions';
import { useSelector,useDispatch } from 'react-redux'
function SideBar() {
    //////////////// IMPORTS ////////////////    

    const dispatch = useDispatch();

    //////////////// ESTADOS GLOBALES ////////////////    

    const sidebar = useSelector((state) => state.sideBar);
    const categories = useSelector((state)=> state.categories)
    const labels = useSelector((state)=> state.labels)
  	const [currentLabels,setCurrentLabels] = useState(labels.map((l,i) => l.name));
    
    //////////////// ESTADOS LOCALES ////////////////    

    const [activeButton, setActiveButton] = useState("All");

    //////////////// VARIABLES LOCALES ////////////////    

		const arrayImgs = [
			"https://img.icons8.com/material-sharp/96/FFFFFF/simple-breakfast.png", // Logo 
			"https://img.icons8.com/ios/50/FFFFFF/tapas.png", // Logo 
			"https://img.icons8.com/external-wanicon-lineal-wanicon/64/ffffff/external-salad-cooking-wanicon-lineal-wanicon.png", // Logo 
			"https://img.icons8.com/glyph-neue/64/ffffff/spaghetti.png", // Logo 
			"https://img.icons8.com/ios/50/ffffff/pizza.png", // Logo 
			"https://img.icons8.com/glyph-neue/64/ffffff/steak.png", // Logo 
			"https://img.icons8.com/external-sbts2018-solid-sbts2018/58/ffffff/external-sandwich-fast-food-sbts2018-solid-sbts2018.png", // Logo 
			"https://img.icons8.com/ios-glyphs/90/ffffff/globe--v1.png", // Logo 
			"https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/ffffff/external-toy-car-children-toys-vitaliy-gorbachev-lineal-vitaly-gorbachev.png", // Logo 
			"https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-drink-grocery-flatart-icons-outline-flatarticons-1.png", // Logo 
			"https://img.icons8.com/ios/100/ffffff/ice-cream-cone.png", // Logo 
		]
		
    let hidden;
    sidebar.sideBar ? hidden = "" : hidden = "hidden"

    let style = `flex-shrink-0 mx-1 border-2 rounded-xl border-pink-500 mb-2 mt-2 `
    // let active = `bg-white h-full w-full`

    //////////////// HANDLERS ////////////////    

    const handleOnChange = (event) => {
      event.preventDefault();
      dispatch( filterMenuByCategory(activeButton) );
      //console.log("event.target.value => ", event.target.value)
      dispatch( filterMenuByLabels(event.target.value))
      if (event.target.value === "All") {
      	dispatch( filterMenuByCategory(activeButton) );
      }
    }

    const handleSort = (event) => {
      event.preventDefault();
      // console.log("event.target.value => ", event.target.value)
      dispatch(sortMenuByPrice(event.target.value))
    }
    const handleOnClick = (e,catLabels) => {
      e.preventDefault();
      if (activeButton === (Number(e.target.name))) {
        dispatch( filterMenuByCategory("All"))
        setActiveButton("All")
        setCurrentLabels(labels.map((l,i) => l.name));
      } else {
        setActiveButton(Number(e.target.name))
        // console.log("active : => ",activeButton)      
        dispatch( filterMenuByCategory(e.target.name))
        setCurrentLabels(catLabels);
      }
    }

    return <Fragment>
         <div className={`w-40 h-screen bg-pink-900 flex-col overflow-auto ${hidden}`}>
          <div className='flex-shrink-0 bg-pink-700 h-12 flex-grow-1 mx-1  mt-2 rounded-md text-white shadow-md'>
            <p className='my-1'>Sort by:</p>
          <div className=' min-h-min mx-1'>
            <select name="" id="" className='text-xs text-center truncate bg-pink-400 rounded-xl  w-20 shadow-md'  onChange={event => handleSort(event)}>
              <option value="default">Default</option>
              <option value="priceDescendant">Higher Price</option>
              <option value="priceAscendant">Lower Price</option>
            </select>
            </div>
          </div>
          <div className='flex-shrink-0 bg-pink-700 h-12 flex-grow-1 mx-1  mt-2 rounded-md text-white mb-2 shadow-md'>
            <p className='my-1'>By Tags:</p> 
            <div className=' min-h-min mx-1'>
              <select name="" id="" onChange={event => handleOnChange(event)} className='shadow-md text-xs bg-pink-400 rounded-xl  text-center w-20 '>
                <option value="All">Todas</option>
                {/* ACAAAAAAAAAAAAAAA TIENEN QUE TOCARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR --->
                { console.log("categories => labels ",categories[activeButton].labels) &&
                  activeButton !== "All"  ? categories[activeButton].labels.map((label,i) =>( <option key={i} value={i}>{label}</option>)) 
                                          : labels.map(label =>( <option key={label.id} value={label.id}>{label.name}</option>)) */} 
  							{ currentLabels.length <= 0
  								? labels.map( (label,i) => ( <option key={label.id} value={label.id}>{label.name}</option>) )
  								: labels.filter( (label,i) => (currentLabels.includes(label.name)) )
  									.map((label,i) => ( <option key={label.id} value={label.id}>{label.name}</option>) )
  							}
                
              </select>
            </div>
          </div>
        {categories.map((cat,i) => (
          <div key={cat.id} className={[ 
            activeButton === "All" ? style : activeButton === cat.id ? style : [style,"bg-white opacity-60 shadow-lg"]]}> 
            <input type="image" key={cat.name} alt="category button" 
                   name={i+1} onClick={e => handleOnClick(e,cat.labels)} 
              			src={arrayImgs[i]} className="h-12 mt-1 inline-block mx-0"/>
          		{/*<img  alt="category icon" src={arrayImgs[i]}/>*/}

            <p className=' text-white mb-1'>{cat.name}</p>
          </div>
        ))}
        <div className='mx-2 h-24'></div>
        </div>   
    </Fragment>
        

  
}

export default SideBar
