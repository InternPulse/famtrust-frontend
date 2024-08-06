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
        },
        secondary: {
          grey: '#777',
          grey2: '#F9F8FF',
        },

        'darkGrey': '#E2DDFF',
        'hover-bg': '#F1F1F1',
        'text-color': '#777777',
        'hover-text': '#2452D6',
        'up-arrow': '#00710B',
        'add-sub-acc': '#2452D6',
        // 'gray': '#E2E2E2'
        gray: '#bdbdbd',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        "montesarrat": "Montserrat Alternates"
        
              
      },
      backgroundImage:{
        "bg": "url('/herobg.png')"
      },
      backgroundColor: {
        "bluey": "#4567F7",
        "neutrall": "#F9F9F9",
        "purp" : "#E2DDFF"
      },
      textColor:{
        "txtblue": "#4567F7",
      },

    },
  },
  plugins: [],
};




