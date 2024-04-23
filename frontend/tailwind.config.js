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
        sans : ['Roboto', 'sans-serif'],
        RobotoMd : ['RobotoMd', 'sans-serif'],
        RobotoBold : ['RobotoBold', 'sans-serif'],
        RobotoThin : ['RobotoThin', 'sans-serif'],
      },
      fontSize : {
        'title-1' : ['32px'],
        'title-2' : ['28px'],
        'subtitle-1' : ['24px'],
        'subtitle-2' : ['20px'],
        'lead' : ['18px'],
        'base' : ['16px'],
        'small-1' : ['14px'],
        'small-2' : ['11px'],
        'icon' : ['24px']
      },
      colors:{
        'primary' : '#462DA8',
        'white' : '#FFFFFF',
        'black' : '#1e1e1e',
        'gray' : "#F2F2F2",
        'success' : '#48DA5F',
        'danger' : '#eb6161',
        'warning' : '#F0E945',
        'primary-60' : "#31189699",
        'primary-40' : "#31189666",
        'primary-10' : "#3118961a",
        "dark-primary" : "#1B1242",
        'black-80' : "#1e1e1ecc",
        'black-60' : "#1e1e1e99",
        'black-40' : "#1e1e1e66",
        'black-10' : "#1e1e1e1a",
        'white-60' : '#ffffff99',
        'white-40' : '#ffffff66',
        'white-10' : '#ffffff1a',
        'danger-60' : '#eb616199',
        'danger-10' : '#eb61611a',
        'load' : "#212222",
      }
    },
    //E6E6E6 : white
    plugins: [],
  }

  // 'primary-60' : '#1db95499',
  // 'primary-40' : '#1db95466',
  // 'primary-10' : '#1db9541a',