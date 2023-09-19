import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './components/Signup';
import Logout from './pages/Logout';
import Cart from './pages/Cart';

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>





    </>
  )
}


