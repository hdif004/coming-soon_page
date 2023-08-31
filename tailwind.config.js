/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'D-Red' : '#ce9797',
        'S-Red' : '#f96262',
        'Darkgray' : '#413a3a',
        'gradient-1' : '#f8bfbf',
        'gradient-2' : '#ee8c8c',
        'gradient-a1' : '#ffffff',
        'gradient-a2' : '#fff5f5'

      },
      dropShadow: {
        '4xl': '6px 8px 27px rgba(238, 140, 140, 1)'
      }
    },
  },
  plugins: [],
}

