// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#01377D',    // títulos principales
        secondary: '#009DD0',  // subtítulos o botones
        accent: '#98E7F4',     // detalles, bordes o fondo claro
        success: '#7FD349',    // mensajes positivos
        confirm: '#26B170',    // botones de confirmar o acciones verdes
      },
    },
  },
  plugins: [],
};
