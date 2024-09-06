/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./presets/**/*.{js,vue,ts}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '50vh': '50vh',
        '40vh': '40vh',
        '30vh': '30vh',
        '20vh': '20vh',
        '10vh': '10vh',
      },
      backgroundImage: {
        'homepage-bgimage': "url('../public/images/tokyo4.jpg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      fontSize: {
        'introductionFont': '2.5rem',
      }
    }
  },
  plugins: [require('tailwindcss-primeui')]
}