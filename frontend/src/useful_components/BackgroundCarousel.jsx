import React, { useState, useEffect } from 'react';
import makhane1 from './makhane_cor1.jpeg';
import makhane2 from './makhane_cor2.jpeg';
import makhane3 from './makhane_cor3.jpeg';
import makhane4 from './makhane_cor4.jpeg';
import makhane5 from './makhane_cor5.jpeg';

const BackgroundCarousel = () => {
  const images = [makhane1,makhane2,makhane3,makhane4,makhane5]; 
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full z-0 bg-cover bg-no-repeat bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    />
  );
};

export default BackgroundCarousel;