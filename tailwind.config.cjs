// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-lora)", ...fontFamily.serif],
        sans: ["var(--font-montserrat)", ...fontFamily.sans], // 👈 Montserrat por defecto
      },
    },
  },
  plugins: [],
};
