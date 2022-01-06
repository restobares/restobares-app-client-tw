import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getQrCode } from "../../../../redux/actions";
import BackButton from "../../BackButton";

const QrManager = () => {
  const { qrCode } = useSelector((state) => state);

  const { idResto } = useParams();

  const [oneTable, setOneTable] = useState([]);
  const [firstTable, setFirstTable] = useState([]);
  const [lastTable, setLastTable] = useState([]);

  const dispatch = useDispatch();

  const generateOneQr = (e) => {
    e.preventDefault();
    let oneOnlyQr = [];
    oneOnlyQr.push(oneTable);
    dispatch(getQrCode(idResto, oneOnlyQr));
    console.log(qrCode);
  };

  const generateVariousQr = (e) => {
    e.preventDefault();
    let tablesArray = [];
    tablesArray.push(firstTable);
    tablesArray.push(lastTable);
    dispatch(getQrCode(idResto, tablesArray));
  };

  // RESIZE WINDOW LOGIC
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
        <BackButton />
        <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32">
          <h1>Qr&nbsp;Management</h1>
        </div>
        <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
          Logout
        </button>
      </nav>

      <h1 className="m-5 text-lg font-bold">Select your Table</h1>

      <form className="w-96 inline-block">
        <input
          type="number"
          name="oneTable"
          value={oneTable}
          onChange={(e) => setOneTable(e.target.value)}
          className="text-center block mb-4 w-full px-5 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
          placeholder="Enter Number, print 1 Qr Table"
        />

        <button
          type="submit"
          onClick={(e) => generateOneQr(e)}
          className="my-2 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out"
        >
          Print Qr
        </button>

        <h1 className="m-5 text-lg font-bold">Select your Tables</h1>

        <input
          type="number"
          name="firstTable"
          value={firstTable}
          onChange={(e) => setFirstTable(e.target.value)}
          className="text-center my-4 w-1/3 px-5 py-3 mx-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
          placeholder="Enter fist Table"
        />
        <input
          type="number"
          name="lastTable"
          value={lastTable}
          onChange={(e) => setLastTable(e.target.value)}
          className="text-center my-4 w-1/3 px-5 mx-2 py-3 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" /* form-control */
          placeholder="Enter last Table"
        />

        <button
          type="submit"
          onClick={(e) => generateVariousQr(e)}
          className="mt-4 mb-36 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out"
        >
          Print Qr's
        </button>

        {/* <Link to={`/resto/${idResto}/resto-home/qrmanager/qrs`}>
          <div
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="mt-4 mb-36 bg-pink-700 w-32 px-4 py-2 rounded-3xl text-sm text-white font-semibold each-in-out"
          >
            a ver los Qr
          </div>
        </Link> */}

        {qrCode.length ? 
        <Link to={`/resto/${idResto}/resto-home/qrmanager/qrs`}>
        <div className="col-span-1 text-center px-3 py-3 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
          <div className="float-left">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/qr-code--v1.png"
              width="38"
              alt=""
            />
          </div>
          <div className="inline-flex items-center">
            <h1 className="text-lg font-bold float-left">Generated Qr's</h1>
          </div>
        </div>
      </Link>
      :
      <div>
      </div>
      }
      
        
      </form>
    </div>
  );
};

export default QrManager;
