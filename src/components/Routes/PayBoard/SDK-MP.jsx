import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';


function PayMp () {

const mercadopago = useMercadopago.v2('TEST-e78cc78d-295d-40e6-adf1-266199ed95e7', {
        locale: 'es-AR'
    });

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
                }
            })
        }
    }, [mercadopago]) 
    
return (
    <div>
      <div className="cho-container" />
    </div>
 )
    
}

export default PayMp;
