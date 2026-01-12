import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio'; 
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Navbar /> 
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/portfolio" element={<Portfolio />} />
          
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={
            <div className="pt-40 text-center font-bold text-gray-400">
              404 - Halaman Tidak Ditemukan
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}