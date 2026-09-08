/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#0f2238',
          900: '#0b192c',
          950: '#060f1c',
        },
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36affa',
          500: '#0c92eb',
          600: '#0274c7',
          700: '#035ca3',
          800: '#074f85',
          900: '#0b426f',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card': '0 10px 30px -5px rgba(15, 34, 56, 0.08)',
        'floating': '0 20px 40px -15px rgba(11, 25, 44, 0.12)',
      }
    },
  },
  plugins: [],
}
