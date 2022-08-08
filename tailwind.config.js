/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      navcol: "#b6465f",
      pinky: "#ebd4cb",
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
  },
};
