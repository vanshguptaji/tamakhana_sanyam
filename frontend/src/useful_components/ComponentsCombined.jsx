import React from 'react'
import Login from './Login.jsx'
import DailyDeals from './DailyDeals.jsx'
import ScrollingMarquee from './ScrollingMarquee.jsx'
import HeroSection from './HeroSection.jsx'

function ComponentsCombined() {
  return (
    <div> 
      <HeroSection />
        {/* <Login />
        <ScrollingMarquee />
        <DailyDeals /> */}
    </div>
  )
}

export default ComponentsCombined











// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import eyes from "./eyes4.png";
// import makhana from './Untitled-1.png'
// import Login from './Login';
// import ScrollingMarquee from './ScrollingMarquee';

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const TamakhanaHeroSection = () => {
//   const wrapperRef = useRef(null);
//   const emojiRef = useRef(null);
//   const emojiFaceRef = useRef(null);
//   const stickyRef = useRef(null);
//   const websiteContentRef = useRef(null);

//   useEffect(() => {
//     // ScrollTrigger animations
//     gsap.to(stickyRef.current, {
//       scrollTrigger: {
//         trigger: stickyRef.current,
//         start: "top top",
//         end: () => "+=" + (window.innerHeight + websiteContentRef.current.offsetHeight * 0.2),
//         pin: true,
//         scrub: 0.5,
//       },
//       y: 150,
//       scale: 0.9,
//       rotation: -8,
//       ease: "power3.out",
//     });

//     // Fixed animation to prevent right shift
//     gsap.fromTo(
//       websiteContentRef.current,
//       {
//         // Removed the negative x value that was pushing content right
//         opacity: 0.9,
//         scale: 0.85,
//         rotation: 8,
//       },
//       {
//         scrollTrigger: {
//           trigger: websiteContentRef.current,
//           start: "top 95%",
//           end: "top 50%",
//           scrub: 0.3,
//         },
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         ease: "power3.out",
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

//     // Cleanup event listeners on unmount
//     return () => {
//       if (wrapper) {
//         wrapper.removeEventListener("mousemove", moveEvent);
//         wrapper.removeEventListener("mouseleave", leaveEvent);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full h-full">
//       <section ref={stickyRef} className="fixed top-0 left-0 w-screen h-screen bg-[#5546ff]">
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
      
//       {/* Fixed the website content to take full width */}
//       <section ref={websiteContentRef} className="w-full bg-[#252525] relative top-0 z-10 left-0">
//         <Login />
//       </section>
//       <ScrollingMarquee />
//     </div>
//   );
// };

// export default TamakhanaHeroSection;
// combine both the functionalities of these two components so that they work perfectly in a single component as they do individually
// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import eyes from "./eyes4.png";
// import makhana from './Untitled-1.png'
// import Login from './Login';
// import ScrollingMarquee from './ScrollingMarquee';

// // Register GSAP plugins
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
//         end: () => "+=" + (window.innerHeight * 1.2), // Reduced the scrolling distance
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
//         opacity: 0,  // Make the sticky section fade out
//         duration: 0.3,
//       }, "-=0.2");  // Slightly overlap with the previous animation

//     // Website content animation - modified for earlier appearance
//     gsap.fromTo(
//       websiteContentRef.current,
//       {
//         opacity: 0,
//         scale: 0.95,
//         rotation: 5,
//         y: '10vh',  // Reduced initial offset
//       },
//       {
//         scrollTrigger: {
//           trigger: websiteContentRef.current,
//           start: "top bottom", // Start animation when top of content reaches bottom of viewport
//           end: "top 60%",     // End when top of content is at 60% of viewport
//           scrub: 0.2,         // Quicker response to scroll
//         },
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//         y: 0,
//         ease: "power2.out",
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

//     // Cleanup event listeners on unmount
//     return () => {
//       if (wrapper) {
//         wrapper.removeEventListener("mousemove", moveEvent);
//         wrapper.removeEventListener("mouseleave", leaveEvent);
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full h-full overflow-x-hidden overflow-y-hidden">
//       <section ref={stickyRef} className="fixed top-0 left-0 w-screen h-screen bg-[#5546ff]">
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
      
//       {/* Reduced marginTop to make it appear sooner */}
//       <section 
//         ref={websiteContentRef} 
//         className="w-full bg-[#252525] relative z-20"
//         style={{ marginTop: "95vh" }} // Reduced from 100vh to 95vh to start sooner
//       >
//         <Login />
//         <ScrollingMarquee />
//       </section>
//     </div>
//   );
// };

// export default HeroSection;