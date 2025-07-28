/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "maintybe" : "#1C1C1C",
        "maintykely": "#2c2c2c",
        "maintymatroka": "#5A5A5A"
      },
      screens: {
        mobile: "375px",
        tablet: '768px',
        laptop: '1024px',
      },
      keyframes: {
        'slide-down-up':{
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(20px)'}
        },
        'slide-up-down':{
          '100%, 0%': {transform: 'translateY(20px)'},
          '50%': {transform: 'translateY(0)'}
        }
      },
      animation: {
        'bounce-y': 'slide-down-up 2s ease-in-out infinite',
        'bounce-z': 'slide-up-down 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}