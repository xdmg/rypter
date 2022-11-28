/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'black': '#060606',
        'dark': '#121212',
        'dark-gray': '#232323',
        'gray': '#B2B2B2',
        'purple': '#7C57A5',
      }
    },
  },
  plugins: [],
}
