const { Container } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // if using Next.js app directory
    "./pages/**/*.{js,ts,jsx,tsx}",    // for traditional pages directory
    "./components/**/*.{js,ts,jsx,tsx}", // for shared components
  ],
  theme: {
    extend: {
        container: {
            center:true,
            padding:"15px"
        },

        colors:{
            accent: "#FF8F9C",
            blackish: "#1b1b1b",
        },
    },
  },
  plugins: [],
}
