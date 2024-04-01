/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "",

      md: "888px",

      lg: "1200px",
    },
    extend: {
      colors: {
        bg: "#FAF4F4",
        banner: "#DCC6C6",
        footer: "rgb(63, 49, 49)",
        price: "rgb(239, 68 ,68 / var(--tw-text-opacity))",
      },
    },
  },
  plugins: [],
};
