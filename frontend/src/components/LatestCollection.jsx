import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

const getItemsToShow = () => {
  if (typeof window === "undefined") return 1;
  if (window.innerWidth < 640) return 1; // mobile
  if (window.innerWidth < 1024) return 2; // tablet
  return 3; // desktop
};

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  useEffect(() => {
    const handleResize = () => setItemsToShow(getItemsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(latestProducts.length / itemsToShow);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Calculate the translateX percentage
  const translateX = -(currentPage * 100);

  return (
    <div className="mb-10 mt-36 bg-blue-300 p-8 rounded-3xl drop-shadow-[8px_8px_0px_#000] w-full">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-200">
          Latest collections of our products.
        </p>
      </div>

      {/* Slider Controls and Container */}
      <div className="relative px-4 sm:px-8 md:px-16">
        {/* Slider Navigation */}
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2 z-10 left-0">
          <button
            onClick={prevPage}
            className="bg-black bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-2 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextPage}
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
              width: `${(latestProducts.length / itemsToShow) * 100}%`,
              transform: `translateX(${translateX}%)`,
            }}
          >
            {latestProducts.map((item, index) => (
              <div
                key={index}
                className={`w-full ${
                  itemsToShow === 1
                    ? "sm:w-full"
                    : itemsToShow === 2
                    ? "sm:w-1/2"
                    : "md:w-1/3"
                } flex-shrink-0 p-2`}
                style={{ flex: `0 0 ${100 / itemsToShow}%` }}
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
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPage ? "bg-black" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;