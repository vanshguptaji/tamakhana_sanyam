import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RelatedProducts = ({category,subCategory}) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subCategory]);

    // Responsive itemsToShow
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    // Calculate visible items
    const getVisibleItems = () => {
        if (related.length <= itemsToShow) return related;
        let visible = [];
        for (let i = 0; i < itemsToShow; i++) {
            visible.push(related[(currentIndex + i) % related.length]);
        }
        return visible;
    };

    return (
        <div className='my-24 w-full bg-violet-500 p-8 rounded-3xl drop-shadow-[8px_8px_0px_#000]'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={"PRODUCTS"} />
            </div>
            {/* Slider Controls and Container */}
            <div className='relative px-4 sm:px-8 md:px-16'>
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
                        {getVisibleItems().map((item, idx) => (
                            <div
                                key={item._id || idx}
                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-2"
                            >
                                <ProductItem
                                    id={item._id}
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Dots Indicator */}
                <div className='flex justify-center mt-6 gap-2'>
                    {Array.from({ length: related.length }).map((_, index) => {
                        const isActive =
                            (index >= currentIndex && index < currentIndex + itemsToShow) ||
                            (currentIndex + itemsToShow > related.length &&
                                index < (currentIndex + itemsToShow) % related.length);
                        return (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    isActive ? 'bg-black' : 'bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts
