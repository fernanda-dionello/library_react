import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Clients from './pages/ListClient'
import CreateClient from './pages/CreateClient'
import UpdateClient from './pages/UpdateClient'
import clientService from "./services/client-service";
import loginService from "./services/login-service";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Clients clientService={clientService} loginService={loginService}/>} />
          <Route path='/create' element={<CreateClient/>} />
          <Route path='/update/:id' element={<UpdateClient/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
