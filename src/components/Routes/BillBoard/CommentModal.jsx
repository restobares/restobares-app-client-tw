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

  const backTrack = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
  }
  
  const changeModal = async (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
    var orderToPost = {
      products: cart.preOrderCart,
      comments: comment 
    }
    sockets.joinResto(idResto);
    await dispatch(postOrder(orderToPost, idResto, idTable));
    sockets.tableSend();
    dispatch(getOrders(idResto, idTable));
  };


  return (
    <>
      {showModal ? (
      <div className="fixed inset-0 bg-black bg-opacity-40 pt-36">
          <div className=" w-10/12 mx-auto py-2 bg-pink-800 rounded-lg shadow-md">
              <div className="float-right -mr-2 -mt-2">
                <button onClick={(e) => backTrack(e)}className="">
                  <p className="text-xl text-white bg-red-500 pb-1 px-3 rounded-full shadow-lg">x</p>
                </button>
              </div>
            <h1 className=' mt-8 text-base text-white mb-2'>Would you like to add a comment?</h1>
          <div className="mx-4">
            <label>
              <textarea onChange={(e)=> setComment(e.target.value)} className="bg-gray-200 bg-opacity-50 w-full h-36 rounded-lg text-lg text-white px-1.5 resize-none shadow-lg shadow-inner" maxLength="100"></textarea>
            </label>
            <div className="inline-block w-full ">
              {comment === "" ? (
              <button className="float-left bg-gray-600 text-white cursor-not-allowed rounded-md ml-2 px-4 mt-2 ">
                Send
              </button>
              ) : (
                <button onClick={(e) => changeModal(e)}className="float-left bg-gray-200 rounded-md ml-2 px-4 mt-2 ">
                Send
              </button>
              )}
              <button onClick={(e) => changeModal(e)} className="float-right bg-gray-200 rounded-md mr-1 px-2 mt-2">
                Nothing to add
              </button>
            </div>
          </div>
        </div>
      </div>
      ) : null}
    </>
  );
};

export default CommentModal;
