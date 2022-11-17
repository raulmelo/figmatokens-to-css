/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
  plugins: [
    require("daisyui")
  ]
};
