/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.js", "./tailwind.html"],
  theme: {
    extend: {},
    colors: {
      primaryDark: "#2a273f",
      primaryMedium: "#393552",
      primaryLight: "#a7a4bc",
      secondaryDark: "#b4637a",
      secondaryMedium: "#eb6f92",
      black: "#000000",
      white: "#ffffff",
      offWhite: "#F0F0F0",
      transparent: "transparent",
      current: "currentColor",
    },
  },
  variants: {},
  plugins: [],
};
