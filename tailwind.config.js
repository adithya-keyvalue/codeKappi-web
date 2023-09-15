/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        VIEW_CARD: "rgba(13, 13, 13, 0.22)",
      },
      backgroundImage: {
        NAV_SELECTED:
          "linear-gradient(90deg, rgba(104, 92, 255, 0.40) 0%, #8D6AFF 117.12%);",
      },
    },
  },
  plugins: [],
};
