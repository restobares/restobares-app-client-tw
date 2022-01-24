import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BackButton from "../../BackButton";
import jsPDf from "jspdf";
import Swal from "sweetalert2";
import { getUser } from "../../../../redux/actions";

const QrGenerated = () => {
  const { qrCode, user } = useSelector((state) => state);
  const dispatch = useDispatch(); 
  const { idResto } = useParams();

	useEffect(() => {
		if (!user.title) dispatch(getUser(idResto));
	},[user,dispatch,idResto]);

  const generatePDF = () => {
    dispatch(getUser(idResto));
    let timerInterval
    Swal.fire({
      title: 'PDF is being generated',
      html: 'PDF will be available shortly, please wait...',
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 5000)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
      var doc = new jsPDf("p", "pt", "a4");
      doc.html(document.querySelector("#printeable"), {
        callback: function (pdf) {
          pdf.save("TableQRs.pdf");
        },
      });
    //}) 
  };

  return (
    <div className=" h-full  ">
      <div className="sticky top-0 w-full flex justify-evenly h-15 bg-gray-300 p-1 rounded-b-2xl mb-4 z-40">
      <BackButton />
        <button onClick={generatePDF} type="primary" className="shadow-lg bg-pink-600 hover:bg-pink-800 text-white font-bold text-lg my-2 mx-2  px-2 rounded"
        /* className="inline-block bg-pink-600 hover:bg-pink-800 text-white font-bold text-base my-2 mx-2 p-1 rounded" */>
          Generate PDF
        </button>
      </div>
      <div className=" h-full ">
        <div id="printeable" className={`inline-grid items-start grid-cols-2 md:grid-cols-3 grid-rows-${Math.ceil(qrCode.length/3)} h-full gap-5`} >
          {qrCode.map((qr, index) => {
            return (
              <div key={"qr"+index}>
                <div className="flex justify-between items-center mb-4">
                	<h4 className="w-full text-md text-left ">{user.title}</h4>
									<h4 className="text-3xl font-bold leading-none text-center">
										{qr.index}
                	</h4>
              	</div>
                <img src={ qr.url } alt="QR Code"/>
              	{index === qrCode.length-1 || index % 9 === 8 
              		? <div className="w-full h-28"></div>
              		: <div></div>
              	}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QrGenerated;
