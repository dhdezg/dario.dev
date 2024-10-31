// tailwind.config.js
module.exports = {
  darkMode: 'class', // Habilita el soporte para el tema oscuro
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        comfortaa:['Comfortaa', 'sans-serif'],
        urbanist:['Urbanist', 'sans-serif']
      }
    },
  },
  plugins: [],
}
