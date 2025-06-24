import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

// Icons
const Icon = ({ children }) => (
  <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const ProductItem = ({ id, image, name, price, bestseller }) => {
  const { currency } = useContext(ShopContext);

  // Calculate "original" price (20% higher for sale effect)
  const originalPrice = (parseFloat(price) * 1.2).toFixed(2);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      to={`/product/${id}`}
      className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 w-full h-full min-h-[370px] flex flex-col justify-between border border-gray-100 max-w-[380px] md:max-w-[420px] mx-auto relative"
    >
      <div>
        {/* Best Seller Badge */}
        {bestseller && (
          <span className="absolute top-5 left-5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full z-10">
            Best Seller
          </span>
        )}
        {/* Product Image */}
        <div className="w-full h-40 flex items-center justify-center mb-4">
          <img
            src={Array.isArray(image) ? image[0] : image}
            alt={name}
            className="object-cover rounded-xl max-h-36"
          />
        </div>
        {/* Product Name */}
        <h3 className="font-bold text-lg text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-500 text-sm mb-4">Our premium quality makhana</p>
      </div>
      {/* Price and Add to Cart */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto">
        <div>
          <span className="text-xl font-bold text-green-700">{currency}{price}</span>
          <span className="ml-2 text-gray-400 line-through text-base">{currency}{originalPrice}</span>
        </div>
      </div>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all duration-200 w-full sm:w-auto">
          Add to Cart
        </button>
    </Link>
  );
};

export default ProductItem