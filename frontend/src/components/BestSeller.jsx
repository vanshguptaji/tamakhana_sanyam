// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';
// import ScrollingMarquee from './ScrollingMarquee';

// const BestSeller = () => {

//     const {products} = useContext(ShopContext);
//     const [bestSeller,setBestSeller] = useState([]);

//     useEffect(()=>{
//         const bestProduct = products.filter((item)=>(item.bestseller));
//         setBestSeller(bestProduct.slice(0,5))
//     },[products])

//   return (<>
//     <div className=' bg-red-300 rounded-3xl drop-shadow-[8px_8px_0px_#000] w-full'>
//       <ScrollingMarquee/>
//       <div className=' p-8'>
//       <div className='text-center text-3xl py-8'>
//         <Title text1={'BEST'} text2={'SELLERS'}/>
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-stone-900'>
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
//         </p>
//       </div>

//       <div className='overflow-x-auto p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-72 gap-y-6'>
//         {
//             bestSeller.map((item,index)=>(
//                 <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
//             ))
//         }
//       </div>
//     </div>
//     <ScrollingMarquee/>
//     </div>
//     </>
//   )
// }

// export default BestSeller


import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import ScrollingMarquee from './ScrollingMarquee';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 10));
    }, [products]);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => 
            prevIndex >= bestSeller.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => 
            prevIndex <= 0 ? bestSeller.length - 1 : prevIndex - 1
        );
    };

    // The number of items to show per view
    const itemsToShow = 3;

    return (
        <>
        <div className='mb-10 bg-red-300 rounded-3xl drop-shadow-[8px_8px_0px_#000] w-full'>
            <ScrollingMarquee />
            <div className='p-8'>
                <div className='text-center text-3xl py-8'>
                    <Title text1={'BEST'} text2={'SELLERS'} />
                    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-stone-900'>
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

                    {/* Products Slider */}
                    <div className='overflow-hidden'>
                        <div className='flex flex-wrap gap-12 justify-center'>
                            {bestSeller.map((item, index) => {
                                // Only show items that should be visible based on current index
                                const isVisible = (index >= currentIndex && index < currentIndex + itemsToShow) || 
                                                (currentIndex + itemsToShow > bestSeller.length && 
                                                index < (currentIndex + itemsToShow) % bestSeller.length);
                                
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
                        {Array.from({ length: bestSeller.length }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    (index >= currentIndex && index < currentIndex + itemsToShow) || 
                                    (currentIndex + itemsToShow > bestSeller.length && 
                                    index < (currentIndex + itemsToShow) % bestSeller.length)
                                        ? 'bg-black' 
                                        : 'bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <ScrollingMarquee />
        </div>
        </>
    )
}

export default BestSeller