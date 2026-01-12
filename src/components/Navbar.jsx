import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = ({ isActive }) => 
    isActive 
      ? "text-orange-600 font-bold border-b-2 border-orange-600 pb-1" 
      : "text-gray-600 hover:text-orange-600 transition";

  const mobileActiveStyle = ({ isActive }) => 
    isActive 
      ? "text-orange-600 font-bold bg-orange-50 p-3 rounded-xl" 
      : "text-gray-600 p-3 hover:bg-gray-50 rounded-xl transition";

  return (
    <nav className="fixed w-full z-50 px-6 py-4 bg-white/90 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-black text-orange-600 tracking-tight">
          <Link to="/" onClick={() => setIsOpen(false)}>UMI<span className="text-gray-900">.WARUNG</span></Link>
        </div>

        <div className="hidden md:flex gap-8 text-[10px] font-bold text-gray-700 uppercase tracking-[0.2em]">
          <NavLink to="/" end className={activeStyle}>Home</NavLink>
          <NavLink to="/about" className={activeStyle}>About Us</NavLink>
          <NavLink to="/services" className={activeStyle}>Menu</NavLink>
          <NavLink to="/portfolio" className={activeStyle}>Best seller</NavLink>
          <NavLink to="/contact" className={activeStyle}>Contact</NavLink>
        </div>

        <Link to="/contact" className="hidden md:block bg-orange-600 text-white px-5 py-2 rounded-full font-bold text-[10px] shadow-lg shadow-orange-200 active:scale-95 transition uppercase">
          Pesan Sekarang
        </Link>

        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-orange-100 p-6 flex flex-col gap-4 shadow-xl">
          <NavLink to="/" end className={mobileActiveStyle} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={mobileActiveStyle} onClick={() => setIsOpen(false)}>About Us</NavLink>
          <NavLink to="/services" className={mobileActiveStyle} onClick={() => setIsOpen(false)}>Menu</NavLink>
          <NavLink to="/portfolio" className={mobileActiveStyle} onClick={() => setIsOpen(false)}>Portfolio</NavLink>
          <NavLink to="/contact" className={mobileActiveStyle} onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;