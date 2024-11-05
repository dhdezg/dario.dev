// tailwind.config.js
module.exports = {
  darkMode: "class", // Habilita el soporte para el tema oscuro
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      keyframes: {
        vibrate: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-2px)" },
          "40%": { transform: "translateX(2px)" },
          "60%": { transform: "translateX(-2px)" },
          "80%": { transform: "translateX(2px)" },
        },
      },
      animation: {
        vibrate: "vibrate 0.3s linear infinite",
      },
    },
  },
  plugins: [],
};
