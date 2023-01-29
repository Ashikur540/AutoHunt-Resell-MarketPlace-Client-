/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        AutoHuntDark: {

          // "primary": "#4D2DCA",
          "primary": "#892CDC",

          "secondary": "#828DF8",

          "accent": "#C996CC",
          "ripeYellow": "#fca311",

          "neutral": "#28283C",

          "base-100": "#1C1C29",
          "base-20": "#fffe",

          "info": "#0CA6E9",

          "success": "#2BD4BD",

          "warning": "#F4C152",

          "error": "#FB6F84",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'statesBG': "url('/src/Assets/Images/car-g94f007c11_1920.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
