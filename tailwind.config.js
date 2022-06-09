/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './dist/**/*.{html,js}',
  './components/**/*.{html,js}',],
  theme: {
    debugScreens: {
    position: ['top', 'left'],
    },
    
    extend: {},
  },
  plugins: [ require('tailwindcss-debug-screens'),
],
}
