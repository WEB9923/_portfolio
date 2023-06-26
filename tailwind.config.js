/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        "md":"8px",
        "lg":"12px"
      }
    },
    colors:{
      "bgColor":"#EDF4F2",
      "darkestBgColor":"#d7e5e1",
      "textColor":"#3b5647",
      "colorlessText":"#9AA08699",
      "lightTextColor":"#7C8363",
    },
    fontFamily:{
      "font":["Ysabeau Infant","sans-serif"],
      "titleFort":["Lobster Two","sans-serif"]
    }
  },
  plugins: [],
}

