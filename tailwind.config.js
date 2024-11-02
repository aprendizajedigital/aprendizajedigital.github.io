/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./cursos/alternativas-naturales-para-la-diabetes/*.{html,js}"], //"./src/**/*.{html,js}" PON SOLO EL ARCHIVO HTML Y JS DEL CURSO 
  theme: {
    extend: {
      fontFamily:{
        "montserrat": ["Montserrat"],
        "poppins": ["Poppins"],
        "oxygen": ["Oxygen"],
        "lato": ["Lato"],
        "work_sans": ["Work Sans"]
      }
    },
  },
  plugins: [],
}

