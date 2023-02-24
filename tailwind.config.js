/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#423F71",
        header: "#292841",
        body: "#191919",
      },
      screens: {
        mobile: {
          max: "768px",
        },
      },
      transitionProperty: {
        margin: "margin",
        opacity: "opacity",
        transform: "transform",
      },
    },
  },
  plugins: [],
};