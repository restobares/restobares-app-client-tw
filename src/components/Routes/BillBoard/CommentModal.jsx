import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addOrderToCart } from "../../../redux/actions";

const CommentModal = ({ showModal, setShowModal }) => {


	const {cart}= useSelector((state)=>state);

     const dispatch = useDispatch();

    const [input, setInput] = useState ({
        comment: ''
    })


    const pedir = () => {
      dispatch(addOrderToCart());
    };
    
    const changeModal = () => {
        setShowModal((prev) => !prev);
        pedir()
    };
    const handleSubmit = (e) => {
        e.preventDefault();
      };

    const handleChange = (e) => {
        setInput({
        	...input,
        	[e.target.name]: e.target.value
    	})
    }
  
    

  return (
    <>
      {showModal ? (
        <div id="modal-component-container" className="fixed inset-0">
          <div className="modal-flex-container flex items-end justify-center  pt-4 px-4 pb-60 text-center sm:block sm:p-0">
            <div className="modal-bg-container fixed inset-0 bg-gray-700 bg-opacity-75 pt-60">
              <div
                id="modal-container"
                className="modal-container inline-block align-bottom rounded-lg overflow-hidden transform transition-all sm:my-8 w-full"
              >
                <div className="modal-wrapper sm:p-6 sm:pb-4">
                  <div className="modal-wrapper-flex sm:flex sm:items-start">
                    <div className="p-2 mt-10 inline-block">
                      <div className="w-60 h-max bg-pink-700 rounded-lg border-2 border-pink-900 sm:w-auto">
                        <h1 className="pt-5"></h1>
                        <h1 className="modal-content text-2xl text-red-50 font-bold"></h1>
                        <h2>Desea añadir un comentario?</h2>
                                             
                        
                        <form onSubmit={handleSubmit}>
                            <label>
                                <textarea onChange={(e)=>handleChange(e)} className="bg-pink-500 mt-4" type="text" name="comment" />
                            </label>
                            <button onClick={changeModal} 
                                className="bg-red-500 rounded-xl px-4 mt-4">Enviar</button>
                            </form>

                        <button
                          onClick={changeModal}
                          className="bg-red-500 rounded-xl px-4 my-4"
                        >
                          No
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CommentModal;
