import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { getOrders, postOrder } from "../../../redux/actions";

const CommentModal = ({ showModal, setShowModal }) => {


	const {cart}= useSelector((state)=>state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [comment, setComment] = useState ('');

  const { idResto, idTable } = useParams();

  // const dispatch = useDispatch();
  // const { idResto, idTable } = useParams();
  useEffect(() => {
    dispatch(getOrders(idResto, idTable));
  }, [dispatch]);
  
  const changeModal = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
    var orderToPost = {
      products: cart.preOrderCart,
      comments: comment 
    }
    dispatch(postOrder(orderToPost, idResto, idTable));
    // navigate(`resto/${idResto}/table/${idTable}/order`)
    // navigate(-1)
    // window.location.reload(false);
    // dispatch(getOrders(idResto, idTable));
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      };  

  return (
    <>
      {showModal ? (
      <div className="fixed inset-0 bg-black bg-opacity-40 pt-60">
      <div className="w-8/12 mx-auto h-64 bg-pink-800  border-2 border-pink-900 rounded-3xl">
        <h1 className='my-4 text-white'>Desea añadir un comentario?</h1>
      <div className="mx-4">
        <label>
          <textarea onChange={(e)=> setComment(e.target.value)} className="bg-pink-900 w-full h-32 rounded-xl text-white text-xl"></textarea>
        </label>
        <button onClick={(e) => changeModal(e)}className="float-left bg-pink-900 text-white rounded-xl ml-2 px-4 mt-3">
          Enviar
        </button>
        <button onClick={(e) => changeModal(e)} className="float-right bg-pink-900 text-white rounded-xl mr-2 px-4 mt-3">
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
