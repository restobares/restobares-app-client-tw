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
import AdminMenu from './components/Admin-Side/AdminMenu/AdminMenu.jsx';
import QrManager from './components/Admin-Side/Settings/QrManagement/QrManagement.jsx';
import Analytics from './components/Admin-Side/Settings/Analytics.jsx';
import Themes from './components/Admin-Side/Settings/Themes.jsx';
import QrGenerated from './components/Admin-Side/Settings/QrManagement/QrGenerated.jsx';
import EditMenu from './components/Admin-Side/AdminMenu/EditMenu.jsx'
import MenuFormEditable from './components/Admin-Side/AdminMenu/MenuFormEditable.jsx';


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
          <Route path="resto/:idResto/resto-home" element={<HomeAdmin />}></Route>
          
          <Route path="resto/:idResto/admin/tables" element={<Tables/>}></Route>
          <Route path="resto/:idResto/admin/orders" element={<ActiveOrders />}></Route>
          <Route path="resto/:idResto/resto-home/:id" element={<TableDetail/>}></Route>
          <Route path="resto/:idResto/put" element={<PutTesting />}></Route>
          <Route path="resto/:idResto/resto-home/createmenu" element={<AdminMenu />}></Route>
          <Route path="resto/:idResto/resto-home/qrmanager" element={<QrManager />}></Route>
          <Route path="resto/:idResto/resto-home/qrmanager/qrs" element={<QrGenerated />}></Route>
          <Route path="resto/:idResto/resto-home/analytics" element={<Analytics />}></Route>
          <Route path="resto/:idResto/resto-home/themes" element={<Themes />}></Route>
          <Route path="resto/:idResto/resto-home/editmenu" element={<EditMenu />}></Route>
          <Route path="resto/:idResto/resto-home/editmenu/:idProduct" element={<MenuFormEditable />}></Route>


        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
