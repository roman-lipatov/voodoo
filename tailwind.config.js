/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js'],
  theme: {
    extend: {
      spacing: {
        sm: '320px',
        md: '768px',
        lg: '1028px',
        xl: '1440px'
      }
    },
    fontFamily: {
      grotesk: ['Space Grotesk']
    },
    

  },
  plugins: [],
}

