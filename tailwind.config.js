/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  
  theme: {
    colors:{
      

    },
    extend: {
      colors:{
        blue_primary:'#1C74D9',
      black_primary:'#272932',
      green_primary:'#98CE00',
      ffd_green:{
        400:'#D7F38A',
        300: '#F1FFCA',
      },
      ffd_blue:{
        500:'#3D8EEA',
        400: '#9ECBFF',
        300: '#C9E2FF',
        200: '#E8F2FF',
        100: '#F9FCFF'
      },
      gray: {
        600:'#393D49',
        500:'#606578',
        400:'#B4B7C2',
        300:'#DEE0EA',
        200:'#F1F3FA',
        100:'#F8F8F8',

      }
 
      }
    },
  },
  plugins: [
    
  ],
}