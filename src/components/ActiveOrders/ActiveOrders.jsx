import React from 'react'

const ActiveOrders = () => {
  
  const dummyOrders = [
    {
      orderId: 1,
      tableNumber: 2,
      orderTime: "15:48",
      // this has to have name and quatity of the orders
      orderItems: [
        {
          name: "hamburgesa de pollo",
          quantity: 2
        },
        {
          name: "ensalada",
          quantity: 1
        }
      ],
      comments: "la ensalada sin aceite de oliva"
    },
    {
      orderId: 2,
      tableNumber: 4,
      orderTime: "15:50",
      orderItems: [
        {
          name: "budin",
          quantity: 1
        }
      ],
      comments: ""
    }
  ];
  
  return (
    <div className="w-10/12 md:w-8/12 lg:7/12 mx-auto relative py-20">
      {dummyOrders.map((order) => {
        return (
          <div className="px-6 py-4 bg-blue-600 text-white rounded-lg mb-5">
            <h1 className="text-lg">Mesa: {order.tableNumber}</h1>
            {order.orderItems.map((item) => {
              return (
                <div className="grid grid-cols-2 text-xl">
                  <h1>{item.name}</h1>
                  <h1>{item.quantity}</h1>
                </div>
              )
            })}
            {order.comments !== "" &&
            <>
              <h1>Comentarios</h1>
              <h1>{order.comments}</h1>
            </>
            }
            
          </div>
        )
      })}
    </div>
  )
}

export default ActiveOrders
