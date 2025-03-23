// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pp-rader': ['"PP Rader"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
      },
      colors: {
        // Custom colors from your CSS
        'tamakhana-blue': '#5546ff',
        'tamakhana-lime': '#bfff00',
        'tamakhana-dark': '#252525',
      },
      fontFamily: {
        'mono': ['"Courier New"', 'Courier', 'monospace'],
      },
      height: {
        'screen': '100vh',
      },
      animation: {
        'rotate-eyes': 'rotateEyes 4s infinite linear',
        'wonder-face': 'wonderFace 2s infinite cubic-bezier(0.075, 0.82, 0.165, 1)',
        'carousel': 'gallery 20s ease-in infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateEyes: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wonderFace: {
          '0%': { height: '40px' },
          '50%': { height: '80px' },
          '100%': { height: '40px' },
        },
        wonder: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
        gallery: {
          '0%': { 
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww)'
          },
          '20%': { 
            backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1673697240011-76f7f9220300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww)'
          },
          '40%': { 
            backgroundImage: 'url(https://images.unsplash.com/photo-1651973999246-66f6701e91ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D)'
          },
          '60%': { 
            backgroundImage: 'url(https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlJTIwbmF0dXJlfGVufDB8fDB8fHww)'
          },
          '80%': { 
            backgroundImage: 'url(https://images.unsplash.com/photo-1574169208383-fb087432973a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZCUyMGltYWdlJTIwbmF0dXJlfGVufDB8fDB8fHww)'
          },
          '100%': { 
            backgroundImage: 'url(https://images.unsplash.com/photo-1502085671122-2d218cd434e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFja2dyb3VuZCUyMGltYWdlJTIwbmF0dXJlfGVufDB8fDB8fHww)'
          },
        },
      },
    },
  },
  plugins: [],
}