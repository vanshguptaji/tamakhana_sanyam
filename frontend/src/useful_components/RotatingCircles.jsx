// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const RotatingCircles = ({ numCircles = 10 }) => {
//   const [circles, setCircles] = useState([]);

//   useEffect(() => {
//     // Generate random positions for circles
//     const newCircles = Array.from({ length: numCircles }).map(() => ({
//       id: Math.random(),
//       top: Math.random() * 80 + 10 + "vh", // Keep within viewport height
//       left: Math.random() * 80 + 10 + "vw", // Keep within viewport width
//       size: Math.random() * 40 + 20, // Random size between 20px - 60px
//     }));
//     setCircles(newCircles);
//   }, [numCircles]);

//   return (
//     <div className="absolute top-0 left-0 w-full h-screen bg-transparent overflow-hidden">
//       {circles.map((circle) => (
//         <motion.div
//           key={circle.id}
//           className="absolute rounded-full bg-blue-500 opacity-70"
//           style={{
//             width: `${circle.size}px`,
//             height: `${circle.size}px`,
//             top: circle.top,
//             left: circle.left,
//           }}
//           animate={{
//             rotate: [0, 360], // Rotates continuously
//           }}
//           transition={{
//             duration: 10, // Slow rotation
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default RotatingCircles;



// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const RotatingImages = ({ numImages = 10, imageUrl }) => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Generate random positions and sizes for images
//     const newImages = Array.from({ length: numImages }).map(() => ({
//       id: Math.random(),
//       top: Math.random() * 50 + 10 + "vh", // Keep within viewport height
//       left: Math.random() * 50 + 10 + "vw", // Keep within viewport width
//       size: Math.random() * 100 + 200, // Random size between 40px - 90px
//     }));
//     setImages(newImages);
//   }, [numImages]);

//   return (
//     <div className="absolute top-0 left-0 z-10 w-full h-screen bg-transparent overflow-hidden">
//       {images.map((img) => (
//         <motion.img
//           key={img.id}
//           src={imageUrl} // Use the image passed as prop
//           alt="Rotating object"
//           className="absolute opacity-40"
//           style={{
//             width: `${img.size}px`,
//             height: `${img.size}px`,
//             top: img.top,
//             left: img.left,
//           }}
//           animate={{
//             rotate: [0, 360], // Rotates continuously
//           }}
//           transition={{
//             duration: 10, // Slow rotation
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default RotatingImages;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RotatingImages = ({ numImages = 10, imageUrl }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const newImages = Array.from({ length: numImages }).map(() => ({
      id: Math.random(),
      top: Math.random() * 90 - 10 + "vh", 
      left: Math.random() * 90 - 15 + "vw", 
      size: Math.random() * 100 + 250, 
      delay: Math.random() * 5, // Random delay between 0-5 seconds
    }));
    setImages(newImages);
  }, [numImages]);

  return (
    <div className="fixed top-20 z-10 w-full h-screen bg-transparent overflow-hidden">
      {images.map((img) => (
        <motion.img
          key={img.id}
          src={imageUrl} 
          alt="Rotating object"
          className="absolute opacity-50"
          style={{
            width: `${img.size}px`,
            height: `${img.size + 60}px`,
            top: img.top,
            left: img.left,
          }}
          animate={{
            rotate: [0, 360], 
          }}
          transition={{
            duration: 10, 
            repeat: Infinity,
            ease: "linear",
            delay: img.delay, // Apply random delay
          }}
        />
      ))}
    </div>
  );
};

export default RotatingImages;
