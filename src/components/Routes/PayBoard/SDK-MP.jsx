import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useMercadopago } from 'react-sdk-mercadopago';
import { postOrderToMP } from "../../../redux/actions/postOrderMP";


function PayMp () {

const mercadopago = useMercadopago.v2('TEST-e78cc78d-295d-40e6-adf1-266199ed95e7', {
        locale: 'es-AR'
    });

    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(postOrderToMP())
    }, [dispatch])

    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    items: [{
                        "title":"Hamburguesa",
                        "unit_price":10,
                        "quantity":1,
                    }]
                },
                render: {
                    container: '.cho-container',
                    label: 'Pay',
                },

               
                    form: {
                        id: 'form-checkout',
                        cardholderName: {
                            id: 'form-checkout__cardholderName',
                            placeholder: 'Cardholder name',
                        },
                        cardholderEmail: {
                            id: 'form-checkout__cardholderEmail',
                            placeholder: 'Email',
                        },
                        cardNumber: {
                            id: 'form-checkout__cardNumber',
                            placeholder: 'Card number',
                        },
                         cardExpirationMonth: {
                            id: 'form-checkout__cardExpirationMonth',
                            placeholder: 'MM'
                        },
                        cardExpirationYear: {
                            id: 'form-checkout__cardExpirationYear',
                            placeholder: 'YYYY'
                        },
                        securityCode: {
                            id: 'form-checkout__securityCode',
                            placeholder: 'CVV',
                        },
                        installments: {
                            id: 'form-checkout__installments',
                            placeholder: 'Total installments'
                        },
                        identificationType: {
                            id: 'form-checkout__identificationType',
                            placeholder: 'Document type'
                        },
                        identificationNumber: {
                            id: 'form-checkout__identificationNumber',
                            placeholder: 'Document number'
                        },
                        issuer: {
                            id: 'form-checkout__issuer',
                            placeholder: 'Issuer'
                        }
                    },
                    callbacks: {
                       onFormMounted: error => {
                           if (error) return console.warn('Form Mounted handling error: ', error)
                           console.log('Form mounted')
                       },
                       onFormUnmounted: error => {
                           if (error) return console.warn('Form Unmounted handling error: ', error)
                           console.log('Form unmounted')
                       },
                       onIdentificationTypesReceived: (error, identificationTypes) => {
                           if (error) return console.warn('identificationTypes handling error: ', error)
                           console.log('Identification types available: ', identificationTypes)
                       },
                       onPaymentMethodsReceived: (error, paymentMethods) => {
                           if (error) return console.warn('paymentMethods handling error: ', error)
                           console.log('Payment Methods available: ', paymentMethods)
                       },
                       onIssuersReceived: (error, issuers) => {
                           if (error) return console.warn('issuers handling error: ', error)
                           console.log('Issuers available: ', issuers)
                       },
                       onInstallmentsReceived: (error, installments) => {
                           if (error) return console.warn('installments handling error: ', error)
                           console.log('Installments available: ', installments)
                       },
                       onCardTokenReceived: (error, token) => {
                           if (error) return console.warn('Token handling error: ', error)
                           console.log('Token available: ', token)
                       },
                       onSubmit: (event) => {
                           event.preventDefault();
                           const cardData = mercadopago.getCardFormData();
                           console.log('CardForm data available: ', cardData)
                       },
                       onFetching:(resource) => {
                           console.log('Fetching resource: ', resource)
           
                           // Animate progress bar
                           const progressBar = document.querySelector('.progress-bar')
                           progressBar.removeAttribute('value')
           
                           return () => {
                               progressBar.setAttribute('value', '0')
                           }
                       },
                   }
                })
                
            
        }
    }, [mercadopago]) 

    /* const mp = new MercadoPago('TEST-e78cc78d-295d-40e6-adf1-266199ed95e7', {
        locale: 'es-AR',
      })

    const tokenizer = mp.checkout({
        tokenizer: {
            totalAmount: 4000,
            summary: {
                arrears: 18,
                taxes: 20,
                charge: 30,
                discountLabel: 'discount label',
                discount: 5,
                productLabel: 'product label',
                product: 400,
                shipping: 10,
                title: 'summary title',
            },
            savedCards: {
                cardIds: 'CARD_ID',
                customerId: 'CUSTOMER_ID'
            },
            installments: {
                minInstallments: 2,
                maxInstallments: 9,
            },
            backUrl: 'http://YOUR_URL/process'
        },
        theme: {
            elementsColor: '#2ddc52',
            headerColor: '#2ddc52'
        }
    });
    
    tokenizer.render({
        container: '.tokenizer-container',
        label: 'Pagar'
    }); */
    
return (
    <div>
        <form id="form-checkout" >
          <input type="tel"
                 name="cardNumber"
                 placeholder='CARD NUMBER'
                 id="form-checkout__cardNumber"
                 className='text-center block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none' />
          <input type="text"
                 name="cardholderName"
                 placeholder='XXXX - XXXX - XXXX - XXXX'
                 id="form-checkout__cardholderName"
                 className="text-center block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" />
          <input type="email"
                 name="cardholderEmail"
                 placeholder='email@example.com'
                 id="form-checkout__cardholderEmail"
                 className="text-center block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"/>
          
          <div className='grid grid-cols-3 sm:grid-cols-4'>
          <input type="text"
                 name="cardExpirationMonth"
                 placeholder='MM'
                 id="form-checkout__cardExpirationMonth"
                 className="text-center form-select appearance-none block px-1 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" />
          <input type="text"
                 name="cardExpirationYear"
                 placeholder='YY'
                 id="form-checkout__cardExpirationYear"
                 className=" text-center form-select appearance-none block px-1 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" />
          <input type="password"
                 name="securityCode"
                 placeholder='CVV'
                 id="form-checkout__securityCode"
                 className="text-center block px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" />
           </div>
          {/* <select name="issuer"
                  id="form-checkout__issuer"
                  className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none">
          </select>
          <select name="identificationType" 
                  id="form-checkout__identificationType"
                  className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none">
          </select> */}
         {/*  <input type="text" 
                 name="identificationNumber" 
                 placeholder='DNI'
                 id="form-checkout__identificationNumber"
                 className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"/> */}
          {/* <select name="installments" 
                  id="form-checkout__installments"
                  className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none">
          </select> */}
          <button type="submit" 
                  id="form-checkout__submit"
                  className="block w-full px-5 py-2 rounded-lg bg-pink-700 shadow-lg placeholder-gray-400 text-white focus:ring focus:outline-none">
                    Pay
          </button>

          {/* <progress value="0" class="progress-bar">loading...</progress> */}
        </form>

        {/* sdk (btn Pay) */}
      <div className="cho-container" />
    </div>
 )
    
}

export default PayMp;
