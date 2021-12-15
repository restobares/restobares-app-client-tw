import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import { Link } from 'react-router-dom';
import 'react-credit-cards/es/styles-compiled.css';
import Swal from 'sweetalert2';

const idTable = 5;
const idResto = 5;

function Payment() {

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
    <div>
            
     <div className='nav-bar flex'>
      <div className='ml-4'>
       <Link to={`/resto/${idResto}/table/${idTable}/bill`}>
			<button className='button mr-60'>
              <img src="https://img.icons8.com/ios/50/aa0020/cash-receipt.png" width="40" className='ml-1' alt=""/>
			</button>
		</Link>
      </div>
     </div>


    {/* <div className="m-4">
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" x-data="creditCard">
        <header className="flex flex-col justify-center items-center">
          <div className="relative" >
            <img className="w-full h-auto" src="https://pngimg.com/uploads/credit_card/credit_card_PNG22.png" alt="front credit card" />
            
          </div>
         
          <ul className="flex pt-5">
            <li className="mx-2">
              <img className="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" />
            </li>
            <li className="mx-2">
              <img className="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" />
            </li>
            <li className="ml-5">
              <img className="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" />
            </li>
          </ul>
        </header>
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card Holder"
                maxlength="30"
                x-model="cardholder"
              />
            </div>
            <div className="my-3">
              <input
                type="number"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="XXXX - XXXX - XXXX - XXXX"
                id="inputNumero"
                maxlength="19"
              />
            </div>
            <div className="my-3 flex flex-col">
              <div className="mb-2">
                <label for="" className="text-gray-700">Expired</label>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                <select
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  x-model="expired.month"
                >
                  <option value="" selected disabled>MM</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  x-model="expired.year"
                >
                  <option value="" selected disabled>YY</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
                <input
                  type="password"
                  className="block w-full col-span-1 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="CVV"
                  maxlength="3"
                  x-model="securityCode"
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-pink-700 rounded-2xl p-2 text-3xl text-white">
          <button onClick={() => mostrarAlerta()} >
            Pay now
          </button>
        </footer>
      </div>
    </div> */}

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
