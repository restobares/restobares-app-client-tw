import React, { useState } from 'react';
import PayMp from './SDK-MP';


const toInputUppercase = e => {
  e.target.value = ("" + e.target.value).toUpperCase();
};

function Payment({showModalPay, setShowModalPay}) {

  const [name, setName] = useState('');


    return (
      <>
      {showModalPay ?
      
        <div className='fixed inset-0 bg-pink-900 bg-opacity-75 pt-28'>
          <div>
            <button onClick={() => setShowModalPay(prev => !prev)} className='bg-red-500 rounded-xl w-6 text-red-50 text-lg' >X</button>
          </div>
         <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-black text-center">Card Payment</h1>
            <div className="my-3">
            <input 
              type="tel" 
              pattern="[0-9]{10}"
              maxlength="16"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              name="number" 
              placeholder='XXXX - XXXX - XXXX - XXXX'
            />
            </div>
            <div className="my-3">
            <input 
              type="text" 
              maxlength="100"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              name="name" 
              placeholder='Card Holder' 
              onChange={e => setName(e.target.value)}
              onInput={toInputUppercase}
            />
            </div>
            <div className="">
              <div className="my-3 flex flex-col">
                <div className="mb-2">
                  <label for="" className="text-black font-bold">Expired</label>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  <input 
                    type="tel"
                    maxlength="2"
                    className="text-center form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    name="expiry" 
                    placeholder='MM'
                  />
                  <input 
                    type="tel"
                    maxlength="2"
                    className="text-center form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    name="expiry" 
                    placeholder='YY'
                  />
                  <input 
                    type="password" 
                    maxlength="3"
                    className="text-center block w-full col-span-1 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    name="cvv" 
                    placeholder='CVV'
                  />
                </div>
              </div>
            </div>
         </main> 
            <PayMp />   
        </div>

        : null}
         
      </>
        
    )
}

export default Payment;

//https://www.npmjs.com/package/react-sdk-mercadopago
//https://www.mercadopago.com.co/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card
