import React from "react";
import { useSelector } from "react-redux";
import BackButton from "../../BackButton";
import jsPDf from "jspdf";
import Swal from "sweetalert2";
const QrGenerated = () => {
  const { qrCode } = useSelector((state) => state);


  const generatePDF = () => {
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
          pdf.save("newQrsPDF.pdf");
        },
      });
    //}) 
  };

  return (
    <div>
      <div className="w-full flex justify-evenly h-15 bg-gray-300 p-1 rounded-b-2xl mb-4">
      <BackButton />
        <button onClick={generatePDF} type="primary" className="shadow-lg bg-pink-600 hover:bg-pink-800 text-white font-bold text-lg my-2 mx-2  px-2 rounded"
        /* className="inline-block bg-pink-600 hover:bg-pink-800 text-white font-bold text-base my-2 mx-2 p-1 rounded" */>
          Generate PDF
        </button>
      </div>
      <div>
        <div id="printeable" className="inline-grid items-start grid-cols-2 md:grid-cols-3 grid-rows-3 gap-5" >
          {qrCode.map((qr, index) => {
            return (
              <div>
                <h4 className="mb-2">Table&nbsp;{(qrCode, qr.index)}</h4>
                <img src={qr.url} alt=""/>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QrGenerated;
