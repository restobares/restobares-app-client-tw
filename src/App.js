import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import LandingPage from './components/Routes/LandingPage/LandingPage.jsx';
import BillBoard from './components/Routes/BillBoard/BillBoard.jsx';
import OrderBoard from './components/Routes/OrderBoard/OrderBoard.jsx';
import PayBoard from './components/Routes/PayBoard/PayBoard.jsx';
import Payment from './components/Routes/PayBoard/Payment.jsx';
import LandingLogin from './components/Admin-Side/Login';
import HomeAdmin from './components/Admin-Side/Navbar/HomeAdmin';
import PutTesting from './components/Admin-Side/PutTesting.jsx';
import ActiveOrders from './components/ActiveOrders/ActiveOrders.jsx';
import Tables from './components/Admin-Side/Tables/Tables.jsx';
import TableDetail from './components/Admin-Side/Tables/TableDetail.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="global">
        <Routes>
          <Route path="resto/:idResto/table/:idTable" element={<LandingPage />}></Route>
          <Route path="resto/:idResto/table/:idTable/menu" element={<OrderBoard />}></Route>
          <Route path="resto/:idResto/table/:idTable/order" element={<BillBoard />}></Route>
          <Route path="resto/:idResto/table/:idTable/bill" element={<PayBoard />} ></Route>
          <Route path="resto/:idResto/table/:idTable/payment" element={<Payment />} ></Route>


          {/* Admin */}
          <Route path="resto/login" element={<LandingLogin />}></Route>
          <Route path="resto/:idResto/admin" element={<HomeAdmin />}></Route>
          
          <Route path="resto/:idResto/admin/tables" element={<Tables/>}></Route>
          <Route path="resto/:idResto/admin/orders" element={<ActiveOrders />}></Route>
          <Route path="resto/:idResto/admin/:id" element={<TableDetail/>}></Route>
          <Route path="resto/:idResto/put" element={<PutTesting />}></Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
