/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        AutoHuntDark: {

          "primary": "#942CE5",

          "secondary": "#828DF8",

          "accent": "#C996CC",

          "neutral": "#28283C",

          "base-100": "#1C1C29",

          "info": "#0CA6E9",

          "success": "#2BD4BD",

          "warning": "#F4C152",

          "error": "#FB6F84",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
