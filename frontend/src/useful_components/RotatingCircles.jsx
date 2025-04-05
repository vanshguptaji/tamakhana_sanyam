// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const RotatingImages = ({ numImages = 10, imageUrl }) => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const newImages = Array.from({ length: numImages }).map(() => ({
//       id: Math.random(),
//       top: Math.random() * 90 - 10 + "vh", 
//       left: Math.random() * 90 - 15 + "vw", 
//       size: Math.random() * 100 + 250, 
//       delay: Math.random() * 5, // Random delay between 0-5 seconds
//     }));
//     setImages(newImages);
//   }, [numImages]);

//   return (
//     <div className="fixed top-20 z-10 w-full h-screen bg-transparent overflow-hidden">
//       {images.map((img) => (
//         <motion.img
//           key={img.id}
//           src={imageUrl} 
//           alt="Rotating object"
//           className="absolute opacity-50"
//           style={{
//             width: `${img.size}px`,
//             height: `${img.size + 60}px`,
//             top: img.top,
//             left: img.left,
//           }}
//           animate={{
//             rotate: [0, 360], 
//           }}
//           transition={{
//             duration: 10, 
//             repeat: Infinity,
//             ease: "linear",
//             delay: img.delay, // Apply random delay
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
    const newImages = Array.from({ length: numImages }).map(() => {
      const isLeft = Math.random() < 0.5; // 50% chance for left or right side
      const left = isLeft
        ? Math.random() * 10 // 0vw to 35vw
        : 65 + Math.random() * 20; // 65vw to 100vw

      return {
        id: Math.random(),
        top: Math.random() * 90 - 10 + "vh", // -10vh to 80vh
        left: `${left}vw`,
        size: Math.random() * 100 + 250, // 250px to 350px
        delay: Math.random() * 2, // 0s to 5s delay
      };
    });

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
            left: img.left ,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: img.delay,
          }}
        />
      ))}
    </div>
  );
};

export default RotatingImages;
