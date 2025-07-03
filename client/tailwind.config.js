// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#01377D',
        strongBlue: '#009DD0',
        lightBlue: '#98E7F4',
        limeGreen: '#7FD349',
        greenMedium: '#26B170',
      },
    },
  },
  plugins: [],
};
