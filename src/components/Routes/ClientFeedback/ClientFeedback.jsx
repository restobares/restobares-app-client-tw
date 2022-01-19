import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrders, sockets } from "../../../redux/actions";
import FeedbackModal from "./FeedbackModal";

const ClientFeedback = () => {
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();
  const { idResto, idTable } = useParams();
  const onClose = () => {
    window.opener = null;
    window.open(`/`, "_self", "");
    window.close();
  };

  useEffect(() => {
    sockets.joinResto(idResto);
    dispatch(getOrders(idResto, idTable));
		sockets.tableSend();
  }, [idResto, idTable, dispatch])
 

  const bgimg =
    "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";
 
    return (
    <div>
      <div 
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
        className=" h-screen  bg-cover flex flex-col justify-between"
      >
        <div className="absolute w-full h-screen justify-center bg-cover bg-pink-600 bg-opacity-30"></div>
        <div className="relative flex flex-col justify-center h-full place-self-center text-2xl">
          <h2 className=" mb-10 pt-10 text-center text-white text-3xl mx-2">
            Thank you for choosing us.
          </h2>
          <h2 className="  text-center text-white  text-3xl px-2 mb-2 mx-2">
            We can’t wait to see you again soon!
          </h2>
          <div>
            <FeedbackModal showModal={showModal} setShowModal={setShowModal} />
          </div>
          <button className=" bottom-0 btn text-button mt-10 mx-auto text-white" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
