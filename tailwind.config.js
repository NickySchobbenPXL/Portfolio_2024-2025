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
        '70vh': '70vh',
        '60vh': '60vh',
        '50vh': '50vh',
        '40vh': '40vh',
        '30vh': '30vh',
        '20vh': '20vh',
        '10vh': '10vh',
      },
      backgroundImage: {
        'homepage-bgimage': "url('../public/images/kyotochan-transformed.jpeg')",
        'personaldevelopment-bgimage': "url('../public/images/personal-development.avif')",
        'seminarpage-uncanny': "url('../public/images/uncanny.png')",
        'seminarpage-biq': "url('../public/images/biq.svg')",
        'seminarpage-biq2': "url('../public/images/biq.png')",
        'seminarpage-ae': "url('../public/images/ae.png')",
        'seminarpage-cbtw': "url('../public/images/cbtw2.png')",
        'pop-session-bg-main' : "url('../public/images/popsessies.jpg')",
        'pop-session-bg-1' : "url('../public/images/breinaanhetwerk3.jpg')",
        'pop-session-bg-2' : "url('../public/images/teamwork.png')",
        'pop-session-bg-3' : "url('../public/images/')",
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'oswald': ["Oswald", "sans-serif"],
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
      },
      fontSize: {
        'introductionFont': '2.5rem',
        'seminartitle': '60px',
      }
    }
  },
  plugins: [
    require('tailwindcss-primeui'),
    require('daisyui')
  ]
}