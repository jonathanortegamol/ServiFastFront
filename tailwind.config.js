/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#006769',
          50: '#50FFBB',
          100: '#36FFBA',
          200: '#03FFC0',
          300: '#00CFAE',
          400: '#009C91',
          500: '#006769',
          600: '#005964',
          700: '#004C5F',
          800: '#00405A',
          900: '#003555',
          950: '#002F52'
        },
        'secondary': {
          DEFAULT: '#40A578',
          50: '#B9E4D1',
          100: '#AADEC7',
          200: '#8DD3B4',
          300: '#6FC7A0',
          400: '#52BC8D',
          500: '#40A578',
          600: '#307D5B',
          700: '#21543D',
          800: '#112C20',
          900: '#010302',
          950: '#000000'
        },
        'terceary': {
          DEFAULT: '#E6FF94',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#F9FFE6',
          400: '#F0FFBD',
          500: '#E6FF94',
          600: '#D9FF5C',
          700: '#CCFF24',
          800: '#B4EB00',
          900: '#89B300',
          950: '#739700'
        },
      },
      fontFamily: {
        logo: ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

