/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020203",
        secondary: "#2943A3",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      padding: "4rem",
      center: true,
    },
  },
  plugins: [require("flowbite/plugin")],
};
