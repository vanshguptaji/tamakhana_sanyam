import React from 'react';
import makhanes from "./makhane.jpg";
import dryFruit from "./download.jpeg"

// Icons
const Icon = ({ children }) => (
  <svg className="w-6 h-6 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const DailyDeals = () => {
  const deals = [
    {
      id: 1,
      category: 'Socks',
      image: 'https://media.istockphoto.com/id/1334594394/photo/makhana-is-lotus-seeds-or-fox-nuts-used-to-preparing-various-foods-in-india.jpg?s=612x612&w=0&k=20&c=x78p4v3i-Qop_sCA_gd2eKFv0IHdflPZr6vsBGoqnaE=',
      originalPrice: '$8.99',
      salePrice: '$5.99',
      bgColor: 'bg-yellow-200'
    },
    {
      id: 2,
      category: 'T-Shirt',
      image: dryFruit,
      originalPrice: '$8.99',
      salePrice: '$5.99',
      bgColor: 'bg-pink-200'
    },
    {
      id: 3,
      category: 'Smartwatches',
      image: makhanes,
      originalPrice: '$8.99',
      salePrice: '$5.99',
      bgColor: 'bg-red-200'
    }
  ];

  return (
    <div className="bg-gray-900 rounded-2xl p-6 max-w-6xl mx-auto text-white ">
      <div className="flex justify-between items-center mb-5 ">
        <h2 className="text-2xl font-bold">Daily Deals</h2>
        <a href="#" className="flex items-center text-sm text-white hover:underline">
          See All <Icon><polyline points="9 18 15 12 9 6"></polyline></Icon>
        </a>
      </div>

      <div className="flex gap-4 overflow-x-hidden overflow-y-hidden">
        {deals.map(deal => (
          <div key={deal.id} className={`relative min-w-60 h-60 rounded-3xl overflow-hidden flex flex-col justify-between p-2 ${deal.bgColor}`}>
            <img src={deal.image} alt={deal.category} className="absolute inset-0 w-full h-3/5 object-cover" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{deal.category}</h3>
                  <p className="text-sm text-gray-600">Popular items</p>
                </div>
                <button className="bg-white bg-opacity-70 rounded-full w-6 h-6 flex items-center justify-center">
                  <Icon><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></Icon>
                </button>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-2">
                <span className="line-through text-gray-600 text-sm mr-2">{deal.originalPrice}</span>
                <span className="text-lg font-bold text-gray-800">{deal.salePrice}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-gray-800 text-white rounded-lg px-3 py-1 text-sm">Add to Cart</button>
                <button className="w-9 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-full">
                  <Icon><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></Icon>
                </button>
                <button className="w-9 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-full">
                  <Icon><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></Icon>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyDeals;