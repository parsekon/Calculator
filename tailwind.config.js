/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue'],
    },
    extend: {
      colors: {
        purple: '#1E0A77 ',
        white: '#FFFFFF',
        orange: '#F0C861',
        gray: '#C5C0D9',
      },
    },
  },
  plugins: [],
}
