/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js, jsx}",
    "./components/*.jsx",
    "./components/*.js",
  ],
  theme: {
    extend: {
      colors: {
        pallete: {
          flame: "#EB5E28",
          olive: "#403D39",
          floral: "#FFFCF2",
          green: "#87CD6E"
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
