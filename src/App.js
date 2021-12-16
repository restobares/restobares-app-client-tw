import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import LandingPage from './components/Routes/LandingPage/LandingPage.jsx';
import BillBoard from './components/Routes/BillBoard/BillBoard.jsx';
import OrderBoard from './components/Routes/OrderBoard/OrderBoard.jsx';
import PayBoard from './components/Routes/PayBoard/PayBoard.jsx';
import Payment from './components/Routes/PayBoard/Payment.jsx';
import Login from './components/Admin-Side/Login';
import LandingPageAdmin from './components/Admin-Side/LandingPageAdmin';


function App() {
  return (
    <BrowserRouter>
      <div className="global">
        <Routes>
          <Route path="resto/:idResto/table/:idTable" element={<LandingPage />}></Route>
          <Route path="resto/:idResto/table/:idTable/menu" element={<OrderBoard />}></Route>
          <Route path="resto/:idResto/table/:idTable/order" element={<BillBoard />}></Route>
          <Route path="resto/:idResto/table/:idMesa/bill" element={<PayBoard />} ></Route>
          <Route path="resto/:idResto/table/:idMesa/payment" element={<Payment />} ></Route>


          {/* Admin */}
          <Route path="resto/:idResto/login" element={<Login />}></Route>
          <Route path="resto/:idResto/admin" element={<LandingPageAdmin />}></Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
