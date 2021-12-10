import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import LandingPage from './components/LandingPage/LandingPage.jsx'
import Menu from './components/Menu/Menu.jsx'


function App() {
  return (
    <BrowserRouter>
      <div className="global">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
