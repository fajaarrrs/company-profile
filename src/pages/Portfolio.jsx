import React from 'react';

const Portfolio = () => {
  const bestSellers = [
    { 
      title: "Soto Ayam Spesial", 
      cat: "Menu Paling Laris", 
      image: "https://bing.com/th?id=OSK.1c62e088600f88117ffe79f0fff67eae", 
      desc: "Racikan bumbu rahasia teko resep asli keluarga sing gurih lan seger. Isine komplit, suwiran ayame manteb."
    },
    { 
      title: "Rawon", 
      cat: "Favorit Pelanggan", 
      image: "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2019/07/18/1838279198.jpg", 
      desc: "Daginge empuk, duduh kluweke pekat lan mentes. Disajikno karo kecambah cilik lan sambel sing nendang."
    },
    { 
      title: "Pecel", 
      cat: "Sarapan Rekomendasi", 
      image: "https://th.bing.com/th/id/OIP.FEMUC9XwpvNYM3k72hIbVQHaEJ?w=321&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
      desc: "Sayuran seger sing disiram sambel kacang pedes-manis sing manteb. Gak lali rempeyek kacang sing renyah."
    },
    { 
      title: "Sop", 
      cat: "Menu Manteb", 
      image: "https://th.bing.com/th/id/OIP.kLcwoIONWQ2s_yJExxAougHaEK?w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
      desc: "Buntute empuk pol, duduhe bening tapi rasane bumbu rempahe kroso banget. Pas dipangan pas panas."
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
     
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 bg-orange-100 text-orange-600 rounded-full font-black text-[10px] uppercase tracking-widest">
            ⭐ Menu Best Seller
          </div>
          <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-4">
            Masakan Sing Paling Laris
          </h1>
          <p className="text-gray-500 italic text-lg">
            "Iki lho daftar menu andalan warung awakdewe sing dadi langganane wong akeh mergo rasane sing maknyus."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {bestSellers.map((item, i) => (
            <div key={i} className="group p-2 rounded-[3rem] border-2 border-transparent hover:border-orange-100 transition-all duration-500">
             
              <div className="bg-[#FDFBF7] aspect-square md:aspect-video rounded-[2.5rem] overflow-hidden shadow-sm border border-orange-50">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="mt-8 px-4 text-center md:text-left">
                <div className="inline-block mb-3">
                  <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest px-3 py-1 bg-orange-50 rounded-full border border-orange-100">
                    {item.cat}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{item.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;