import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Clients from './components/Clients';
import CreateClient from './components/CreateClient';
import UpdateClient from './components/UpdateClient';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Clients/>} />
          <Route path='/create' element={<CreateClient/>} />
          <Route path='/update/:id' element={<UpdateClient/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
