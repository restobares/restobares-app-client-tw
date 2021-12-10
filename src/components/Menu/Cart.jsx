import React from "react";
import Platillo from './Platillo';

const Cart = ({cart, setCart}) => {
    return (
        <div className="text-right pt-3 pr-5">
            <h3>🛒</h3>

            {cart.length === 0 ? (<p>0</p>) 
               : (cart.map((platillo => 
                <Platillo 
                  key={platillo.id} 
                  platillo={platillo} 
                  cart={cart} 
                  setCart={setCart} 
                /> 
            )))}
        </div>
    )
}

export default Cart;