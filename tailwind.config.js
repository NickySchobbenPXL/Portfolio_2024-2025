/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./presets/**/*.{js,vue,ts}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')]
}