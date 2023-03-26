/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.js",
    "./components/*.jsx",
    "./components/*.js",
    "./pages/examples/*.jsx",
    "./pages/examples/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        pallete: {
          1: '#8C1F28',
          2: '#591C21',
          3: '#044040',
          4: '#D92525',
          5: '#F2F2F2'
        }
      },
      'fontFamily':{
        "gloock": ["Gloock", "sans-serif"],
        "quicksand": ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [],
}
