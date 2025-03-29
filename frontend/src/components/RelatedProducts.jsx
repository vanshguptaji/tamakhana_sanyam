import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RelatedProducts = ({category,subCategory}) => {

    const { products } = useContext(ShopContext);
    const [related,setRelated] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{

        if (products.length > 0) {
            
            let productsCopy = products.slice();
            
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0,5));
        }
        
    },[products])

    
    const nextSlide = () => {
      setCurrentIndex(prevIndex => 
          prevIndex >= related.length - 1 ? 0 : prevIndex + 1
      );
  };

  const prevSlide = () => {
      setCurrentIndex(prevIndex => 
          prevIndex <= 0 ? related.length - 1 : prevIndex - 1
      );
  };

  // The number of items to show per view
  const itemsToShow = 3; 

  return (
    <div className='my-24 w-full bg-violet-500 p-8 rounded-3xl drop-shadow-[8px_8px_0px_#000]'>
      <div className=' text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={"PRODUCTS"} />
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
                        {related.map((item, index) => {
                            // Only show items that should be visible based on current index
                            const isVisible = (index >= currentIndex && index < currentIndex + itemsToShow) || 
                                             (currentIndex + itemsToShow > related.length && 
                                              index < (currentIndex + itemsToShow) % related.length);
                            
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
                    {Array.from({ length: related.length }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                (index >= currentIndex && index < currentIndex + itemsToShow) || 
                                (currentIndex + itemsToShow > related.length && 
                                 index < (currentIndex + itemsToShow) % related.length)
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

export default RelatedProducts
