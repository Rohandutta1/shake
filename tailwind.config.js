/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shake: {
          ink: '#0b1f17',
          cream: '#f5f1e6',
          lime: '#d7ff2f',
          mint: '#39d98a',
          teal: '#1d5b49',
          sky: '#1b9aaa',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.15)',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 18s linear infinite',
      },
    },
  },
  plugins: [],
}
