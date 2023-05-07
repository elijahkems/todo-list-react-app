/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e293b",
          light: "#e5e7eb",
          dark: "#0f172a",
          darker: "#274472",
          borders: "#64748a",
          transparent: "#1e293b50",
        },
      },
    },
  },
  plugins: [],
};
