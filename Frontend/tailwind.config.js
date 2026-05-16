/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        orange: {
          50:  '#fff8f3',
          100: '#fff0e6',
          200: '#ffd5b8',
          300: '#ffb380',
          400: '#ff8c42',
          500: '#f96a1b',
          600: '#e84a00',
          700: '#b83700',
          800: '#7a2200',
          900: '#431200',
          950: '#1a0800',
        },
        dark: {
          600: '#3d2710',
          700: '#2d1c0a',
          800: '#1e1206',
          900: '#130c02',
          950: '#0a0600',
        },
      },
    },
  },
  plugins: [],
}
