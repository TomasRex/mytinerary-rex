/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**.jsx',
    './src/*/**.jsx',
    './src/Components/Carousel/Carousel.jsx',
    './src/Components/Footermain/Footermain.jsx',
    './src/Components/Headermain/Headermain.jsx',
    './index.html'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

