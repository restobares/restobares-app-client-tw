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

  const [detailTable,setDetailTable] = useState (null);

  const handleButton = (e) => {
    e.preventDefault()
    console.log("event ",e.target.name)
    console.log("detail table ",detailTable)
    detailTable === Number(e.target.name) 
    ? setDetailTable(null)
    : setDetailTable(Number(e.target.name))
  }
  return  <div className=" h-full w-full  flex flex-col  overflow-scroll">
            <div className="h-8 bg-gray-300  text-sm flex flex-row mt-2 rounded-xl ">
              <p className="w-2/12 ml-2 mt-1" >Numero</p>
              <p className="w-3/12 ml-4  mt-1">Hora</p>
              <p className="w-7/12  mt-1 mr-5">Estado</p>
            </div>
              {tables.map( el => (
                <div 
                  className="w-full border-2 border-gray-400 rounded-xl flex flex-col mt-2  text-sm  font-semibold  ">
                  <div className="h-8 w-full  flex flex-row  ">
                    <p className="w-2/12 mt-1 font-semibold" > {Number(el.tableId)} </p>
                    <p className="w-3/12 mt-1 ml-4 truncate"> {el.currentOrder.time || "----"}  </p>
                    <div className="w-7/12 ">
                      {el.state === "waiting" 
                      ? <p className="inline-block text-lg font-semibold text-pink-800">
                      {el.state}
                      </p>
                      : <p className="inline-block text-lg font-semibold text-green-800">
                      {el.state}
                      </p>                    
                      }
                      {el.currentOrder.products.length 
                      ? <input  type="image" name={el.tableId} 
                                onClick={(e) => handleButton(e)}  className="inline-block float-right mt-3 mr-2"
                                src={detailTable === el.tableId 
                                    ? "https://img.icons8.com/ios/50/000000/collapse-arrow--v1.png"
                                    : "https://img.icons8.com/ios/50/000000/expand-arrow--v1.png"
                                    }
                                alt=""
                                width="12"
                        />                                
                      : <p className="inline-block float-right mr-2 h-full w-3"></p>
                      }
                    </div>

                  </div>
                  <div className={detailTable === el.tableId 
                    ? [" bg-gray-300 rounded-md  mx-1 mb-1 py-2"]: ""}>
                    {detailTable === el.tableId 
                          &&  <div className="h-6 mt-1 mx-2 bg-pink-800 bg-opacity-10 rounded-md">
                                  <p className="inline-block float-left text-left ml-2 w-3/12  font-semibold">Nombre</p>
                                  <p className="inline-block text-center float-left ml-2 w-1/12  font-semibold truncate">Cant</p>
                                  <p className="inline-block float-left ml-2 w-1/12  font-semibold truncate">Sub-Total</p>
                                  <p className="inline-block float-left ml-2 w-2/12 font-semibold truncate">Hora</p>
                              </div> }
                    {detailTable === el.tableId 
                          && el.currentOrder.products.map(el => (
                          <div className="h-6 mx-2 bg-gray-100 rounded-md border-b-2 border-gray-300 mt-1  ">    
                          <p className="inline-block float-left ml-2 w-3/12 truncate text-left">{el.productName}</p>
                          <p className="inline-block float-left ml-2 w-1/12 truncate">{el.quantity}</p>
                          <p className="inline-block float-left ml-2 w-1/12 truncate">{el.quantity * el.price} $</p>
                          <p className="inline-block float-left ml-2 w-2/12 truncate">{Moment(el.time).format("HH:mm:ss")}</p>
                        </div>
                    ))}
                  </div>
              </div>
              ))}
          </div>
}