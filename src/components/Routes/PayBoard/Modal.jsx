import React from 'react'

const Modal = ({showModal, setShowModal}) => {
    return (
    <>
    {showModal ?
      <div className="fixed inset-0 bg-gray-700 bg-opacity-75 pt-60">
        <div className="w-60 h-60 bg-pink-800 rounded-full border-2 border-pink-900 rounded-3xl">
          <h1 className='my-4 text-white'>Desea añadir un comentario?</h1>
                 <img className="ml-16" src="https://media2.giphy.com/media/1gQwNktlzyKsje8hYT/giphy.gif?cid=790b7611eecec2c3c468a85a3d4879aebd1842028814a3b2&rid=giphy.gif&ct=s"  width="120" alt="" />
                 <h1 className='modal-content text-2xl text-red-50 font-bold'>Espere en la Mesa, por favor</h1>
                 <button onClick={() => setShowModal(prev => !prev)} className="bg-red-500 rounded-xl px-4 mt-8">Cerrar</button>
        </div>
      </div> : null}
    </>
    )
}

export default Modal
