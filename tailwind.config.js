/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1A374D',
          dark: '#142d3f',
        },
        secondary: {
          DEFAULT: '#406882',
          dark: '#335671',
        },
        accent: {
          DEFAULT: '#B85C38',
          dark: '#9a4b2e',
        },
        surface: '#F9F7F7',
        dark: '#2C3333',
      },
    },
  },
  plugins: [],
};