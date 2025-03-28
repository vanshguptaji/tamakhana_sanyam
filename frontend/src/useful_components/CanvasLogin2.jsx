// import { useEffect, useRef } from "react";
// import makhanes from './Untitled-1.png'

// const CanvasLogin2 = () => {
//   const canvasRef = useRef(null);
//   const gravity = 0.2;
//   const friction = 1;
//   const stopThreshold = 0.3;
//   const maxExplosionForce = 60;
//   const explosionRadius = 200;
//   let foxNutImage = new Image();
//   foxNutImage.src = makhanes; // Replace with a transparent fox nut image URL
//   let nutArray = [];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const c = canvas.getContext("2d");

//     const resizeCanvas = () => {
//       if (canvas.parentElement) {
//         canvas.width = canvas.parentElement.clientWidth;
//         canvas.height = canvas.parentElement.clientHeight;
//         init();
//       }
//     };

//     // Fox Nut Object
//     function FoxNut(x, y, dx, dy, size, rotation) {
//       this.x = x;
//       this.y = y;
//       this.dx = dx;
//       this.dy = dy;
//       this.size = size * 1.2;
//       this.rotation = rotation;
//       this.rotationSpeed = (Math.random() - 0.5) * 0.1;

//       this.update = () => {
//         if (this.y + this.size + this.dy >= canvas.height) {
//           this.dy = -this.dy * friction;
//           this.dx *= friction;
//           if (Math.abs(this.dy) < stopThreshold) this.dy = 0;
//           if (Math.abs(this.dx) < stopThreshold) this.dx = 0;
//         } else {
//           this.dy += gravity;
//         }

//         if (this.x + this.size >= canvas.width || this.x <= 0) {
//           this.dx = -this.dx * friction;
//         }

//         this.x += this.dx;
//         this.y += this.dy;
//         this.rotation += this.rotationSpeed;
//         this.draw();
//       };

//       this.draw = () => {
//         c.save();
//         c.translate(this.x + this.size / 2, this.y + this.size / 2);
//         c.rotate(this.rotation);
//         c.drawImage(foxNutImage, -this.size / 2, -this.size / 2, this.size, this.size * 1.5);
//         c.restore();
//       };

//       this.explode = (clickX, clickY) => {
//         const distX = this.x - clickX;
//         const distY = this.y - clickY;
//         const distance = Math.sqrt(distX * distX + distY * distY);

//         if (distance < explosionRadius) {
//           const angle = Math.atan2(distY, distX);
//           const force = ((explosionRadius - distance) / explosionRadius) * maxExplosionForce;
//           const randomness = Math.random() * 2 + 1;

//           this.dx = Math.cos(angle) * force * randomness;
//           this.dy = Math.sin(angle) * force * randomness;
//           this.rotationSpeed = (Math.random() - 0.5) * 0.2;
//         }
//       };
//     }

//     // Initialization
//     const init = () => {
//       nutArray = [];
//       for (let i = 0; i < 200; i++) {
//         const size = Math.random() * 150 + 50;
//         const x = Math.random() * (canvas.width - size);
//         const y = Math.random() * (canvas.height - size) +20;
//         const dx = Math.random() * 4 - 2;
//         const dy = Math.random() * 2 - 1;
//         nutArray.push(new FoxNut(x, y, dx, dy, size, Math.random() * Math.PI * 2));
//       }
//     };

//     // Explosion Event
//     const explodeNuts = (event) => {
//       const rect = canvas.getBoundingClientRect();
//       const clickX = event.clientX - rect.left;
//       const clickY = event.clientY - rect.top;
//       nutArray.forEach(nut => nut.explode(clickX, clickY));
//     };

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       c.clearRect(0, 0, canvas.width, canvas.height);
//       nutArray.forEach(nut => nut.update());
//     };

//     // Event Listeners
//     window.addEventListener("resize", resizeCanvas);
//     canvas.addEventListener("click", explodeNuts);

//     foxNutImage.onload = () => {
//       resizeCanvas();
//       animate();
//     };

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       canvas.removeEventListener("click", explodeNuts);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
// };

