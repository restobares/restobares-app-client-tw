import React from 'react'

const ActiveOrders = () => {
  const dummyOrders = [
    {
      orderId: 1,
      tableNumber: 2,
      orderTime: "15:48",
      orderItems: [
        {
          name: "hamburgesa de pollo",
          quantity: 2,
        },
        {
          name: "ensalada",
          quantity: 1,
        },
      ],
      comments: "la ensalada sin aceite de oliva",
    },
    {
      orderId: 2,
      tableNumber: 4,
      orderTime: "15:50",
      orderItems: [
        {
          name: "budin",
          quantity: 1,
        },
      ],
      comments: "",
    },
  ];

  return (
    <div className="md:w-8/12 lg:7/12 mx-auto relative bg-gray-200 w-full">
      {dummyOrders.map((order) => {
        return (
          <div>
            <div className="px-6 py-4 bg-pink-700 text-white rounded-lg mb-5 capitalize">
              <h1 className="text-lg">Table: {order.tableNumber}</h1>

              <h1 className="text-left pl-4 text-3xl">Order:</h1>
              {order.orderItems.map((item) => {
                return (
                    <div className="bg-pink-500 mx-20 my-2 rounded-full grid grid-flow-col text-2xl">
                      <h1 className="text-left pl-5">{item.name}:</h1>
                      <h1 className="text-right px-5">{item.quantity}</h1>
                    </div>
                );
              })}
              <div></div>

              {order.comments !== "" && (
                <div>
                  <h4 className="text-left pl-4 text-3xl mt-5">Comments:</h4>
                  <div className="text-2xl">
                    <h4 className="text-center">{order.comments}</h4>
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