import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getOrdersFeed, sockets } from '../../redux/actions';

const ActiveOrders = () => {
  const dispatch = useDispatch();
  const { idResto } = useParams();
  let tokenStaff = Cookies.get("token-staff");
  let tokenAdmin = Cookies.get("token-admin");
  const ordersFeed = useSelector((state) => state.ordersFeed);
  //console.log(ordersFeed);
  
  useEffect(() => {
		sockets.joinResto(idResto);
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
  }, [dispatch, idResto, tokenStaff, tokenAdmin]);

  

  return (
    <div className="md:w-8/12 lg:7/12 mx-auto relative bg-gray-200 w-full">
      {ordersFeed.length > 0 && ordersFeed.map((order) => {
        return (
          <div key={order}>
            <div className=" lg:px-6  bg-gray-100 border-pink-700 border-2 border-opacity-50 rounded-lg mb-5 capitalize">
              <h1 className="text-xl p-2 font-semibold">Table {order.idTable}</h1>
              <hr className="border-1  mx-2 border-pink-500"/>
              <div className='h-full w-full flex flex-row'>
                <p className=" border-pink-700 border-r-2 mt-1 w-28 text-base font-semibold ">
                  Order
                </p>
                <div className='float-right w-full'>
                  {order.currentOrder.products.map((item) => {
                    return (
                        <div className=" bg-gray-200 mx-4 my-2 rounded-lg md:rounded-full grid grid-flow-col text-base lg:text-2xl font-semibold">
                          <h1 className="text-left px-2 md:pl-5">{item.productName}:</h1>
                          <h1 className="text-right px-2 md:px-5">{item.quantity}</h1>
                        </div>
                    );
                  })}
                </div>
              </div>
                <div className='h-full w-full flex flex-row'>
                <p className=" border-pink-700 border-r-2 mb-1 w-28 text-base font-semibold ">
                  Comments
                </p>
                <div className='float-right w-full'>
                  {order.currentOrder.comments !== "" &&
                    <div className=" bg-gray-200 mx-4 my-2 py-2 rounded-lg md:rounded-full grid grid-flow-col text-base lg:text-2xl">
                      <p> 
                        {order.currentOrder.comments.split("<br>").join('') }
                      </p>
                    </div>
                  }
                </div>
              </div>


            </div>
          </div>
        );
      })}
    	{!ordersFeed.length &&
          (<div className=" mt-4 shadow-lg font-semibold text-xl  border-2 border-pink-700 rounded-lg py-2 px-4">
            There's no pending orders.
          </div>)
    	}
    </div>
  );
};

export default ActiveOrders;
