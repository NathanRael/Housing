/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'selector',
    theme: {
      extend: {
        boxShadow : {
          '3D' : '0.5px 2px 0 1px rgba(153, 137, 194, 100)',
        },
      },
      colors: {},
      fontFamily:{
        sans : ['Futura', 'sans-serif'],
        FuturaMd : ['FuturaMd', 'sans-serif'],
        FuturaBold : ['FuturaBold', 'sans-serif'],
        FuturaThin : ['FuturaThin', 'sans-serif'],
      },
      fontSize : {
        'title-1' : ['64px'],
        'title-2' : ['48px'],
        'subtitle-1' : ['40px'],
        'subtitle-2' : ['32px'],
        'subtitle-3' : ['24px'],
        'lead' : ['18px'],
        'base' : ['16px'],
        'small-1' : ['14px'],
        'small-2' : ['11px'],
        'icon' : ['24px']
      },
      colors:{
        'primary' : '#1DB954',
        'white' : '#FFFFFF',
        'black' : '#121212',
        'light' : '#E6E6E6',
        'success' : '#1DB954',
        'danger' : '#DD5959',
        'primary-60' : '#1db95499',
        'primary-40' : '#1db95466',
        'primary-10' : '#1db9541a',
        'white-60' : '#e6e6e699',
        'white-40' : '#e6e6e666',
        'white-10' : '#e6e6e61a',
        'black-60' : '#12121299',
        'black-40' : '#12121266',
        'black-10' : '#0e0a171a',
        'danger-60' : '#dd595999',
        'danger-10' : '#dd59591a',
        'load' : "#212222",
      }
    },
    //E6E6E6 : white
    plugins: [],
  }