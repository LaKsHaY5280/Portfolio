/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        kano: ["kano", "sans-serif"],
        // custom2: ["YourCustomFont2", "sans-serif"],
      },
      colors: {
        dark_bg: "#1C1C1C",
        primary: "#FB2576",
        secondary: "#3F0071",
      },
      ham_transition: {
        transition: "color 0.3s ease",
      },
    },
  },
  plugins: [],
};
