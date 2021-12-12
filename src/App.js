import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD

//components
import LandingPage from './components/Routes/LandingPage/LandingPage.jsx'
import BillBoard from './components/Routes/BillBoard/BillBoard.jsx'
import OrderBoard from './components/Routes/OrderBoard/OrderBoard.jsx'
// import Menu from './components/Menu/Menu.jsx'

=======
import LandingPage from './components/LandingPage/LandingPage.jsx'
import ActiveOrders from './components/ActiveOrders/ActiveOrders.jsx';
>>>>>>> 1a2ea422a6216328024b42fe28a95cbbe50c747d

function App() {
  return (
    <BrowserRouter>
      <div className="global">
        <Routes>
<<<<<<< HEAD
          <Route path="resto/:idResto/table/:idTable" element={<LandingPage />}></Route>
          <Route path="resto/:idResto/table/:idTable/menu" element={<OrderBoard />}></Route>
          <Route path="resto/:idResto/table/:idTable/order" element={<BillBoard />}></Route>
=======
          <Route path="/home" element={<LandingPage />}></Route>
          <Route path="/ordenes" element={<ActiveOrders />}></Route>
>>>>>>> 1a2ea422a6216328024b42fe28a95cbbe50c747d
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
