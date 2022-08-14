/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './icons/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './TW_components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      bebas: ['Bebas Neue'],
    },
    extend: {
      gridTemplateColumns: {
        'custom-sidenav-layout': '272px 1fr',
      },
      transitionProperty: {
        height: 'height',
      },
      colors: {
        primaryGray: '#E5E5E5',
        white: '#FFFFFF',
        black: '#000000',
        yellow: '#f2c200',
      },
    },
  },
  plugins: [],
}
