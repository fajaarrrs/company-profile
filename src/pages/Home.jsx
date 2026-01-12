import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="antialiased">

      <header className="pt-32 pb-20 px-6 text-center bg-[#FDFBF7]">
        <div className="inline-block px-4 py-1.5 mb-6 border border-orange-200 rounded-full bg-white shadow-sm">
          <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">
           🏡 Warung Digital Andalan
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
         Masakan Rumahan,
Rasa Juara.<br /> 
          <span className="text-orange-600 italic">Singgah sebentar, pulang kenyang.</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-gray-600 text-lg mb-10 leading-relaxed">
          Ngopi Disik, Solusi Nyusul
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/services" className="px-10 py-4 bg-orange-600 text-white font-bold rounded-2xl shadow-xl shadow-orange-200 hover:-translate-y-1 transition text-sm uppercase">
            Lihat Daftar Menu
          </Link>
          <Link to="/about" className="px-10 py-4 bg-white text-gray-800 font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 transition text-sm uppercase">
            Cerita Kami
          </Link>
        </div>
      </header>

      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 uppercase">Menu Spesial Hari Ini</h2>
          <p className="text-gray-500 italic">"Pilihan favorit pelanggan untuk go-digital"</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    
          <div className="p-8 border-2 border-dashed border-orange-200 rounded-[2.5rem] bg-orange-50/30 group hover:bg-orange-50 transition-colors">
            <div className="text-4xl mb-4">🍲</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Soto Ayam</h3>
            <p className="text-gray-600 mb-6 italic text-sm">"kuah seger lan daging seng muanteb."</p>
            <Link to="/services" className="text-orange-600 font-bold text-sm underline group-hover:text-orange-700">
              Lihat Detail makanan
            </Link>
          </div>

          <div className="p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] bg-gray-50/30 group hover:bg-gray-100 transition-colors">
            <div className="text-4xl mb-4">🥘</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Rawon</h3>
            <p className="text-gray-600 mb-6 italic text-sm">"kuah ireng pekat dengan rasa yang gurihh."</p>
            <Link to="/services" className="text-gray-500 font-bold text-sm underline group-hover:text-gray-700">
              Lihat Detail Paket
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;