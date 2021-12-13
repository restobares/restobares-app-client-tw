import React from "react";
import { useSelector, useDispatch } from "react-redux";

const OrdersCarousel = ({ pedido, currentOrder }) => {
  // const img = "https://i.blogs.es/579bad/pollo-de-jordi-cruz/1366_2000.jpg";
  const dispatch = useDispatch();
  const { addOrder } = useSelector((state) => state);

  return (
    <div className="mb-auto">
      {addOrder.map((el) => {
        return (
          <div className="flex float-right mt-5 w-11/12 h-60 bg-pink-400  text-white rounded-br-3xl mr-8">
            <div className="float-left w-80 ">
              <img className="object-cover min-w-full min-h-full "
                src={el.img}
                style={{ width: 100, height: 100, borderRadius: 5 }}
                alt=""
              />
            </div>
            {/*Titulo*/}

            <div className="">
              <div>
              <p className=" text-3xl bg-pink-700 w-96"> {el.product_name} </p>
              <div className="clear-left bg-pink-500 mt-2 mr-2 text-2xl rounded-xl">
                <p className="float-left mt-1 ml-2"> {el.details} </p>
              </div>
              <div className="float-left w-48 mt-28 py-1 ml-2 rounded-md bg-pink-700 px-4 text-2xl ">
              <p className="float-right ml-4"> $</p><p className="float-right">{el.price}</p> <p className="float-left mr-2"> Cant XXX</p>
              </div>
              </div>
              <div className="float-right  mt-28 py-1 mr-4 rounded-md rounded-br-xl bg-pink-500 px-4 text-2xl">Pedido</div>
              {/* {
			  pedido
			  ? <div className="bg-pink-500 w-10 h-6 mx-1">Pedido</div>
			  : <button className="bg-pink-500 w-10 h-6 mx-1">X</button>
		  } */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersCarousel;
