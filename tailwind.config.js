/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#020203",
                bgPrimary: "#18181B",
                secondary: "#2943A3",
                third: "##F5F5F5",
                fourth: "#FCFCFC",
            },
            animation: {
                "bounce-slow": "bounce 1s infinite",
            },
            dropShadow: {
                "3xl": "0 35px 35px rgba(0, 0, 0, 0.50)",
                "4xl": ["0px 4px 30px rgba(0, 0, 0, 0.05)"],
            },
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
        container: {
            padding: "4rem",
            center: true,
        },
        container_mobile: {
            padding: "2rem",
            center: true,
        },
    },
    plugins: [require("flowbite/plugin")],
};