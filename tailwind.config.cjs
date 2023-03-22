/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      "dark-blue": "hsl(209, 23%, 22%)",
      "very-dark-blue": "hsl(207, 26%, 17%)",
      "very-dark-blue2": "hsl(200, 15%, 8%)",
      "dark-gray": "hsl(0, 0%, 52%)",
      "light-gray": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};

//  Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
