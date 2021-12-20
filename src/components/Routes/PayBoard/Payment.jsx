import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import { Link, useParams } from 'react-router-dom';
import 'react-credit-cards/es/styles-compiled.css';
import Swal from 'sweetalert2';


function Payment() {
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
    <div className='py-12'>
            
     <div className='nav-bar flex'>
      <div className='ml-4'>
       <Link to={`/resto/${idResto}/table/${idTable}/bill`}>
			<button className='button mr-60'>
              <img src="https://img.icons8.com/ios/50/aa0020/cash-receipt.png" width="40" className='ml-1' alt=""/>
			</button>
		</Link>
      </div>
     </div>
    

    <form className='m-4 pt-4'>
    <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" x-data="creditCard">
        <Cards 
          number={number}
          name={name}
          expiry={expiry}
          cvv={cvv}
          focused={focus}
        />
    <main className="mt-4 p-4">
      <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
        <div className="my-3">
        <input 
          type="tel" 
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
          className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          name="name" 
          placeholder='Card Holder'
          value={name} 
          onChange={e => setName(e.target.value)}
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
          type="text" 
          className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
          name="expiry" 
          placeholder='MM/YY'
          value={expiry} 
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input 
          type="password" 
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

   </div>
  )
}

export default Payment
