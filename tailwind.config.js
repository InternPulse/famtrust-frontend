/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-bg': '#C0BDFF',
        'hover-bg': '#4567F7',
        'text-color': '#14183B',
        'hover-text': '#F9F8FF',
      },
    },
  },
  plugins: [],
}
