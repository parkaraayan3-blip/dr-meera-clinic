/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        'background-secondary': '#F5F0EA',
        primary: '#2D2D2D',
        secondary: '#6B7280',
        border: '#E8E4DE',
        accent: '#6F8A7A',
        'accent-optional': '#C98B8B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
