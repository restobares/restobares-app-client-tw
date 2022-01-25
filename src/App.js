import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


//components
import LandingPage from './components/Routes/LandingPage/LandingPage.jsx';
import BillBoard from './components/Routes/BillBoard/BillBoard.jsx';
import OrderBoard from './components/Routes/OrderBoard/OrderBoard.jsx';
import PayBoard from './components/Routes/PayBoard/PayBoard.jsx';
import Payment from './components/Routes/PayBoard/Payment.jsx';
import LandingLogin from './components/Admin-Side/Login';
import LandingRegister from './components/Admin-Side/Register';
import HomeAdmin from './components/Admin-Side/Navbar/HomeAdmin';
import PutTesting from './components/Admin-Side/PutTesting.jsx';
import AdminMenu from './components/Admin-Side/AdminMenu/AdminMenu.jsx';
import QrManager from './components/Admin-Side/Settings/QrManagement/QrManagement.jsx';
import Analytics from './components/Admin-Side/Settings/Analytics.jsx';
import ShowRun from './components/ShowRunSide/ShowRun.jsx';
import QrGenerated from './components/Admin-Side/Settings/QrManagement/QrGenerated.jsx';
import EditMenu from './components/Admin-Side/AdminMenu/EditMenu.jsx'
import MenuFormEditable from './components/Admin-Side/AdminMenu/MenuFormEditable.jsx';
import ForgotPassword from './components/Admin-Side/ForgotPassword.jsx';
import ChangePass from './components/Admin-Side/Settings/ChangePass.jsx';
import ClientFeedback from './components/Routes/ClientFeedback/ClientFeedback.jsx';
import AccountSettings from './components/Admin-Side/Settings/AccountSettings.jsx';
import ChangeAccount from './components/Admin-Side/Settings/ChangeAccount.jsx';
import UserConfirm from './components/Admin-Side/UserConfirm.jsx';
import Feedbacks from './components/Admin-Side/Settings/AnalyticsDetails/Feedbacks.jsx';
import Revenues from './components/Admin-Side/Settings/AnalyticsDetails/Revenues.jsx';

function App() {

  return (
    <BrowserRouter>
      <div className="global">
        <Routes>
          {/* Show-Run */}
          <Route path="/" element={<ShowRun/>}></Route>
          <Route path="resto/:idResto/table/:idTable" element={<LandingPage />}></Route>
          <Route path="resto/:idResto/table/:idTable/menu" element={<OrderBoard />}></Route>
          <Route path="resto/:idResto/table/:idTable/order" element={<BillBoard />}></Route>
          <Route path="resto/:idResto/table/:idTable/bill" element={<PayBoard />} ></Route>
          <Route path="resto/:idResto/table/:idTable/payment" element={<Payment />} ></Route>
          <Route path="resto/:idResto/table/:idTable/feedback" element={<ClientFeedback/>}></Route>


          {/* Admin */}
          <Route path="resto/login" element={<LandingLogin />}></Route>
          <Route path="resto/register" element={<LandingRegister />}></Route>
          <Route path="resto/mail-confirmation/:token" element={<UserConfirm />}></Route>
          <Route path="resto/login/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="resto/:idResto/resto-home" element={<HomeAdmin />}></Route>
          
          <Route path="resto/:idResto/put" element={<PutTesting />}></Route>
          <Route path="resto/:idResto/resto-home/createmenu" element={<AdminMenu />}></Route>
          <Route path="resto/:idResto/resto-home/qrmanager" element={<QrManager />}></Route>
          <Route path="resto/:idResto/resto-home/qrmanager/qrs" element={<QrGenerated />}></Route>
          <Route path="resto/:idResto/resto-home/analytics" element={<Analytics />}></Route>
          <Route path="resto/:idResto/resto-home/analytics/feedbacks" element={<Feedbacks />}></Route>
          <Route path="resto/:idResto/resto-home/analytics/revenues/:time" element={<Revenues />}></Route>
          <Route path="resto/:idResto/resto-home/editmenu" element={<EditMenu />}></Route>
          <Route path="resto/:idResto/resto-home/editmenu/:idProduct" element={<MenuFormEditable />}></Route>
          <Route path="resto/:idResto/resto-home/accountsettings" element={<AccountSettings />}></Route>
          <Route path="resto/:idResto/resto-home/accountsettings/changepassword" element={<ChangePass />}></Route>
          <Route path="resto/:idResto/resto-home/accountsettings/changeaccount" element={<ChangeAccount />}></Route>
          

          <Route path='*' element={<ShowRun/>} ></Route>

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
