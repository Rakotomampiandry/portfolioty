/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mainty": "#000000",
        "mangabe": "#0D0716",
        "violeta": "#9936AF"
      },
      screens: {
        mobile: "375px",
        tablet: '768px',
        laptop: '1024px',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        borderMove: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "400% 0%" },
        },
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        shineInverse: {
          '100%': { transform: 'translateX(-100%)' },
          '0%': { transform: 'translateX(100%)' },
        },
        fadeSlide: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(147,54,175,0.35)',
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 15px rgba(147,54,175,0.8)',
          },
          '100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(147,54,175,0.35)',
          },
        }
      },
      animation: {
        gradientMove: 'gradientMove 4s ease infinite',
        borderMove: "borderMove 3s linear infinite",
        scroll: 'scroll 8s linear infinite',
        float: "float 3s ease-in-out infinite",
        shine: 'shine 2s linear infinite',
        shineInverse: "shineInverse 2s linear infinite",
        fadeSlide: 'fadeSlide 0.3s ease-out',
        fadeSlideUp: 'fadeSlideUp 0.6s ease-out forwards',
        pulseGlow: 'pulseGlow 2s ease-in-out',
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}