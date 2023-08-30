/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode:'class',
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl:'1440px'
    },
      letterSpacing: {
        '1': '0em',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.3em',
      },
    extend: {
      height: {
        '128': '62rem',
      },    
      colors: {
        
        bodyback:'#171E28',
        divBack: '#252B43',
        FT: '#1B8FF6',
        youTube: '#C30328',
        activelightbluegrey: '#7C8898',

        LORANGE:'#FC7613'
      }
    },
  },
  plugins: [],
}