// export default CanvasLogin2;





import { useEffect, useRef } from "react";
import makhanes from '../assets/Untitled-1.png'

const CanvasLogin2 = () => {
  const canvasRef = useRef(null);
  const gravity = 0.2;
  const friction = 1;
  const stopThreshold = 0.3;
  const rotationStopThreshold = 0.05; // New threshold for rotation
  const maxExplosionForce = 60;
  const explosionRadius = 200;
  let foxNutImage = new Image();
  foxNutImage.src = makhanes; // Replace with a transparent fox nut image URL
  let nutArray = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        init();
      }
    };

    // Fox Nut Object
    function FoxNut(x, y, dx, dy, size, rotation) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.size = size * 1.2;
      this.rotation = rotation;
      this.rotationSpeed = (Math.random() - 0.5) * 0.1;
      this.isResting = false; // New property to track if the nut is at rest

      this.update = () => {
        // Check if the nut has come to rest on the ground
        if (this.y + this.size + this.dy >= canvas.height) {
          this.dy = -this.dy * friction;
          this.dx *= friction;
          
          // If movement is below threshold, stop completely
          if (Math.abs(this.dy) < stopThreshold) this.dy = 0;
          if (Math.abs(this.dx) < stopThreshold) this.dx = 0;
          
          // If both dx and dy are 0, mark as resting
          if (this.dx === 0 && this.dy === 0) {
            this.isResting = true;
          }
        } else {
          this.dy += gravity;
          this.isResting = false; // Not resting if it's still in the air
        }

        // Check for wall collisions
        if (this.x + this.size >= canvas.width || this.x <= 0) {
          this.dx = -this.dx * friction;
        }

        // Update position
        this.x += this.dx;
        this.y += this.dy;
        
        // Update rotation only if not resting
        if (!this.isResting) {
          this.rotation += this.rotationSpeed;
        } else {
          // Slow down rotation if resting
          this.rotationSpeed *= 0.9;
          // Stop rotation completely when it's slow enough
          if (Math.abs(this.rotationSpeed) < rotationStopThreshold) {
            this.rotationSpeed = 0;
          } else {
            this.rotation += this.rotationSpeed;
          }
        }
        
        this.draw();
      };

      this.draw = () => {
        c.save();
        c.translate(this.x + this.size / 2, this.y + this.size / 2);
        c.rotate(this.rotation);
        c.drawImage(foxNutImage, -this.size / 2, -this.size / 2, this.size, this.size * 1.5);
        c.restore();
      };

      this.explode = (clickX, clickY) => {
        const distX = this.x - clickX;
        const distY = this.y - clickY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < explosionRadius) {
          const angle = Math.atan2(distY, distX);
          const force = ((explosionRadius - distance) / explosionRadius) * maxExplosionForce;
          const randomness = Math.random() * 2 + 1;

          this.dx = Math.cos(angle) * force * randomness;
          this.dy = Math.sin(angle) * force * randomness;
          this.rotationSpeed = (Math.random() - 0.5) * 0.2;
          this.isResting = false; // No longer resting after an explosion
        }
      };
    }

    // Initialization
    const init = () => {
      nutArray = [];
      for (let i = 0; i < 100; i++) {
        const size = Math.random() * 100 + 50;
        const x = Math.random() * (canvas.width - size);
        const y = Math.random() * (canvas.height - size) + 20;
        const dx = Math.random() * 4 - 2;
        const dy = Math.random() * 2 - 1;
        nutArray.push(new FoxNut(x, y, dx, dy, size, Math.random() * Math.PI * 2));
      }
    };

    // Explosion Event
    const explodeNuts = (event) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;
      nutArray.forEach(nut => nut.explode(clickX, clickY));
    };

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      nutArray.forEach(nut => nut.update());
    };

    // Event Listeners
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("click", explodeNuts);

    foxNutImage.onload = () => {
      resizeCanvas();
      animate();
    };

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("click", explodeNuts);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-20 left-20 w-full h-full" />;
};

export default CanvasLogin2;