// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import eyes from "./eyes4.png";
// import makhana from './Untitled-1.png'
// import Login from './Login';
// import ScrollingMarquee from './ScrollingMarquee';

// gsap.registerPlugin(ScrollTrigger);

// const HeroSection = () => {
//   const wrapperRef = useRef(null);
//   const emojiRef = useRef(null);
//   const emojiFaceRef = useRef(null);
//   const stickyRef = useRef(null);
//   const websiteContentRef = useRef(null);

//   useEffect(() => {
//     // Timeline for sticky section animations
//     const stickyTl = gsap.timeline({
//       scrollTrigger: {
//         trigger: stickyRef.current,
//         start: "top top",
//         end: () => "+=" + (window.innerHeight * 0.2),
//         pin: true,
//         scrub: 0.5,
//       }
//     });
    
//     // Add animations to the timeline
//     stickyTl
//       .to(stickyRef.current, {
//         y: 150,
//         scale: 0.9,
//         rotation: -8,
//         ease: "power3.out",
//       })
//       .to(stickyRef.current, {
//         opacity: 0,
//         duration: 0.3,
//       }, "-=0.2");

//     // Website content animation
//     gsap.fromTo(
//       websiteContentRef.current,
//       {
//         opacity: 0,
//         scale: 0.85,
//         rotation: 8,
//         y: '1vh',
//       },
//       {
//         scrollTrigger: {
//           trigger: websiteContentRef.current,
//           start: "top bottom",
//           end: "top 90%",
//           scrub: 0.01,
//         },
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         y: 0,
//         ease: "power3.out",
//         zIndex: 20,
//       }
//     );

//     // Mouse movement event handlers
//     const moveEvent = (e) => {
//       const wrapper = wrapperRef.current;
//       const emoji = emojiRef.current;
//       const emojiFace = emojiFaceRef.current;

//       if (!wrapper || !emoji || !emojiFace) return;

//       const wrapperRect = wrapper.getBoundingClientRect();
      
//       const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
//       const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);
      
//       const emojiMaxDisplacement = 40;
//       const emojiFaceMaxDisplacement = 60;
      
//       const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
//       const emojiDisplacementY = (relY / wrapperRect.height) * emojiMaxDisplacement;
//       const emojiFaceDisplacementX = (relX / wrapperRect.width) * emojiFaceMaxDisplacement;
//       const emojiFaceDisplacementY = (relY / wrapperRect.height) * emojiFaceMaxDisplacement;
      
//       gsap.to(emoji, {
//         x: emojiDisplacementX,
//         y: emojiDisplacementY,
//         ease: "power2.out",
//         duration: 0.4,
//       });
      
//       gsap.to(emojiFace, {
//         x: emojiFaceDisplacementX,
//         y: emojiFaceDisplacementY,
//         ease: "power2.out",
//         duration: 0.4,
//       });
//     };

//     const leaveEvent = () => {
//       const emoji = emojiRef.current;
//       const emojiFace = emojiFaceRef.current;

//       if (!emoji || !emojiFace) return;

//       gsap.to([emoji, emojiFace], {
//         x: 0,
//         y: 0,
//         ease: "power2.out",
//         duration: 0.1,
//       });
//     };

//     const wrapper = wrapperRef.current;
//     if (wrapper) {
//       wrapper.addEventListener("mousemove", moveEvent);
//       wrapper.addEventListener("mouseleave", leaveEvent);
//     }

//     // Cleanup event listeners and ScrollTrigger instances on unmount
//     return () => {
//       if (wrapper) {
//         wrapper.removeEventListener("mousemove", moveEvent);
//         wrapper.removeEventListener("mouseleave", leaveEvent);
//       }
      
//       // Kill all ScrollTrigger instances to prevent memory leaks
//       ScrollTrigger.getAll().forEach(st => st.kill());
//     };
//   }, []);

//   return (
//     <div className="w-full h-full overflow-hidden">
//       {/* Background Carousel Component */}

