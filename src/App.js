import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicExample from './component/BasicExample';
import Footer from './component/Footer';
import Home from './component/Home';
import Pricing from './component/Pricing';
import Support from './component/Support';
import Products from './component/Products';
import SignUp from './component/SignUp';
import About from './component/About';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <BasicExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
