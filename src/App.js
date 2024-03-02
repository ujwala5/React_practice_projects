import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Inventory from './Components/Inventory.js';
import Messaging from './Components/Messaging.js';
import Customers from './Components/Customers.js';


function App() {
  function Name() {
    return (
      <div>
        <h1>This is Name page</h1>

      </div>
    );
  }
  return (

    < div >
      <BrowserRouter>
        {/* <Link to=""> Home  </Link>
        <Link to="/inventory"> Inventory  </Link>
        <Link to="/messaging"> Messaging  </Link> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/messaging/name" element={<Name />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>



        {/* <Home />
        <Inventory /> */}

      </BrowserRouter>


    </div >
  );
}

export default App;
