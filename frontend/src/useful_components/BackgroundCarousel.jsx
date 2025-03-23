import React, { useState } from 'react';
import makhana from '../useful_components/makhane_cor1.jpeg'

function BackgroundCarousel() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="min-h-screen bg-green-50 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white/80 rounded-3xl overflow-hidden shadow-lg p-6 relative">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="font-bold text-2xl">Shoply</div>
          <nav className="hidden md:flex space-x-2">
            <button className="bg-black text-white rounded-full px-4 py-1 text-sm">HOME</button>
            <button className="bg-white rounded-full px-4 py-1 text-sm border border-gray-200">PRODUCTS</button>
            <button className="bg-white rounded-full px-4 py-1 text-sm border border-gray-200">ABOUT</button>
            <button className="bg-white rounded-full px-4 py-1 text-sm border border-gray-200">SUPPORT</button>
          </nav>
          <div className="bg-white rounded-full p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </header>
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/5">
            <div className="bg-white rounded-xl p-4 shadow-md mb-4">
              <button className="flex items-center justify-center bg-black text-white rounded-full px-4 py-2 w-full mb-3">
                <span className="bg-gray-700 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">C</span>
                <span>All</span>
              </button>
              
              <div className="space-y-4 text-center">
                <div className="py-1">Men</div>
                <div className="py-1">Women</div>
                <div className="py-1">Kids</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-xl p-4 flex items-center justify-between">
              <div className="font-medium">Show More</div>
              <div className="bg-yellow-300 rounded-full h-6 w-6 flex items-center justify-center text-xs">2</div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-4/5">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Hero Content */}
              <div className="w-full md:w-3/5">
                <div className="mb-10">
                  <h1 className="text-5xl font-bold mb-2">Let's Shop</h1>
                  <h2 className="text-5xl font-bold mb-4">All-In-One</h2>
                  <p className="text-xl">Visit Collectibles And Follow Your Passion.</p>
                </div>
                
                {/* Search Box */}
                <div className="bg-white/80 rounded-2xl p-3 shadow-md mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0-11V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="flex space-x-4 mb-6">
                  <div className="bg-white rounded-xl p-3 shadow-sm">
                    <button className="px-4 py-1 font-medium">Recent</button>
                  </div>
                  
                  <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between flex-1">
                    <div>
                      <div className="font-medium">Popular</div>
                      <div className="text-sm text-gray-500">Items</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  <div className="bg-white rounded-xl p-3 shadow-sm flex items-center justify-between flex-1">
                    <div>
                      <div className="font-medium">Special</div>
                      <div className="text-sm text-gray-500">Offers For You</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  <div className="bg-indigo-600 rounded-xl p-3 shadow-md flex items-center justify-between flex-1 text-white">
                    <div className="font-medium">Show All</div>
                    <div className="bg-white text-indigo-600 rounded-full h-6 w-6 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Person Image and Right Panel */}
              <div className="w-full md:w-2/5 relative">
                {/* Person Image (placeholder) */}
                <div className="absolute top-0 left-0 h-full w-full">
                  <div className="relative h-full">
                    <div className="absolute -left-20 top-0 h-full flex items-center">
                      <div className="bg-gradient-to-r from-blue-200 to-transparent h-64 w-64 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <img src={makhana} alt=''/>
                {/* Person would be here in a real implementation */}
                
                {/* Right Panel */}
                <div className="mt-4 md:mt-0 relative">
                  <div className="mb-6">
                    <div className="bg-green-800 text-white text-xs rounded-full px-3 py-1 inline-block mb-2">BEST SERVICE</div>
                    <div className="text-lg font-medium">Why Our Products</div>
                    <div className="text-lg font-medium">Make You Happy</div>
                  </div>
                  
                  <div className="flex space-x-3">
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
      </div>
    </div>
  );
}

export default BackgroundCarousel;