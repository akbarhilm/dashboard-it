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
        inter: ["Roboto", "Inter", "sans-serif"],
      },
      fontSize: {
        xxs: "0.5rem",
      },
      backgroundColor: ["active"],
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
        mainbg: "url('/images/backgrounds/background-1.jpg')",
      },
      colors: {
        // Using modern `rgb`
        transparentwhite50: "rgba(255, 255, 255, 0.50)",
        transparentwhite30: "rgba(255, 255, 255, 0.30)",
      },
    },
  },
  plugins: [],
};
