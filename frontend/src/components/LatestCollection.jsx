// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {

//     const { products } = useContext(ShopContext);
//     const [latestProducts,setLatestProducts] = useState([]);

//     useEffect(()=>{
//         setLatestProducts(products.slice(0,10));
//     },[products])

//   return (
//     <div className='mb-10  bg-orange-300 p-8 rounded-3xl drop-shadow-[8px_8px_0px_#000] w-full'>
//       <div className='text-center py-8 text-3xl'>
//           <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-200'>
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
//           </p>
//       </div>

//       {/* Rendering Products */}
//       <div className='overflow-x-auto p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-72 gap-y-6'>
//         {
//           latestProducts.map((item,index)=>(
//             <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default LatestCollection




// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const LatestCollection = () => {
//     const { products } = useContext(ShopContext);
//     const [latestProducts, setLatestProducts] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);
    
//     // Base number of items to show (minimum 3)
//     const baseItemsPerSlide = 3;
    
//     useEffect(() => {
//         setLatestProducts(products.slice(0, 10));
//     }, [products])

//     const nextSlide = () => {
//         setCurrentIndex(prevIndex => 
//             prevIndex + 1 >= latestProducts.length - (baseItemsPerSlide - 1)
//                 ? 0 
//                 : prevIndex + 1
//         );
//     };

//     const prevSlide = () => {
//         setCurrentIndex(prevIndex => 
//             prevIndex - 1 < 0 
//                 ? Math.max(0, latestProducts.length - baseItemsPerSlide) 
//                 : prevIndex - 1
//         );
//     };

//     return (
//         <div className='mb-10 bg-orange-300 p-8 rounded-3xl drop-shadow-[8px_8px_0px_#000] w-full'>
//             <div className='text-center py-8 text-3xl'>
//                 <Title text1={'LATEST'} text2={'COLLECTIONS'} />
//                 <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-200'>
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
//                 </p>
//             </div>

//             {/* Slider Controls and Container */}
//             <div className='relative px-10'>
//                 {/* Slider Navigation */}
//                 <div className='flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 z-10 left-0'>
//                     <button 
//                         onClick={prevSlide} 
//                         className='bg-black bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-2 transition-all duration-300'
//                         aria-label="Previous slide"
//                     >
//                         <ChevronLeft size={24} />
//                     </button>
//                     <button 
//                         onClick={nextSlide} 
//                         className='bg-black bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-2 transition-all duration-300'
//                         aria-label="Next slide"
//                     >
//                         <ChevronRight size={24} />
//                     </button>
//                 </div>

//                 {/* Products Slider */}
//                 <div className='overflow-hidden'>
//                     <div 
//                         className='flex transition-all duration-500 ease-in-out'
//                         style={{ transform: `translateX(-${currentIndex * (100 / latestProducts.length)}%)` }}
//                     >
//                         {latestProducts.map((item, index) => (
//                             <div key={index} className='w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-2 mr-20'>
//                                 <ProductItem 
//                                     id={item._id} 
//                                     image={item.image} 
//                                     name={item.name} 
//                                     price={item.price} 
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Dots Indicator */}
//                 <div className='flex justify-center mt-6 gap-2'>
//                     {Array.from({ length: Math.max(1, latestProducts.length - (baseItemsPerSlide - 1)) }).map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                                 index === currentIndex 
//                                     ? 'bg-black' 
//                                     : 'bg-gray-400'
//                             }`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LatestCollection


import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => 
            prevIndex >= latestProducts.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => 
            prevIndex <= 0 ? latestProducts.length - 1 : prevIndex - 1
        );
    };

    // The number of items to show per view
    const itemsToShow = 3; 

    return (
        <div className='mb-10 mt-12 bg-orange-300 p-8 rounded-3xl drop-shadow-[8px_8px_0px_#000] w-full'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-200'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
            </div>

            {/* Slider Controls and Container */}
            <div className='relative px-16'>
                {/* Slider Navigation */}
                <div className='flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 z-10 left-0'>
                    <button 
                        onClick={prevSlide} 
                        className='bg-black bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-2 transition-all duration-300'
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className='bg-black bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-2 transition-all duration-300'
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Products Slider - Simplified Approach */}
                <div className='overflow-hidden'>
                    <div className='flex flex-wrap gap-12 justify-center'>
                        {latestProducts.map((item, index) => {
                            // Only show items that should be visible based on current index
                            const isVisible = (index >= currentIndex && index < currentIndex + itemsToShow) || 
                                             (currentIndex + itemsToShow > latestProducts.length && 
                                              index < (currentIndex + itemsToShow) % latestProducts.length);
                            
                            return isVisible ? (
                                <div key={index} className='w-1/4 flex-shrink-0 p-2'>
                                    <ProductItem 
                                        id={item._id} 
                                        image={item.image} 
                                        name={item.name} 
                                        price={item.price} 
                                    />
                                </div>
                            ) : null;
                        })}
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className='flex justify-center mt-6 gap-2'>
                    {Array.from({ length: latestProducts.length }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                (index >= currentIndex && index < currentIndex + itemsToShow) || 
                                (currentIndex + itemsToShow > latestProducts.length && 
                                 index < (currentIndex + itemsToShow) % latestProducts.length)
                                    ? 'bg-black' 
                                    : 'bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LatestCollection