//       <section ref={stickyRef} className="fixed top-0 left-0 w-screen h-screen bg-opacity-80 bg-[#5546ff]">
//         <nav className="absolute top-0 w-full p-8 flex justify-between items-center">
//           <div className="logo">
//             <a href="#" className="no-underline uppercase font-mono text-6xl text-[#bfff00]">TAMAKHANA</a>
//           </div>
//           <div className="links flex justify-between items-center gap-4">
//             <a href="#" className="no-underline uppercase py-2 px-4 text-sm text-white border border-white rounded-full">Join community</a>
//             <a href="#" className="no-underline uppercase py-2 px-4 text-sm text-white border border-white rounded-full">Contact us</a>
//           </div>
//         </nav>

//         <div className="header absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//           <h1 className="uppercase font-['Franklin_Gothic_Medium','Arial_Narrow',Arial,sans-serif] text-[10vw] font-normal text-white leading-none">TAMAKHANA</h1>
//         </div>
        
//         <div ref={wrapperRef} className="tracker absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 py-8">
//           <div ref={emojiRef} className="emoji absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-no-repeat bg-center bg-cover rounded-full" style={{ backgroundImage: `url(${makhana})` }}>
//             <div ref={emojiFaceRef} className="emoji-face absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[225px] h-[200px] flex flex-col">
//               <div className="eyes flex justify-between flex-1">
//                 <img src={eyes} alt="" className="w-[100px] h-[100px] animate-rotate-eyes" />
//                 <img src={eyes} alt="" className="w-[100px] h-[100px] animate-rotate-eyes" />
//               </div>
//             </div>
//             <div className="mouth-wrapper absolute bottom-[40%] left-1/2 transform -translate-x-1/2 flex justify-center items-center w-[80px] h-[50px]">
//               <div className="mouth w-[40px] h-[40px] rounded-full bg-black animate-wonder-face"></div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Website content with controlled margin to ensure it appears in the right place */}
//       <section 
//         ref={websiteContentRef} 
//         className="w-full bg-[#252525] relative z-20"
//         style={{ marginTop: "1vh" }}
//       >
//         <Login />
//         <ScrollingMarquee />
//       </section>
//     </div>
//   );
// };

// export default HeroSection;







