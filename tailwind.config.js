/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // só ativa dark mode se você usar a classe "dark"
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
               fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // títulos grandes
        poppins: ["Poppins", "sans-serif"],       // subtítulos
        inter: ["Inter", "sans-serif"],           // corpo de texto
      },
      colors: {
        primary: "#141c40",   // azul profundo
        secondary: "#a21f3b", // vermelho vinho
        neutral: "#cbcbcb",   // cinza claro
      },
    },
  },
  plugins: [],
}
