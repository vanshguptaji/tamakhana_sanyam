import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import ScrollingMarquee from "./ScrollingMarquee";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 10));
  }, [products]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= bestSeller.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? bestSeller.length - 1 : prevIndex - 1
    );
  };

  // Number of items to show per view based on screen size
  const itemsToShow = 3;

  return (
    <div className="mb-10 bg-red-300 rounded-3xl drop-shadow-[8px_8px_0px_#000] w-full">
      {/* <ScrollingMarquee /> */}
      <div className="p-8">
        <div className="text-center text-3xl py-8">
          <Title text1={"BEST"} text2={"SELLERS"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-stone-900">
            Our Best Sellers are handpicked for you. Explore our top-rated
            products that have captured the hearts of our customers. Discover
            the favorites that everyone is talking about and find your next
            must-have item!
          </p>
        </div>

        {/* Slider Controls and Container */}
        <div className="relative px-4 sm:px-8 md:px-16">
          {/* Slider Navigation */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 z-10 left-0">
            <button
              onClick={prevSlide}
              className="bg-black bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-2 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-2 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Products Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-500 ease-in-out gap-24"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / bestSeller.length)
                }%)`,
              }}
            >
              {bestSeller.map((item, index) => (
                <div
                  key={index}
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
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: bestSeller.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <ScrollingMarquee /> */}
    </div>
  );
};

export default BestSeller;