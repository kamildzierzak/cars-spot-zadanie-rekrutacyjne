/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0147FF',
        'light-gray': '#F7F7F7',
        'dark-gray': '#282828'
      },
      fontFamily: {
        roboto: ['Roboto Flex', 'sans-serif'],
        'roboto-condens': ['Roboto Condensed', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif']
      }
    }
  },
  plugins: []
}
