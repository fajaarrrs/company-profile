import React from 'react';

const Services = () => {
  const foodMenus = [
    { 
      name: "Soto Daging", 
      price: "Rp 15.000", 
      image: "https://bing.com/th?id=OSK.1c62e088600f88117ffe79f0fff67eae",
      desc: "Soto daging kuah bening sing gurih lan seger, cocok dipangan sak kapan wae." 
    },
    { 
      name: "Rawon", 
      price: "Rp 20.000", 
      image: "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/07/18/1838279198.jpg",
      desc: "Kuah ireng pekat, rasane gurih nendang lan nggugah selera." 
    },
    { 
      name: "Sop", 
      price: "Rp 12.000", 
      image: "https://th.bing.com/th/id/OIP.kLcwoIONWQ2s_yJExxAougHaEK?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      desc: "Sop anget isi sayuran seger, rasane enteng lan nenangno." 
    },
    { 
      name: "Lodeh", 
      price: "Rp 10.000", 
      image: "https://th.bing.com/th/id/OIP.JkycgaMMpbwh4INoIioyygHaE8?w=234&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      desc: "Sayur lodeh kuah santan gurih, rasane sederhana tapi nikmat." 
    },
    { 
      name: "Pecel", 
      price: "Rp 8.000", 
      image: "https://th.bing.com/th/id/OIP.FEMUC9XwpvNYM3k72hIbVQHaEJ?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      desc: "Pecel sayuran seger karo sambel kacang gurih pedes sing nggawe nagih." 
    }
  ];

  const drinkMenus = [
    {
      name: "Es Teh",
      price: "Rp 4.000",
      image: "https://th.bing.com/th?q=Gambar+Minuman+Esteh&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-ID&cc=ID&setlang=id&adlt=strict&t=1&mw=247",
      desc: "Es teh manis seger, paling cocok kanggo pendamping panganan."
    },
    {
      name: "Teh Panas",
      price: "Rp 3.000",
      image: "data:image/webp;base64,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",
      desc: "Teh panas anget, sederhana tapi nglegakke."
    },
    {
      name: "Kopi Hitam",
      price: "Rp 5.000",
      image: "https://th.bing.com/th/id/OIP.6ZTGiuEQRQrY4Fa74fIMrgHaEc?w=268&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      desc: "Kopi ireng pekat, cocok kanggo sing seneng rasa asli."
    },
    {
      name: "Es Jeruk",
      price: "Rp 5.000",
      image: "https://th.bing.com/th?q=ES+Jeruk+Dingin&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-ID&cc=ID&setlang=id&adlt=strict&t=1&mw=247",
      desc: "Es jeruk seger asem-manis, ngilangno ngelak."
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-center text-4xl font-black mb-4 uppercase tracking-tight text-gray-900">
          Daftar Menu Warung
        </h1>
        <p className="text-center text-gray-500 italic mb-16 text-lg">
          "Cita rasa lokal Sidoarjo"
        </p>

        <h2 className="text-2xl font-black mb-8 text-gray-800">
          🍽️ Menu Makanan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {foodMenus.map((item, idx) => (
            <MenuCard key={idx} item={item} />
          ))}
        </div>

        <h2 className="text-2xl font-black mb-8 text-gray-800">
          🥤 Menu Minuman
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {drinkMenus.map((item, idx) => (
            <MenuCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MenuCard = ({ item }) => (
  <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="h-48 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>

    <div className="p-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-black text-2xl text-gray-900">{item.name}</h3>
        <span className="text-xs font-bold bg-orange-100 text-orange-700 px-3 py-1 rounded-full uppercase tracking-wider">
          {item.price}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed mb-6 italic">
        "{item.desc}"
      </p>
      <button className="w-full py-3 border-2 border-orange-600 text-orange-600 font-bold rounded-2xl hover:bg-orange-600 hover:text-white transition-all active:scale-95">
        Pesan Menu Ini
      </button>
    </div>
  </div>
);

export default Services;
