/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        screens: {
            '3xl': '1600px',
            '4xl': '1800px',
            '1366': '1380px',
            '800': '810px',
            '3840': '2500px', // Added 3840px width

          },
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'Source': ['Source Sans Pro', 'sans-serif'],
        'Antiqua': ['Book Antiqua', 'sans-serif']
    },
    },
},
variants: {},
plugins: [],
}
 
 
  /* theme: {
    extend: {
      fontFamily: {
        'Manrope': ['Manrope', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
    },
    },
  },
  plugins: [],
} */