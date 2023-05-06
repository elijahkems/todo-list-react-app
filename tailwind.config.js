/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#54759D",
          light: "#91B8E6",
          dark: "#6493D1",
          darker: "#22354E",
        },
      },
    },
  },
  plugins: [],
};
