/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/index.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D17842",
      },
    },
  },
  plugins: [],
};
