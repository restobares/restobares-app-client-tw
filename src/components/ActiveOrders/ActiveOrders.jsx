import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getOrdersFeed } from '../../redux/actions';

const ActiveOrders = ({sockets}) => {
  const dispatch = useDispatch();
  const { idResto } = useParams();
  const [time, setTime] = useState(Date.now());
  let tokenStaff = Cookies.get("token-staff");
  let tokenAdmin = Cookies.get("token-admin");
  const ordersFeed = useSelector((state) => state.ordersFeed);
  console.log(ordersFeed);
  
  useEffect(() => {
		sockets.joinResto(idResto);
    //const interval = setInterval(() => setTime(Date.now()), 30000);
    if (tokenStaff) {
      dispatch(getOrdersFeed(idResto, tokenStaff));
    }
    if (!tokenStaff && tokenAdmin) {
      dispatch(getOrdersFeed(idResto, tokenAdmin));
    }
		// Get tables when some diner does something
		sockets.staffListen(() => {
    	if (tokenStaff) {
    	  dispatch(getOrdersFeed(idResto, tokenStaff));
    	}
    	if (!tokenStaff && tokenAdmin) {
    	  dispatch(getOrdersFeed(idResto, tokenAdmin));
    	}
    });
    //return () => {
    //	clearInterval(interval);
    //};
  }, [dispatch, time, idResto]);

  

  return (
    <div className="md:w-8/12 lg:7/12 mx-auto relative bg-gray-200 w-full">
      {ordersFeed.length > 0 && ordersFeed.map((order) => {
        return (
          <div>
            <div className=" lg:px-6 py-4 bg-pink-700 text-white rounded-lg mb-5 capitalize">
              <h1 className="text-lg">Table: {order.idTable}</h1>

              <h1 className="text-left pl-4 text-xl md:text-3xl">Order:</h1>
              {order.currentOrder.products.map((item) => {
                return (
                    <div className="w-fit bg-pink-500 mx-20 my-2 rounded-lg md:rounded-full grid grid-flow-col text-base lg:text-2xl">
                      <h1 className="text-left px-2 md:pl-5">{item.productName}:</h1>
                      <h1 className="text-right px-2 md:px-5">{item.quantity}</h1>
                    </div>
                );
              })}
              <div></div>
              {order.currentOrder.comments !== "" && (
                <div>
                  <h4 className="text-left pl-4 text-xl md:text-3xl mt-5">Comments:</h4>
                    <div className="text-xl bg-gray-100 bg-opacity-20 mx-2 mt-2 rounded-xl md:text-2xl">
                      <h4 className="text-center">{order.currentOrder.comments.split("<br>").join('')}</h4>
                    </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveOrders;
