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
      }
    },
  },
  plugins: [],
}

