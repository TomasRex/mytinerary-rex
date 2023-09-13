/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**.jsx',
    './src/*/**.jsx',
    './src/Components/Carousel/Carousel.jsx',
    './src/Components/Footermain/Footermain.jsx',
    './src/Components/Headermain/Headermain.jsx',
    './index.html',
    './src/Components/CitiesCards/CitiesCards.jsx',
    './src/Components/CitiesDetails/CitiesDetails.jsx',
    './src/Components/SearchCities/SearchCities.jsx',
    './src/Components/Itineraries/Itineraries.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins', 'sans-serif']
      }
    },
  },
  variants: {},
  plugins: [
  ],
}

