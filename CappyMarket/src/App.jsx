import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignUp from './components/User/SignUp';
import Cart from './pages/Cart';
import ProductSingle from './components/Products/ProductSingle';
import ProductAll from './components/Products/ProductAll'
import CheckOut from './pages/CheckOut';

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/ProductSingle/:id" element={<ProductSingle />} />
            <Route path="/ProductAll" element={<ProductAll />} />
          </Routes>
        </div>
      </Router>





    </>
  )
}


