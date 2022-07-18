/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-light": "#FFFFFF",
        "second-light": "rgba(255, 255, 255, 0.3)",
        "third-light": "#E5E5E5",
        "first-dark": "#141414",
        "second-dark": "#808080",
        "third-dark": "rgba(109, 109, 110, 0.7)",
        "red-movies": "#B9090B",
      },
    },
  },
  plugins: [],
};
