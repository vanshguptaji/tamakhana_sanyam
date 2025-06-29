import React, { useState } from "react";
import makhana from "../assets/makhane_cor2.jpeg";
import makhana_pos1 from "../assets/makhana_pos1.jpg";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";

function BackgroundCarousel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto font-sans my-8 bg-white rounded-3xl overflow-hidden shadow-lg p-6 relative drop-shadow-[8px_8px_0px_#000]">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-xl p-4 shadow-md mb-4">
            {/* Toggle Button */}
            <button
              className="flex items-center justify-center bg-black text-white rounded-full px-4 py-2 w-full mb-3"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="bg-gray-700 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">
                C
              </span>
              <span>All Categories</span>
            </button>

            {/* Animated Dropdown */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-4 text-center bg-gray-100 rounded-md p-3 shadow-lg"
              >
                <div className="py-1 cursor-pointer hover:bg-gray-200 rounded">
                  Dry Fruits
                </div>
                <div className="py-1 cursor-pointer hover:bg-gray-200 rounded">
                  Light Weighted
                </div>
                <div className="py-1 cursor-pointer hover:bg-gray-200 rounded">
                  Healthy Makhanas
                </div>
              </motion.div>
            )}
          </div>

          <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-xl p-4 flex items-center justify-between">
            <div className="font-medium">Show More</div>
            <div className="bg-yellow-300 rounded-full h-6 w-6 flex items-center justify-center text-xs">
              2
            </div>
          </div>
          <img
            src={makhana_pos1}
            alt=""
            className="rounded-2xl mt-2 h-[200px] sm:h-[300px] object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Hero Content */}
            <div className="w-full lg:w-2/3">
              <div
                className="mb-10 bg-cover bg-center bg-no-repeat w-full h-[200px] sm:h-[300px] rounded-2xl flex flex-col justify-center items-center text-center text-white"
                style={{ backgroundImage: `url(${makhana})` }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-blue-800 drop-shadow-[4px_4px_0px_#000]">
                  Let's Shop
                </h1>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-800 drop-shadow-[4px_4px_0px_#000]">
                  All-In-One
                </h2>
                <p className="text-sm sm:text-lg text-white">
                  Visit Us and Get Amazing Deals With limited Budget.
                </p>
              </div>
              {/* Search Box */}
              <div className="bg-white/80 rounded-2xl p-3 shadow-md mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-100 w-full pl-10 pr-10 py-2 rounded-full outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <button className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0-11V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <button className="px-4 py-1 font-medium">Recent</button>
                </div>

                <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between flex-1">
                  <div>
                    <div className="font-medium">Popular</div>
                    <div className="text-sm text-gray-500">Items</div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between flex-1">
                  <div>
                    <div className="font-medium">Special</div>
                    <div className="text-sm text-gray-500">Offers For You</div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="bg-indigo-800 rounded-xl p-3 shadow-md flex items-center justify-between flex-1 text-white">
                  <div className="font-medium">Show All</div>
                  <div className="bg-white text-indigo-800 rounded-full h-6 w-6 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="w-full lg:w-1/3">
              <HeroSection />
              <div className="mt-4">
                <div className="bg-green-800 text-white text-xs rounded-full px-3 py-1 inline-block mb-2">
                  BEST SERVICE
                </div>
                <div className="text-lg font-medium">Why Our Products</div>
                <div className="text-lg font-medium">Make You Happy</div>
              </div>
              <div className="flex space-x-3 mt-4">
                <div className="bg-purple-100 rounded-xl p-3 w-16 h-16 flex items-center justify-center">
                  <div className="bg-purple-200 rounded-full h-10 w-10"></div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <div className="text-sm font-medium">Best Offer</div>
                  <div className="text-xs text-gray-500">Celia Black</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundCarousel;
