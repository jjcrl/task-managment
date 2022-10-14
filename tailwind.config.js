/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      "3/4": "75%",
      "1/2": "50%",
    },
    maxHeight: {
      "5/6": "83.333333%",
    },
    extend: {},
  },
  plugins: [],
};
