/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
        "hero-pattern": "url('/img/hero.png')"
      },
      sepia: {
        // 25: '.25',
        75: '.50',
      }
    },
  },
  plugins: [],
}
