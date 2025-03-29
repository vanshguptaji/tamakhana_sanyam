// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { Link } from 'react-router-dom'

// // Icons
// const Icon = ({ children }) => (
//   <svg className="w-6 h-6 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     {children}
//   </svg>
// );

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);
  
//   // Generate a random background color
//   const bgColors = ['bg-yellow-200', 'bg-pink-200', 'bg-blue-400', 'bg-amber-500','bg-lime-400','bg-emerald-400','bg-teal-300', 'bg-green-200'];
//   const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  
//   // Calculate "original" price (20% higher for sale effect)
//   const originalPrice = (parseFloat(price) * 1.2).toFixed(2);

//   return (
//     <Link 
//       onClick={() => scrollTo(0, 0)} 
//       to={`/product/${id}`} 
//       className={`relative min-w-64 h-64 rounded-3xl overflow-x-auto flex flex-col justify-between p-2 ${bgColor} block drop-shadow-[8px_8px_0px_#000]`}
//     >
//       <img 
//         src={image[0]} 
//         alt={name} 
//         className="absolute inset-0 w-full h-3/5 object-cover" 
//       />
      
//       <div className="relative z-10 ">
//         <div className="flex justify-between items-start">
//           {/* <div>
//             <h3 className="text-lg font-bold text-gray-950">{name}</h3>
//             <p className="text-sm text-gray-600">Popular item</p>
//           </div> */}
//           <button className="bg-white bg-opacity-70 rounded-full w-6 h-6 flex items-center justify-center">
//             <Icon><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></Icon>
//           </button>
//         </div>
//       </div>
      
//       <div className="relative z-10">
//         <div className=" flex justify-between p-2">
//         <div>
//             <h3 className="text-lg font-bold text-gray-950">{name}</h3>
//             <p className="text-sm text-gray-600">Popular item</p>
//           </div>
//           <div>
//           <span className="text-lg font-bold text-gray-800 mr-2 ">{currency}{price}</span>
//           <span className="line-through text-gray-600 text-sm mr-2">{currency}{originalPrice}</span>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <button className="flex-1 bg-gray-800 text-white rounded-lg px-3 py-1 text-sm">Add to Cart</button>
//           <button className="w-9 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-full">
//             <Icon><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></Icon>
//           </button>
//           <button className="w-9 h-9 flex items-center justify-center bg-white border border-gray-300 rounded-full">
//             <Icon><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></Icon>
//           </button>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default ProductItem


import React, { useContext, useRef, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

// Icons
const Icon = ({ children }) => (
  <svg className="w-6 h-6 stroke-current" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

// ProductSlider component to handle multiple images
const ProductSlider = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle touch/swipe gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (difference > 50) {
      // Swipe left, go next
      setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
    } else if (difference < -50) {
      // Swipe right, go previous
      setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
    }
  };

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden rounded-3xl"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image slider with smooth transitions */}
      <div 
        className="flex transition-transform duration-300 ease-in-out h-full" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`${name} - view ${index + 1}`} 
            className="flex-shrink-0 w-full h-full object-cover"
          />
        ))}
      </div>
      
      {/* Navigation dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Arrow navigation */}
      {images.length > 1 && (
        <>
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white bg-opacity-60 rounded-full z-20"
            onClick={() => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
          >
            <Icon><polyline points="15 18 9 12 15 6"></polyline></Icon>
          </button>
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white bg-opacity-60 rounded-full z-20"
            onClick={() => setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
          >
            <Icon><polyline points="9 18 15 12 9 6"></polyline></Icon>
          </button>
        </>
      )}
    </div>
  );
};

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  
  // Generate a random background color
  const bgColors = ['bg-yellow-200', 'bg-pink-200', 'bg-blue-400', 'bg-amber-500','bg-lime-400','bg-emerald-400','bg-teal-300', 'bg-green-200'];
  const bgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  
  // Calculate "original" price (20% higher for sale effect)
  const originalPrice = (parseFloat(price) * 1.2).toFixed(2);

  return (
    <Link 
      onClick={() => scrollTo(0, 0)} 
      to={`/product/${id}`} 
      className={`relative min-w-64 h-80 rounded-3xl overflow-hidden flex flex-col justify-between ${bgColor} block drop-shadow-[8px_8px_0px_#000]`}
    >
      {/* Replace static image with slider component */}
      <ProductSlider images={image} name={name} />
      
      <div className="relative z-10 mt-auto p-2">
        <div className="flex justify-between p-2">
          <div>
            <h3 className="text-lg font-bold text-gray-950">{name}</h3>
            <p className="text-sm text-gray-600">Popular item</p>
          </div>
          <div>
            <span className="text-lg font-bold text-gray-800 mr-2">{currency}{price}</span>
            <span className="line-through text-gray-600 text-sm mr-2">{currency}{originalPrice}</span>
          </div>
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