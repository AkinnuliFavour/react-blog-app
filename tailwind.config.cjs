/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        bgBody: "#01071d",
        bg: "#010b2c",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
