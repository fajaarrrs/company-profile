import React from 'react';

const Contact = () => (
  <div className="pt-32 pb-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
      
      <div>
        <h1 className="text-4xl font-black mb-6">
          Mampir ke Warung Kami ☕
        </h1>

        <p className="text-gray-600 mb-8">
          Punya cerita, keluhan, atau butuh bantuan?  
          Duduk sebentar, ceritakan ke kami.  
          Di warung, semua masalah bisa dibahas pelan-pelan.
        </p>

        <div className="space-y-4 font-bold text-gray-800">
          <p>📍 berbek industri,waru Sidoarjo</p>
          <p>📞 +62 812-3456-7890</p>
          <p>📧 ngobrol@warungkami.id</p>
        </div>
      </div>

      <form className="bg-orange-50 p-8 rounded-3xl space-y-4">
        <input
          type="text"
          placeholder="Nama Anda"
          className="w-full p-4 rounded-xl border border-orange-200 outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl border border-orange-200 outline-none"
        />

        <textarea
          placeholder="Ceritakan masalah atau kebutuhan Anda"
          className="w-full p-4 rounded-xl border border-orange-200 outline-none h-32"
        />

        <button className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition">
          Kirim Cerita
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
