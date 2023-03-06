/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      }
    },
    colors: {
      "forest-green": "#002803",
      "dark-gray": "#757575",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#C6C6C6",
      green: "#014421",
      "light-forest-green": "#01571e",
      red: "#c70404"
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
