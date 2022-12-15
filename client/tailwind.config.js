/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#D4F1F4",
        buttonColor: "#46B2E0",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        img: "url('../src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
