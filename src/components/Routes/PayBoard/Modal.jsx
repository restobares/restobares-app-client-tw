import React from 'react'



const Modal = ({showModal, setShowModal}) => {

  const featuredImages = ['https://res.cloudinary.com/pozters/image/upload/w_350/v1531312884/prod_uploads/qdK8393G69QVD6M',
                          'https://media-cdn.tripadvisor.com/media/photo-s/0f/0b/ff/92/2x1-de-lunes-a-miercoles.jpg',
                          'https://i.pinimg.com/736x/49/b7/40/49b7401bba9716b434e38877adc8048f.jpg'];


    return (
    <>
    {showModal ?
      <div className="fixed inset-0 bg-gray-700 bg-opacity-75 pt-20">
        <div>


        <div className="max-w-screen-xl m-auto">
          <div className="w-full relative select-none ml-16">
            <img src={featuredImages[0]} alt="" width="320" className='rounded-3xl' />

            <div className="absolute flex px-3 w-full top-1/2 right-8"> {/* absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3 */}
              <button>
                <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/aa0020/external-left-arrows-those-icons-fill-those-icons-3.png" width="35" />
              </button>
            </div>  
            <div className="absolute flex px-3 w-full top-1/2 left-72">
              <button>
                <img src="https://img.icons8.com/external-those-icons-fill-those-icons/24/aa0020/external-right-arrows-those-icons-fill-those-icons-5.png" width="35" />
              </button>
            </div>
          </div>
        </div>
          


        </div>
        <div className="w-80 h-80 bg-pink-800 rounded-full border-2 border-pink-900 mt-10 ml-16">
                 <img className="ml-20 mt-5" src="https://media2.giphy.com/media/1gQwNktlzyKsje8hYT/giphy.gif?cid=790b7611eecec2c3c468a85a3d4879aebd1842028814a3b2&rid=giphy.gif&ct=s"  width="160" alt="" />
                 <h1 className='modal-content text-2xl text-red-50 font-bold mt-2'>Espere en la Mesa, por favor</h1>
                 <button onClick={() => setShowModal(prev => !prev)} className="bg-red-500 rounded-xl px-4 mt-12 w-20 h-6 text-red-50">Cerrar</button>
        </div>
      </div> : null}
    </>
    )
}

export default Modal
