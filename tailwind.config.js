const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      'bookmark-pupple': '#5267DE',
      'bookmark-red': '#FA5959',
      'bookmark-blue': '#242445',
      'bookmark-grey': '#9194A2',
      'bookmark-white': '#f7f7f7',
      'white' : colors.white,
      'black' : colors.black
    }, 
    fontFamily: {
      sans:  ["Poppins, sans-serif"],
    },
    container: {
      center :true,
      padding: "1rem",
      screen: {
        lg: '1124px',
        xl: '1124px',
       "2xl":"1124px"
      }
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
}
