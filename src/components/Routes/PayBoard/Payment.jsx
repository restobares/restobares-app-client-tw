import React, { useState, useEffect } from 'react'
/* import Cards from 'react-credit-cards'; */
import { /* Link */ useParams } from 'react-router-dom';
import axios from 'axios';
/* import 'react-credit-cards/es/styles-compiled.css'; */
/* import Swal from 'sweetalert2'; */

/* const toInputUppercase = e => {
  e.target.value = ("" + e.target.value).toUpperCase();
};


function Payment({showModalPay, setShowModalPay}) {
  const { idResto, idTable } = useParams();
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');    
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [focus, setFocus] = useState('');

    const mostrarAlerta = () => {
        Swal.fire({
          title: 'Payment Successfull!',
          text: 'Thank You!',
          icon: 'success',
          button: "Ok",
          allowOutsideClick: false,
          allowEscapeKey: false,
        });
    }


  return (
    <>
  {showModalPay ?
   <div className='py-12'>
    <form className='m-4'>
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" x-data="creditCard">
        <Cards 
          number={number}
          name={name}
          expiry={expiry}
          cvv={cvv}
          focused={focus}
        />
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">Card Payment</h1>
            <div className="my-3">
            <input 
              type="tel" 
              pattern="[0-9]{10}"
              maxlength="16"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              name="number" 
              placeholder='XXXX - XXXX - XXXX - XXXX'
              value={number} 
              onChange={e => setNumber(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />
            </div>
            <div className="my-3">
            <input 
              type="text" 
              maxlength="100"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              name="name" 
              placeholder='Card Holder'
              value={name} 
              onChange={e => setName(e.target.value)}
              onInput={toInputUppercase}
              onFocus={e => setFocus(e.target.name)}
            />
            </div>
            <div className="">
            <div className="my-3 flex flex-col">
            <div className="mb-2">
              <label for="" className="text-gray-700">Expired</label>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 ml-20">
            <input 
              type="tel"
              maxlength="4"
              className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              name="expiry" 
              placeholder='MM/YY'
              value={expiry} 
              onChange={e => setExpiry(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />
            <input 
              type="password" 
              maxlength="3"
              className="block w-full col-span-1 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none text-center"
              name="cvv" 
              placeholder='CVV'
              value={cvv} 
              onChange={e => setCvv(e.target.value)}
              onFocus={e => setFocus(e.target.name)}
            />
            </div>
            </div>
           </div>
         </main>    
      </div> 
    </form>
    <footer className="bg-pink-700 rounded-2xl p-2 text-3xl text-white">
      <button onClick={() => mostrarAlerta()} >
        Pay now
       </button>
    </footer>

   </div> : null}
   </>
  )
} */

const FORM_ID = 'payment-form';

function Payment({showModalPay, setShowModalPay}) {
  const { id } = useParams(); // id de producto
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    axios.post('/api/orders', { productId: id }).then((order) => {
      setPreferenceId(order.preferenceId);
    });
  }, [id]);

  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        'https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js';
      script.setAttribute('data-preference-id', preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return (
    <>
    {showModalPay ?

    <form id={FORM_ID} method="GET" />

    : null}
    </>
  );
}

export default Payment


//https://gist.github.com/muZk/e11931b3df6aab7c7dd6dd53058c3e41
