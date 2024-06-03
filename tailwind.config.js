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
      brightRed: "hsl(12, 88%. 59%)",
      pink: "#be185d",
      black: "#0a0a0a",
      grey: "#374151",
    },
    extend: {},
  },
  plugins: [],
};
