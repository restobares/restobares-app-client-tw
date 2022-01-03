import React from "react";
import Moment from 'moment';
import { Link } from "react-router-dom";



export default function Tables({tables}) {
  // const dispatch = useDispatch()
  // const currentTables = useSelector((state) => state.tables)
  // const token = useSelector((state) => state.token)
  // const idResto = 'ANzbx5Pa3dPizabR'

  // useEffect(() => {
  //   dispatch(getTables(idResto, Cookies.get('token-staff')));
  // }, []);



//   const tables = [
//     {
//         "tableId": 1,
//         "state": "free",
//         "ordered": [],
//         "totalPrice": 0,
//     "tip": 0,
//         "currentOrder": {
//             "time": "",
//             "products": [],
//             "comments": ""
//         }
//     },
//     {
//         "tableId": 2,
//         "state": "waiting",
//         "ordered": [],
//         "totalPrice": 0,
//     "tip": 0,
//         "currentOrder": {
//             "time": "2021-12-15T15:32:28.557Z",
//             "products": [
//                 {
//                     "productName": "Papas Fritas",
//                     "productId": 23,
//                     "quantity": 2,
//                     "price": 200
//                 },
//                 {
//                     "productName": "Henieken",
//                     "productId": 12,
//                     "quantity": 2,
//                     "price": 300
//                 }
//             ],
//             "comments": "Sin sal por favor."
//         }
//     },
//     {
//         "tableId": 3,
//         "state": "free",
//         "ordered": [],
//         "totalPrice": 0,
//     "tip": 0,
//         "currentOrder": {
//             "time": "",
//             "products": [],
//             "comments": ""
//         }
//     },
//     {
//         "tableId": 4,
//         "state": "free",
//         "ordered": [],
//         "totalPrice": 0,
//     "tip": 0,
//         "currentOrder": {
//             "time": "",
//             "products": [],
//             "comments": ""
//         }
//     },
//     {
//         "tableId": 5,
//         "state": "free",
//         "ordered": [],
//         "totalPrice": 0,
//     "tip": 0,
//         "currentOrder": {
//             "time": "",
//             "products": [],
//             "comments": ""
//         }
//     }
// ]


  return (
    <React.Fragment>
      <div>
        <div className="align-middle inline-block w-full">
          <table className="w-screen">
            <thead className="bg-gray-50">

              <tr>
                <th
                  scope="col"
                  className="py-3 text-xs text-gray-500 uppercase "
                >
                  Número
                </th>
                <th
                  scope="col"
                  className="py-3 text-xs text-gray-500 uppercase "
                >
                  Hora
                </th>
                <th
                  scope="col"
                  className="py-3 text-xs text-gray-500 uppercase "

                >
                  Estado
                </th>

                <th
                  scope="col"
                  className="py-3 text-xs text-gray-500 uppercase "
                >
                  -
                </th>
                
              </tr>
            </thead>
            <tbody>
              {tables.map((Ctables) => (
                <tr key={Ctables.id}>
                  <td className="py-4 whitespace-nowrap">
                    <Link to={`./${Ctables.tableId}`} className="link">
                      <div className="text-base text-gray-900">{Ctables.tableId}</div>
                    </Link>
                  </td>
                  <td className="py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                    {Ctables.currentOrder.time ? (
                      <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full">                        
                        {Moment(Ctables.currentOrder.time).format("HH:mm:ss")}
                      </span>
                    ) : (
                      <span className="inline-flex text-sm leading-5 font-semibold rounded-full">
                      </span>
                    )}</div>
                  </td>
                  <td className="py-4 whitespace-nowrap">
                    {Ctables.state === "waiting" ? (

                      <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-red-100 text-green-800">

                        {Ctables.state}
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {Ctables.state}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>)
}