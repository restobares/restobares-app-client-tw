import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveComponent, getLabels, getCategories } from "../../../redux/actions";
import Select from 'react-select'
import BackButton from '../BackButton';
import Swal from 'sweetalert2';



const AdminMenu = () => {

    const dispatch = useDispatch();
    const labels = useSelector((state) => state.labels);
    const categories = useSelector((state) => state.categories);
    const [input, setInput] = useState({
      name: "",
      price: "",
      detail: "",
      image: "",
      CategoryId: "",
      Labels: []
    });
    let options = [];
    let optionsCategories = [];

    for (var i = 0; i < labels.length; i++) {

      let eachOption = {
        value: labels[i].id,
        label: labels[i].name
      }
      options.push(eachOption);
    }
    for (var i = 0; i < categories.length; i++) {

      let eachOption = {
        value: categories[i].id,
        label: categories[i].name
      }
      optionsCategories.push(eachOption);
    }
    
    function handleInputChanges(e) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }

    function handleLabelSelection(e) {
      
      let labelsSelected = e.map((label) => label.value)
      setInput({
          ...input,
          Labels: labelsSelected
        })
    }

    function handleCategorySelection(e) {
      
      setInput({
          ...input,
          CategoryId: e.value
        })
    }

    var validExt = ".png, .gif, .jpeg, .jpg";
function handleImageSelection(fdata) {
 var filePath = fdata.target.value;
 var getFileExt = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
 var pos = validExt.indexOf(getFileExt);
 if(pos < 0) {
     alert("This file is not allowed, please upload a valid file.");
     return false;
  } else {
      fileSizeValidate(fdata.target);
      return true;
  }
}
var maxSize = '124';
function fileSizeValidate(fdata) {
     if (fdata.files && fdata.files[0]) {
                var fsize = fdata.files[0].size/124;
                if(fsize > maxSize) {
                     alert('Maximum file size exceed, This file size is: ' + fsize + "KB");
                     return false;
                } else {
                  console.log('true its working')
                    return true;
                }
     }
    }
    const WidthMedium = 768;

    const navItems = [ 
        {name: "Settings", img: "https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-setting-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png"}
    ]
  
  // Getting labels and categories
  useEffect(() => {
    dispatch(getLabels())
    dispatch(getCategories())
  }, [dispatch]);

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


  const alerta = (e) => {
    e.preventDefault()
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your menu has been sent',
      showConfirmButton: false,
      timer: 1500
    })
  }


    return (
    <div>

    <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
      <BackButton/>
      <div className="flex flex-row h-12 justify-center"> { 
            navItems.map((el,i) => (             
               <button id={i} name={el.name} onClick={(e) => handlerActive(e)} className= {
                 i === active 
                 ? " text-white text-2xl mx-4 w-20 bg-pink-100 bg-opacity-20 h-12  rounded-md md:w-32"
                 : " text-black text-2xl mx-4 w-20 h-8  mt-2  md:w-32" 
                } >
               {width > WidthMedium  
                ? el.name 
                : <img  className="mx-auto " src={el.img} id={i} width="32" alt="" />}
                </button>      
            ))}
      </div>
      <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
        Logout
      </button>
    </nav>

    <h1 className='m-5 text-lg font-bold'>Add your Menu</h1>

    <form className='w-96 inline-block'>
       <input
           type="text"
           name="name"
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
           placeholder="Enter Name"
           onChange={(e) => handleInputChanges(e)}
       />
    
       <input
           type="number"
           name="price"
           min="1"
          //  oninput="validity.valid||(value=value.replace(/\D+/g, 0))"
          // pattern='^[0-9]+'
          //  onKeyUp={Number(input.price) < 0 ? Number(input.price) * -1 : input.price}
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
           placeholder="Enter Price"
          //  value={Number(input.price)}
           onChange={(e) => handleInputChanges(e)}
       />
       
       <input
           type="text"
           name="detail"
           className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
           placeholder="Enter Details"
           onChange={(e) => handleInputChanges(e)}
       />
       
       <input
           type="file"
           name='image'
           className="block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
           accept='image/*'
           onChange={(e) => handleImageSelection(e)}
       />      

        <Select options={optionsCategories} onChange={(e) => handleCategorySelection(e)} placeholder="Choose your category..." className="pb-3" />
        <Select isMulti options={options} onChange={(e) => handleLabelSelection(e)} placeholder="Choose your labels..." />
       <button type="submit" onClick={alerta} className="mt-4 mb-36 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out">
       Send Menu
       </button>
    </form>
    
    </div>
    )
}

export default AdminMenu;