// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import {Link} from 'react-router-dom'

// const ProductItem = ({id,image,name,price}) => {
    
//     const {currency} = useContext(ShopContext);

//   return (
//     <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
//       <div className=' overflow-hidden'>
//         <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
//       </div>
//       <p className='pt-3 pb-1 text-sm'>{name}</p>
//       <p className=' text-sm font-medium'>{currency}{price}</p>
//     </Link>
//   )
// }

// export default ProductItem



import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

// Icons
const Icon = ({ children }) => (
  <svg className="w-6 h-6 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  
  // Generate a random background color
  const bgColors = ['bg-yellow-200', 'bg-pink-200', 'bg-red-200', 'bg-blue-200', 'bg-green-200'];
  const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  
  // Calculate "original" price (20% higher for sale effect)
  const originalPrice = (parseFloat(price) * 1.2).toFixed(2);

  return (
    <Link 
      onClick={() => scrollTo(0, 0)} 
      to={`/product/${id}`} 
      className={`relative min-w-60 h-60 rounded-3xl overflow-hidden flex flex-col justify-between p-2 ${bgColor} block`}
    >
      <img 
        src={image[0]} 
        alt={name} 
        className="absolute inset-0 w-full h-3/5 object-cover" 
      />
      
      <div className="relative z-10 ">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-950">{name}</h3>
            <p className="text-sm text-gray-600">Popular item</p>
          </div>
          <button className="bg-white bg-opacity-70 rounded-full w-6 h-6 flex items-center justify-center">
            <Icon><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></Icon>
          </button>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="mb-2">
          <span className="line-through text-gray-600 text-sm mr-2">{currency}{originalPrice}</span>
          <span className="text-lg font-bold text-gray-800">{currency}{price}</span>
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
    </Link>
  )
}

export default ProductItem