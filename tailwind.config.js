/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2452D6',
          red: '#C50016',
          green: '#00710B',
          white: '#F9F8FF',
          green2: '#57C068',
        },
        secondary: {
          grey: '#777',
          grey2: '#F9F8FF',
          grey3: '#E2E2E2',
        },

        darkGrey: '#C0BDFF',
        'hover-bg': '#4567F7',
        'text-color': '#14183B',
        'sb-bg': '#E2DDFF',
        'sb-hover-text': '#4567F7',
        'sb-hover-bg': '#F9F8FF',
        'sb-text-color': '#474747',
        'hover-text': '#F9F8FF',
        'up-arrow': '#00710B',
        'add-sub-acc': '#2452D6',
        darkerGrey: '#E2DDFF',
        lightGrey: '#ABABAB',
        'faint-blue': '#C0BDFF',
        lightBlue: '#4567F7',
        darkestGrey: '#777777',
        lightestGrey: '#F9F8FF',
        // 'gray': '#E2E2E2'
        gray: '#bdbdbd',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montesarrat: 'Montserrat Alternates',
      },
      backgroundImage: {
        bg: "url('/herobg.png')",
        bgg: "url('/Ellipse.png)",
      },
      backgroundColor: {
        bluey: '#4567F7',
        neutrall: '#F9F9F9',
        purp: '#E2DDFF',
      },
      textColor: {
        txtblue: '#4567F7',
      },
    },
  },
  plugins: [],
};
