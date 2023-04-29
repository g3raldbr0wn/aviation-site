/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    'xs': {'max': '600px'},
    extend: {},
  },
  plugins: [require("daisyui")],
}