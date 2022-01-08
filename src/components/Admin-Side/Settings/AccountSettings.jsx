import React, { Fragment } from 'react';
import { Link, useParams } from "react-router-dom";
import BackButton from '../BackButton';

const AccountSettings = () => {

    const { idResto } = useParams();

    return (
        <Fragment>
        <nav className="flex flex-row w-screen justify-between bg-pink-700 h-12">
          <BackButton/>
           <div className="flex flex-row justify-center text-black text-2xl mx-4 w-20 mt-2  md:w-32"> 
             <h1>Account</h1>
           </div>
           <button className="mr-2 bg-pink-800 hover:bg-pink-900 px-2 mt-1 h-10 text-xl text-white rounded-lg font-medium tracking-wide leading-none pb-2 invisible md:visible">
             Logout
           </button>
        </nav>
         <div className="grid-rows-5 grid-flow-col gap-5 p-3">
            <Link to={`/resto/${idResto}/resto-home/account/accountsettings/changeemail`}>
             <div className="col-span-3 text-center px-3 py-3 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
              <div className="float-left">
                <img
                  src="https://img.icons8.com/fluency/48/000000/email-sign.png"
                  width="38"
                  alt=""
                />
              </div>
              <div className="inline-flex items-center">
                <h1 className="text-lg font-bold float-left">E-mails</h1>
              </div>
             </div>
            </Link>

            <Link to={`/resto/${idResto}/resto-home/account/accountsettings/changepassword`}>
             <div className="col-span-3 text-center px-3 py-3 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
              <div className="float-left">
                <img
                  src="https://img.icons8.com/fluency/48/000000/password--v2.png"
                  width="38"
                  alt=""
                />
                
              </div>
              <div className="inline-flex items-center">
                <h1 className="text-lg font-bold float-left">Passwords</h1>
              </div>
             </div>
            </Link>

            <Link to={`/resto/${idResto}/resto-home/account/tablenumbers`}>
             <div className="col-span-3 text-center px-3 py-3 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
              <div className="float-left">
                <img
                  src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-table-interiors-kiranshastry-lineal-color-kiranshastry.png"
                  width="38"
                  alt=""
                />
              </div>
              <div className="inline-flex items-center">
                <h1 className="text-lg font-bold float-left">Table Numbers</h1>
              </div>
             </div>
            </Link>

            <Link to={`/resto/${idResto}/resto-home/account/tokenmp`}>
             <div className="col-span-4 text-center px-2 py-2 mb-4 pb-5 border border-gray-300 hover:bg-gray-300 cursor-pointer rounded-xl">
               <div className="float-left">
                 <img
                   src="data:image/png;base64,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"
                   width="38"
                   alt=""
                 />
                 {/* <img src="https://img.icons8.com/officel/40/000000/token-card-code.png"/> */}
               </div>
               <div className="inline-flex items-center">
                 <h1 className="text-lg font-bold float-left">Token MP</h1>
               </div>
             </div>
            </Link>






         </div>
        </Fragment>
    )
}

export default AccountSettings;