import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import eyes from "./eyes4.png";
import makhana from './Untitled-1.png'
import Login from './Login';
import ScrollingMarquee from './ScrollingMarquee';
import makhane1 from './makhane_cor1.jpeg';
import makhane2 from './makhane_cor2.jpeg';
import makhane3 from './makhane_cor3.jpeg';
import makhane4 from './makhane_cor4.jpeg';
import makhane5 from './makhane_cor5.jpeg';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import Navbar from '../components/Navbar'

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const wrapperRef = useRef(null);
  const emojiRef = useRef(null);
  const emojiFaceRef = useRef(null);
  const stickyRef = useRef(null);
  const websiteContentRef = useRef(null);
  const carouselRef = useRef(null);
  
  // Sample gallery images - replace these with your actual images
  const [images] = useState([makhane1, makhane2, makhane3, makhane4, makhane5]);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle automatic image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    // Timeline for sticky section animations
    const stickyTl = gsap.timeline({
      scrollTrigger: {
        trigger: stickyRef.current,
        start: "top top",
        end: () => "+=" + (window.innerHeight * 0.2),
        pin: true,
        scrub: 0.5,
      }
    });
    
    // Add animations to the timeline
    stickyTl
      .to(stickyRef.current, {
        y: 150,
        scale: 0.9,
        rotation: -8,
        ease: "power3.out",
      })
      .to(stickyRef.current, {
        opacity: 0,
        duration: 0.3,
      }, "-=0.2");

    // Carousel effect animation
    if (carouselRef.current) {
      gsap.to(carouselRef.current.children, {
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top top",
          end: () => "+=" + (window.innerHeight),
          scrub: 1,
        },
        x: "-100%",
        ease: "none",
        stagger: 0.1
      });
    }

    // Website content animation
    gsap.fromTo(
      websiteContentRef.current,
      {
        opacity: 0,
        scale: 0.85,
        rotation: 8,
        y: '1vh',
      },
      {
        scrollTrigger: {
          trigger: websiteContentRef.current,
          start: "top bottom",
          end: "top 90%",
          scrub: 0.01,
        },
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        ease: "power3.out",
        zIndex: 20,
      }
    );

    // Mouse movement event handlers
    const moveEvent = (e) => {
      const wrapper = wrapperRef.current;
      const emoji = emojiRef.current;
      const emojiFace = emojiFaceRef.current;

      if (!wrapper || !emoji || !emojiFace) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      
      const relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2);
      const relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2);
      
      const emojiMaxDisplacement = 40;
      const emojiFaceMaxDisplacement = 60;
      
      const emojiDisplacementX = (relX / wrapperRect.width) * emojiMaxDisplacement;
      const emojiDisplacementY = (relY / wrapperRect.height) * emojiMaxDisplacement;
      const emojiFaceDisplacementX = (relX / wrapperRect.width) * emojiFaceMaxDisplacement;
      const emojiFaceDisplacementY = (relY / wrapperRect.height) * emojiFaceMaxDisplacement;
      
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

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("mousemove", moveEvent);
      wrapper.addEventListener("mouseleave", leaveEvent);
    }

    // Cleanup event listeners and ScrollTrigger instances on unmount
    return () => {
      if (wrapper) {
        wrapper.removeEventListener("mousemove", moveEvent);
        wrapper.removeEventListener("mouseleave", leaveEvent);
      }
      
      // Kill all ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // Function to handle manual image navigation
  const handleImageNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative top-0 w-full h-full overflow-hidden">
      <section ref={stickyRef} className="fixed top-0 left-0 w-screen h-screen">
        {/* Carousel Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Main visible image with fade transition */}
          <div className="absolute inset-0 w-full h-full">
            {images.map((image, index) => (
              <div 
                key={index}
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
                style={{ 
                  backgroundImage: `url(${image})`,
                  opacity: index === currentImageIndex ? 1 : 0,
                }}
              >
                {/* Optional overlay to ensure content visibility   #5546ff */}
                <div className="absolute inset-0 bg-[#000] bg-opacity-65"></div>
              </div>
            ))}
          </div>
          
          {/* Horizontal Carousel for scroll effect */}
          <div 
            ref={carouselRef}
            className="absolute bottom-8 left-0 flex gap-4 px-8 overflow-hidden"
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className={`w-32 h-20 flex-shrink-0 bg-cover bg-center rounded-lg cursor-pointer border-2 transition-all duration-300 ${index === currentImageIndex ? 'border-[#bfff00]' : 'border-transparent'}`}
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            <button 
              onClick={() => handleImageNavigation('prev')} 
              className="w-10 h-10 rounded-full bg-white bg-opacity-30 text-white flex items-center justify-center hover:bg-opacity-50 transition-all"
            >
              &larr;
            </button>
            <button 
              onClick={() => handleImageNavigation('next')} 
              className="w-10 h-10 rounded-full bg-white bg-opacity-30 text-white flex items-center justify-center hover:bg-opacity-50 transition-all"
            >
              &rarr;
            </button>
          </div>
        </div>
        <nav className="relative top-0 w-full p-8 flex justify-center items-center z-10">
          {/* <Navbar/> */}
          {/* <div className="logo">
            <a href="#" className="no-underline uppercase font-mono text-6xl text-[#bfff00]">TAMAKHANA</a>
          </div>
          <div className="links flex justify-between items-center gap-4">
            <a href="#" className="no-underline uppercase py-2 px-4 text-sm text-white border border-white rounded-full">Join community</a>
            <a href="#" className="no-underline uppercase py-2 px-4 text-sm text-white border border-white rounded-full">Contact us</a>
          </div> */}
        </nav>

        <div className="header absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="uppercase font-sans tracking-wide text-[15vw] text-white leading-10">TAMAKHANA</h1>
        </div>
        
        <div ref={wrapperRef} className="tracker absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 py-8 z-10">
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
      </section>
      
      {/* Website content with controlled margin to ensure it appears in the right place */}
      <section 
        ref={websiteContentRef} 
        className="w-full bg-[#fff] relative z-20"
        style={{ marginTop: "1vh" }}
      >
      <Navbar/>
      <LatestCollection/>
      <BestSeller/>
      <ScrollingMarquee />
      <OurPolicy/>
      <NewsletterBox/>
      </section>
    </div>
  );
};

export default HeroSection;