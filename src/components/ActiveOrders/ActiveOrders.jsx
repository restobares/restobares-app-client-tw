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
      
    </div>
  )
}

export default ActiveOrders
