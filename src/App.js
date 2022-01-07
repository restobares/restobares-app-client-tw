import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Socket.io
import io from 'socket.io-client';

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
import AdminMenu from './components/Admin-Side/AdminMenu/AdminMenu.jsx';
import QrManager from './components/Admin-Side/Settings/QrManagement/QrManagement.jsx';
import Analytics from './components/Admin-Side/Settings/Analytics.jsx';
import Themes from './components/Admin-Side/Settings/Themes.jsx';
import ShowRun from './components/ShowRunSide/ShowRun.jsx';
import QrGenerated from './components/Admin-Side/Settings/QrManagement/QrGenerated.jsx';
import EditMenu from './components/Admin-Side/AdminMenu/EditMenu.jsx'
import MenuFormEditable from './components/Admin-Side/AdminMenu/MenuFormEditable.jsx';
import Logotypes from './components/Admin-Side/Settings/Logotypes/Logotypes.jsx';
import ForgotPassword from './components/Admin-Side/ForgotPassword.jsx';
import Account from './components/Admin-Side/Settings/Account.jsx'
import ChangePass from './components/Admin-Side/Settings/ChangePass.jsx';

// Socket connection
const socket = io('https://restobares-app-api.herokuapp.com' /*, { withCredentials: true }*/); 


function App() {
	// Socket events
	function joinResto(idResto) {
	  socket.emit('joinResto',idResto);
	}
	//The diner did something, we tell the server
	function tableSend() {
		socket.emit('tableSend');
	}
	function staffListen(cb) {
		socket.on('staffListen', () => {
			cb();
		})
	}
	//The staff did something, we tell the server
	function staffSend() {
		socket.emit('staffSend');
	}
	function tableListen(cb) {
		socket.on('tableListen', () => {
			cb();
		})
	}

  return (
    <BrowserRouter>
      <div className="global">
        <Routes>
          {/* Show-Run */}
          <Route path="/" element={<ShowRun/>}></Route>
          <Route path="resto/:idResto/table/:idTable" element={<LandingPage joinResto={joinResto} tableSend={tableSend}/>}></Route>
          <Route path="resto/:idResto/table/:idTable/menu" element={<OrderBoard />}></Route>
          <Route path="resto/:idResto/table/:idTable/order" element={<BillBoard joinResto={joinResto} tableSend={tableSend}/>}></Route>
          <Route path="resto/:idResto/table/:idTable/bill" element={<PayBoard joinResto={joinResto} tableSend={tableSend}/>} ></Route>
          <Route path="resto/:idResto/table/:idTable/payment" element={<Payment />} ></Route>


          {/* Admin */}
          <Route path="resto/login" element={<LandingLogin />}></Route>
          <Route path="resto/login/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="resto/:idResto/resto-home" element={<HomeAdmin joinResto={joinResto} staffListen={staffListen}/>}></Route>
          
          <Route path="resto/:idResto/admin/tables" element={<Tables joinResto={joinResto} staffListen={staffListen}/>}></Route>
          <Route path="resto/:idResto/admin/orders" element={<ActiveOrders joinResto={joinResto} staffListen={staffListen}/>}></Route>
          <Route path="resto/:idResto/put" element={<PutTesting />}></Route>
          <Route path="resto/:idResto/resto-home/createmenu" element={<AdminMenu />}></Route>
          <Route path="resto/:idResto/resto-home/qrmanager" element={<QrManager />}></Route>
          <Route path="resto/:idResto/resto-home/qrmanager/qrs" element={<QrGenerated />}></Route>
          <Route path="resto/:idResto/resto-home/analytics" element={<Analytics />}></Route>
          <Route path="resto/:idResto/resto-home/account/themes" element={<Themes />}></Route>
          <Route path="resto/:idResto/resto-home/editmenu" element={<EditMenu />}></Route>
          <Route path="resto/:idResto/resto-home/editmenu/:idProduct" element={<MenuFormEditable />}></Route>
          <Route path="resto/:idResto/resto-home/account/logotype" element={<Logotypes />}></Route>
          <Route path="resto/:idResto/resto-home/account" element={<Account />}></Route>
          <Route path="resto/:idResto/resto-home/account/changepassword" element={<ChangePass />}></Route>
          

          <Route path='*' element={<ShowRun/>} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
