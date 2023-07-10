/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: 'hsl(220, 66%, 51%)',
        primaryAccent: 'hsl(221, 100%, 93%)',
        fontDark: 'hsl(221, 38%, 11%)',
        fontLight: 'hsl(210, 10%, 26%)',
        borderLight: '#E0E9EC',
        background: 'hsl(210, 40%, 98%)',
        placeholder: 'hsl(0, 0%, 67%)'
      }
    },
  },
  plugins: [],
}

