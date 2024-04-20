/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        complementary: "#30e5c4",
        fade: "rgba(48, 229, 196, .25)"
      },
      fontFamily: {
        ubuntu: ["Ubuntu","sans-serif"],
        special: ["Caveat", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }

    },
  },
  plugins: [],
}
