/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      keyframes: {
        floatUp: {
          "0%": { top: "100vh", opacity: 0 },
          "25%": { opacity: 1 },
          "50%": { top: "0vh", opacity: 0.8 },
          "75%": { opacity: 1 },
          "100%": { top: "-100vh", opacity: 0 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 0 },
          "30%": { opacity: 1 },
          "80%": { opacity: 0.9 },
          "100%": { opacity: 0 },
        },
        finalFade: {
          "0%": { opacity: 0 },
          "30%": { opacity: 1 },
          "80%": { opacity: 0.9 },
          "100%": { opacity: 1 },
        },
        revealText: {
          from: { "clip-path": "inset(0 100% 0 0)" },
          to: { "clip-path": "inset(0 0 0 0)" },
        },
        revealerText: {
          "0%, 50%": { "transform-origin": "0 50%" },
          "60%, 100%": { "transform-origin": "100% 50%" },
          "60%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
      },
      animation: {
        floatUp: "floatUp 1s ease-in-out",
        fadeIn: "fadeIn 1s ease-in",
        fadeOut: "fadeOut 1s ease-out",
        finalFade: "finalFade 1s ease-in-out",
        revealText: "revealText 1s linear",
        revealerText: "revealerText 1s linear",
      },
    },
  },
  plugins: [],
};
