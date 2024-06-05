/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      brightRed: "hsl(12, 88%. 59%)",
      pink: "#be185d",
      lightpink: "#fca5a5",
      black: "#0a0a0a",
      grey: "#374151",
      red: "#e63946",
    },
    extend: {},
  },
  plugins: [],
};
