/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{templates,cmoponents}/**/*.{twig,js}',
    './dummyclasses.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        'brem-hand': '"Briem Hand", cursive'
      }
    },
  },
  plugins: [],
}

