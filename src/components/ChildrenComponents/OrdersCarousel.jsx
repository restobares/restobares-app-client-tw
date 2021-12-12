import React from "react";

const OrdersCarousel = ({ pedido, currentOrder }) => {
  const img = "https://i.blogs.es/579bad/pollo-de-jordi-cruz/1366_2000.jpg";

  return (
    <div>
      {/*Componente Ordered Card*/}
      <div className="container mt-5 mb-3 float-left rounded-br-lg bg-pink-400 text-white space-x-0.5">
        <div className="float-left m-0 ">
          <img
            src={img}
            style={{ width: 100, height: 100, borderRadius: 5 }}
            alt=""
          />
        </div>
        {/*Titulo*/}

        <div className="flex flex-row ml-4 mt-1 text-left align-items-start">
			<div>
				<p>{pedido[0].name}</p>
          		<p>{pedido[0].description}</p>
			</div>
		  <div className="bg-pink-500 w-10 h-6 mx-1">Pedido</div>
		  {/* {
			  pedido
			  ? <div className="bg-pink-500 w-10 h-6 mx-1">Pedido</div>
			  : <button className="bg-pink-500 w-10 h-6 mx-1">X</button>
		  } */}
        </div>
      </div>
    </div>
  );
};

export default OrdersCarousel;
