/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
export default {
  corePlugins: {
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00848E'
      }
    },
  },
  plugins: [],
}

