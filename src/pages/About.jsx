import React from 'react';

const About = () => {
  return (
    <div className="pt-24 bg-[#FDFBF7]">
    
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Bukan Sekadar Pesanan, <br />
          <span className="text-orange-600">Tapi Soal Rasa & Kepercayaan.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg italic">
          "Warung adalah tempat orang datang dengan cerita,  
          dan pulang dengan rasa puas. Itulah cara kami melayani sejak awal."
        </p>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
              Berawal dari Sebuah Warung
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Warung ini lahir dari kebiasaan sederhana: <b>bangun lebih pagi,
              menyiapkan pesanan dengan sungguh-sungguh, dan melayani dengan jujur</b>.
              Dari warung kecil inilah kami belajar bahwa kepercayaan dibangun dari
              konsistensi, bukan janji besar.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Bagi kami, warung bukan sekadar tempat berjualan.
              Warung adalah tempat bertemu, berbagi cerita, dan mencari solusi bersama.
              Nilai itulah yang kami jaga dan terapkan dalam setiap pesanan yang kami layani.
            </p>
          </div>

          <div className="bg-orange-100 rounded-[2rem] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 border-2 border-white p-6 rounded-2xl">
              <h3 className="text-orange-700 font-black text-2xl mb-2">
                Prinsip Warung Kami:
              </h3>
              <ul className="space-y-3 text-orange-900 font-medium">
                <li>✅ Setiap pesanan dikerjakan dengan sungguh-sungguh</li>
                <li>✅ Pelanggan dilayani dengan ramah dan terbuka</li>
                <li>✅ Mengutamakan kebutuhan, bukan sekadar jualan</li>
                <li>✅ Jujur dan transparan dalam setiap proses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Resep Warung Kami</h2>
          <p className="text-gray-500">
            Nilai sederhana yang kami pegang sejak hari pertama.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Kerja yang Rapi",
              desc: "Setiap pesanan kami kerjakan dengan teliti agar hasilnya konsisten dan memuaskan.",
              icon: "🧾"
            },
            {
              title: "Melayani dengan Hati",
              desc: "Kami mendengarkan pelanggan dengan baik, seperti melayani tamu di warung sendiri.",
              icon: "🤝"
            },
            {
              title: "Harga Wajar",
              desc: "Harga kami tetapkan secara jujur dan masuk akal, tanpa biaya tersembunyi.",
              icon: "💰"
            }
          ].map((val, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-orange-100 rounded-3xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{val.icon}</div>
              <h4 className="font-bold text-lg mb-2">{val.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
