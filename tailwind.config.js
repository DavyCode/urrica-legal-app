/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultConfig");

module.exports = {
  content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      white: "#FFFFFF",
      primary: {
        100: "#dccce8",
        200: "#ba99d0",
        300: "#9767b9",
        400: "#7534a1",
        DEFAULT: "#52018a",
        600: "#42016e",
        700: "#310153",
        800: "#210037",
        900: "#10001c",
        1000: "#4B0082",
      },
      color: {
        50: "#1E1E1E",
        100: "#d0d0d0",
        200: "#9E9E9E",
        300: "#717171",
        400: "#414141",
        DEFAULT: "#121212",
        600: "#0e0e0e",
        700: "#0b0b0b",
        800: "#070707",
        900: "#040404",
        1000: "#64748B",
      },
    },
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)", "0 45px 65px rgba(0, 0, 0, 0.15)"],
      },
    },
  },
  plugins: [],
};
