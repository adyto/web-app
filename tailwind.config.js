/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },

      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
      borderRadius: {
        "20px": "20px",
      },
      colors: {
        cyan: "#30ACA6",
      },
    },
  },
  plugins: [],
};
