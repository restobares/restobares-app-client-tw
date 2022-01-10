import React, { useState } from "react";
import FeedbackModal from "./FeedbackModal";

const ClientFeedback = () => {
  const [showModal, setShowModal] = useState(true);

  
  const onClose = () => {
    window.opener = null;
    window.open(`/`, "_self", "");
    window.close();
  };
 

  const bgimg =
    "https://houseofruthinc.org/wp-content/uploads/2019/04/dinner.jpg";
 
    return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
        className="relative container h-screen justify-center bg-cover"
      >
        <div className="absolute container h-screen justify-center bg-cover bg-pink-600 bg-opacity-30"></div>

        <div className="relative place-self-center">
          <h2 className="titulo mb-10 pt-10 text-center text-white ">
            Thank you for choosing us.
          </h2>
          <h2 className=" pt-20 text-center text-white text-4xl px-2 mb-2">
            We can’t wait to see you again soon!
          </h2>

          <button className="btn text-button text-white" onClick={onClose}>Close</button>

          <div>
            <FeedbackModal showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
