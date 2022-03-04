const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'camel-yellow': '#FEDD00',
        'camel-blue': '#00A3E0',
        'camel-orange': '#ED8B00',
        'camel-purple': '#D8005E',
        'camel-green': '#00AF66',
        'camel-darkblue': '#003C71',
      },
    },
  },
  plugins: [],
}
