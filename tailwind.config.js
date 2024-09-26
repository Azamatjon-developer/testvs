/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#00040f',
        secondary:'#00f6ff',
        lightWhite:'rgba(255,255,255,0.7',
        lightBlue:'rgba(9,151,124,0.1',
      },
      fontFamily:{
        poppins:['poppins', 'sans-serif'],
        roboto:['roboto','sans-serif'],

      },
      
    },
    screens:{
      xs:'480px', 
      ss: '620px',
      sm: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1440px',
      xxl: '1920px',
    }
  },
  plugins: [],
}