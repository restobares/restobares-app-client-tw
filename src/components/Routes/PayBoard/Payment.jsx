import React from 'react';
import PayMp from './SDK-MP';


// const toInputUppercase = e => {
//   e.target.value = ("" + e.target.value).toUpperCase();
// };

function Payment({showModalPay, setShowModalPay}) {

  // const [name, setName] = useState('');


    return (
      <>
      {showModalPay ?
      
        <div className='fixed inset-0 bg-pink-900 bg-opacity-75 pt-28'>
          <div>
            <button onClick={() => setShowModalPay(prev => !prev)} className='bg-red-500 rounded-xl w-16 text-red-50 text-lg' >Cerrar</button>
          </div>
            <PayMp />   
        </div>

        : null}
         
      </>
        
    )
}

export default Payment;

//https://www.npmjs.com/package/react-sdk-mercadopago
//https://www.mercadopago.com.co/developers/es/guides/online-payments/checkout-api/receiving-payment-by-card
//https://github.com/s4mukka/react-sdk-mercadopago#readme


/*

posibles reducers -->

Reducers :

enviar pago
obtener pago
resetear pago
resetear enlace de pago

*/ 
