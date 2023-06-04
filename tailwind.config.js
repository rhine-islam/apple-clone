/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const FlipClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".leftToRight": {
      transform: "rotateY(180deg)",
    },
    ".rightToLeft": {
      transform: "rotateY(-180deg)",
    },
    ".topToBottom": {
      transform: "rotateX(-180deg)",
    },
    ".bottomToTop": {
      transform: "rotateX(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "8000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sf: [
          "San Francisco",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animated"), FlipClass],
};
