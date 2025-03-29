
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const ScrollingMarquee = ({ 
  speed = 2,
  // You can choose which arrow style to use
  arrowStyle = 'custom' // Options: 'triangle', 'chevron', 'arrow', 'custom'
}) => {
  const [isReversed, setIsReversed] = useState(false);
  const containerRef = useRef(null);
  const tweenRef = useRef(null);
  const arrowsRef = useRef([]);
  let prevScrollY = useRef(0);
  
  // Get the appropriate arrow based on the selected style
  const getArrowSymbol = () => {
    switch(arrowStyle) {
      case 'triangle':
        return '▶'; // Triangle
      case 'chevron':
        return '›'; // Chevron
      case 'arrow':
        return '→'; // Arrow
      case 'double':
        return '»'; // Double chevron
      case 'custom':
        return '➤'; // Custom arrow head
      default:
        return '▶'; // Default triangle
    }
  };

  useEffect(() => {
    // Initialize GSAP marquee
    const initMarquee = () => {
      const marqueeParts = document.querySelectorAll('.marquee-part');
      
      // Kill any existing animations
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
      
      // Set initial position
      gsap.set('.marquee-container', { xPercent: -50 });
      
      // Create the infinite marquee animation
      tweenRef.current = gsap.to(marqueeParts, {
        xPercent: isReversed ? 100 : -100,
        repeat: -1,
        duration: speed,
        ease: "linear",
      });
    };
    
    // Initialize the marquee
    initMarquee();
    
    // Handle scroll direction detection
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY.current) {
        // Scrolling down
        if (isReversed) {
          setIsReversed(false);
        }
      } else {
        // Scrolling up
        if (!isReversed) {
          setIsReversed(true);
        }
      }
      
      prevScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [isReversed, speed]);
  
  // Update arrow references
  const setArrowRef = (el) => {
    if (el && !arrowsRef.current.includes(el)) {
      arrowsRef.current.push(el);
    }
  };

  return (
      <div className="relative bg-[#0f0f0f] py-8 overflow-hidden w-full rounded-3xl">
        <div 
          ref={containerRef}
          className="marquee-container flex w-full whitespace-nowrap"
        >
          {Array(9).fill().map((_, index) => (
            <div key={index} className="marquee-part flex items-center flex-shrink-0 px-1 text-gray-100 font-semibold text-4xl uppercase">
              TamaKhana
              <div 
                ref={setArrowRef}
                className={`text-4xl mx-4 transition-transform duration-1000 ease-[cubic-bezier(0.075,0.82,0.165,1)] ${isReversed ? 'rotate-180' : ''}`}
              >
                {getArrowSymbol()}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ScrollingMarquee;