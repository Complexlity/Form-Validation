/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
    },
    screens:{
      sm: '480px',
      md: '768px',
      mg: '976px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}
