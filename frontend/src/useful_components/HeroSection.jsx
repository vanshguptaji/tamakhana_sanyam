import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import eyes from "../assets/eyes4.png";
import makhana from '../assets/Untitled-1.png'

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const wrapperRef = useRef(null);
  const emojiRef = useRef(null);
  const emojiFaceRef = useRef(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    // Mouse movement event handlers
    const moveEvent = (e) => {
      const wrapper = wrapperRef.current;
      const emoji = emojiRef.current;
      const emojiFace = emojiFaceRef.current;

      if (!wrapper || !emoji || !emojiFace) return;

      // Use window dimensions instead of wrapper dimensions
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calculate relative mouse position from the center of the window
      const relX = e.clientX - (windowWidth / 2);
      const relY = e.clientY - (windowHeight / 2);
      
      const emojiMaxDisplacement = 40;
      const emojiFaceMaxDisplacement = 60;
      
      const emojiDisplacementX = (relX / windowWidth) * emojiMaxDisplacement;
      const emojiDisplacementY = (relY / windowHeight) * emojiMaxDisplacement;
      const emojiFaceDisplacementX = (relX / windowWidth) * emojiFaceMaxDisplacement;
      const emojiFaceDisplacementY = (relY / windowHeight) * emojiFaceMaxDisplacement;
      
      gsap.to(emoji, {
        x: emojiDisplacementX,
        y: emojiDisplacementY,
        ease: "power2.out",
        duration: 0.4,
      });
      
      gsap.to(emojiFace, {
        x: emojiFaceDisplacementX,
        y: emojiFaceDisplacementY,
        ease: "power2.out",
        duration: 0.4,
      });
    };

    const leaveEvent = () => {
      const emoji = emojiRef.current;
      const emojiFace = emojiFaceRef.current;

      if (!emoji || !emojiFace) return;

      gsap.to([emoji, emojiFace], {
        x: 0,
        y: 0,
        ease: "power2.out",
        duration: 0.1,
      });
    };

    // Add event listeners to the window
    window.addEventListener("mousemove", moveEvent);
    window.addEventListener("mouseleave", leaveEvent);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", moveEvent);
      window.removeEventListener("mouseleave", leaveEvent);
    };
  }, []);

  return (
    <div className="w-full h-60 overflow-hidden">       
      <div ref={wrapperRef} className="relative top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 ">
        <div ref={emojiRef} className="emoji absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-no-repeat bg-center bg-cover rounded-full" style={{ backgroundImage: `url(${makhana})` }}>
          <div ref={emojiFaceRef} className="emoji-face absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[225px] h-[200px] flex flex-col">
            <div className="eyes flex justify-between flex-1">
              <img src={eyes} alt="" className="w-[100px] h-[100px] animate-rotate-eyes" />
              <img src={eyes} alt="" className="w-[100px] h-[100px] animate-rotate-eyes" />
            </div>
          </div>
          <div className="mouth-wrapper absolute bottom-[40%] left-1/2 transform -translate-x-1/2 flex justify-center items-center w-[80px] h-[50px]">
            <div className="mouth w-[40px] h-[40px] rounded-full bg-black animate-wonder-face"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;