import React from "react";
import { useSelector } from "react-redux";
import BackButton from "../../BackButton";
import jsPDf from "jspdf";

const QrGenerated = () => {
  const { qrCode } = useSelector((state) => state);


  const generatePDF = () => {
    var doc = new jsPDf("p", "pt", "a4");
    doc.html(document.querySelector("#printeable"), {
      callback: function (pdf) {
        pdf.save("newQrsPDF.pdf");
      },
    });
  };

  return (
    <div>
      <BackButton />
        <button onClick={generatePDF} type="primary" className="bg-pink-600 hover:bg-pink-800 text-white font-bold text-lg my-2 mx-2 py-1 px-2 rounded">
          Generate PDF
        </button>
      <div>
        <div id="printeable" className="inline-grid items-start grid-cols-3 gap-5">
          {qrCode.map((qr, index) => {
            return (
              <div>
                <h4 className="mb-2">Table&nbsp;{(qrCode, index)}</h4>
                <img src={qr} alt="" />
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QrGenerated;
