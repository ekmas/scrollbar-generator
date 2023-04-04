/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#9EBDFF',
        'white': '#FFFFFF',
        'black': '#111111'
      },
      screens:{
        'xl': {'max': '1279px'},
        'm1100': {'max': '1100px'},
        'm800': {'max': '800px'},
        'm700': {'max': '700px'},
        'm600': {'max': '600px'},
        'm500': {'max': '500px'},
        'm400': {'max': '400px'},
      }
    },
  },
  plugins: [],
}

