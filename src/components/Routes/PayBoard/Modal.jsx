import React, { useState, useEffect } from 'react'

//const featuredProducts = ['https://res.cloudinary.com/pozters/image/upload/w_350/v1531312884/prod_uploads/qdK8393G69QVD6M',
//                          'https://media-cdn.tripadvisor.com/media/photo-s/0f/0b/ff/92/2x1-de-lunes-a-miercoles.jpg',
//                          'https://i.pinimg.com/736x/49/b7/40/49b7401bba9716b434e38877adc8048f.jpg'];

let count = 0;

const Modal = ({showModal, setShowModal, idResto, idTable}) => {


  const [currentIndex, setCurrentIndex] = useState (0);



  
//  useEffect(() => {
//    const startSlider = () => {
//      setInterval(() => {
//        handleOnNextClick();
//      }, 3000);
//    }
//    
//    startSlider();
//  }, []);


//  const handleOnNextClick = () => {
//    count = (count + 1) % featuredProducts.length;
//    setCurrentIndex(count);
//  }
//
//  const handleOnPrevClick = () => {
//    const productsLength = featuredProducts.length;
//    count = (currentIndex + productsLength - 1) % productsLength;
//    setCurrentIndex(count);
//  }


    return (
    <>
    {showModal ?
      (<div className="fixed inset-0 bg-gray-700 bg-opacity-75 pt-16">
        	{/*<div className="max-w-screen-xl m-auto flex">
          <div className="w-full mx-2 select-none ml-12"> 
            <img src={featuredProducts[currentIndex]} alt="" width="283" className='rounded-3xl' />

            <div className="absolute flex px-3 w-full top-48 right-0 "> 
              <button onClick={handleOnPrevClick} > 
                <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/aa0020/external-left-arrows-those-icons-fill-those-icons-3.png" alt='' width="35" />
              </button>
            </div>  
            <div className="absolute flex px-3 w-full top-48 left-80">
              <button onClick={handleOnNextClick} > 
                <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/aa0020/external-right-arrows-those-icons-fill-those-icons-5.png" alt='' width="35" />
              </button>
            </div>
          </div>
        </div>*/}
        <div className='w-60 mx-auto'>
          <div className="w-60 h-60 bg-pink-800 rounded-full border-2 border-pink-900 mt-8 ">
            <img className="ml-10" src="https://media2.giphy.com/media/1gQwNktlzyKsje8hYT/giphy.gif?cid=790b7611eecec2c3c468a85a3d4879aebd1842028814a3b2&rid=giphy.gif&ct=s"  width="160" alt="" />
              <h1 className='modal-content text-xl text-red-50 font-bold -mt-4'>Wait at Table, please.</h1>
            <button onClick={() => setShowModal(prev => !prev)} className="bg-red-500 rounded-xl px-4 mt-12 w-20 h-6 text-red-50 text-lg">Cerrar</button>
          </div>
        </div>
      </div>) : null}
    </>
    )
}

export default Modal
