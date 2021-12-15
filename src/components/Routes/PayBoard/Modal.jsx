import React from 'react'

const Modal = ({showModal, setShowModal}) => {
    return (
    <>
    {showModal ?
      <div id="modal-component-container" className="fixed inset-0" >
        <div className="modal-flex-container flex items-end justify-center min-h-screen pt-4 px-4 pb-60 text-center sm:block sm:p-0">
          <div className="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75 pt-60">
  
            <div id="modal-container" className="modal-container inline-block align-bottom rounded-lg overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
             <div className="modal-wrapper sm:p-6 sm:pb-4">
              <div className="modal-wrapper-flex sm:flex sm:items-start">
        
             <div className="p-2 mt-10 inline-block">
               <div className="w-60 h-60 bg-pink-700 rounded-full border-2 border-pink-900 sm:w-auto">
                 <h1 className='pt-5'></h1>
                 <img className="ml-16" src="https://media2.giphy.com/media/1gQwNktlzyKsje8hYT/giphy.gif?cid=790b7611eecec2c3c468a85a3d4879aebd1842028814a3b2&rid=giphy.gif&ct=s"  width="120" alt="" />
                 <h1 className='modal-content text-2xl text-red-50 font-bold'>Espere en la Mesa, por favor</h1>
                 <button onClick={() => setShowModal(prev => !prev)} className="bg-red-500 rounded-xl px-4 mt-8">Cerrar</button>
               </div>
             </div>
         
              </div>
             </div>
            </div>
          
          </div>
        </div>
      </div> : null}
    </>
    )
}

export default Modal
