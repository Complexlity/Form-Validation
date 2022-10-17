/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily:{
      "Norse": ["Norse",'sans-serif'],
    },
    container: {
      center: true,
    },
    minWidth:{
      '500': '500px',
      '700': '700px',
      '1200': '1200px',
    },
    maxWidth:{
      '500': '500px',
      '52': '52ch',
    },
    screens:{
      sm: '480px',
      md: '768px',
      mg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightGreen: '#596D48',
        lighterGreen: '#8ba375'
      }
    },
  },
  plugins: [],
}
