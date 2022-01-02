import React from "react";
import BackButton from "../BackButton";
import Moment from "moment";

export default function TableDetail() {
  const props = {
    tableId: 2,
    state: "waiting",
    ordered: [],
    totalPrice: 0,
    tip: 0,
    currentOrder: {
      time: "2021-12-15T15:32:28.557Z",
      products: [
        {
          productName: "Papas Fritas",
          productId: 23,
          quantity: 2,
          price: 200,
        },
        {
          productName: "Henieken",
          productId: 12,
          quantity: 2,
          price: 300,
        },
      ],
      comments: "Sin sal por favor.",
    },
  };

  return (
    <React.Fragment>
      <div className="hidden md:flex flex:row justify-center justify-between px-8 h18 rounded-b-3xl bg-pink-700 ">
        <table className="table-fixed">
          <tr className="flex flex-row self-end h-12 flex items-center ">
            <th className="mr-20">
              <BackButton />
            </th>
            <th className="w-24 font-sm font-medium tracking-wide text-2xl flex mx-3">
              <span>Mesa:{props.tableId}</span>
            </th>
            <th className="w-24 font-sm font-medium tracking-wide text-2xl flex mx-3">
              <span>
                Hora:&nbsp;{Moment(props.currentOrder.time).format("HH:mm:ss")}
              </span>
            </th>
          </tr>
        </table>
      </div>
      <div className="flex flex-row justify-i justify-center w-screen font-medium text-xl">
        <ul>
          <li className="mb-3">
            <span className="mr-2">Nota:</span>
            {props.currentOrder.comments}
          </li>
          <li>
            <ul className="flex flex-row">
              <span className="mr-2">Products:</span>
              <ul>
                {props.currentOrder.products.map((product) => {
                  return <li>{product.productName}</li>;
                })}
              </ul>
            </ul>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
