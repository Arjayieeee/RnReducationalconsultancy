/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#004AAD',
        secondary: '#0F7A81',
        dark: '#0a0a0a',
        lightdark: '#F8F8F8'
      }
    },
    fontFamily: {
      'livvic': ['Livvic', 'sans-serif'],
    },
  },
  plugins: [],
}
