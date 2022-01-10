import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getOrders, postOrder } from "../../../redux/actions";
import { sockets } from "../../../redux/actions";

const CommentModal = ({ showModal, setShowModal }) => {


	const {cart}= useSelector((state)=>state);
  const dispatch = useDispatch();

  const [comment, setComment] = useState ('');

  const { idResto, idTable } = useParams();
  
  const changeModal = async (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
    var orderToPost = {
      products: cart.preOrderCart,
      comments: comment 
    }
    await dispatch(postOrder(orderToPost, idResto, idTable));
    sockets.joinResto(idResto);
    sockets.tableSend();
    dispatch(getOrders(idResto, idTable));
  };


  return (
    <>
      {showModal ? (
      <div className="fixed inset-0 bg-black bg-opacity-40 pt-60">
      <div className="relative w-8/12 mx-auto h-72 bg-pink-800  border-2 border-pink-900 rounded-3xl">
        
        <h1 className='my-4 text-white'>Would you like to add a comment?</h1>
      <div className="mx-4">
        <label>
          <textarea onChange={(e)=> setComment(e.target.value)} className="bg-pink-900 w-full h-36 rounded-xl text-white text-xl px-1.5 resize-none" maxLength="100"></textarea>
        </label>
        <button onClick={(e) => changeModal(e)}className="float-left bg-pink-900 text-white rounded-xl ml-2 px-4 mt-2 ">
          Send
        </button>
        <button onClick={(e) => changeModal(e)} className="float-right bg-pink-900 text-white rounded-xl mr-2 px-4 mt-2 ">
          No
        </button>
      </div>
        </div>  
      </div>
      ) : null}
    </>
  );
};

export default CommentModal;
