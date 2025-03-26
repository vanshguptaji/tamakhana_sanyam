// import React, { useEffect, useRef } from 'react';
// import snowflakeImage from './Untitled-1.png'; // Replace with your image path

// const CanvasLogin_snow = () => {
//     const canvasRef = useRef(null);
//     let img = new Image();
//     img.src = snowflakeImage; // Load the image

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const c = canvas.getContext('2d');
//         let mouse = { x: undefined, y: undefined };
//         const maxSize = 40; 
//         const minSize = 10; // Minimum image size
//         const colorArray = ['#BF40BF', '#000', '#E9DCC9'];

//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         window.addEventListener('mousemove', (e) => {
//             mouse.x = e.x;
//             mouse.y = e.y;
//         });

//         window.addEventListener('resize', () => {
//             canvas.width = window.innerWidth;
//             canvas.height = window.innerHeight;
//             init();
//         });

//         function Snowflake(x, y, dx, dy, size) {
//             this.x = x;
//             this.y = y;
//             this.dx = dx;
//             this.dy = dy;
//             this.size = size;
//             this.minSize = size;

//             this.draw = function () {
//                 c.drawImage(img, this.x, this.y, this.size, this.size);
//             };

//             this.update = function () {
//                 if (this.x + this.size > canvas.width || this.x < 0) {
//                     this.dx = -this.dx;
//                 }
//                 if (this.y + this.size > canvas.height || this.y < 0) {
//                     this.dy = -this.dy;
//                 }
//                 this.x += this.dx;
//                 this.y += this.dy;

//                 // Interactivity (increase size on hover)
//                 if (
//                     mouse.x - this.x < 50 &&
//                     mouse.x - this.x > -50 &&
//                     mouse.y - this.y < 50 &&
//                     mouse.y - this.y > -50
//                 ) {
//                     if (this.size < maxSize) {
//                         this.size += 1;
//                     }
//                 } else if (this.size > this.minSize) {
//                     this.size -= 1;
//                 }

//                 this.draw();
//             };
//         }

//         let snowflakes = [];
//         function init() {
//             snowflakes = [];
//             for (let i = 0; i < 200; i++) {
//                 const size = Math.random() * 80 + 80; // Min 10px, Max 20px
//                 const x = Math.random() * (canvas.width - size * 2) + size;
//                 const y = Math.random() * (canvas.height - size * 2) + size;
//                 const dx = (Math.random() - 0.5) * 2;
//                 const dy = (Math.random() - 0.5) * 2;
//                 snowflakes.push(new Snowflake(x, y, dx, dy, size));
//             }
//         }

//         function animate() {
//             c.clearRect(0, 0, canvas.width, canvas.height);
//             for (let i = 0; i < snowflakes.length; i++) {
//                 snowflakes[i].update();
//             }
//             requestAnimationFrame(animate);
//         }

//         img.onload = () => {
//             init();
//             animate();
//         };

//         // Cleanup on unmount
//         return () => {
//             window.removeEventListener('mousemove', () => {});
//             window.removeEventListener('resize', () => {});
//         };
//     }, []);

//     return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
// };

// export default CanvasLogin_snow;



import React, { useEffect, useRef } from 'react';
import snowflakeImage from '../assets/Untitled-1.png'; // Replace with your image path

const CanvasLogin_snow = () => {
    const canvasRef = useRef(null);
    let mouse = { x: undefined, y: undefined };

    useEffect(() => {
        const canvas = canvasRef.current;
        const c = canvas.getContext('2d');

        const maxSize = 160; // Maximum size when mouse is near
        const minSize = 80; // Minimum size
        const image = new Image();
        image.src = snowflakeImage; // Load the image

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        });

        function Snowflake(x, y, dx, dy, size) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.size = size;
            this.minSize = size; // Store initial size

            this.draw = function () {
                c.drawImage(image, this.x, this.y, this.size, this.size);
            };

            this.update = function () {
                if (this.x + this.size > canvas.width || this.x < 0) {
                    this.dx = -this.dx;
                }
                if (this.y + this.size > canvas.height || this.y < 0) {
                    this.dy = -this.dy;
                }
                this.x += this.dx;
                this.y += this.dy;

                // Interactivity - Grow when near mouse
                if (
                    mouse.x - this.x < 50 &&
                    mouse.x - this.x > -50 &&
                    mouse.y - this.y < 50 &&
                    mouse.y - this.y > -50
                ) {
                    if (this.size < maxSize) {
                        this.size += 3; // Grow smoothly
                    }
                } else if (this.size > this.minSize) {
                    this.size -= 1; // Shrink smoothly
                }

                this.draw();
            };
        }

        let snowflakes = [];
        function init() {
            snowflakes = [];
            for (let i = 0; i < 100; i++) {
                const size = Math.random() * 80 + 80; // Set initial size range
                const x = Math.random() * (canvas.width - size * 2) + size;
                const y = Math.random() * (canvas.height - size * 2) + size;
                const dx = (Math.random() - 0.5) * 2;
                const dy = (Math.random() - 0.5) * 2;
                snowflakes.push(new Snowflake(x, y, dx, dy, size));
            }
        }

        function animate() {
            c.clearRect(0, 0, canvas.width, canvas.height);
            snowflakes.forEach((flake) => flake.update());
            requestAnimationFrame(animate);
        }

        image.onload = () => {
            init();
            animate();
        };

        // Cleanup on unmount
        return () => {
            window.removeEventListener('mousemove', () => {});
            window.removeEventListener('resize', () => {});
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default CanvasLogin_snow;
