/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/index.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./navigators/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D17842",
        mainBackground: "#0C0F14",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
        primaryRedHex: "#DC3535",
        primaryOrangeHex: "#D17842",
        primaryBlackHex: "#0C0F14",
        primaryDarkGreyHex: "#141921",
        secondaryDarkGreyHex: "#21262E",
        primaryGreyHex: "#252A32",
        secondaryGreyHex: "#252A32",
        primaryLightGreyHex: "#52555A",
        secondaryLightGreyHex: "#AEAEAE",
        primaryWhiteHex: "#FFFFFF",
        primaryBlackRGBA: "rgba(12,15,20,0.5)",
        secondaryBlackRGBA: "rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};
