/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "640px",
      lg: "1000px",
      xl: "1240px",
    },
    extend: {},
  },
  plugins: [],
};
